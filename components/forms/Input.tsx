import React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { FormData } from "../../pages/checkout";

type InputProps = {
  labelText: string;
  labelFor: Path<FormData>;
  type: string;
  register: UseFormRegister<FormData>;
};

const Input = ({ labelText, labelFor, type, register }: InputProps) => {
  return (
    <>
      <label htmlFor={labelFor} className="block mb-1 text-sm text-neutral-600">
        {labelText}
      </label>
      <input
        {...register(labelFor)}
        name={labelFor}
        type={type}
        className="w-full px-2 py-3 text-sm border-none bg-neutral-100 lg:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </>
  );
};

export default Input;
