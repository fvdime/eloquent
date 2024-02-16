"use client";

import { deletePost } from "@/actions/post.actions";
import { useRouter } from "next/navigation";
import React from "react";

interface DeleteButtonProps {
  postId: string;
}

export default function DeleteButton({ postId }: DeleteButtonProps) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      console.log("POSTID:::::" + postId);

      const path = "/admin";
      await deletePost({ id: postId, path });
      console.log("DELETED");
      router.push("/admin");
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <button
      onClick={handleDelete}
      type="submit"
      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 md:px-6 py-1.5 text-center"
    >
      Delete ₊˚⊹
    </button>
  );
}
