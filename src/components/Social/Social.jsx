import Image from "next/image";
import React from "react";
import { Discord } from "../svg/Discord/Discord";
import { SocialX } from "../svg/SocialX/SocialX";
import { SocialNet } from "../svg/SocialNet/SocialNet";
import { MenuBtn } from "../MenuBtn/MenuBtn";

export const Social = ({ className, isBurger }) => {
  const socialsSvg = [
    <Discord isBurger={isBurger} />,
    <SocialNet isBurger={isBurger} />,
    <SocialX isBurger={isBurger} />,
  ];

  return (
    <ul className={`flex flex-col gap-2 self-end ${className}`}>
      {socialsSvg.map((social, i) => (
        <MenuBtn
          isBurger={isBurger}
          key={i}
          className="w-12 h-12 p-2.5 rounded-lg "
        >
          {social}
        </MenuBtn>
      ))}
    </ul>
  );
};
