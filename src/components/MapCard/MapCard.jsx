import Image from "next/image";
import Link from "next/link";
import React from "react";
import PropTypes, { string } from "prop-types";

export const MapCard = ({ descr, title, img }) => {
  return (
    <div>
      {img ? (
        <Link
          className="xl:h-[480px] h-[242px] w-full px-3 md:px-6 py-6 bg-heroBg rounded-xl flex-col justify-between inline-flex"
          href="http://www.ukr.net"
          target="blank"
          rel="nofollow noreferrer noopener"
        >
          <Image
            className="block ml-auto xl:w-[39.54px] xl:h-[39.54px]]"
            src={img}
            alt="arrow"
            width={24}
            height={24}
          />
          <h3 className="text-white text-[32px] xl:text-[64px] font-black font-grotesk uppercase xl:leading-[64px] leading-none">
            <span className="block">{title.first}</span>{" "}
            <span className="block">{title.second}</span> {title.third}
          </h3>
        </Link>
      ) : (
        <div className="xl:h-[480px] h-[242px] w-full px-3 md:px-6 py-6 bg-primaryColor rounded-xl flex-col justify-between inline-flex">
          <p className="xl:w-[228px] md:w-32 md:self-end text-white text-xs xl:text-2xl font-normal font-messina uppercase leading-[14px] xl:leading-[29px]">
            {descr}
          </p>
          <h3 className="text-white text-[32px] xl:text-[64px] font-black font-grotesk uppercase xl:leading-[64px] leading-none">
            {title}
          </h3>
        </div>
      )}
    </div>
  );
};

MapCard.propTypes = {
  descr: PropTypes.string,
  title: PropTypes.string || PropTypes.objectOf(string),
  img: PropTypes.bool,
};
