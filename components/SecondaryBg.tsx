import { ReactNode } from "react";

const SecondaryBg = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center mx-auto bg-center bg-cover h-[300px]"
      style={{ backgroundImage: "url(/bg-main.jpg)" }}
    >
      <h2 className="p-4 text-4xl text-white font-narrow">{children}</h2>
    </div>
  );
};

export default SecondaryBg;
