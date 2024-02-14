"use client"

import React from 'react'
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ content, setContent }: any) => {

  const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];
  
  return (
    <div className='my-8'>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
      />
    </div>
  )
}

export default TextEditor