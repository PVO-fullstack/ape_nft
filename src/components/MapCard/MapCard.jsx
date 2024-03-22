import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MapCard = ({ descr, title, img }) => {
  return (
    <div>
      {img ? (
        <Link
          className="h-[242px] w-full px-3 md:px-6 py-6 bg-heroBg rounded-xl flex-col justify-between inline-flex"
          href="http://www.ukr.net"
          target="blank"
          rel="nofollow noreferrer noopener"
        >
          <Image
            className="block ml-auto"
            src={img}
            alt="arrow"
            width={24}
            height={24}
          />
          <h3 className="text-white text-[32px] font-black font-grotesk uppercase leading-none">
            {title}
          </h3>
        </Link>
      ) : (
        <div className="h-[242px] w-full px-3 md:px-6 py-6 bg-stone-900 rounded-xl flex-col justify-between inline-flex">
          <p className="md:w-32 md:self-end text-white text-xs font-normal font-messina uppercase leading-[14px]">
            {descr}
          </p>
          {/* )} */}
          <h3 className="text-white text-[32px] font-black font-grotesk uppercase leading-none">
            {title}
          </h3>
        </div>
      )}
    </div>
  );
};
