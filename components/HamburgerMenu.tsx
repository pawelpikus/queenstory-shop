import { useState } from "react";
import HamburgerBtn from "./HamburgerBtn";
import NavLinkMobile from "./NavLinkMobile";
import { routes } from "../routes/routes";
import CartBar from "./cart/CartBar";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="md:hidden w-11/12 mx-auto text-sm tracking-[5px] text-white uppercase flex justify-between font-narrow">
      <HamburgerBtn open={open} setOpen={setOpen} />
      <div
        className={`${
          open ? `translate-x-0` : `-translate-x-full`
        } absolute transition-transform left-0 z-10 flex flex-col items-start justify-start w-full gap-24 h-screen py-24 px-6 top-20 bg-neutral-800 text-white`}
      >
        <NavLinkMobile href={routes.HOME} setOpen={setOpen}>
          Główna
        </NavLinkMobile>
        <NavLinkMobile href={`${routes.PRODUCTS}/1`} setOpen={setOpen}>
          Produkty (SSG)
        </NavLinkMobile>
        <NavLinkMobile href={routes.PRODUCTS_CSR} setOpen={setOpen}>
          Produkty (CSR)
        </NavLinkMobile>
        <NavLinkMobile href={routes.PRODUCTS_GQL} setOpen={setOpen}>
          Produkty (GraphCMS)
        </NavLinkMobile>
      </div>
      <CartBar />
    </nav>
  );
};

export default HamburgerMenu;
