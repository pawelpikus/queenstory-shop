import Link from "next/link";
import React from "react";
import { paths } from "../paths/paths";

const Header = () => {
  return (
    <header className="py-8 bg-slate-700">
      <nav className="flex w-4/5 gap-6 mx-auto text-lg font-bold tracking-wider text-gray-300 uppercase ">
        <Link href={paths.HOME}>
          <a className="hover:text-white">Home</a>
        </Link>
        <Link href={paths.PRODUCTS}>
          <a className="hover:text-white">Products</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
