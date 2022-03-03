import Link from "next/link";
import React from "react";
import { paths } from "../routes/routes";

export const Header = () => {
  return (
    <header className="py-8 bg-slate-700">
      <nav className="flex w-11/12 gap-6 mx-auto font-bold tracking-wider text-gray-300 uppercase max-w-7xl text-md ">
        <Link href={paths.HOME}>
          <a className="transition-colors hover:text-white">Home</a>
        </Link>
        <Link href={paths.PRODUCTS}>
          <a className="transition-colors hover:text-white">Products (SSG)</a>
        </Link>
        <Link href={paths.PRODUCTSCSR}>
          <a className="transition-colors hover:text-white">Products (CSR)</a>
        </Link>
      </nav>
    </header>
  );
};
