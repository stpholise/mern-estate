import { Camera, Edit3, Loader2, Trash } from "lucide-react";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { successfulUserUpdate } from "../store/UserSlice";
import { toast } from "react-hot-toast";

const Profile = () => {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState();
  const [selectedImage, setSelectedImage] = useState(
    currentUser?.avatar || "/avatar.png",
  );

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: currentUser.username || "",
    email: currentUser.email || "",
  });

  const handleTextChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
    };
  };

  const updateProfile = async () => { 
    setLoading(true);
    try {
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          avatar: selectedImage, 
        }),
      });
      const data = await res.json();
      if (!res.ok) { 
        throw new Error(data.message || "Something went wrong")
      }
      setLoading(false);
      dispatch(successfulUserUpdate(data));
      toast.success("Profile updated successfuly");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-7 pt-5">Profile</h1>
      <div className=" container mx-auto px-4 w-fit ">
        <div className=" flex flex-col sm:flex-row gap-4 items-center  rounded-lg border-gray-200 border px-4 sm:px-8 py-4 sm:py-8 w-fit relative">
          <div className="relative rounded-full size-22 sm:size-44 p-3 bg-gray-400">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              ref={fileRef}
              onChange={handleImageChange}
            />
            <img
              onClick={() => fileRef.current.click()}
              className="w-full z-2 h-full object-cover rounded-full"
              src={selectedImage}
            />
            <Edit3
              onClick={() => setEditMode((prev) => !prev)}
              className="absolute bottom-4 right-4 cursor-pointer w-5"
            />
          </div>
          <div className="flex-col flex">
            <input
              type="text"
              value={formData.username}
              name="username"
              onChange={handleTextChange}
              readOnly={!editMode}
              className={`font-medium text-lg sm:text-xl py-1 outline-none text-black placeholder:text-black no ${editMode ? "border-gray-200 border rounded-md px-4 py-1 mb-2" : ""}`}
            />

            <input
              readOnly={!editMode}
              className={`font-medium text-xs sm:text-sm py-1 outline-none text-blue-500  no ${editMode ? "border-gray-200 border rounded-md px-4 py-1" : ""}`}
              value={formData.email}
            />
          </div>
        </div>
        <div className=" flex gap-4 justify-between flex-col sm:flex-row py-6">
          <button
            type="button"
            onClick={updateProfile}
            className="capitalize relative font-medium border-gray-200 border w-full sm:w-fit px-5 py-1 rounded-md bg-blue-400 text-gray-50 h-9"
          >
            {loading ? (
              <Loader2 className="animate-spin size-5 tex-gray-400 " />
            ) : (
              "Update profile"
            )}
          </button>
          <button
            type="button"
            className="relative capitalize font-medium border-gray-200 border  w-full sm:w-fit px-5 py-1 rounded-md bg-blue-400 text-gray-50 h-9"
          >
            {" "}
            create listing
          </button>
        </div>
        <div className="py-8">listing</div>
        <div className=" flex gap-4 justify-between flex-col sm:flex-row py-6 border-gray-200 border px-4 rounded-lg">
          <button
            type="button"
            className="capitalize font-medium   w-full sm:w-fit px-2 py-1 rounded-md  h-9"
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
