import { useState } from "react";
import HamburgerBtn from "./HamburgerBtn";
import NavLinkMobile from "./NavLinkMobile";
import { routes } from "../routes/routes";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sm:hidden w-11/12 mx-auto text-sm tracking-[5px] text-white uppercase font-narrow">
      <HamburgerBtn open={open} setOpen={setOpen} />
      <div
        className={`${
          open ? `translate-x-0` : `-translate-x-full`
        } absolute transition-transform left-0 z-10 flex flex-col items-start justify-start w-full gap-24 h-screen py-24 px-6 top-22 bg-neutral-800 text-white`}
      >
        <NavLinkMobile href={routes.HOME} setOpen={setOpen}>
          Home
        </NavLinkMobile>
        <NavLinkMobile href={`${routes.PRODUCTS}/1`} setOpen={setOpen}>
          Products (SSG)
        </NavLinkMobile>
        <NavLinkMobile href={routes.PRODUCTS_CSR} setOpen={setOpen}>
          Products (CSR)
        </NavLinkMobile>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
