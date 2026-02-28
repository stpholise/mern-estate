import { Camera, Edit3, Loader2, Trash } from "lucide-react";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  successfulUserUpdate,
  updateUserFalure,
  deleteUserFalure,
  deleteUserSuccess,
  logoutUserFalure,
  logoutUserSuccess,
} from "../store/UserSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import {Link} from "react-router"

const Profile = () => {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const navigate = useNavigate()
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [deletingUser, setDeletingUser] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    currentUser?.avatar || "/avatar.png",
  );
  const [userListings, setUserListings] = useState([]);
  const[ showListingsError, setShowListingsError] = useState()

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
        throw new Error(data.message || "Something went wrong");
      }
      setLoading(false);
      dispatch(successfulUserUpdate(data));
      toast.success("Profile updated successfuly");
    } catch (error) {
      dispatch(updateUserFalure(error.message));
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    console.log(currentUser);
    setDeletingUser(true);
    try {
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Update failed");
      }
      toast.success(data.message);
      dispatch(deleteUserSuccess());
      setDeletingUser(false);
    } catch (error) {
      console.log(error.message);
      dispatch(deleteUserFalure(error.message));
      setDeletingUser(false);
    }
  };

  const handleSignout = async () => {
    try {
      const res = await fetch(`/api/auth/signout` );
      const data = res.json()
     
      toast.success(data)
      dispatch(logoutUserSuccess());
    } catch (error) {
      toast.error(error.message)
      console.log(error)
      dispatch(logoutUserFalure());
    }
  };

    const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setShowListingsError(true);
        return;
      }

      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
      console.log(error)
    }
  };

  const handleListingDelete = (id) => {
    console.log(id)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-7 pt-5">Profile</h1>
      <div className=" container mx-auto px-4 w-fit ">
        <div className=" flex flex-col   sm:flex-row gap-4 items-center  rounded-lg border-gray-200 border px-4 sm:px-8 py-4 sm:py-8 w-fit relative">
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
              <Loader2 className="animate-spin size-5 tex-gray-400  " />
            ) : (
              "Update profile"
            )}
          </button>
          <button
            type="button"
            onClick={() => navigate('/createlisting')}
            className="relative capitalize font-medium border-gray-200 border  w-full sm:w-fit px-5 py-1 rounded-md bg-blue-400 text-gray-50 h-9"
          >
            {" "}
            create listing
          </button>
        </div>
        <button onClick={handleShowListings} className="py-8">show listings</button>
        <div className=" flex gap-4 justify-between flex-col sm:flex-row py-6 border-gray-200 border px-4 rounded-lg">
          <button
            type="button"
            onClick={handleDelete}
            className="capitalize font-medium   w-full sm:w-fit px-2 py-1 rounded-md  h-9"
          >
            {deletingUser ? (
              <Loader2 className="animate-spin size-5" />
            ) : (
              <Trash className="text-red-500 " />
            )}
          </button>
          <button
            type="button"
            onClick={handleSignout}
            className="capitalize font-medium border-gray-200 border  w-full sm:w-fit px-5 py-1 rounded-md bg-gray-50 text-red-500 h-9"
          >
            {" "}
            Sign out
          </button>
        </div>
      </div>
           {userListings && userListings.length > 0 && (
        <div className='flex flex-col gap-4 container mx-auto my-8'>
          <h1 className='text-center mt-7 text-2xl font-semibold'>
            Your Listings
          </h1>
          {userListings.map((listing) => (
            <div
              key={listing._id}
              className='border rounded-lg p-3 flex justify-between items-center gap-4'
            >
              <Link to={`/listing/${listing._id}`}>
                <img
                  src={listing.imageUrls[0]}
                  alt='listing cover'
                  className='h-16 w-16 object-contain'
                />
              </Link>
              <Link
                className='text-slate-700 font-semibold  hover:underline truncate flex-1'
                to={`/listing/${listing._id}`}
              >
                <p>{listing.name}</p>
              </Link>

              <div className='flex flex-col item-center'>
                <button
                  onClick={() => handleListingDelete(listing._id)}
                  className='text-red-700 uppercase'
                >
                  Delete
                </button>
                <Link to={`/update-listing/${listing._id}`}>
                  <button className='text-green-700 uppercase'>Edit</button>
                </Link>
              </div>
            </div>
          ))}
      
        </div>
      )}
      {showListingsError && (<div> cant find listings </div>)}
    </div>
  );
};

export default Profile;
