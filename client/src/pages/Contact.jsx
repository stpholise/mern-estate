import { Phone } from "lucide-react";
import FloatingChat from "../components/cells/FloatingChat";

const Contact = () => {
  return (
    <div className="min-h-screen py-12">
      <div className=" max-w-lg mx-auto pt-12 text-center">
        <h1 className=" text-4xl font-bold text-primary mb-2">
          {" "}
          Talk to our friendly team
        </h1>
        <p className=" text-xl ">
          {" "}
          We'll help you find the perfect house, exactly to your taste
        </p>
      </div>
      <div className=" max-w-5xl mx-auto grid lg:grid-cols-2 mt-12 p-4">
        <form action="">
          <div className=" max-w-lg grid gap-4 mb-12">
            <div className=" grid gap-4 lg:grid-cols-2">
              <div className="">
                <label htmlFor="fname">First name*</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="First name"
                  className="px-3 py-1 rounded-lg h-9 w-full outline-none border border-gray-200"
                />
              </div>
              <div className="">
                <label htmlFor="lname">Last name*</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="lastName"
                  className="px-3 py-1 rounded-lg h-9 w-full outline-none border border-gray-200"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="email">Email*</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="you@example.com"
                className="px-3 py-1  rounded-lg h-9 w-full outline-none border border-gray-200"
              />
            </div>
            <div className="">
              <label htmlFor="phone">Phone*</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="09032343233..."
                className="px-3 py-1 rounded-lg h-9 w-full outline-none border border-gray-200"
              />
            </div>
            <div className="">
              <label htmlFor="message">Message*</label>
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="Leave us a message..."
                className="px-3 py-1 rounded-lg  w-full outline-none border border-gray-200 min-h-24"
              >
                
              </textarea>
            </div>
            <button className=" text-sm font-medium border-gray-300 border bg-white text-blact rounded-lg py-1 px-4 h-9 w-full">
              Send message
            </button>
          </div>
        </form>

        <div className="mx-auto max-w-sm w-full p-4">
          <div className=" mb-6 sm:mb-8">
            <h3 className="font-medium tex-xl">Chat wit us</h3>
            <p className="text-gray-600">
              Speak to our friendly team via live chat.{" "}
            </p>
          </div>
          <div className=" mb-6 sm:mb-8">
            <h3 className="font-medium">Call us</h3>
            <p className="text-gray-800">Call our team Mon-Fri 8am to 5pm</p>
            <div className="flex gap-2 text-sm items-center py-2">
              <Phone size={16}/> +234 7069309340
            </div>
            <div className="flex gap-2 text-sm items-center py-2 text-gray-800">
              <Phone size={16} className="text-gray-800"/> +234 7069309340
            </div>
          </div>

          <div className="">
            <h4 className="">Trusted by 10,000+ companies</h4>
            <p>Chat to us in person at our Lagos HQ.</p>
          </div>
          <div className="">
            <FloatingChat />
          </div>
        </div>
      </div>
    </div>
  );
};



export default Contact;
