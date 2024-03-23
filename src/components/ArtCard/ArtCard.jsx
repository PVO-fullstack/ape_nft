import Image from "next/image";
import React from "react";

export const ArtCard = ({ img }) => {
  return (
    <div className="rounded-xl ">
      <Image
        className=" xl:w-60 xl:h-[280px]  min-w-[216px] min-h-[256px] object-cover mx-auto rounded-xl md:rounded-3xl md:w-[284px] md:h-[336px] "
        src={img}
        alt="ape"
        width={240}
        height={280}
      />
    </div>
  );
};
