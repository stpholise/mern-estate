import { useState } from "react";
import { EyeOff, Eye, Mail } from "lucide-react";
import { Link } from 'react-router'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className=" flex items-center justify-center">
      <div className="p-3  w-full  max-w-lg mx-auto  rounded-lg ">
        <h1 className="text-3xl text-center font-semibold my-8">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="relative flex flex-col gap-4 shadow-2xl px-4 py-4 lg:px-12  lg:py-14 rounded-2xl ">
            <div className="">
              <p className="text-gray-600  mb-1 text-sm font-medium">Full name</p>
              <input
                type="text"
                placeholder="username"
                name="username"
                id="username"
                className="border shadow border-gray-300 bg-gray-100 px-3 py-2 rounded-3xl outline-none w-full "
              />
            </div>
            <div className="relative">
              <p className="text-gray-600 mb-1  text-sm font-medium">Email</p>
              <input
                type="email"
                placeholder="email"
                name="email"
                id="email"
                className=" border shadow border-gray-300 bg-gray-100 px-4 py-2 outline-none rounded-3xl w-full"
              />
            </div>
            <div className="relative  ">
              <p className="text-gray-600 mb-1 text-sm font-medium">Full name</p>
              <div className="relative flex">
                <input
                  type={showPassword? "text":"password"}
                  placeholder="password"
                  name="username"
                  id="username"
                  className="border shadow border-gray-300 bg-gray-100 py-2 px-4 pr-8 rounded-3xl outline-none w-full"
                />
                <button
                  onClick={() => setShowPassword((prev) => !prev)}
                  type="button"
                  className="absolute right-6 top-0 bottom-0 w-3"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
            </div>
              <button type="submit" className="w-full h-10 mt-2 py-2 px-4 text-sm font-medium bg-blue-200 border shadow border-gray-300  pr-8 rounded-3xl outline-none ">
                 Create account
              </button>
              <p className="text-sm text-black text-center">Already have an account? <Link to={'signin'} className="text-blue-700 font-medium"> sign in</Link></p>

              <div className="">
                
              </div>
          </div>

        </form>

      </div>
    </div>
  );
};

export default SignUp;
