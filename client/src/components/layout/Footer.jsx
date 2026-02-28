import { Link } from "react-router";
import { Mail, User, Settings, Phone, MapPin } from "lucide-react";

const iconMap = {
  MapPin: MapPin,
  user: User,
  settings: Settings,
  phone: Phone,
  mail: Mail,
};

const Footer = () => {
  return (
    <div className="min-h-100  px-2 sm:bg-primary py-2 w-full">
      <div className="max-w-6xl  mx-auto rounded-2xl px-4 py-8 min-h-99 bg-primary h-full">
        <div className=" ">
          <div className="py-8 flex flex-col md:flex-row w-full justify-between gap-6">
            <div className="flex-col flex gap-3 sm:gap-4 text-white">
              <Link to="/">
                <div className="w-18 h-12  rounded-md overflow-hidden object-center ">
                  <img
                    src="/abrss.png"
                    alt="abrss max-h-12  w-20 object-cover "
                  />
                </div>
              </Link>
              <p className="text-sm text-white max-w-60">
                Abrss is your trusted partner in real estate, dedicated to
                helping you find the perfect property with ease and confidence.
                Whether you're buying, selling, or renting, we provide premium
                listings, expert guidance, and a seamless experience tailored to
                your needs.
              </p>
            </div>
            <div className="flex-col flex gap-3 sm:gap-4 text-white">
              <h4 className="text-lg font-semibold mb-2">Sitemap</h4>
              {navItems.map((item, index) => (
                <Link key={index} to={item.url}>
                  <button className="text-sm">{item.title} </button>
                </Link>
              ))}
            </div>
            <div className="flex-col flex gap-3 sm:gap-4 text-white">
              <h4 className="text-lg font-semibold mb-2">Our Services</h4>
              {services.map((item, index) => (
                <p key={index} className="text-sm">
                  {item}{" "}
                </p>
              ))}
            </div>
            <div className="flex-col flex gap-3 sm:gap-4 text-white">
              <h4 className="font-semibold text-lg mb-2 ">Contact us</h4>
              {contact.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    {Icon && <Icon size={18} />}
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-t-gray-100 border-t py-8">
            <p className="text-xs text-gray-200 text-center">© 2026 Abrss. All rights reserved.</p>
          </div>
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

const contact = [
  {
    icon: "MapPin",
    text: "Abuja, Nigeria",
  },
  {
    icon: "phone",
    text: "+234 800 000 0000",
  },
  {
    icon: "mail",
    text: "info@abrss.com",
  },
];

const services = [
  "Property Buying",
  "Property Selling",
  "Property Rentals",
  "Real Estate Consulting",
  "Investment Advisory",
];

export default Footer;
