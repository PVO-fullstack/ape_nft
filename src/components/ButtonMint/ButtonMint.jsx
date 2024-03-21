"use client";

import React from "react";
import { Link } from "react-scroll";

export const ButtonMint = () => {
  return (
    <div className="w-[216px] h-[41px] px-[70px] pt-2.5 pb-3 bg-primaryColor bg-opacity-10 rounded-lg backdrop-blur-[6px] justify-center items-center gap-2.5 inline-flex">
      <Link
        className="text-primaryColor text-base font-black font-grotesk leading-[19px]"
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
