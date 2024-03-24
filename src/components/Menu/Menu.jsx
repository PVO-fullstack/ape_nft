"use client";

import React from "react";
import { MenuBtn } from "../MenuBtn/MenuBtn";
import { Navigation } from "../Navigation/Navigation";
import PropTypes from "prop-types";

export const Menu = ({ click, isBurger, isOpen }) => {
  return (
    <nav>
      <ul className="flex">
        <Navigation
          className={` ${
            isOpen ? "hidden  md:inline-flex" : "hidden"
          } hidden first:rounded-s-lg w-12 h-12 xl:w-20 xl:h-20 p-2.5 bg-primaryColor bg-opacity-10 backdrop-blur-md justify-center items-center gap-2.5 text-primaryColor whitespace-nowrap text-xs xl:text-base xl:leading-[19px] hover:text-white hover:underline uppercase font-semibold font-messina leading-[14px] transition-[color] duration-500`}
        />
        <MenuBtn
          isBurger={isBurger}
          onClick={click}
          name={isOpen ? "Close" : "Menu"}
          className={`  ${isOpen ? " rounded-e-lg " : "rounded-lg"} `}
        />
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  click: PropTypes.func,
  isBurger: PropTypes.bool,
  isOpen: PropTypes.bool,
};
