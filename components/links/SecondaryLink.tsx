import Link from "next/link";
import React, { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
}

const PrimaryLink = ({ children, href }: LinkProps) => {
  return (
    <Link href={href}>
      <a className="px-2 py-1 transition-all bg-transparent border font-narrow hover:bg-emerald-500 text-emeral-700 hover:text-white border-emerald-500 hover:border-transparent">
        {children}
      </a>
    </Link>
  );
};

export default PrimaryLink;
