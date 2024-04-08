"use client";

import React from "react";
import Image from "next/image";
import { ButtonMint } from "../../components/ButtonMint/ButtonMint";

export const Hero = () => {
  return (
    <section className=" md:px-[72px] xl:px-[194px] translate-y-[-15px] md:h-[373px] xl:h-[603px] relative flex flex-col mx-2 md:mx-4 items-center bg-heroBg rounded-b-xl">
      <div className=" w-full xl:pt-[123px] xl:pb-[206px] md:self-start md:text-left text-center md:pt-[84px] md:pb-[123px]">
        <p className=" md:text-xl md:leading-[33px] xl:text-2xl xl:leading-10 text-primaryColor text-base font-normal font-biro leading-[27px]">
          diD yOu seE iT ?
        </p>
        <h1 className=" xl:text-[164px] xl:leading-[164px] xl:tracking-normal md:flex md:justify-between md:text-[92px] md:leading-[92px] md:tracking-[0.92px] mb-2 md:mb-4 xl:mb-[30px] text-primaryColor text-[44px] font-black font-grotesk leading-[44px] tracking-[0.44px]">
          <span>YACHT</span>
          <span>APES</span>
        </h1>
        <p className=" md:text-xl md:leading-[33px] xl:text-2xl xl:leading-10 xl:pl-[120px] text-primaryColor text-base font-normal font-biro leading-[27px]">
          Apes aRe eveRywhere
        </p>
      </div>
      <Image
        className=" block mx-auto w-[216px] h-[284px] md:absolute md:top-[-13px] xl:top-[-9px] md:w-[283px] md:h-[386px] xl:w-[463px] xl:h-[612px] md:left-[206px] xl:right-[260px] "
        src="/hero_mobil.png"
        alt="Monkey in glasses"
        width={463}
        height={612}
        priority={true}
      />
      <div className=" w-[217px] md:w-[190px] xl:w-[337px] md:self-end md:absolute  md:bottom-[35px] xl:bottom-[81px] md:flex md:flex-col-reverse">
        <ButtonMint />
        <p className=" mt-3 mb-[19px] md:text-justify md:mt-0 md:mb-4 text-center text-primaryColor text-xs xl:text-base xl:leading-[19px] font-normal font-messina uppercase leading-[14px]">
          <span className="xl:block text-end">
            <span className="block xl:inline text-end">Yacht Ape is a</span>{" "}
            collection
          </span>
          <span className="xl:text-justify">
            of unique digital apes that you
          </span>{" "}
          can own in NFT format
        </p>
      </div>
    </section>
  );
};
