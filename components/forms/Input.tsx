import React from "react";
import { Path } from "react-hook-form";
import { CheckoutFormData } from "../../pages/checkout";
import { ReviewFormData } from "./review/ProductReviewForm";

type InputProps = {
  labelText: string;
  labelFor: Path<CheckoutFormData> | Path<ReviewFormData>;
  type: string;
};

const Input = React.forwardRef(function myInput(
  { labelText, labelFor, type, ...rest }: InputProps,
  ref: any
) {
  return (
    <>
      <label htmlFor={labelFor} className="block mb-1 text-sm text-neutral-600">
        {labelText}
        <input
          type={type}
          {...rest}
          ref={ref}
          className="w-full px-2 py-3 text-sm border-none bg-neutral-100 lg:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </label>
    </>
  );
});

export default Input;
