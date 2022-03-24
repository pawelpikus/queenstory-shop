import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Image from "next/image";
import logo from "../public/queenstory-logo.jpg";
import Link from "next/link";
import { routes } from "../routes/routes";

const Home = () => {
  return (
    <div>
      <div className="block w-full max-w-lg mx-auto my-2 bg-neutral-50">
        <Image
          src={logo}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
          alt="Queen Story logo"
          priority
        />
      </div>
      <div className="w-full mx-auto text-center ">
        <Link href={`${routes.PRODUCTS}/1`}>
          <a className="px-6 py-4 font-bold text-white transition-colors border-none rounded shadow-lg bg-neutral-800 hover:bg-gradient-to-tl from-emerald-500 to-emerald-800 ">
            Przejdź do produktów
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
