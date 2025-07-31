"use client";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
 
  useGSAP(() => {
    gsap.fromTo("#message", {
    scrollTrigger : {
      trigger: "#message",
     toggleActions: "play pause reverse pause",
    },
    y: 5,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    }, {
    y: -5,
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
    repeat: -1,
    yoyo: true, 
    scrub: true

    } )
    gsap.from("#about-text hr", {
      scrollTrigger:'#about-text hr',
      scaleX: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    })
    gsap.from("#about-content p", {
      scrollTrigger:'#about-content',
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
      ease: "power2.out",
    })
  });
  return (
    <section
      id="about"
      className="w-full h-full items-center justify-center px-5 xl:px-20 flex flex-col lg:flex-row py-10 lg:py-20"
    >
      <div className="w-full h-full relative">
        <Image
          src={"/about.png"}
          alt="about"
          width={500}
          height={500}
          className="w-full h-full object-cover "
        />
        <div id="message" className="absolute top-0 sm:top-10 right-20 sm:right-0 xl:right-50 px-5 py-2 rounded-2xl bg-yellow-400  z-20 shadow-2xl">
          <p className=" text-lg sm:text-xl  font-bold">Best Biryanis</p>
          <div className="w-5 h-5 bg-yellow-400 absolute bottom-[-9px] left-5 rounded-sm rotate-45  " />
        </div>
      </div>
      <div id="about-text" className="w-full h-full items-start justify-start flex flex-col px-5 2xl:px-10 gap-10 2xl:gap-20">
        <h1 className="text-3xl sm:text-5xl font-bold font-overpass">
          About
          <hr className="w-full text-yellow-400 h-1 bg-yellow-400 text-start" />
        </h1>
        <div id="about-content" className="w-full h-full flex flex-col  gap-10">
          <p className="text-lg sm:text-2xl font-sans">
            Arab Street offers an eclectic blend of Middle Eastern, Indian,
            Chinese, Seafood, Kebab, and Biryani dishes, drawing inspiration
            from traditional Arabic dining customs where groups often share
            hearty platters of meat and spiced rice—perfect for gatherings of
            friends and family
          </p>
          <p className="text-lg sm:text-2xl font-sans hidden 2xl:flex">
            Nestled in the heart of Chenchupet, Tenali (Opposite Raitu Bazaar 
            Bhanu Tea Stall, beside Uni Homes), Arab Street Restaurant welcomes
            guests daily from 12:00 PM to 3:00 PM and 7:30 PM to 11:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
