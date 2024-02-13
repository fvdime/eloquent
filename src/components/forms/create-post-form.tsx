"use client";

import React, { useState } from "react";
import axios from "axios";
import Editor from "../admin-props/editor";
import Link from "next/link";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null); // Initialize as null
  const [content, setContent] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image); // Append file object only if it exists
    }
    formData.append("content", content);

    console.log("Form submitted with:", formData);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/post",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
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
              <span className="self-center text-sm whitespace-nowrap font-semibold hover:underline">
                eloquent admin
              </span>
            </Link>
            <input
              type="text"
              placeholder="Untitled Document"
              className="w-full px-4 py-2 placeholder:text-xs text-sm rounded-3xl  outline-none transition"
            />
          </div>
          <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              href="/admin/create"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-1.5 text-center"
            >
              Post ₊˚⊹♡
            </Link>
          </div>
        </div>
      </nav>
      <div className="max-w-screen-md mx-auto p-4 md:p-0 my-8">
        <div className="flex items-center justify-center w-full mb-4">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <Editor />
      </div>
    </>
  );
}
