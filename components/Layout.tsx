import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <main className="flex-grow text-neutral-800 ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
