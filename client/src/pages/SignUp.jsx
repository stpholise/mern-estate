import { useState } from "react";
import { EyeOff, Eye, Mail, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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
    setLoading(true);
    console.log(formData);

    try {
      if (Object.values(formData).some((value) => !value.trim())) {
        toast.error("All fields are required");
        return;
      }
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      toast.success("Success creating account");
      setFormData({ password: "", username: "", email: "" });
      navigate("/");
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className=" h-screen    w-full   sm:flex items-center sm:justify-center  px-4 py-4   max-w-lg mx-auto  rounded-lg ">
       
        <form onSubmit={handleSubmit}>
          <div className="mt-8  sm:w-99 lg:w-110    flex flex-col gap-4  shadow-2xl px-4 py-4 pt-8 lg:px-12  lg:py-14 rounded-2xl border-4 border-gray-100">
            
             <h1 className="text-2xl text-center font-semibold mb-4">Sign Up</h1>
             <div className="w-full">
              <p className="text-gray-600  mb-1 text-sm font-medium">
                Full name
              </p>
              <input
                type="text"
                placeholder="username"
                value={formData.username}
                name="username"
                onChange={handleChange}
                id="username"
                className="border shadow border-gray-300 bg-gray-100 px-3 py-2 rounded-xl outline-none w-full "
              />
            </div>
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
              // disabled={loading || !formData.email || !formData.username || !formData.password}
              className="w-full h-10 mt-2 py-2 px-4 text-sm font-medium bg-blue-200 border shadow border-gray-300  pr-8 rounded-xl outline-none "
            >
              {loading ? (
                <Loader2 className="animate-spin mx-auto" />
              ) : (
                "Sign up"
              )}
            </button>
            <p className="text-sm text-black text-center">
              Already have an account?{" "}
              <Link to={"signin"} className="text-blue-700 font-medium">
                {" "}
                sign in
              </Link>
            </p>

            <div className=""></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
