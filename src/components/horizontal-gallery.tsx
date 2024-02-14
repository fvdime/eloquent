"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  const scroll = useRef(null);
  const section = useRef(null);

  useEffect(() => {
    let about = gsap.utils.toArray(".sec");

    let to = gsap.to(about, {
      xPercent: () => -100 * (about.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroll.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (about.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  // Images by Mathew Schwartz. Please checkout -> https://unsplash.com/@cadop

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden">
        <div
          id="section"
          ref={scroll}
          className="flex overflow-x-hidden w-[400vw] m-0 relative h-screen"
        >
          <section
            ref={section}
            className="sec px-12 w-screen h-full bg-transparent flex items-center z-50 relative"
          >
            <div className="h-full w-full flex flex-col justify-end items-center gap-8">
              <div className="w-[85vw] flex flex-row justify-between items-center">
                <h1 className="text-4xl w-1/3 font-PlayfairDisplay">Eloquent Studio®</h1>
                <span className="text-sm w-1/2">
                  Welcome to Eloquent, your go-to destination for an eclectic
                  mix of thought-provoking articles, inspiring stories, and
                  innovative concepts. Here, we believe in the power of ideas to
                  shape the world around us and ignite change. Whether
                  you&apos;re a seasoned creator or a curious soul eager to
                  explore new horizons, our blog is your passport to a realm of
                  endless inspiration.
                </span>
              </div>
              <div className="h-[50vh] w-[85vw] relative">
                <Image
                  src="/mathew-schwartz--MY7-K4X5C0-unsplash.jpg"
                  fill
                  priority
                  className="object-cover absolute"
                  alt="image"
                />
              </div>
            </div>
          </section>
          <section
            ref={section}
            className="sec px-12 w-screen h-full bg-transparent flex items-center z-50 relative"
          >
            <div className="h-full w-full flex flex-col md:flex-row justify-around md:justify-between items-center gap-8">
              <div className="h-[30vh] lg:h-[80vh] w-1/2 relative">
                <Image
                  src="/mathew-schwartz-hu52oHXU7k8-unsplash.jpg"
                  fill
                  priority
                  className="object-cover absolute"
                  alt="image"
                />
              </div>
              <div className="h-[30vh] lg:h-[80vh] w-1/2 relative">
                <Image
                  src="/mathew-schwartz-1MwH5EGo26Q-unsplash.jpg"
                  fill
                  priority
                  className="object-cover absolute"
                  alt="image"
                />
              </div>
            </div>
          </section>
          <section
            ref={section}
            className="sec px-12 w-screen h-full bg-transparent flex items-center z-50 relative"
          >
            <div className="w-full h-full flex flex-col items-center justify-end gap-8 ">
              <h1 className="lg:text-8xl md:text-5xl text-4xl font-PlayfairDisplay">
                Our presence needs to impact everyone!
              </h1>
              <span className="text-xs md:text-sm">
                Join our vibrant community as we dive deep into the realms of
                creativity, innovation, and beyond. Get ready to be inspired,
                challenged, and empowered to unleash your creativity like never
                before.{" "}
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
