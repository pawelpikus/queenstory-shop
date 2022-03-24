import Image from "next/image";
import logo from "../public/queenstory-logo.jpg";

import Link from "next/link";
import { routes } from "../routes/routes";
import SecondaryBg from "../components/SecondaryBg";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <SecondaryBg />
      <div className="transition -translate-y-[300px] hover:-translate-y-[310px] w-fit">
        <Link href={`${routes.PRODUCTS}/1`}>
          <a className="px-5 py-5 font-bold text-white border-none rounded shadow-2xl lg:text-xl lg:px-10 lg:py-5 bg-neutral-800">
            Przejdź do produktów
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
