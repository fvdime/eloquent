import { getSinglePost } from "@/actions/post.actions";
import DeleteButton from "@/components/admin-props/delete-button";
import Image from "next/image";
import React from "react";

export default async function AdminSinglePage({ params }: any) {
  const id = params.id;

  console.log("ID:::::::" + id);

  const singlePost = await getSinglePost(id);

  return (
    <>
      <div className="h-full w-full bg-zinc-50">
        <nav className="max-w-screen-lg mx-auto flex items-center justify-end py-2">
          <DeleteButton postId={id} />
        </nav>
        <div className="max-w-screen-lg mx-auto p-4 md:p-0 md:my-8">
          <div className="w-full flex flex-row justify-between items-end">
            <h1 className="text-5xl font-PlayfairDisplay">
              {singlePost?.title}
            </h1>
            <h1 className="text-xs font-semibold">
              {singlePost?.createdAt.toDateString()}
            </h1>
          </div>

          <div>
            <hr className="w-64 h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-6" />
            <p className="text-gray-600 font-medium">
              {singlePost?.description}
            </p>
          </div>
          <div className="my-8">
            <div className="w-full h-[70vh] relative">
              <Image
                className="rounded-t-lg absolute object-cover"
                src={
                  singlePost?.image
                    ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL +
                      `${singlePost?.image}`
                    : "/flower.jpg"
                }
                fill
                alt=""
              />
            </div>
            <div
              className="my-8"
              dangerouslySetInnerHTML={{ __html: singlePost?.content || "" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
