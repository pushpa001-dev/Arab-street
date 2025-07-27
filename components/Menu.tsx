"use client";
import React from "react";
import { menu } from ".";
import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const biryani = menu.find((cat) => cat.category === "Soups");
  return (
    <section className="w-full h-full items-center justify-center flex flex-col  px-10 xl:px-20 py-10 lg:py-20 relative">
      
      <div className="w-full h-full flex items-start justify-start lg:px-20">
        <h1 className="text-3xl sm:text-5xl font-bold font-overpass">
          Menu
          <hr className="w-full text-yellow-400 h-1 bg-yellow-400" />
        </h1>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 2xl:gap-10 py-10 lg:py-20">
        <h1 className="text-3xl sm:text-4xl font-overpass w-full flex items-start lg:px-20">
          Soups :
        </h1>
        {biryani?.items.map((item) => (
          <div
            key={item.name}
            className="h-full w-full items-center justify-center flex  lg:px-20"
          >
            <div className="w-full  h-full flex flex-row items-center justify-between">
              <p className="text-xl lg:text-2xl  font-overpass">{item.name} </p>
              <p className="text-lg font-sans">₹ {item.price}</p>
            </div>
          </div>
        ))}
        <div>
          <button onClick={() => setIsOpen(!isOpen)} className=" group w-full h-full items-center justify-center flex bg-yellow-400 px-5 py-2 rounded-md text-md focus:bg-yellow-500   lg:text-xl font-bold hover:scale-105 transition-all duration-200 cursor-pointer shadow-2xl">
            view all{" "}
          </button>
        </div>
      </div>
      <div data-lenis-prevent className={` ${isOpen ? "block" : "hidden"} w-full h-full absolute top-0 left-0 px-5 lg:px-10`}>
        
        <div className="  w-full h-screen border border-yellow-100 bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 px-5 lg:px-20 py-10 lg:py-20 2xl:px-40 rounded-xl lg:rounded-2xl flex flex-col gap-10 lg:gap-20 shadow-2xl relative opacity-95 lg:opacity-90">
        <h1 className="text-2xl sm:text-5xl font-bold font-overpass w-full items-center justify-center flex">
          Arab  <span className="text-yellow-400"> menu</span>
        </h1>
          {menu.map((section) => (
            
            <div key={section.category} className="mb-8 flex flex-col ">
              <h2 className="text-xl lg:text-3xl font-bold mb-2">{section.category} :</h2>
              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li key={i} className="flex justify-between">
                    <span className=" text-sm lg:text-2xl ">{item.name}</span>
                    <span>₹ {item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div onClick={() => setIsOpen(!isOpen)} className="absolute top-20 right-5 lg:right-20 cursor-pointer">
            <div className="w-1 h-6 rotate-45 bg-black ralative ">
              <div className="w-1 h-6 -rotate-90 bg-black absolute top-0 left-0 "/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
