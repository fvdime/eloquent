import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 h-screen w-full text-white">
      <div className="mx-auto w-full h-full max-w-screen-lg p-4 py-6 lg:py-8 flex flex-col justify-between">
        <section className="w-full flex flex-col justify-between items-center">
          <Link href="/">eloquent</Link>

          <div className="text-3xl lg:text-5xl font-bold uppercase">
            do not hesitate to say hello to us
          </div>
        </section>
        <section className="text-xs w-full">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-2 w-full">
            <form className="md:w-1/3">
              <h1>subscribe to our newsletter</h1>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@example.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-lg text-sm w-full px-5 py-2.5 text-center"
              >
                Subscribe
              </button>
            </form>
            <div className="font-medium">
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-4 font-semibold text-gray-900 uppercase dark:text-white">
                    Resources
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link href="/" className="hover:underline">
                        eloquent
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:underline">
                        Tailwind CSS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Follow us
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link href="/" className="hover:underline ">
                        Github
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:underline">
                        Discord
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link href="#" className="hover:underline">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-zinc-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex items-center justify-center">
            <span className="text-center text-gray-400">
              © 2024{" "}
              <Link href="/" className="hover:underline">
                elequent™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </section>
      </div>
    </footer>
  );
}
