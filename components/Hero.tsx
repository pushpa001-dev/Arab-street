"use client";
import React from "react";
import Image from "next/image";
import { useSmoothScroll } from "./ScrollContext";
const Hero = () => {
  const lenis = useSmoothScroll();
  return (
    <section className="relative h-screen flex  flex-col items-center justify-center py-10">
      <div className="w-full h-full absolute">
        <Image
          src={"/hero.jpg"}
          alt="hero"
          fill
          className="w-full h-full object-cover"
          quality={100}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-600/60" />
      </div>
      <div className="flex items-center justify-end gap-10 flex-col z-10 w-full h-full">
        <h1 className="text-6xl sm:text-9xl font-overpass font-bold text-white">
          Arab <span className="text-yellow-400">Street </span>
        </h1>
        <p className="text-3xl sm:text-5xl font-bold text-white">
          <span className="text-yellow-400">#</span>HUNGERLOCKUP
        </p>
        <p className="text-md sm:text-3xl  font-sans text-white/90 text-center  px-10 xl:px-100">
          <span className="text-yellow-400">&quot;</span>Welcome to The Arab
          Street, your destination for authentic, mouth-watering Mandi Biryani
          and traditional Arabic cuisine right here in TENALI.
          <span className="text-yellow-400">&quot;</span>
        </p>
      </div>
      <div className=" font-bold text-white w-full h-full items-end flex justify-center z-10 ">
        <button
          type="button"
          onClick={() => {
            const target = document.querySelector("#about") as HTMLElement;
            if (lenis && target) {
              lenis.scrollTo(target);
            }
          }}
        >
          <p className="border p-2 sm:p-5  xl:p-7 rounded-full animate-bounce text-xl xl:text-6xl">
            ↓
          </p>
        </button>
      </div>
    </section>
  );
};

export default Hero;
