import CreatePostForm from "@/components/forms/create-post-form";
import React from "react";

export default function UpdatePostPage({ params }: { params: { id: string } }) {
  const postId = params.id;

  // console.log("POST ID:::::::" + postId);

  return (
    <>
      <CreatePostForm type="Update" postId={postId} />
    </>
  );
}
