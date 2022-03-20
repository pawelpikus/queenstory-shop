import Link from "next/link";
import { useState } from "react";
import { routes } from "../routes/routes";
import Hamburger from "./Hamburger";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="py-4 bg-neutral-800">
      {/* mobile menu  */}
      <nav className="sm:hidden w-11/12 mx-auto text-sm tracking-[5px] text-white uppercase font-narrow">
        <Hamburger open={open} setOpen={setOpen} />
        <div
          className={`${
            open ? `translate-x-0` : `-translate-x-full`
          } absolute transition-transform left-0 z-10 flex flex-col items-start justify-start w-full gap-36 py-24 px-6 top-28 bg-neutral-800 text-white`}
        >
          <Link href={routes.HOME}>
            <a
              onClick={() => setOpen(false)}
              className="text-3xl transition-colors hover:text-neutral-700"
            >
              Home
            </a>
          </Link>
          <Link href={`${routes.PRODUCTS}/1`}>
            <a
              onClick={() => setOpen(false)}
              className="text-3xl transition-colors hover:text-neutral-700"
            >
              Products (SSG)
            </a>
          </Link>
          <Link href={routes.PRODUCTS_CSR}>
            <a
              onClick={() => setOpen(false)}
              className="text-3xl transition-colors hover:text-neutral-700"
            >
              Products (CSR)
            </a>
          </Link>
        </div>
        {/* end of mobile menu */}
      </nav>
      <nav className="hidden w-11/12 sm:flex mx-auto text-sm tracking-[5px] text-white uppercase font-narrow ">
        <Link href={routes.HOME}>
          <a className="mr-24 transition-colors hover:text-white">Home</a>
        </Link>
        <Link href={`${routes.PRODUCTS}/${1}`}>
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
