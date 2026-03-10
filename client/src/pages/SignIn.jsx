import { useState } from "react";
import { EyeOff, Eye, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { signInFailure, signInSuccess } from "../store/UserSlice";
import { useDispatch } from "react-redux";
import Oauth from "../components/auth/Oauth";
import Header from "../components/layout/Header";
import SigninCell from "../components/layout/SigninCell";

const SignIn = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (Object.values(formData).some((value) => !value.trim())) {
        toast.error("All fields are required");
        return;
      }
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        dispatch(signInFailure(data.message));
        throw new Error(data.message || "Signin failed");
      }

      toast.success("Success signing in");
      setFormData({ password: "", email: "" });
      navigate("/");
      dispatch(signInSuccess(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      dispatch(signInFailure(error.message));
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className=" sm:p-8  ">
      <div className=" h-screen  relative  z-1 bg-white  w-full  md:grid-cols-2 flex   sm:grid items-center justify-center sm:justify-center md:justify-between px-4 py-4 md:p-0    max-w-lg sm:max-w-7xl mx-auto  rounded-lg ">
       

          <button
            onClick={() => navigate("/")}
            className="w-18 h-12 animate-none  overflow-hidden object-center absolute  top-6  left-6"
          >
            <img src="/abrss.png" alt="abrss  " className="animate-none" />
          </button>
          <SigninCell  />
 

        <form onSubmit={handleSubmit}>
          <div className="mt-8  sm:w-99 lg:w-110    flex flex-col gap-4    px-4 py-4 pt-8 lg:px-12  lg:py-14 rounded-2xl mx-auto ">
            <h1 className="text-2xl text-center font-semibold mb-4 min-w-75">Sign In</h1>

            <div className="relative">
              <p className="text-gray-600 mb-1  text-sm font-medium">Email</p>
              <input
                type="email"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                className=" border shadow border-gray-300 bg-gray-100 px-4 py-2 outline-none rounded-xl w-full"
              />
            </div>
            <div className="relative  ">
              <p className="text-gray-600 mb-1 text-sm font-medium">
                Full name
              </p>
              <div className="relative flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  className="border shadow border-gray-300 bg-gray-100 py-2 px-4 pr-8 rounded-2xl outline-none w-full"
                />
                <button
                  onClick={() => setShowPassword((prev) => !prev)}
                  type="button"
                  className="absolute right-6 -top-1/2 -bottom-1/2 w-3"
                >
                  {showPassword ? (
                    <Eye className="size-4 text-black font-medium" />
                  ) : (
                    <EyeOff className="size-4" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading || !formData.email || !formData.password}
              className="w-full h-10 mt-2 py-2 px-4 text-sm font-medium bg-blue-200 border shadow border-gray-300  pr-8 rounded-xl outline-none "
            >
              {loading ? (
                <Loader2 className="animate-spin mx-auto" />
              ) : (
                "Sign in"
              )}
            </button>
            <Oauth />
            <p className="text-sm text-black text-center">
              Dont have an account?{" "}
              <button
              type="button"
                onClick={() => navigate("/signup")}
                className="text-blue-700 font-medium"
              >
                {" "}
                sign up
              </button>
            </p>

            <div className=""></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
