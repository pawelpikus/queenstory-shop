import Image from "next/image";
import logo from "../public/queenstory-logo.jpg";

import Link from "next/link";
import { routes } from "../routes/routes";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="block w-full max-w-lg mx-auto mt-12 mb-20 bg-neutral-50">
        <Image quality={100} src={logo} alt="Queen Story logo" priority />
      </div>
      <div
        className="relative flex-grow w-full mx-auto text-center bg-center bg-cover h-[450px]"
        style={{ backgroundImage: "url(/bg-main.jpg)" }}
      >
        <div className="transition hover:-translate-y-2">
          <Link href={`${routes.PRODUCTS}/1`}>
            <a className="px-5 py-5 font-bold text-white border-none rounded shadow-2xl lg:text-xl lg:px-10 lg:py-5 bg-neutral-800 hover:bg-emerald-500">
              Przejdź do produktów
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
