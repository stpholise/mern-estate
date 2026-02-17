import { Search } from "lucide-react";
import { Link,  } from "react-router";
import {  useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sticky top-0 left-0 right-0 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Abross</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 py-2 px-4 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <Search className="text-slate-600" />
          </button>
        </form>
        <nav className="flex items-center gap-4 lg:gap-6 font-medium bg-slate-200 rounded-3xl py-1.5 px-8">
          {navItems.map((item) => (
            <Link
              to={item.url}
              key={item.url}
              className="hidden sm:inline text-slate-700 "
            >
              {item.title}
            </Link>
          ))}
          <Link to={"/signin"} className=" text-slate-500 bg-white rounded-lg shadow-sm px-3 py-1">
            Sign In
          </Link>
        </nav>
      </div>
    </div>
  );
};

const navItems = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "about",
  },
];

export default Header;
