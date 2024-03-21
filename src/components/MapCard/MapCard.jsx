import Image from "next/image";
import React from "react";

export const MapCard = ({ descr, title, img }) => {
  return (
    <div>
      <div className="h-[242px] px-3 py-6 bg-stone-900 rounded-xl flex-col justify-between inline-flex">
        {img ? (
          <Image
            className="block ml-auto"
            src={img}
            alt="arrow"
            width={24}
            height={24}
          />
        ) : (
          <p className="text-white text-xs font-normal font-messina uppercase leading-[14px]">
            {descr}
          </p>
        )}
        <h3 className="text-white text-[32px] font-black font-grotesk uppercase leading-none">
          {title}
        </h3>
      </div>
    </div>
  );
};
