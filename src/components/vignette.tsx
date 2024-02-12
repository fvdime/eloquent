"use client"

import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface postTypes {
  title: string,
  description: string,
  image: string
}

export default function Vignette({mousePosition, item}: {mousePosition: any, item: postTypes}) {

  const { x, y } = mousePosition;

  return (
  <div className="h-[75vh] rounded-md border border-zinc-500 mb-4 text-white clip">
    <div className="w-full h-full relative text-sm">
      <div className='w-full h-full flex flex-col md:flex-row justify-between items-start gap-4'>
        <div className='w-1/2 h-full relative'>
          <Image
          src={item.image}
          fill
          alt="image"
          className='object-cover absolute'
          />
        </div>
        <div className='w-full md:w-1/2 h-full text-sm font-medium flex flex-col justify-evenly items-start'>
          <h1 className='text-4xl font-semibold'>{item.title}</h1>
          <p className="text-gray-300">{item.description}</p>
          <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-zinc-600" />
          <Link href="/post/1" className='underline font-semibold text-sm w-full flex flex-row justify-around'>Read More</Link>

        </div>
        
      </div>
    </div>
    <motion.div
    className='fixed top-0 select-none pointer-events-none mix-blend-difference'
    style={{ x, y }}
    >
      <h1 className='text-4xl text-pink-300'>✮⋆˙</h1>
    </motion.div>
  </div>
  )
}
