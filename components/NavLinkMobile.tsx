import Link from "next/link";
import { Dispatch, ReactNode, SetStateAction } from "react";

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
        className="text-xl transition-colors text-neutral-200 hover:text-white"
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLinkMobile;
