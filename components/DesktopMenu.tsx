import React from "react";
import { routes } from "../routes/routes";
import CartBar from "./cart/CartBar";
import NavLink from "./NavLink";

const DesktopMenu = () => {
  return (
    <nav className="hidden w-11/12 md:flex mx-auto max-w-6xl text-sm items-center tracking-[5px] text-white uppercase font-narrow justify-between ">
      <NavLink href={routes.HOME}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </NavLink>
      <NavLink href={`${routes.PRODUCTS}/1`}>Produkty (SSG)</NavLink>
      <NavLink href={routes.PRODUCTS_CSR}>Produkty (CSR)</NavLink>
      <NavLink href={routes.PRODUCTS_GQL}>Produkty (GraphCMS)</NavLink>
      <CartBar />
    </nav>
  );
};

export default DesktopMenu;
