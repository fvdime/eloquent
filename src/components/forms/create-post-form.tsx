"use client";

import React, { useState } from "react";
import axios from "axios";
import Editor from "../admin-props/editor";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CreatePostForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [image, setImage] = useState<File | null>(null); // Initialize as null
  const [content, setContent] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const input: any = document.getElementById("image")

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", input?.files[0])
    formData.append("content", content);

    console.log("Form submitted with:", formData);

    try {
      const response = await axios.post("http://localhost:3000/api/post/create",
        formData
      );
      toast.success("Successfully Created!");
      router.push("/admin");

      console.log("Response:", response.data);
    } catch (error) {
      router.refresh();
      toast.error("Permission denied!");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <nav className="border-b border-gray-300">
        <div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-2">
          <div className="flex flex-row justify-center items-center gap-4">
            <Link
              href="/admin"
              className="flex items-center space-x-1 rtl:space-x-reverse"
            >
              <span className="rotate-180 text-lg">➺</span>
              <span className="self-center text-sm whitespace-nowrap font-semibold hover:underline hidden md:flex">
                eloquent admin
              </span>
            </Link>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Untitled Document"
              className="w-full px-4 py-2 placeholder:text-xs text-sm rounded-3xl outline-none transition"
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-4 md:px-6 py-1.5 text-center"
            >
              Post ₊˚⊹♡
            </button>
          </div>
        </div>
      </nav>
      <div className="max-w-screen-md mx-auto p-4 md:p-0 my-4">
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="description"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Description"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-full cursor-pointer bg-gray-50 focus:outline-none px-4 py-1"
          />
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            name="image"
           id="image"
           accept="image/*"
            required
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            type="file"
          />
        </div>
        <Editor setContent={setContent} content={content} />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
