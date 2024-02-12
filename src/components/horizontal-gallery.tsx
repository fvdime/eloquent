"use client"

import React, { useEffect, useRef } from 'react'
import Image from "next/image";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalGallery() {

  const scroll = useRef(null)
  const skills = useRef(null)

  useEffect(() => {
    let skillSet = gsap.utils.toArray('.sec')

    let to = gsap.to(skillSet, {
      xPercent: () => -100*(skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroll.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1/(skillSet.length - 1),

        end: () => '+=' + window.innerWidth,
      }
    })
  
    return () => {
      to.kill()
    }
  }, [])
  
  return (
    <div className='overflow-hidden flex'>
      <div className="overflow-hidden">
        <div
        id='skills'
        ref={scroll}
        className='flex overflow-x-hidden text-white w-[400vw] m-0 bg-gray-900  relative h-screen'
        >
          <section
          ref={skills}
          className='sec px-12 w-screen h-full bg-transparent flex items-center z-50 relative'
          >
            <Image
              src="/malice.jpg"
              fill
              priority
              className='object-contain max-w-[70vw] max-h-[60vh] m-auto'
              alt='image'
            />
          </section>
          <section
          ref={skills}
          className='sec px-12 w-screen h-full bg-transparent flex items-center z-50 relative'
          >
            <Image
              src="/malice.jpg"
              fill
              priority
              className='object-contain max-w-[70vw] max-h-[60vh] m-auto'
              alt='image'
            />
          </section>
          <section
          ref={skills}
          className='sec px-12 w-screen h-full bg-transparent flex items-center z-50 relative'
          >
            <Image
              src="/malice.jpg"
              fill
              priority
              className='object-contain max-w-[70vw] max-h-[60vh] m-auto'
              alt='image'
            />
          </section>
          <section
          ref={skills}
          className='sec px-12 w-screen h-full bg-transparent flex items-center z-50 relative'
          >
            <Image
              src="/malice.jpg"
              fill
              priority
              className='object-contain max-w-[70vw] max-h-[60vh] m-auto'
              alt='image'
            />
          </section>
        </div>
      </div>
    </div>
  )
}
