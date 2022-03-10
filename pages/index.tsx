import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Image from "next/image";
import logo from "../public/queenstory-logo.jpg";
import Link from "next/link";
import { routes } from "../routes/routes";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <main className="flex-grow ">
        <div className="w-11/12 mx-auto mt-8 md:mt-32 lg:mt-34 max-w-7xl text-neutral-800">
          <div className="flex items-center w-full gap-8">
            <div className="flex flex-col items-start justify-center w-full gap-6">
              <h1 className="mb-4 text-4xl font-extrabold md:text-6xl lg:text-7xl">
                Discover the beauty within.
              </h1>
              <Link href={routes.PRODUCTS}>
                <a className="px-12 py-4 font-bold text-white border-none rounded shadow-lg transition-color bg-neutral-800 hover:bg-gradient-to-br from-emerald-500 to-emerald-800 ">
                  Explore
                </a>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-full ml-8">
              <div className="rounded-lg shadow-lg bg-neutral-800 w-fit">
                <Image
                  src={logo}
                  alt="Queen Story logo"
                  className="max-w-full rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
