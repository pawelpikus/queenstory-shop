import Link from "next/link";
import React from "react";
import { routes } from "../routes/routes";

export const Header = () => {
  return (
    <header className="py-4 bg-neutral-800">
      <nav className="flex w-11/12 mx-auto text-sm tracking-[5px] text-white uppercase font-narrow max-w-7xl ">
        <Link href={routes.HOME}>
          <a className="mr-24 transition-colors hover:text-white">Home</a>
        </Link>
        <Link href={routes.PRODUCTS}>
          <a className="mr-24 transition-colors hover:text-white">
            Products (SSG)
          </a>
        </Link>
        <Link href={routes.PRODUCTS_CSR}>
          <a className="mr-24 transition-colors hover:text-white">
            Products (CSR)
          </a>
        </Link>
      </nav>
    </header>
  );
};
