"use client";

import React, { useState } from "react";
import { MenuBtn } from "../MenuBtn/MenuBtn";
import { Navigation } from "../Navigation/Navigation";
const asd = [1, 2, 3, 4, 5];

export const Menu = ({ click, isBurger, isOpen }) => {
  return (
    <nav>
      <ul className="flex">
        {/* {asd.map((item, i) => ( */}
        <Navigation
          // key={i}
          className={` ${
            isOpen ? "hidden  md:inline-flex" : "hidden"
          } hidden first:rounded-s-lg w-12 h-12 p-2.5 bg-primaryColor bg-opacity-10 backdrop-blur-md justify-center items-center gap-2.5 text-primaryColor whitespace-nowrap text-xs hover:text-white hover:underline uppercase font-semibold font-messina leading-[14px] transition-[color] duration-500`}
        />
        {/* <Navigation /> */}
        {/* </MenuBtn> */}
        {/* ))} */}
        <MenuBtn
          isBurger={isBurger}
          onClick={click}
          name={isOpen ? "Close" : "Menu"}
          className={` uppercase w-12 h-12 p-2.5 ${
            isOpen ? " rounded-e-lg " : "rounded-lg"
          } `}
        />
      </ul>
    </nav>
  );
};
