import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Image from "next/image";
import logo from "../public/queenstory-logo.jpg";
import Link from "next/link";
import { routes } from "../routes/routes";

const Home = () => {
  return (
    <div className="flex items-center w-full gap-8 mt-8">
      <div className="flex flex-col items-start justify-center w-full gap-6">
        <h1 className="mb-4 text-4xl font-extrabold md:text-6xl lg:text-7xl">
          Discover the beauty within.
        </h1>
        <Link href={`${routes.PRODUCTS}/1`}>
          <a className="px-12 py-4 font-bold text-white transition-colors border-none rounded shadow-lg bg-neutral-800 hover:bg-gradient-to-tl from-emerald-500 to-emerald-800 ">
            Explore
          </a>
        </Link>
      </div>
      <div className="block w-full my-6 rounded-lg bg-neutral-50">
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
    </div>
  );
};

export default Home;
