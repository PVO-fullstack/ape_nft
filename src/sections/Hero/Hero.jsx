"use client";

import React from "react";
import Image from "next/image";
import { ButtonMint } from "../../components/ButtonMint/ButtonMint";
import { Conteiner } from "@/components/Conteiner/Conteiner";

export const Hero = () => {
  return (
    <section className=" relative flex flex-col mx-2 items-center bg-heroBg rounded-b-xl">
      <p className="absolute text-center top-0 translate-y-[-50%] text-primaryColor text-base font-normal font-biro leading-[27px]">
        diD yOu seE iT ?
      </p>
      <p className="text-center mt-[15px] mb-2 text-primaryColor text-[44px] font-black font-grotesk leading-[44px] tracking-wide">
        YACHT APES
      </p>
      <p className="text-center text-primaryColor text-base font-normal font-biro leading-[27px]">
        Apes aRe eveRywhere
      </p>
      <Image
        className=" block mx-auto w-[216px] h-[284px] "
        src="/hero_mobil.png"
        alt="img"
        width={100}
        height={100}
      />
      <ButtonMint />
      <p className="w-[217px] mt-3 mb-[19px] text-center text-primaryColor text-xs font-normal font-messina uppercase leading-[14px]">
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </p>
    </section>
  );
};
