import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

export const Input = ({
  svg,
  placeholder,
  name,
  type,
  setValue,
  register,
  errors,
}) => {
  const discordRegisterValidation = {
    required: "Required",
    minLength: {
      value: 5,
      message: "Min 5 symbol",
    },
    pattern: {
      value: /^@+(([A-Za-z]))* ?$/,
      message: "Wrong discord",
    },
  };

  const addressRegisterValidation = {
    required: "Required",
  };

  const getHandleChange = () => {
    const fn = (event) => {
      const { value } = event.target;
      setValue(name, value, { shouldValidate: true });
    };
    return fn;
  };
  const onChangeProps = {
    onChange: getHandleChange(),
  };

  return (
    <label className="flex flex-col">
      <div className="flex">
        <span className="xl:w-16 xl:h-16 w-12 h-12 p-2.5 bg-primaryColor rounded-tl-lg rounded-bl-lg backdrop-blur-md justify-center items-center gap-2.5 inline-flex">
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
          className={`w-[168px] md:w-[200px] xl:w-[333px] xl:h-16 h-12 px-6 py-[22px] rounded-tr-lg rounded-br-lg border justify-start items-center gap-2.5 inline-flex  text-xs xl:text-base xl:leading-[19px] font-normal font-messina uppercase leading-[14px] placeholder:text-opacity-25 focus:${
            errors[name] ? " border-heroBg" : "border-white"
          } ${
            errors[name]
              ? " text-heroBg border-heroBg"
              : "border-primaryColor text-white"
          }`}
        />
      </div>
      <span className=" h-4 inline-block w-full text-right text-heroBg text-[10px] xl:text-xs font-messina uppercase leading-3 xl:leading-[14px] ">
        {errors[name]?.message}
      </span>
    </label>
  );
};

Input.propTypes = {
  svg: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  setValue: PropTypes.func,
  register: PropTypes.func,
  errors: PropTypes.array,
};
