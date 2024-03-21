import React from "react";

export const MenuBtn = ({ name, children, className, onClick, isBurger }) => {
  return (
    <li
      onClick={onClick}
      className={`p-2.5 ${
        isBurger
          ? "bg-white text-white hover:text-heroBg "
          : "bg-primaryColor text-primaryColor hover:text-white"
      }  hover:underline transition-[color] duration-500  bg-opacity-10 backdrop-blur-md justify-center items-center inline-flex  text-xs font-semibold font-messina leading-[14px] ${className} `}
    >
      {name}
      {children}
    </li>
  );
};
