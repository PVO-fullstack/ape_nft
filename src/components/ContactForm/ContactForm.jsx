"use client";

import React from "react";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const ContactForm = ({ data, btn }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    reset();
    setTimeout(() => {
      toast.success(`Welcome ${data.discord}`);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
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
        className=" disabled:bg-slate-500 w-[216px] h-[41px] px-[107px] pt-2.5 pb-3 text-white text-base uppercase font-black leading-[19px] font-grotesk transition-colors bg-rose-500 rounded-lg backdrop-blur-md justify-center items-center gap-2.5 inline-flex hover:text-black"
        type="submit"
      >
        {btn.default}
      </button>
    </form>
  );
};
