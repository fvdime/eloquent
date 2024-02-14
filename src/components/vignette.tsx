"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PostTypes } from "@/libs/types";

export default function Vignette({
  mousePosition,
  item,
}: {
  mousePosition: any;
  item: PostTypes;
}) {
  const { x, y } = mousePosition;

  return (
    <div className="h-[75vh] border-b border-zinc-400 mb-4 clip">
      <div className="w-full h-full relative text-sm">
        <div className="w-full h-full flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="w-full lg:w-1/2 h-1/2 md:h-full relative">
            <Image
              className="rounded-t-lg absolute object-cover"
              src={
                item.image
                  ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL + `${item?.image}`
                  : "/flower.jpg"
              }
              fill
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full text-sm font-medium flex flex-col justify-end items-end">
            <Link
              href={`/work/${item.id}`}
              className="text-4xl font-semibold font-PlayfairDisplay"
            >
              {item.title}
            </Link>
            <hr className="w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-10 bg-zinc-300" />
            <p className="text-gray-900 font-medium">{item.description}</p>
            <div className="flex flex-row justify-between items-center w-full text-sm py-8">
              <span>{item.createdAt.toDateString()}</span>
              <Link
                href={`/work/${item.id}`}
                className="underline font-semibold hover:text-zinc-800"
              >
                Read More <span className="-rotate-45">➺</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="fixed top-0 select-none pointer-events-none mix-blend-difference"
        style={{ x, y }}
      >
        <h1 className="text-5xl font-bold text-violet-700">✳︎</h1>
      </motion.div>
    </div>
  );
}
