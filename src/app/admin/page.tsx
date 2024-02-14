import Link from "next/link";
import React from "react";

export default function AdminPage() {
  return (
    <div className="max-w-screen-lg mx-auto p-4 lg:p-0 my-8">
      <div>
        <h1 className="text-2xl font-semibold">Welcome Admin!</h1>
      </div>
      <div className="w-full h-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
          {/* UPLOAD SECTION */}
          <div className="h-[30vh] lg:h-[50vh] border rounded border-gray-300 w-full flex flex-col justify-between items-center shadow-md hover:shadow-lg">
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
          <div className="h-[30vh] lg:h-[50vh] border rounded border-gray-300 w-full flex flex-col justify-between items-center shadow-md hover:shadow-lg hover:bg-zinc-50">
            <span
              className="w-full h-full text-start p-4 overflow-hidden text-sm"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi obcaecati ipsam inventore amet illum porro soluta quos ipsum eaque odit facere placeat cumque quas possimus ex quis, at nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed architecto temporibus ex aperiam rerum consectetur non ullam ut, soluta officiis laboriosam eligendi tempora in saepe, consequuntur laudantium dolore omnis.
            </span>

            <Link
              href="/admin/1"
              className="text-lg p-4 border-t w-full text-center font-medium hover:text-gray-800 hover:underline truncate"
            >
              Title title tile Title title tileTitle title tile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
