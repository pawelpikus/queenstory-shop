import { Footer, Header } from "../components";

const Home = () => {
  return (
    <div className=" flex flex-col min-h-screen bg-slate-200">
      <Header />
      <main className=" flex-grow">
        <div className="w-4/5 mx-auto text-slate-800 py-8">Main content</div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
