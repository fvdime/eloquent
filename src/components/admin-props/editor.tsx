"use client";

import React, { useState, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

export default function Editor() {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<EditorJS>();

  const initializeEditor = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    // @ts-ignore
    const Header = (await import("@editorjs/header")).default;
    // @ts-ignore
    const Table = (await import("@editorjs/table")).default;
    // @ts-ignore
    const List = (await import("@editorjs/list")).default;
    // @ts-ignore
    const CodeBlock = (await import("@editorjs/code")).default;
    // @ts-ignore
    const Image = (await import("@editorjs/image")).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        placeholder: "hello admin",
        tools: {
          header: Header,
          table: Table,
          list: List,
          code: CodeBlock,
          image: {
            class: Image,
            config: {
              endpoints: {
                byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
                byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
              },
            },
          },
        },
      });
      ref.current = editor;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };

    if (isMounted) {
      init();
    }
    return () => {
      if (ref.current) {
        ref.current.destroy();
      }
    };
  }, [isMounted]);

  const save = () => {
    if (ref.current) {
      ref.current.save().then((output) => {
        console.log("DATA::::::::", output);
      });
    }
  };

  return (
    <>
      <div id="editorjs" className="max-w-full min-h-screen">
        {/* <button onClick={save}>Save</button> */}
      </div>
    </>
  );
}
