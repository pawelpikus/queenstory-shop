import React, { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  disabled?: boolean;
}

const PrimaryButton = ({ children, disabled }: SecondaryButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="w-full py-4 font-sans text-xl text-white transition-all border-none disabled:opacity-75 bg-neutral-800 hover:bg-emerald-500 text-emeral-700 hover:text-white border-emerald-500 hover:border-transparent"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
