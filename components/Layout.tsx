import logo from "../public/queenstory-logo.png";
import Image from "next/image";
import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <div className="block w-full mx-auto my-12 text-center">
        <Image quality={100} src={logo} alt="Queen Story logo" priority />
      </div>

      <main className="flex-grow text-neutral-800 ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
