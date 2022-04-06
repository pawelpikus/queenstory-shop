import React from "react";

type InputProps = {
  labelText: string;
  labelFor: string;
  type: string;
};

const Input = ({ labelText, labelFor, type }: InputProps) => {
  return (
    <>
      <label htmlFor={labelFor} className="block mb-1 text-sm text-neutral-600">
        {labelText}
      </label>
      <input
        name={labelFor}
        type={type}
        className="w-full px-2 py-3 text-sm border-none bg-neutral-100 lg:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </>
  );
};

export default Input;
