import Image from "next/image";
import React from "react";

export const ArtCard = ({ img }) => {
  return (
    <div>
      <Image
        className=" w-full "
        src={img}
        alt="ape"
        width={100}
        height={100}
      />
    </div>
  );
};
