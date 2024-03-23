import React from "react";

export const Conteiner = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={` ${className} xl:mx-[204px] md:mx-[88px] mx-[72px] mt-[60px] xl:mt-[120px] relative`}
    >
      {children}
    </section>
  );
};
