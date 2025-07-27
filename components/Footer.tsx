import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="w-full h-full bg-black pt-10 lg:pt-20 pb-2 lg:Pb-5 px-5 lg:px-10 flex flex-col items-center justify-between gap-5">
      <div className=" w-full h-full flex flex-row items-center justify-between ">
      <div className="flex  flex-col gap-5 lg:gap-10">
        <h1 className="text-xl sm:text-3xl text-white font-overpass">
          Arab Street
        </h1>
        <h1 className="text-sm sm:text-3xl text-yellow-400 font-overpass">
          #HUNGERLOCKUP
        </h1>
      </div>
      <div className="flex flex-col  text-white text-end lg:gap-5 ">
        <h1 className="text-xl lg:text-3xl">Contact us </h1>
        <div className="opacity-70 lg:text-2xl flex flex-col text-end lg:gap-2">
          <h1>
            {" "}
            <Link
              href="https://www.instagram.com/arabstreettenali?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              {" "}
              Instagram{" "}
            </Link>
          </h1>
          <h1>
            {" "}
            call: <a href="tel:+9966661177">99-6666-1177</a>
          </h1>
        </div>
      </div>
      </div>
      <p className="text-white/50 bottom-0  right-0 flex items-center justify-center text-sm lg:text-lg ">
       @made by-
        <Link href="https://pushpahas-web-works.vercel.app/" target="_blank">
          {" "}
          TPA-Infera{" "}
        </Link>
      </p>
    </section>
  );
};

export default Footer;
