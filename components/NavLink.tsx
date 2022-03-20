import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
  children: ReactNode;
  href: string;
};

const NavLink = ({ children, href }: NavLinkProps) => {
  return (
    <Link href={href}>
      <a className="mr-24 transition-colors hover:text-white">{children}</a>
    </Link>
  );
};

export default NavLink;
