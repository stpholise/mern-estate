import { Camera, Edit, Trash } from "lucide-react";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const fileRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState();
  const { currentUser } = useSelector((state) => state.user);
  const [username, setUsername] = useState(currentUser.username || "");
  const [editMode, setEditMode] = useState(false);
  const handleImageChange = async (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      const base64Image = reader.result;
      fileRef.current = base64Image;
      setSelectedImage(base64Image);
    };
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-7 pt-5">Profile</h1>
      <div className=" container mx-auto px-4 w-fit ">
        <div className=" flex flex-col sm:flex-row gap-4 items-center  rounded-lg border-gray-200 border px-4 sm:px-8 py-4 sm:py-8 w-fit relative">
          <Edit
            onClick={() => setEditMode((prev) => !prev)}
            className="absolute top-4 right-4 cursor-pointer"
          />
          <div className="relative rounded-full size-22 sm:size-44 p-3 bg-gray-400">
            <input
              type="file"
              className="hidden"
              ref={fileRef}
              onChange={handleImageChange}
            />
            <img
              className="w-full h-full  object-cover rounded-full"
              src={selectedImage || currentUser?.avatar || "/avatar.png"}
            />
            <Camera
              onClick={() => fileRef.current.click()}
              className="bottom-3 right-3 absolute"
            />
          </div>
          <div className="flex-col flex">
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              readOnly={!editMode}
              className={`font-medium text-lg sm:text-xl py-1 outline-none text-black placeholder:text-black no ${editMode ? "border-gray-200 border rounded-md px-4 py-1" : ""}`}
            />

            <p className="font-medium py-1 px-2 text-sm text-blue-400">
              {currentUser.email}
            </p>
          </div>
        </div>
        <div className=" flex gap-4 justify-between flex-col sm:flex-row py-6">
          <button
            type="button"
            className="capitalize font-medium border-gray-200 border w-full sm:w-fit px-5 py-1 rounded-md bg-blue-400 text-gray-50 h-9"
          >
            {" "}
            update profile{" "}
          </button>
          <button
            type="button"
            className="capitalize font-medium border-gray-200 border  w-full sm:w-fit px-5 py-1 rounded-md bg-blue-400 text-gray-50 h-9"
          >
            {" "}
            create listing
          </button>
        </div>
        <div className="py-8">listing</div>
        <div className=" flex gap-4 justify-between flex-col sm:flex-row py-6 border-gray-200 border px-4 rounded-lg">
          <button
            type="button"
            className="capitalize font-medium border-gray-200 border w-full sm:w-fit px-2 py-1 rounded-md  h-9"
          >
            {" "}
            <Trash className="text-red-500 " />{" "}
          </button>
          <button
            type="button"
            className="capitalize font-medium border-gray-200 border  w-full sm:w-fit px-5 py-1 rounded-md bg-gray-50 text-red-500 h-9"
          >
            {" "}
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
