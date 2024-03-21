import React from "react";

export const Conteiner = ({ children, className, id }) => {
  return (
    <section id={id} className={` ${className} mx-[72px] mt-[60px] relative`}>
      {children}
    </section>
  );
};
