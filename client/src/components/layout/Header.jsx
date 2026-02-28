// import { Search } from "lucide-react";
import { Link } from "react-router";
// import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    // <div className="sticky top-5 left-0 right-0 z-50 bg-white/95 shadow-md ">
      <div className=" fixed    top-4  left-0 right-0 flex z-100 bg-white/95 justify-between items-center max-w-6xl mx-auto p-3  rounded-4xl overflow-hidden px-8">
        <Link to="/">
          <div className="w-18 h-12  overflow-hidden object-center ">
          <img src="/abrss.png" alt="abrss max-h-12  w-20 object-cover " />
          </div>
        </Link>
        {/* <form
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
        </form> */}
        <nav className="flex items-center gap-4 lg:gap-6 font-medium  rounded-3xl py-1.5 px-8">
          {navItems.map((item) => (
            <Link
              to={item.url}
              key={item.url}
              className="hidden sm:inline text-slate-700 "
            >
              {item.title}
            </Link>
          ))}
          <Link to={currentUser ? "/profile" : "/signin"}>
            {currentUser ? (
              <img
                className="rounded-full w-6 h-6 object-cover"
                src={currentUser?.avatar || "/avatar.png"}
                alt="profile"
              />
            ) : (
              <button className="bg-slate-200 text-slate-800 ml-8 rounded-lg shadow-sm px-3 py-1">
                Sign In
              </button>
            )}
          </Link>
        </nav>
      </div>
  //  </div>
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
  {
    url: "/about",
    title: "contact",
  },
];

export default Header;
