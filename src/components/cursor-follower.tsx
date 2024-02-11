"use client"

import React, { useState, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { useSpring, motion } from 'framer-motion';
import Vignette from './vignette';

const data = [
  {
    name: "Dyal Thak",
    handle: "dyal_thak"
  },
  {
    name: "Leidinger Matthias",
    handle: "leidinger_matthias"
  },
  {
    name: "Mark Rammers",
    handle: "mark_rammers"
  },
  {
    name: "Landon Speers",
    handle: "landon_speers"
  }
]

export default function CursorFollower() {

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  }

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const mouseTracker = (e: any) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);

    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  } 

  return (
    <main onMouseMove={mouseTracker}>
      {
        data.map( ({handle}, i) => {
          return <Vignette mousePosition={mousePosition} handle={handle} key={i}/>
        })
      }
    </main>
  )
}
