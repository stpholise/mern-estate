import { Search } from "lucide-react";
import Header from "../components/layout/Header";

const Home = () => {
  return (
    <div className="   min-h-screen  ">
      <div
        className="  relative h-screen w-full   "
        id="clip-bottom"
      >
        <img src="/8.jpeg" alt="hero" className="-z-1 h-full w-full object-cover" />
        <div className="absolute  bg-black/10  top-0 w-full h-full z-1 ">
          <div className="relative  max-w-6xl mx-auto  flex gap-4 flex-col items-center justify-center h-full w-full">
            <h1 className="text-4xl font-bold bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
              Find Your Perfect Home
            </h1>
            <p className=" max-w-xs text-center text-white">
              {" "}
              we are glad to have you around feel free to browse our website
            </p>
            <div className="  bg-white w-80 p-0.5 gap-1 rounded-lg flex">
              <input
                type="text"
                className="w-full p-2 outline-none  rounded-lg"
                placeholder="Search"
              />
              <button
                onClick={() => console.log("testing")}
                className="flex items-center gap-2 font-medium bg-primary rounded-lg py-1 px-3 text-gray-400"
              >
                {" "}
                <Search className="size-4 text-gray-400" />{" "}
                <span className="text-gray-50 text-lg">search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
     

      <div className=""></div>
    </div>
  );
};

export default Home;
