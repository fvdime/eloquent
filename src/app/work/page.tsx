import { getPosts } from "@/actions/post.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function PostPage() {

  const posts = await getPosts()

  return (
    <div className="h-full w-full bg-zinc-50">
      <div className="max-w-screen-lg mx-auto p-4 md:p-0 md:my-8">
        <div className="w-full h-full flex flex-row items-center justify-start gap-2 text-4xl font-PlayfairDisplay">
          <Link href="/" className="font-medium cursor-pointer">
            Eloquent Studio
          </Link>{" "}
          <h1 className="font-semibold text-gray-300">Articles</h1>
        </div>
        <div>
          <hr className="w-64 h-0.5 mx-auto my-4 bg-gray-200 border-0 rounded md:my-6" />
          <p className="text-gray-500 text-sm">
          At Eloquent, we&apos;re more than just a website—we&apos;re a community of thinkers, dreamers, and doers united by our passion for sharing innovative ideas. Whether you&apos;re seeking new ideas, eager to explore new perspectives, or simply craving a dose of creativity, you&apos;ve come to the right place.
          </p>
        </div>
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/*  group outline-none focus:scale-105 hover:scale-105 active:scale-100 transition duration-500 ease-in */}
          {posts.map((item) => (   
            <div key={item.id} className="bg-white border border-gray-200 rounded-lg hover:shadow-md shadow">
              <div className="w-full h-[70vh] relative">
                <Link href={`/work/${item.id}`}>
                <Image
                  className="rounded-t-lg absolute object-cover"
                  src={item?.image ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL + `${item?.image}` : "/flower.jpg"}
                  fill
                  alt=""
                />
                </Link>
              </div>
              <div className="py-4 px-2">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {item.title}
                </h5>
                <Link
                  href={`/work/${item.id}`}
                  className="inline-flex items-center justify-end w-full px-3 py-2 text-sm font-medium text-center text-pink-950 rounded-lg hover:text-pink-900 underline"
                >
                  𐙚 Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-1 -rotate-45"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}
