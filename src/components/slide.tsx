"use client"

import React,{ useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Slide() {

  const text1 = useRef(null)
  const text2 = useRef(null)
  const slider = useRef(null)

  let xPercent = 0 
  let direction = -1

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction*-1
      },
      x: "-500px"
    })

    requestAnimationFrame(animate)
  })

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(text1.current, {xPercent: xPercent})
    gsap.set(text2.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <div className="w-full h-[40vh] overflow-hidden flex items-center justify-center">
  <div className="text-slider flex text-9xl font-PlayfairDisplay">
    <div className="flex-shrink-0 mr-4">Text 1</div>
    <div className="flex-shrink-0 mr-4">Text 2</div>
    <div className="flex-shrink-0 mr-4">Text 3</div>
    <div className="flex-shrink-0 mr-4">Text 1</div>
    <div className="flex-shrink-0 mr-4">Text 2</div>
    <div className="flex-shrink-0 mr-4">Text 3</div>
    <div className="flex-shrink-0 mr-4">Text 1</div>
    <div className="flex-shrink-0 mr-4">Text 2</div>
    <div className="flex-shrink-0 mr-4">Text 3</div>
    <div className="flex-shrink-0 mr-4">Text 1</div>
    <div className="flex-shrink-0 mr-4">Text 2</div>
    <div className="flex-shrink-0 mr-4">Text 3</div>
  </div>
</div>
  )
}
