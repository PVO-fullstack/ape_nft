"use client";

import React, { useState } from "react";
import { Logo } from "../svg/logo/Logo";
import { Social } from "../Social/Social";
import { Menu } from "../Menu/Menu";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" flex relative justify-between mx-2 md:mx-4 bg-heroBg rounded-t-xl">
      <Logo className="text-primaryColor pt-4 pl-2 " />
      <div className=" flex flex-col gap-2 absolute z-10 top-2 right-2 ">
        <Menu isOpen={isOpen} click={handleClick} />
        <Social />
        <BurgerMenu click={handleClick} isOpen={isOpen} />
      </div>
    </header>
  );
};
