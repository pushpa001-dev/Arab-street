import React from "react";
import Image from "next/image";
const About = () => {
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
        <div className="absolute top-0 sm:top-10 right-20 sm:right-0 xl:right-50 px-5 py-2 rounded-2xl bg-yellow-400  z-20 shadow-2xl">
          <p className=" text-lg sm:text-xl  font-bold">Best Biryanies</p>
          <div className="w-5 h-5 bg-yellow-400 absolute bottom-[-9px] left-5 rounded-sm rotate-45  " />
        </div>
      </div>
      <div className="w-full h-full items-start justify-center  flex flex-col px-5 2xl:px-10 gap-10 2xl:gap-20">
        <h1 className="text-3xl sm:text-5xl font-bold font-overpass">
          About
          <hr className="w-full text-yellow-400 h-1 bg-yellow-400" />
        </h1>
        <div className="w-full h-full flex flex-col  gap-10">
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
