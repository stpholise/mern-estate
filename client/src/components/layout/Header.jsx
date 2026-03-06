import { Link } from "react-router";
import { useSelector } from "react-redux";
import { Menu , X} from "lucide-react";
import { useState} from 'react'
import clsx from "clsx"
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation()
  const { pathname }  = location
  const [openMenu, setOpenMenu ] = useState(false)
  const { currentUser } = useSelector((state) => state.user);
const handleMenu = () => {
 setOpenMenu(true)

}

  return (
    <div className="fixed    top-4  left-0 right-0  z-50  bg-transparent px-2 ">
      <div className=" flex z-50 bg-white/95 justify-between items-center max-w-6xl mx-auto p-3  rounded-4xl overflow-hidden px-8">
        <Link to="/">
          <div className="w-18 h-12  overflow-hidden object-center ">
            <img src="/abrss.png" alt="abrss max-h-12  w-20 object-cover " />
          </div>
        </Link>
        <div className="flex justify-end items-center  gap-4">
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

          <Menu  onClick={handleMenu} className="text-black size-7 sm:hidden " />
          
          <nav className={clsx("sm:flex sm:flex-row text-xl sm:text-sm flex-col fixed bg-white text-primary top-0 bottom-0 left-0 right-0 sm:static items-start  sm:items-center gap-4 lg:gap-6 font-semibold sm:font-medium  sm:rounded-3xl py-18 capitalize sm:py-1.5 px-8 duration-700 flex", openMenu ? " translate-x-0": " translate-x-full  sm:translate-0 ")}>
            {navItems.map((item) => (
              <Link
                to={item.url}
                key={item.url}
                onClick={() => setOpenMenu(false)}
                className={clsx(" sm:inline text-primary sm:py-0  py-2" , 
                  pathname === item.url ? 'border-b-4 border-b-secondary sm:border-b-0': "border-b-0"
                )}
              >
                {item.title}
              </Link>
            ))}
            <button onClick={() => setOpenMenu(false)} className="absolute top-4 right-4 text-primary sm:hidden">
              <X size={28}/>
            </button>
          </nav>
         
        </div>
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
  {
    url: "/Contact",
    title: "contact",
  },
];

export default Header;
