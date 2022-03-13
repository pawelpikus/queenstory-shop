import Link from "next/link";
import React from "react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-end py-20 font-sans bg-neutral-800">
      <div className="flex flex-col items-center w-4/5 mx-auto text-center">
        <p className="mb-4 text-emerald-500">
          <strong>queenstory.pl</strong> &copy; Copyright 2022. All rights
          reserved.
        </p>
        <div className="flex gap-4 mb-4 text-center">
          <Link href="#">
            <a
              className=" text-emerald-500 hover:text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiYoutube />
            </a>
          </Link>
          <Link href="#">
            <a
              className=" text-emerald-500 hover:text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram />
            </a>
          </Link>
          <Link href="#">
            <a
              className="text-emerald-500 hover:text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook />
            </a>
          </Link>
        </div>
        <p className="text-white ">
          Made with{" "}
          <span className="text-lg font-bold text-emerald-500">&hearts;</span>{" "}
          by&nbsp;
          <Link href="https://github.com/pawelpikus">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500"
            >
              Paweł Pikus
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
};
