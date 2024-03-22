"use client";

import { useWindowWidth } from "@/hooks/getWindowWidth";
import React, { useEffect, useRef, useState } from "react";

export const TabItem = ({ id, title, description, getCurrent, current }) => {
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
      className={`group h-full cursor-pointer rounded-xl px-2 pt-2 pb-[10px] flex gap-2 ${
        isOpen ? "bg-stone-900 outline-none" : ""
      }`}
    >
      <div className="pt-[5px]">
        <p
          className={`w-6  text-xs font-normal font-biro transition-[color] duration-500 leading-tight ${
            isOpen ? "text-white" : "text-rose-500"
          }`}
        >
          [ {id} ]
        </p>
      </div>
      <div className="flex flex-col">
        <h3
          className={` text-xl font-black font-grotesk transition-[color] duration-500 uppercase leading-tight ${
            isOpen ? "text-rose-500" : "text-white"
          }`}
        >
          {title}
        </h3>
        <div className="overflow-hidden h-auto">
          <p
            id={id}
            ref={refDescription}
            className="mt-[-300vh]   text-white text-xs font-normal font-messina uppercase leading-[14px]  transition-[margin] duration-500 "
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
