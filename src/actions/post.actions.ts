"use server"

import prisma from "@/libs/prisma"
import { z } from 'zod';
import { GetUserById } from "./user.action";
import uploadImage from "@/libs/upload-img";
import { revalidatePath } from 'next/cache'
import { getToken, getUserIdFromToken } from "@/libs/auth";

const postSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  description: z.string().min(1),
});

export const createPost = async ({ formData, path }: { formData: FormData; path: string }) => {
  try {
    const isValidData = postSchema.parse({
      title: formData.get('title'),
      content: formData.get('content'),
      description: formData.get('description'),
    });

    console.log(isValidData);

    const tokens = getToken()
    console.log("token:::::::::::::::::", tokens)

    const userId = getUserIdFromToken(tokens) as string

    // const userId = req?.headers?.get("X-USER-ID") || "";

    // console.log("UserID:", userId);

    const author = await GetUserById(userId);
    // console.log(author)

    if (!author) {
      throw new Error("Failed to get user!");
    }

    const image = formData.get('image') as FormDataEntryValue;
    let filePath = '';

    if (image) {
      const response = await uploadImage({ file: image });
      if (
        response !== null &&
        response.result['$metadata'].httpStatusCode == 200
      )
        filePath = response.filePath;
    }

    const post = await prisma.post.create({
      data: {
        title: isValidData.title,
        image: filePath,
        description: isValidData.description,
        content: isValidData.content,
        authorId: author!.id
      },
      include: {
        author: true
      }
    });

    console.log("Created Post!", post);
    revalidatePath(path)

    return post
  } catch (error) {
    return console.log(error)
  }
}

export const deletePost = async ({ id, path }: { id: any; path: string }) => {
  try {
    await prisma.post.delete({
      where: { id }
    });

    console.log("Deleted post from database");
    revalidatePath(path)
  } catch (error) {
    console.error("Error deleting post:", error);
    throw new Error("Failed to delete post");
  }
};

export const updatePost = async ({ formData, id, path }: { formData: FormData; id: any; path: string }) => {

  // const title = formData.get("title") as string
  // const description = formData.get("description") as string
  // const image = formData.get("image") as string
  // const content = formData.get("content") as string

  try {
    const isValidData = postSchema.parse({
      title: formData.get('title'),
      content: formData.get('content'),
      description: formData.get('description'),
    });

    const image = formData.get('image') as FormDataEntryValue;
    let filePath = '';

    if (image) {
      const response = await uploadImage({ file: image });
      if (
        response !== null &&
        response.result['$metadata'].httpStatusCode == 200
      )
        filePath = response.filePath;
    }

    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    if (!post) {
      throw new Error('Post not found');
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: isValidData.title,
        content: isValidData.content,
        description: isValidData.description,
        image: filePath
      },
    });

    console.log(updatedPost)
    revalidatePath(path)

    return updatedPost
  } catch (error) {
    throw new Error("Failed to fetch delete post!")
  }
}

export const getSinglePost = async (id: any) => {
  try {
    const post = await prisma.post.findFirst({
      where: { id }
    })
    return post
  } catch (error) {
    throw new Error("Failed to fetch single post!")
  }
}

export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return posts
  } catch (error) {
    throw new Error("Failed to fetch posts!")
  }
}

export const getFeaturedPost = async () => {
  try {
    const featuredPosts = await prisma.post.findMany({
      where: {
        isFeatured: true
      }
    })
    return featuredPosts
  } catch (error) {
    throw new Error("Failed to fetch featured posts!")
  }
}