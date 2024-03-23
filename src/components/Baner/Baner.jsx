import React from "react";
import { X } from "../svg/X/X";

export const Baner = () => {
  return (
    <div className=" w-screen absolute left-[-72px] md:left-[-88px] xl:left-[-204px] bottom-[-50px] overflow-x-hidden bg-heroBg ">
      <div className="w-full  animate-marquee pt-1.5 pb-2 whitespace-nowrap text-white text-4xl font-black font-grotesk uppercase leading-9">
        <p className="flex w-max">
          <X className="md:w-9 md:h-9 block " /> Destroy stereotypes
          <X className="md:w-9 md:h-9 block " /> HAVE NO LIMITS{" "}
          <X className="md:w-9 md:h-9 block " /> Break rules
        </p>
      </div>
      <div className=" hidden w-full absolute top-0  animate-marquee2 pt-1.5 pb-2 whitespace-nowrap text-white text-4xl font-black font-grotesk uppercase leading-9">
        <p className="flex w-max">
          <X className="md:w-9 md:h-9 block " /> Destroy stereotypes
          <X className="md:w-9 md:h-9 block " /> HAVE NO LIMITS{" "}
          <X className="md:w-9 md:h-9 block " /> Break rules
        </p>
      </div>
    </div>
  );
};
