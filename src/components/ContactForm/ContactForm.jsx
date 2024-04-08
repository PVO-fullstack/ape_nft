"use client";

import React from "react";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import PropTypes, { string } from "prop-types";

export const ContactForm = ({ data, btn }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid, isSubmitted },
  } = useForm();

  const onSubmit = async (data) => {
    reset();
    setTimeout(() => {
      toast.success(`Welcome ${data.discord}`);
    }, 5000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex flex-col md:items-center "
    >
      {data.map((item) => (
        <Input
          name={item.name}
          type={item.type}
          key={item.id}
          setValue={setValue}
          register={register}
          errors={errors}
          errorMessages={item.errorMessages}
          svg={item.svg}
          placeholder={item.placeholder}
        />
      ))}
      <button
        disabled={!isValid}
        className={` hover:text-primaryColor focus:text-primaryColor transition-[color] duration-500 w-[216px] md:w-[247px] xl:w-[397px] h-[41px] xl:h-[70px] px-[107px] pt-2.5 pb-3 text-white text-base xl:text-[28px] uppercase font-black leading-[19px] xl:leading-[34px] font-grotesk bg-heroBg rounded-lg backdrop-blur-md justify-center items-center gap-2.5 inline-flex`}
        type="submit"
      >
        {(isSubmitted && btn.success) || btn.default}
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  data: PropTypes.arrayOf(Object),
  btn: PropTypes.objectOf(string),
};
