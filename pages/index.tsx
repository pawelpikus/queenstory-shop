import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <Header />
      <main className="flex-grow ">
        <div className="w-11/12 py-8 mx-auto max-w-7xl text-slate-800">
          Main content
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
