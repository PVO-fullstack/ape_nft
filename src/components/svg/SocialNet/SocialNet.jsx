import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";

export const SocialNet = ({ isBurger }) => {
  return (
    <Link
      className={`${
        isBurger
          ? "text-white hover:text-heroBg "
          : "text-primaryColor hover:text-white"
      }  transition-[color] duration-500 `}
      href="https://www.facebook.com/"
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
        <g clipPath="url(#clip0_51_1506)">
          <mask
            id="mask0_51_1506"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <path d="M24 0H0V24H24V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_51_1506)">
            <mask
              id="mask1_51_1506"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path d="M24 0H0V24H24V0Z" fill="white" />
            </mask>
            <g mask="url(#mask1_51_1506)">
              <path d="M12.1048 0.00041571C5.39441 -0.0547843 -0.0547843 5.39442 0.00041571 12.1048C0.0568157 18.6208 5.38001 23.9452 11.8948 23.9992C18.6052 24.0568 24.0568 18.6052 23.9992 11.8948C23.9452 5.38122 18.6208 0.0568157 12.1048 0.00041571ZM8.51681 5.97282C9.28481 6.94842 9.74441 8.18322 9.74441 9.52242C9.74441 10.6828 9.40001 11.7628 8.80841 12.664H4.64801L8.51561 5.97162L8.51681 5.97282ZM21.2008 13.2832V14.1472C21.2008 14.2036 21.1708 14.2516 21.1192 14.2732C20.8372 14.3932 19.9072 14.8252 19.5196 15.3628C18.5212 16.7524 17.7592 18.9364 16.0552 18.9364H8.94521C6.42761 18.9364 4.32161 16.9384 4.32281 14.2768C4.32281 14.2108 4.37921 14.1568 4.44521 14.1568H7.81481C7.93121 14.1568 8.02241 14.2504 8.02241 14.3644V15.0148C8.02241 15.3604 8.30201 15.6412 8.64881 15.6412H11.2048V14.1532H9.45881C10.4632 12.8812 11.0608 11.2756 11.0608 9.52722C11.0608 7.57722 10.3132 5.79882 9.08921 4.46922C9.82961 4.55562 10.5376 4.70322 11.2048 4.89882V4.48482C11.2048 4.05522 11.5528 3.70722 11.9824 3.70722C12.412 3.70722 12.76 4.05522 12.76 4.48482V5.48322C15.1456 6.59682 16.708 8.44482 16.708 10.5352C16.708 11.7616 16.1716 12.9028 15.2464 13.8628C15.0688 14.0464 14.8228 14.1508 14.5648 14.1508H12.7612V15.6364H15.0256C15.514 15.6364 16.39 14.71 16.8052 14.152C16.8052 14.152 16.8232 14.1244 16.8712 14.11C16.9192 14.0956 21.0292 13.1524 21.0292 13.1524C21.1156 13.1284 21.2008 13.1944 21.2008 13.282V13.2832Z" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_51_1506">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

SocialNet.propTypes = {
  isBurger: PropTypes.bool,
};
