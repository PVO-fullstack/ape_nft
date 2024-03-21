"use client";

import React, { useState } from "react";
import { MenuBtn } from "../MenuBtn/MenuBtn";
const asd = [1, 2, 3, 4, 5];

export const Menu = ({ click, isBurger }) => {
  return (
    <nav>
      <ul className="flex">
        {asd.map((item, i) => (
          <MenuBtn
            key={i}
            className=" hidden first:rounded-s-lg w-12 h-12 p-2.5 "
            name={item}
          />
        ))}
        <MenuBtn
          isBurger={isBurger}
          onClick={click}
          name="Menu"
          className=" w-12 h-12 p-2.5 rounded-lg"
        />
      </ul>
    </nav>
  );
};
