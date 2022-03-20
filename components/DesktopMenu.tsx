import React from "react";
import { routes } from "../routes/routes";
import NavLink from "./NavLink";

const DesktopMenu = () => {
  return (
    <nav className="hidden w-11/12 sm:flex mx-auto text-sm tracking-[5px] text-white uppercase font-narrow ">
      <NavLink href={routes.HOME}>Home</NavLink>
      <NavLink href={`${routes.PRODUCTS}/1`}>Products (SSG)</NavLink>
      <NavLink href={routes.PRODUCTS_CSR}>Products (CSR)</NavLink>
    </nav>
  );
};

export default DesktopMenu;
