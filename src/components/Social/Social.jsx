import React from "react";
import { Discord } from "../svg/Discord/Discord";
import { SocialX } from "../svg/SocialX/SocialX";
import { SocialNet } from "../svg/SocialNet/SocialNet";
import { MenuBtn } from "../MenuBtn/MenuBtn";
import PropTypes from "prop-types";

export const Social = ({ className, isBurger }) => {
  return (
    <ul className={`flex flex-col gap-2 self-end ${className}`}>
      <MenuBtn isBurger={isBurger} className="w-12 h-12 p-2.5 rounded-lg ">
        <Discord isBurger={isBurger} />
      </MenuBtn>
      <MenuBtn isBurger={isBurger} className="w-12 h-12 p-2.5 rounded-lg ">
        <SocialNet isBurger={isBurger} />
      </MenuBtn>
      <MenuBtn isBurger={isBurger} className="w-12 h-12 p-2.5 rounded-lg ">
        <SocialX isBurger={isBurger} />
      </MenuBtn>
    </ul>
  );
};

Social.propTypes = {
  className: PropTypes.string,
  isBurger: PropTypes.bool,
};
