import React from "react";

const SigninCell = () => {
  return (
    <div className=" hidden md:flex rounded-lg   bg-[url(/img1.jpeg)] bg-center bg-cover bg-no-repeat w-full h-full ">
      <div className="bg-gray-600/20 w-full h-full p-8 md:flex items-end">
        <div className=" w-full max-w-sm h-fit py-6  ">
          <h3 className=" text-4xl bg-linear-to-br from-secondary to-accent bg-clip-text text-transparent font-extrabold">
            {" "}
            Find Your Sweet Home
          </h3>
          <p className=" text-xl text-accent font-medium">
            {" "}
            Visiting your dream property is now just a few clicks away -- fast,
            easy reliable{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninCell;
