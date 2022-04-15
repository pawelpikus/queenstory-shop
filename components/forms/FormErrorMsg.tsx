import React from "react";

type Props = { text: string };

const FormErrorMsg = ({ text }: Props) => {
  return (
    <span role="alert" className="text-sm text-red-500 font-narrow">
      {text}
    </span>
  );
};

export default FormErrorMsg;
