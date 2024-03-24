"use client";

import { useWindowWidth } from "@/hooks/getWindowWidth.jsx";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const TabItem = ({
  id,
  title,
  description,
  img,
  getCurrent,
  current,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState(3000);
  const windowWidth = useWindowWidth();

  const ref = useRef(null);
  const refDescription = useRef(null);

  useEffect(() => {
    if (windowWidth) {
      setDescriptionHeight(refDescription.current?.clientHeight);
    }
    if (current === ref.current.id) {
      setIsOpen(true);
    }
    if (current !== ref.current.id) {
      setIsOpen(false);
    }
  }, [windowWidth, current]);

  const handleClick = (e) => {
    getCurrent(e.currentTarget.getAttribute("data-el"));
  };

  return (
    <li
      ref={ref}
      id={id}
      data-el={id}
      tabIndex={0}
      onClick={handleClick}
      className={`h-full cursor-pointer rounded-xl last:mb-0 px-2 md:pl-[183px] xl:pl-[297px] flex gap-2 md:gap-[21px] ${
        isOpen
          ? " bg-primaryColor outline-none pb-[10px] mb-2 xl:mb-6 mt-2 px-2 pt-2 md:pt-[18px] xl:py-6 md:pr-4 xl:pr-6 md:pb-[23px] "
          : "mb-4 xl:mb-12"
      }`}
    >
      {windowWidth > 767 && isOpen && (
        <Image
          className="w-[148px] xl:w-[248px] h-[183px] xl:h-[282px] origin-top-left rotate-[-16deg] rounded-2xl absolute left-0"
          src={img}
          alt="ape"
          width={248}
          height={282}
        />
      )}
      <div className="pt-[5px] ">
        <p
          className={`w-[27px] xl:w-[52px]  text-xs xl:text-2xl font-normal font-biro transition-[color] duration-500 leading-tight xl:leading-10 ${
            isOpen ? "text-white" : " text-heroBg"
          }`}
        >
          [ {id} ]
        </p>
      </div>
      <div className="flex flex-col">
        <h3
          className={` hover:text-heroBg text-xl font-black font-grotesk transition-[color] duration-500 uppercase leading-tight md:text-[32px] xl:text-[64px] md:leading-8 xl:leading-[64px] ${
            isOpen ? "text-heroBg" : "text-white"
          }`}
        >
          {title}
        </h3>
        <div className="overflow-hidden h-auto">
          <p
            id={id}
            ref={refDescription}
            className="mt-[-300vh]   text-white text-xs xl:text-base font-normal font-messina uppercase leading-[14px] xl:leading-[19px] transition-[margin] duration-500 "
            style={{
              marginTop: isOpen ? 10 : -descriptionHeight - 10,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </li>
  );
};

TabItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  getCurrent: PropTypes.func,
  current: PropTypes.string,
};
