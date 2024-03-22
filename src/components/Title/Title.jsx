import React from "react";

export const Title = ({ title }) => {
  return (
    <h2 className=" md:text-[80px] md:leading-[80px] mb-6 md:mb-10 text-white text-[44px] font-black font-grotesk uppercase text-center leading-10">
      {title}
    </h2>
  );
};
