import logo from "../public/queenstory-logo.jpg";
import Image from "next/image";
import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <div className="block w-full max-w-2xl mx-auto my-12 bg-neutral-50">
        <Image quality={100} src={logo} alt="Queen Story logo" priority />
      </div>

      <main className="flex-grow text-neutral-800 ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
