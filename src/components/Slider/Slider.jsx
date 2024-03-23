"use client";

import React from "react";
import ReactSlider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slider = ({ children }) => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          width: "54px",
          height: "24px",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          width: "48px",
          height: "24px",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    centerMode: false,
    speed: 500,
    infinite: false,
    centerPadding: "1px",
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 3860,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return <ReactSlider {...settings}>{children}</ReactSlider>;
};

Slider.propTypes = {
  centralMode: PropTypes.bool,
  className: PropTypes.string,
  infinite: PropTypes.bool,
  children: PropTypes.node,
};
