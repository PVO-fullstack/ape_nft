import React from "react";
import { Logo } from "../svg/logo/Logo";
import { Menu } from "../Menu/Menu";
import { Social } from "../Social/Social";
import nav from "../../data/nav.json";
import { Link } from "react-scroll";
import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";

export const BurgerMenu = ({ isOpen, click }) => {
  return (
    <div
      className={`w-full top-0 left-0 px-4 pt-[62px] md:hidden fixed bg-background  h-screen z-[300] transition duration-150 easy-in-out
      ${
        isOpen
          ? "translate-y-0 opacity-1 visible"
          : "-translate-y-full opacity-0 invisible"
      } 
      `}
    >
      <div className=" flex justify-between ">
        <Logo className=" text-white pt-2" />
        <div className=" flex flex-col gap-2 items-end ">
          <Menu isOpen={isOpen} isBurger click={click} />
          <Social isBurger />
        </div>
      </div>
      <ul className="flex flex-col gap-4 items-center text-white text-2xl font-semibold font-messina leading-[29px] uppercase">
        <Navigation click={click} />
      </ul>
      <Footer />
    </div>
  );
};
