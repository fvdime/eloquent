import { getPosts } from "@/actions/post.actions";
import Link from "next/link";
import React from "react";

export default async function AdminPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-screen-lg mx-auto p-4 lg:p-0 my-8">
      <div>
        <h1 className="text-2xl font-semibold">Welcome Admin!</h1>
      </div>
      <div className="w-full h-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
          {/* UPLOAD SECTION */}
          <div className="h-[30vh] lg:h-[40vh] border rounded border-gray-300 w-full flex flex-col justify-between items-center shadow-md hover:shadow-lg">
            <Link
              href="/admin/create"
              className="flex flex-col w-full h-full items-center justify-center hover:text-blue-800 gap-4 text-lg"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:rotate-45"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
              <span>New</span>
            </Link>

            <Link
              href="/admin/create"
              className="text-lg py-4 border-t w-full text-center hover:text-gray-700 hover:underline"
            >
              Upload
            </Link>
          </div>
          {posts.map((item) => (
            <div
              key={item.id}
              className="h-[30vh] lg:h-[40vh] border rounded border-gray-300 w-full flex flex-col justify-between items-center shadow-md hover:shadow-lg hover:bg-zinc-50"
            >
              <span className="w-full h-full text-start p-4 overflow-hidden text-sm">
                {item.description}
              </span>

              <div className="w-full flex flex-row justify-between items-center gap-2 px-3 py-4 border-t">
                <Link
                  href={`/admin/${item.id}`}
                  className="text-lg w-4/5 font-medium hover:text-gray-800 hover:underline truncate"
                >
                  {item.title}
                </Link>
                <Link
                  href={`/admin/${item.id}/update`}
                  className="text-lime-600 text-sm w-1/5 text-center font-medium hover:text-lime-800 rotate-90"
                >
                  ✎
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
