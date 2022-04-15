import Link from "next/link";
import React, { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
}

const PrimaryLink = ({ children, href }: LinkProps) => {
  return (
    <Link href={href}>
      <a className="w-full py-4 font-sans text-xl text-center text-white transition-all border-none bg-neutral-800 hover:bg-emerald-500 text-emeral-700 hover:text-white border-emerald-500 hover:border-transparent">
        {children}
      </a>
    </Link>
  );
};

export default PrimaryLink;
