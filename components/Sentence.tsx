import React from "react";
import Image from "next/image";
const Sentence = () => {
  return (
    <section className="w-full h-full py-40 flex items-center justify-center flex-col relative ">
      <div className="w-full h-full absolute">
        <Image
          src={"/sentence.jpg"}
          alt="sentence"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-600/50" />
      </div>
      <div className="w-full h-full flex items-center justify-center z-10 px-5 lg:px-20">
        <h1 className="text-3xl sm:text-6xl font-bold font-overpass text-white">
          <span className="text-yellow-400">Biryani</span> isn&apos;t just a
          dish — it&apos;s a{" "}
          <span className="text-yellow-400">royal emotion</span> on a plate.{" "}
          <br />
          Layered with love, spice, and timeless{" "}
          <span className="text-yellow-400">tradition .</span> <br />
          Each grain sings a song of culture and celebration. <br />A single
          bite, and the <span className="text-yellow-400">heart</span> knows
          it&apos;s home. <br />
        </h1>
      </div>
    </section>
  );
};

export default Sentence;
