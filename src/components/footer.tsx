import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 h-screen w-full text-white">
      <div className="mx-auto w-full h-full max-w-screen-lg p-4 py-6 lg:py-8 flex flex-col justify-between">
        <section className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-8xl md:text-9xl    font-Cinzel">eloquent</h1>
        </section>
        <section className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-16">
          <form className="md:w-1/2 w-full">
            <h1 className="font-semibold text-lg">
              Subscribe to our newsletter to stay in touch with the latest.
            </h1>
            <div className="relative z-0 my-4">
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-zinc-300 appearance-none text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-zinc-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email Address
              </label>
            </div>
            <button
              type="submit"
              className="text-white font-medium border-zinc-300 border hover:bg-white hover:text-zinc-950 duration-500 ease-in transition-all focus:ring-4 rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Subscribe
            </button>
          </form>
          <div className="md:w-1/3 w-full h-full flex flex-row justify-between items-center">
            <div className="text-start">
              <h2 className="mb-4 text-sm font-semibold uppercase">Source</h2>
              <ul className=" text-gray-400 font-medium text-sm">
                <li className="mb-4 hover:text-gray-500">
                  <Link href="/" className="flex justify-between">
                    eloquent
                    <span className="-rotate-45 font-semibold hover:no-underline">
                      ➺
                    </span>
                  </Link>
                </li>
                <li className="mb-4 hover:text-gray-500">
                  <Link href="/" className="flex justify-between">
                    eloquent
                    <span className="font-semibold hover:-rotate-45">➺</span>
                  </Link>
                </li>
                <li className="mb-4 hover:text-gray-500">
                  <Link href="/" className="flex justify-between">
                    eloquent
                    <span className="-rotate-45 font-semibold ms-2">➺</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Contact</h2>
              <ul className="hover:text-gray-500 text-gray-400 font-medium text-sm">
                <li className="mb-4 hover:text-gray-500">
                  <Link href="/" className="flex justify-between">
                    eloquent
                    <span className="-rotate-45 font-semibold ms-2">➺</span>
                  </Link>
                </li>
                <li className="mb-4 hover:text-gray-500">
                  <Link href="/" className="flex justify-between">
                    eloquent
                    <span className="-rotate-45 font-semibold">➺</span>
                  </Link>
                </li>
                <li className="mb-4 hover:text-gray-500">
                  <Link href="/" className="flex justify-between">
                    eloquent
                    <span className="-rotate-45 font-semibold">➺</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center text-xs">
          <hr className="w-full my-4 sm:mx-auto border-zinc-700 lg:my-6" />
          <span className="self-center w-full text-center text-zinc-500">
            © 2024{" "}
            <Link href="/" className="hover:underline">
              elequent™
            </Link>
            . All Rights Reserved.
          </span>
        </section>
      </div>
    </footer>
  );
}
