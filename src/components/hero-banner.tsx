"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function HeroBanner() {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#slider", {
        yPercent: "100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#slider", {
          yPercent: "-100",
          duration: 1.3,
        })
        .from("#hero-banner", {
          opacity: 0,
          duration: 0.5,
        });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={component}>
      <div
        id="slider"
        className="h-screen p-8 backdrop-blur-3xl bg-slate-600/50 absolute top-0 left-0 z-10 w-full flex flex-col lg:flex-row gap-4 justify-between items-end text-white text-8xl font-PlayfairDisplay"
      >
        <h1 id="title-1">We are</h1>
        <h1 id="title-2">Eloquent</h1>
        <h1 id="title-3">Studio®</h1>
        {/* ✷ . · * ✧ ˚ * . ☽ ˚ ✦ <br />
          ✧⋆ ˚ ✵ *creative studio * ⋆ . <br />
          · ˚ ⋆ ˚ ⋆ ⋆ ✧ · ✵ ☽ ˚ ✦ <br /> */}
      </div>

      <div id="hero-banner" className="h-screen w-full font-PlayfairDisplay bg-gradient-to-r from-white to-violet-200">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-between items-start h-full">
          <nav className="h-[8vh] flex w-full px-4 lg:px-0 items-center justify-between gap-8">
            <Link
              href="/"
              className="font-semibold cursor-pointer"
            >
              Eloquent Studio®
            </Link>
            <div className="flex flex-row justify-center items-center gap-4 font-serif text-sm">
              <Link
                href="/work"
                className="flex flex-row justify-center items-center gap-1 cursor-pointer hover:underline"
              >
                Works
              </Link>
              <Link
                href="https://faya-indol.vercel.app"
                target="_blank"
                className="flex flex-row justify-center items-center gap-1 cursor-pointer hover:underline"
              >
                Contact
              </Link>
            </div>
          </nav>
          <div className="w-full h-full flex flex-col justify-between p-4 md:py-8">
            <h1 className="md:text-9xl text-8xl">eloquent</h1>
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="text-9xl animation-spin">✳︎</h1>
              <div className="w-full flex flex-col gap-4 items-end justify-end font-sans">
                <span className="text-xs w-3/4 md:w-1/2 uppercase font-bold">
                  Eloquent® is a brand that is helping express themselves to the
                  world.
                </span>
                <span className="text-xs w-3/4 md:w-1/2">
                  Welcome to Eloquent Studio®, where ideas rally around and
                  creativity knows no bounds. We&apos;re more than just a
                  website—we&apos;re a community of thinkers, dreamers, and
                  doers united by our passion for sharing innovative ideas.
                  Whether you&apos;re seeking new ideas, eager to explore new
                  perspectives, or simply craving a dose of creativity,
                  you&apos;ve come to the right place. Join us on a journey of
                  exploration and discovery as we dive into a world brimming
                  with endless possibilities. Welcome aboard, and let&apos;s
                  embark on this exhilarating adventure together.
                </span>
              </div>
            </div>
            <h1 className="md:text-9xl text-8xl text-end">studio</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
