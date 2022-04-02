import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
  children: ReactNode;
  href: string;
};

const NavLink = ({ children, href }: NavLinkProps) => {
  return (
    <Link scroll={false} href={href}>
      <a className="transition-colors text-neutral-200 hover:text-white">
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
