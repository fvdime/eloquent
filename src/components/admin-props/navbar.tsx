import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="border border-gray-300">
        <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-2">
          <div className="flex flex-row jc items-center gap-4">
            <Link
              href="/admin"
              className="flex items-center space-x-3 rtl:space-x-reverse"
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
    </div>
  );
}
