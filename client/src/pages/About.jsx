import { Instagram, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="py-16 flex flex-col gap-12 ">
      <div className="max-w-6xl px-4 py-8 lg:mt-8 mx-auto">
        <h1 className="text-sm uppercase text-gray-400"> Who we are</h1>
        <div className=" my-4 flex gap-4 md:gap-8 flex-col md:flex-row">
          <div className="text-2xl w-full font-medium text-gray-700">
            <p className="">
              At Abrss, we are redefining the real estate experience by
              combining expertise, innovation, and a deep understanding of our
              clients’ needs. We believe that finding the right property is more
              than a transaction—it’s a life decision, and we are here to guide
              you every step of the way.
            </p>
            <p className="text-xl text-gray-600 mt-4">
              With a strong commitment to quality and trust, Abrss connects
              people to homes, investments, and opportunities that truly match
              their goals and aspirations.
            </p>
          </div>
          <div className="max-w-sm">
            <div className="text-base border border-gray-300 rounded-lg p-4 ">
              <h3 className="text-lg font-medium text-primary mt-4 mb-2">
                Our Mission
              </h3>
              <p className=" text-sm">
                To simplify real estate by providing transparent, reliable, and
                personalized services that empower our clients to make confident
                property decisions.
              </p>
            </div>
            <div className="text-base border mt-4 border-gray-300 rounded-lg p-4 ">
              <h3 className="text-lg font-medium text-primary mt-4 mb-2">
                Our Vision
              </h3>
              <p className="  text-sm">
                To become a leading real estate brand known for excellence,
                innovation, and long-lasting client relationships across Nigeria
                and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl  justify-between   flex lg:gap-10 items-center">
        <div className="max-w-sm flex flex-col gap-2">
          <h3 className="text-3xl text-primary mb-4 font-semibold">
            What We Do
          </h3>
          <p className="">
            At Abrss, we offer a wide range of real estate services designed to
            meet diverse needs:
          </p>
          <ul className="px-8 py-3">
            {services.map((service, i) => (
              <li className="list-disc py-1" key={i}>
                {" "}
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <img
            src="/img4.jpeg"
            alt="demo"
            className="w-120 h-80 rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="mx-auto max-w-5xl  justify-between   flex lg:gap-10 items-center">
        <div className="">
          <img
            src="/img4.jpeg"
            alt="demo"
            className="w-120 h-80 rounded-lg object-cover"
          />
        </div>
        <div className="max-w-sm flex flex-col gap-2">
          <h3 className="text-3xl text-primary mb-4 font-semibold">
            Our Values
          </h3>
          <p className="">
            We are driven by principles that define how we work and serve our
            clients:
          </p>
          <ul className="py-3">
            {values.map((value, i) => (
              <li className=" py-1" key={i}>
                <span className=" font-medium">{value.title} :</span>
                {value.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-5xl  justify-between   flex lg:gap-10 items-center">
        <div className="max-w-sm flex flex-col gap-2">
          <h3 className="text-3xl text-primary mb-4 font-semibold">
            Why Abrss Stands Out
          </h3>
          <p className="">
            Choosing Abrss means choosing a partner who truly understands real
            estate:
          </p>
          <ul className="px-8 py-3">
            {strength.map((service, i) => (
              <li className="list-disc py-1" key={i}>
                {" "}
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <img
            src="/img4.jpeg"
            alt="demo"
            className="w-120 h-80 rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="px-4">
        {" "}
        <div className="max-w-6xl mx-auto p-4 sm:p-8 lg:p-12 rounded-lg border-gray-300 border-2 flex justify-evenly">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="border-r-gray-300 border-r px-4 sm:px-8 lg:px-12 last:border-r-0"
            >
              <p className="text-3xl font-bold ">{stat.value}</p>
              <p className="font-bold mt-2 text-primary">{stat.label} </p>
            </div>
          ))}{" "}
        </div>
      </div>
      <div className="max-w-6xl w-full mx-auto p-3 sm:p-8 grid gap-4 xs:grid-cols-2 md:grid-cols-3  ">
        {team.map((member, i) => (
          <div className="shadow border border-gray-300 rounded-xl max-w-sm" key={i}>
            <div className="object-contain">
              <img
                src={member.image}
                alt=""
                className=" w-full object-cover  rounded-t-xl "
              />
            </div>
            <div className=" px-4 py-8 flex justify-between gap-4">
              <div className="">
                <h4 className=" font-semibold text-lg md:text-2xl mb-1.5">{member.name} </h4>
                <p className=" font-medium text-gray-600"> {member.role}</p>
              </div>
              <div className=" flex gap-4 items-center justify-center">
                <Linkedin size={24}/>
                <Mail  size={24}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const services = [
  " Property Buying & Selling",
  "Rental & Leasing Services",
  "Real Estate Investment Advisory",
  "Property Management",
  "Market Insights & Consultation",
];
const strength = [
  " Deep market knowledge and experience",

  "Carefully curated premium property listings",

  "Personalized approach tailored to each client",

  "Seamless and stress-free transaction process",

  "Dedicated support from start to finish",
];

const stats = [
  {
    value: "500+",
    label: "Properties Listed",
  },
  {
    value: "300+",
    label: "Happy Clients",
  },
  {
    value: "100+",
    label: "Successful Transactions",
  },
  {
    value: "5+",
    label: "Years of Experience",
  },
];

const values = [
  {
    title: "Integrity",
    text: "We operate with honesty and transparency",
  },
  {
    title: "Excellence",
    text: "We deliver high-quality service every time",
  },
  {
    title: "Client First",
    text: "Your needs are always our priority",
  },
  {
    title: "Innovation",
    text: "We embrace modern solutions and technology",
  },
  {
    title: "Trust",
    text: "We build lasting relationships through reliability",
  },
];

const team = [
  // {
  //   name: "Michael Adeyemi",
  //   role: "Founder & CEO",
  //   image: "https://randomuser.me/api/portraits/men/11.jpg",
  //   bio: "Leads Abrss with a vision to simplify real estate and create lasting value for clients.",
  //   socials: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "michael@abrss.com",
  //   },
  // },
  {
    name: "Amina Bello",
    role: "Head of Sales",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    bio: "Specializes in client relations and ensures every customer finds the perfect property.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "amina@abrss.com",
    },
  },
  {
    name: "David Okafor",
    role: "Property Consultant",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    bio: "Provides expert advice on property investments and market trends.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "david@abrss.com",
    },
  },
  {
    name: "Grace Eze",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Drives brand growth and ensures Abrss reaches the right audience.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "grace@abrss.com",
    },
  },
];

export default About;
