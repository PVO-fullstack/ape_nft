import { Conteiner } from "@/components/Conteiner/Conteiner";
import { Input } from "@/components/Input/Input";
import { Title } from "@/components/Title/Title";
import { X } from "@/components/svg/X/X";
import React from "react";
import contactData from "../../data/contact.json";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { ToastContainer } from "react-toastify";

export const ContactUs = () => {
  const { title, text, input, btn } = contactData;

  return (
    <Conteiner id="Mint">
      <Title title={title} />
      <div className="flex flex-col gap-4">
        <X className="block mx-auto" />
        <p className="text-center text-white text-base font-normal font-messina uppercase leading-[19px]">
          {text}
        </p>
        <ContactForm data={input} btn={btn} />
      </div>
      <ToastContainer
        theme="colored"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </Conteiner>
  );
};
