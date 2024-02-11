import prisma from "@/libs/prisma"
import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { z } from 'zod';
import { GetUserById } from "@/actions/user.action";
import { cookies } from "next/headers";
import { apiGetAuthUser } from "@/libs/api-requests";

const awsS3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION as string,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY as string,
  }
});

async function uploadFilesToS3({ image, imageName }: { image: Buffer, imageName: string }) {
  const imageBuffer = image;
  console.log(imageName);

  const imageContentArray = imageName.split('.');
  const fileContent = imageContentArray[imageContentArray.length - 1];

  const params = {
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
    Key: `${imageName}-${Date.now()}`,
    Body: imageBuffer,
    ContentType: `image/${fileContent}`
  };

  const command = new PutObjectCommand(params);
  await awsS3Client.send(command);
  return imageName;
}

const createSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  description: z.string().min(1),
  demo: z.string().nullish(),
  source: z.string().nullish(),
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const isValidData = createSchema.parse({
      title: formData.get('title'),
      description: formData.get("description"),
      source: formData.get("source"),
      demo: formData.get("demo"),
      content: formData.get("content")
    });

    const cookieStore = cookies();
    const tokenv = cookieStore.get("token");

    const user = await apiGetAuthUser(tokenv?.value);
    const author = await GetUserById(user.id);
    console.log(author)


    const image = formData.get("image") as File | FormDataEntryValue;

    if (!image || !(image instanceof File)) {
      return new NextResponse(
        JSON.stringify({ message: "Image file is required" }),
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await image?.arrayBuffer());
    const imageName = await uploadFilesToS3({ image: buffer, imageName: image.name });

    const post = await prisma.post.create({
      data: {
        title: isValidData.title,
        image: imageName,
        description: isValidData.description,
        source: isValidData.source,
        demo: isValidData.demo,
        content: isValidData.content,
        authorId: author!.id
      },
      include: {
        author: true
      }
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
}
