import React from "react";
import { X } from "../svg/X/X";

export const Baner = () => {
  return (
    <div className=" w-screen absolute left-[-72px] bottom-[-50px] overflow-x-hidden bg-rose-500 ">
      <div className="w-full  animate-marquee pt-1.5 pb-2 whitespace-nowrap text-white text-4xl font-black font-grotesk uppercase leading-9">
        <p className="flex">
          <X /> Destroy stereotypes
          <X /> HAVE NO LIMITS <X /> Break rules
        </p>
      </div>
      <div className="w-full absolute top-0  animate-marquee2 pt-1.5 pb-2 whitespace-nowrap text-white text-4xl font-black font-grotesk uppercase leading-9">
        <p className="flex">
          <X /> Destroy stereotypes
          <X /> HAVE NO LIMITS <X /> Break rules
        </p>
      </div>
    </div>
  );
};
