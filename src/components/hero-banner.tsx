"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroBanner() {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#slider", {
        xPercent: "-100",
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
          xPercent: "-100",
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
        className="h-screen p-8 backdrop-blur-3xl bg-slate-600/50 absolute top-0 left-0 z-10 w-full flex flex-row gap-4 justify-between items-end tracking-tight text-white text-8xl font-Cinzel"
      >
        <h1 id="title-1">We</h1>
        <h1 id="title-2">are</h1>
        <h1 id="title-3">eloquent</h1>
          {/* ✷ . · * ✧ ˚ * . ☽ ˚ ✦ <br />
          ✧⋆ ˚ ✵ *creative studio * ⋆ . <br />
          · ˚ ⋆ ˚ ⋆ ⋆ ✧ · ✵ ☽ ˚ ✦ <br /> */}
      </div>

      <div 
      id="hero-banner"
      className="h-screen w-full bg-zinc-950 text-zinc-50 font-Cinzel">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-between items-start h-full">
          <nav className="h-[8vh] flex w-full px-4 md:px-0 items-center justify-between">
            ;sfdlfksd;lkflsdkfl;dsk
          </nav>
          <div className="w-full h-full flex flex-col justify-between py-8">
            <h1 className="md:text-9xl text-8xl">
              eloquent
            </h1>
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="text-9xl animation-spin">✳︎</h1>
              <div className="w-full flex flex-col gap-4 items-end justify-end font-medium font-sans">
                <span className="text-xs w-3/4 md:w-1/2 uppercase">
                  Lorem ipsum dolor amet consectetur adipisicing consequatur debitis?
                </span>
                <span className="text-xs w-3/4 md:w-1/2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  illo consequatur debitis architecto voluptate iste deleniti.
                  Velit accusamus iure, nesciunt quam cum deleniti, quae officiis,
                  natus similique atque fuga exercitationem?
                  Velit accusamus iure, nesciunt quam cum deleniti, quae officiis,
                  natus similique atque fuga exercitationem?
                </span>
              </div>
            </div>
            <h1
              className="md:text-9xl text-8xl text-end"
            >
              studio
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
