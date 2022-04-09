import React, { ReactNode } from "react";

const PrimaryButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="w-full py-4 font-sans text-xl text-white transition-all border-none bg-neutral-800 hover:bg-emerald-500 text-emeral-700 hover:text-white border-emerald-500 hover:border-transparent">
      {children}
    </button>
  );
};

export default PrimaryButton;
