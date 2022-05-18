import { ReactNode } from "react";

const SecondaryBg = () => {
  return (
    <div
      className="w-full text-white flex flex-col items-center justify-center mx-auto bg-center bg-cover h-[300px]"
      style={{ backgroundImage: "url(/bg-main.jpg)" }}
    >
      <h2 className="mb-8 text-5xl font-extrabold tracking-wider uppercase sm:text-7xl">
        {" "}
        <span className="hidden mr-24 sm:inline-block opacity-75 w-24 h-[1px] bg-neutral-100"></span>{" "}
        SKLEP{" "}
        <span className="hidden ml-24 sm:inline-block opacity-75 w-24 h-[1px] bg-neutral-100"></span>
      </h2>

      <p className="text-2xl sm:text-4xl font-narrow ">
        Rękodzieło. Ozdoby. Aranżacje.
      </p>
    </div>
  );
};

export default SecondaryBg;
