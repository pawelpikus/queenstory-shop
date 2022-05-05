import React from "react";
import { Path } from "react-hook-form";
import { CheckoutFormData } from "../../pages/checkout";
import { ReviewFormData } from "./review/ProductReviewForm";

interface TextAreaProps {
  labelText: string;
  labelFor: Path<CheckoutFormData> | Path<ReviewFormData>;
  placeholder: string;
}

const TextArea = React.forwardRef(function MyTextArea(
  { labelText, labelFor, placeholder, ...rest }: TextAreaProps,
  ref: any
) {
  return (
    <>
      <label htmlFor={labelFor} className="block mb-1 text-sm text-neutral-600">
        {labelText}
      </label>
      <textarea
        className="w-full px-4 py-3 text-xs border-none bg-neutral-100 lg:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        cols={20}
        rows={4}
        ref={ref}
        {...rest}
        placeholder={placeholder}
      ></textarea>
    </>
  );
});

export default TextArea;
