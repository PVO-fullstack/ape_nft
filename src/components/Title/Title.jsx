import React from "react";
import PropTypes from "prop-types";

export const Title = ({ title }) => {
  return (
    <h2 className=" xl:text-[160px] xl:leading-[160px] md:text-[80px] md:leading-[80px] mb-6 md:mb-10 xl:mb-20 text-white text-[44px] font-black font-grotesk uppercase text-center leading-10">
      {title}
    </h2>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};
