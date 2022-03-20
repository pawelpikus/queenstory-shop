import Link from "next/link";
import React, { Dispatch, ReactNode, SetStateAction } from "react";

type NavLinkMobileProps = {
  children: ReactNode;
  href: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const NavLinkMobile = ({ children, href, setOpen }: NavLinkMobileProps) => {
  return (
    <Link href={href}>
      <a
        onClick={() => setOpen(false)}
        className="text-3xl transition-colors hover:text-neutral-700"
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLinkMobile;
