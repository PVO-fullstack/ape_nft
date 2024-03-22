"use client";

import React from "react";
import Image from "next/image";
import { ButtonMint } from "../../components/ButtonMint/ButtonMint";

export const Hero = () => {
  return (
    <section className=" md:px-[72px] translate-y-[-15px] md:h-[373px] relative flex flex-col mx-2 md:mx-4 items-center bg-heroBg rounded-b-xl">
      <div className=" w-full md:self-start md:text-left text-center md:pt-[84px] md:pb-[123px]">
        <p className=" md:text-xl md:leading-[33px] text-primaryColor text-base font-normal font-biro leading-[27px]">
          diD yOu seE iT ?
        </p>
        <p className=" md:flex md:justify-between md:text-[92px] md:leading-[92px] mb-2 text-primaryColor text-[44px] font-black font-grotesk leading-[44px] tracking-wide">
          <span>YACHT</span>
          <span>APES</span>
        </p>
        <p className=" md:text-xl md:leading-[33px] text-primaryColor text-base font-normal font-biro leading-[27px]">
          Apes aRe eveRywhere
        </p>
      </div>
      <Image
        className=" block mx-auto w-[216px] h-[284px] md:absolute md:top-[-13px] md:w-[283px] md:h-[386px] md:left-[206px] "
        src="/hero_mobil.png"
        alt="img"
        width={100}
        height={100}
      />
      <div className="md:self-end md:absolute  md:bottom-[35px] md:flex md:flex-col-reverse">
        <ButtonMint />
        <p className="w-[217px] mt-3 mb-[19px] md:mt-0 md:mb-4 text-center text-primaryColor text-xs font-normal font-messina uppercase leading-[14px]">
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </p>
      </div>
    </section>
  );
};
