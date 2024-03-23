import React from "react";

export const MenuBtn = ({ name, children, className, onClick, isBurger }) => {
  return (
    <li
      onClick={onClick}
      className={`p-2.5 ${
        isBurger
          ? "bg-white text-white hover:text-heroBg "
          : "bg-primaryColor text-primaryColor hover:text-white"
      }  hover:underline transition-[color] duration-500 uppercase w-12 h-12 xl:w-20 xl:h-20 p-2.5 bg-opacity-10 backdrop-blur-md justify-center items-center inline-flex  text-xs font-semibold font-messina leading-[14px] xl:text-base xl:leading-[19px] ${className} `}
    >
      {name}
      {children}
    </li>
  );
};
