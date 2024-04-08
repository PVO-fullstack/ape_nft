"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "../svg/logo/Logo";
import { Social } from "../Social/Social";
import { Menu } from "../Menu/Menu";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" px-2 md:px-3 xl:px-24  pt-4 md:pt-5 xl:pt-[39px] flex relative justify-between mx-2 md:mx-4 bg-heroBg rounded-t-xl">
      <Logo
        svgClass=" w-12 h-8 xl:w-[72px] xl:h-[50px]"
        className="text-primaryColor "
      />
      <div className=" flex flex-col gap-2 absolute z-10 top-2 md:top-3 xl:top-6 right-2 md:right-3 xl:right-24 ">
        <Menu isOpen={isOpen} click={handleClick} />
        <Social />
        <BurgerMenu click={handleClick} isOpen={isOpen} />
      </div>
    </header>
  );
};
