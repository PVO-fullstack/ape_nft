import Image from "next/image";
import React from "react";

export const Input = ({
  svg,
  placeholder,
  name,
  type,
  setValue,
  register,
  errors,
  errorMessages,
}) => {
  const discordRegisterValidation = {
    required: errorMessages.required || "Required",
    minLength: {
      value: 5,
      message: errorMessages.minLength || "Min 5 symbol",
    },
    pattern: {
      value: /^@+(([A-Za-z]))* ?$/,
      message: errorMessages.pattern || "Wrong discord",
    },
  };

  const addressRegisterValidation = {
    required: errorMessages.required || "Required",
    pattern: {
      value:
        /^(([A-Za-zА-Яа-яЇїІіЄєҐґ])+(['`][A-Za-zА-Яа-яЇїІіЄєҐґ]+)*)+([- ](([A-Za-zА-Яа-яЇїІіЄєҐґ])+(['`][A-Za-zА-Яа-яЇїІіЄєҐґ]+)*))* ?$/,
      message: errorMessages.pattern || "Wrong address",
    },
  };

  const getHandleChange = () => {
    const fn = (event) => {
      const { value } = event.target;
      setValue(name, event.target.value, { shouldValidate: true });
    };
    return fn;
  };
  const onChangeProps = {
    onChange: getHandleChange(),
  };

  return (
    <label className="flex flex-col">
      <div className="flex">
        <span className="w-12 h-12 p-2.5 bg-stone-900 rounded-tl-lg rounded-bl-lg backdrop-blur-md justify-center items-center gap-2.5 inline-flex">
          <Image src={svg} alt="image" width={100} height={100} />
        </span>
        <input
          name={name}
          type={type}
          {...register(
            name,
            type === "discord"
              ? { ...discordRegisterValidation }
              : { ...addressRegisterValidation }
          )}
          {...onChangeProps}
          autoComplete="off"
          placeholder={placeholder}
          className={`w-[168px] h-12 px-6 py-[22px] rounded-tr-lg rounded-br-lg border justify-start items-center gap-2.5 inline-flex  text-xs font-normal font-messina uppercase leading-[19px] placeholder:text-opacity-25 focus:${
            errors[name] ? "border-rose-500" : "border-white"
          } ${
            errors[name]
              ? " text-rose-500 border-rose-500"
              : "border-stone-900 text-white"
          }`}
        />
      </div>
      <span className=" h-4 inline-block w-full text-right text-rose-500 text-[10px] font-messina uppercase leading-3">
        {errors[name]?.message}
      </span>
    </label>
  );
};
