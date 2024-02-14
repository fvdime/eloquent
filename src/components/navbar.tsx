import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-zinc-50 border-b border-zinc-300">
        <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto px-4 py-2 md:px-0 text-lg font-semibold">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="rotate-180 text-lg">➺</span>
              <span className="self-center text-sm whitespace-nowrap hover:underline font-Merriweather">
                Eloquent Studio®
              </span>
            </Link>
          <h1>✳︎</h1>
        </div>
      </nav>
    </div>
  );
}
