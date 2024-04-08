"use client";

import React from "react";
import { Link } from "react-scroll";

export const ButtonMint = () => {
  return (
    <div className="w-full h-[41px] xl:h-[70px] px-[70px] md:px-[61px] xl:px-[140px] xl:pt-4 xl:pb-5 pt-2.5 pb-3 bg-primaryColor bg-opacity-10 rounded-lg backdrop-blur-[6px] justify-center items-center gap-2.5 inline-flex">
      <Link
        className="text-primaryColor hover:text-white focus:text-white transition-[color] duration-500 text-base whitespace-nowrap xl:text-[28px] xl:leading-[34px] font-black font-grotesk leading-[19px]"
        activeClass="active"
        href="/"
        to="Mint"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        MEET APES
      </Link>
    </div>
  );
};
