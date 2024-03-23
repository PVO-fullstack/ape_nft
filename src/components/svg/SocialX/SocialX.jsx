import Link from "next/link";
import React from "react";

export const SocialX = ({ isBurger }) => {
  return (
    <Link
      className={`${
        isBurger
          ? "text-white hover:text-heroBg "
          : "text-primaryColor hover:text-white"
      }  transition-[color] duration-500 `}
      href="https://twitter.com/"
      target="blank"
      rel="nofollow noreferrer noopener"
    >
      <svg
        className="w-4 md:w-6 md:h-6 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <g clipPath="url(#clip0_51_1519)">
          <path
            d="M14.2833 10.1571L23.2178 0H21.1006L13.3427 8.81931L7.14656 0H0L9.36984 13.3364L0 23.9877H2.11732L10.3098 14.6742L16.8534 23.9877H24L14.2827 10.1571H14.2833ZM11.3833 13.4538L10.4339 12.1258L2.88022 1.55881H6.1323L12.2282 10.0867L13.1776 11.4147L21.1016 22.4998H17.8495L11.3833 13.4544V13.4538Z"
            // fill={isBurger ? "#ffffff" : "#1E1E1E"}
          />
        </g>
        <defs>
          <clipPath id="clip0_51_1519">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};
