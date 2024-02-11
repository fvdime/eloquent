"use client"

import React, { useState } from "react";
import axios from "axios";

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
      const response = await axios.post("http://localhost:3000/api/post", formData);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-black">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          maxLength={500}
          placeholder="title"
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          maxLength={500}
          placeholder="description"
        />
        <input
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          maxLength={500}
          placeholder="content"
        />
        <input
          type="file"
          name="image"
          placeholder="image"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} // Set file object or null
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
