import { Search } from "lucide-react";
// import Header from "../components/layout/Header";
import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      refs.current.forEach((el, index) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight / 2) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="   flex flex-col gap-8 xl:gap-23 ">
      <div className="  relative h-screen w-full   " id="clip-bottom">
        <img
          src="/8.jpeg"
          alt="hero"
          className="-z-1 h-full w-full object-cover"
        />
        <div className="absolute  bg-black/10  top-0 w-full h-full z-1 ">
          <div className="relative  max-w-6xl mx-auto  flex gap-4 flex-col items-center justify-center h-full w-full">
            <h1 className="text-4xl text-center font-bold bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
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

      <div className="max-w-6xl mx-auto my-9 rounded-xl bg-accent px-4 py-4 sm:px-8 sm:py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-gray-800 uppercase text-sm font-medium">
            services
          </h2>
          <h3 className="text-3xl font-medium text-primary">What We Offer</h3>
          <p className="max-w-lg">
            {" "}
            Abrss connects you with the best properties on the market. Buy,
            rent, or sell with confidence and ease—your dream space is just a
            click awa
          </p>
        </div>
        <div className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6 mt-8">
          {offers.map((item, index) => (
            <div
              className="text-sm rounded-lg p-4 shadow
            bg-white flex-col flex gap-3"
              key={index}
            >
              <h3 className="text-base font-medium text-center text-primary">
                {item.title}
              </h3>
              <p className="">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="   py-8 ">
      <  h3 className="text-2xl font-semibold   text-primary  text-center mb-8"> Why Work With us</h3>
        <div className="grid grid-cols-2  gap-4 justify-center max-w-4xl mx-auto ">
          <div className="sticky top-40 xl:h-80  rounded-xl  overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}{" "}
          </div>

          <div className="flex flex-col gap-2   ">
            {sections.map((section, index) => (
              <div
                key={index}
                ref={(el) => (refs.current[index] = el)}
                className={`px-4 py-4 h-80 flex flex-col justify-center  gap-2 items-center rounded-r-xl  rounded-lg border-gray-200  border lg:border-0 `}
              >
                <h2 className="text-lg font-medium">{section.title}</h2>
                <p className="text-center">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

const sections = [
  {
    icon: "",
    title: "Trusted Expertise",
    text: "Years of experience in real estate to guide you confidently.",
  },
  {
    icon: "",
    title: "Personalized Service",
    text: "Every client gets tailored solutions—no one-size-fits-all approach.",
  },
  {
    icon: "",
    title: "Wide Property Selection",
    text: "Access premium residential, commercial, and rental listings all in one place",
  },
  {
    icon: "",
    title: "Smooth & Transparent Transactions",
    text: "We value honesty and clarity, ensuring stress-free deals.",
  },
  {
    icon: "",
    title: "Client-Focused Approach",
    text: "Your goals are our priority—we’re committed to finding your perfect property.",
  },
];

const images = ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg", "/img4.jpeg" ,  "/img5.jpeg"];

const offers = [
  {
    icon: "",
    title: "Property Listing",
    text: "Browse a wide range of residential, commercial, and rental properties tailored to your needs.",
  },
  {
    title: "Expert Guidance",
    text: "Our experienced team helps you make smart decisions, whether buying, selling, or renting.",
    icon: "",
  },
  {
    title: "Personalized Recommendations",
    text: "Find homes that match your lifestyle and preferences with ease.",
    icon: "",
  },
  {
    title: "Transparent Transactions",
    text: "We ensure smooth, secure, and trustworthy property deals every step of the way.",
    icon: "",
  },
  {
    title: "Market Insights",
    text: "Stay informed with the latest property trends, prices, and investment opportunities.",
    icon: "",
  },
  {
    title: "Market Insights",
    text: "Stay informed with the latest property trends, prices, and investment opportunities.",
    icon: "",
  },
];

export default Home;
