 
import { Link } from "react-router"; 
import { useSelector } from "react-redux";

const Header = () => { 
  const { currentUser } = useSelector((state) => state.user);

 

  return (
     <div className=" fixed    top-4  left-0 right-0 flex z-100 bg-white/95 justify-between items-center max-w-6xl mx-auto p-3  rounded-4xl overflow-hidden px-8">
      <Link to="/">
        <div className="w-18 h-12  overflow-hidden object-center ">
          <img src="/abrss.png" alt="abrss max-h-12  w-20 object-cover " />
        </div>
      </Link> 
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
    url: "/Contact",
    title: "contact",
  },
];

export default Header;
