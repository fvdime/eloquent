"use client"

import React from 'react'
import { motion } from 'framer-motion';

export default function Vignette({mousePosition, handle}: any) {

  const { x, y } = mousePosition;

  return (
  <div className="h-screen clip bg-violet-900">
    <div className="w-full h-full relative">
      <div className='bg-white p-16'></div>
    </div>
    <motion.div
    className='fixed top-0 select-none pointer-events-none mix-blend-difference'
    style={{ x, y }}
    >
      <h1 className='text-5xl text-pink-300'>❁❀❀</h1>
    </motion.div>
  </div>
  )
}
