import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const CreateListing = () => {
  const uploadRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    type: false,
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 50,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
  });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState([]);

  const handleRemoveImage = (index) => {
    setPreview((prev) => prev.filter((_, i) => i !== index));
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const addImages = (e) => {
    const files = Array.from(e.target.files);

    const remainingSlot = 6 - preview.length;

    if (remainingSlot <= 0) {
      toast.error("You can only upload a maximum of 6 images");
      return;
    }

    const filesToAdd = files.slice(0, remainingSlot);

    setFiles((prev) => [...prev, ...filesToAdd]);

    filesToAdd.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setPreview((prev) => [...prev, reader.result]);
      };
    });
  };
  const uploadImages = async () => {
    const uploadedUrls = [];

    for (let file of files) {
      const data = new FormData();

      data.append("file", file);
      data.append("upload_preset", "mern-estate");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dmuhmpdkm/image/upload",
        {
          method: "POST",
          body: data,
        },
      );
      const result = await res.json();
      toast.success("Image added successfuly");
      if (!res.ok) {
        toast.error("Error uploading image");
        throw new Error(result.error?.message || "Upload failed");
      }

      uploadedUrls.push(result.secure_url);
    }

    return uploadedUrls;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleBooleanChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: !prev[e.target.name],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const imageUrls = await uploadImages();

      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          imageUrls,
          userRef: currentUser._id,
        }),
      });

      const data = await res.json();
      console.log(formData);
      if (!res.ok) {
        throw new Error(data.message || "Could not create listing ");
      }
      toast.success("Listing created successfuly");
      navigate(`/listing/${data._id}`);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 class="bg-linear-to-r from-pink-500 to-violet-500 text-center  my-7 animate-pulse bg-clip-text text-3xl font-extrabold text-transparent ">
        Create Listing
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex mx-auto    flex-col sm:flex-row gap-4">
          <div className="flex flex-col  gap-4 lg:gap-6 flex-1   px-4 py-4  ">
            <input
              type="text"
              placeholder="Name"
              className=" outline-none border border-gray-200 text-sm px-3 py-2.5 rounded-lg"
              id="name"
              maxLength="62"
              minLength="10"
              required
              onChange={handleChange}
              value={formData.name}
            />
            <textarea
              type="text"
              placeholder="Description"
              className="border outline-none border-gray-200 text-sm p-3 rounded-lg"
              id="description"
              required
              onChange={handleChange}
              value={formData.description}
            />
            <input
              type="text"
              placeholder="Address"
              className=" outline-none border border-gray-200 text-sm px-3 py-2.5 rounded-lg"
              id="address"
              required
              onChange={handleChange}
              value={formData.address}
            />
            <div className="flex gap-6 flex-wrap">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="type"
                  name="type"
                  className="w-5"
                  onChange={handleBooleanChange}
                  checked={formData.type}
                />
                <span> {formData.type ? "Rent" : "Sale"}</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="parking"
                  name="parking"
                  className="w-5"
                  onChange={handleBooleanChange}
                  checked={formData.parking}
                />
                <span>Parking spot</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="furnished"
                  name="furnished"
                  className="w-5"
                  onChange={handleBooleanChange}
                  checked={formData.furnished}
                />
                <span>Furnished</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="offer"
                  name="offer"
                  className="w-5"
                  onChange={handleBooleanChange}
                  checked={formData.offer}
                />
                <span>Offer</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="bedrooms"
                  min="1"
                  max="10"
                  required
                  className="p-3 outline-none border border-gray-300 rounded-lg"
                  onChange={handleChange}
                  value={formData.bedrooms}
                />
                <p>Beds</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="bathrooms"
                  min="1"
                  max="10"
                  required
                  className="px-3 py-2 outline-none border border-gray-300 rounded-lg"
                  onChange={handleChange}
                  value={formData.bathrooms}
                />
                <p>Baths</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="regularPrice"
                  min="50"
                  max="10000000"
                  required
                  className="px-3 py-2 outline-none border border-gray-300 rounded-lg"
                  onChange={handleChange}
                  value={formData.regularPrice}
                />
                <div className="flex flex-col items-center">
                  <p>Regular price</p>
                  {formData.type === true && (
                    <span className="text-xs">($ / month)</span>
                  )}
                </div>
              </div>
              {formData.offer && (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    id="discountPrice"
                    min="0"
                    max="10000000"
                    required
                    className="px-3 py-2 border border-gray-300 rounded-lg"
                    onChange={handleChange}
                    value={formData.discountPrice}
                  />
                  <div className="flex flex-col items-center">
                    <p>Discounted price</p>

                    {formData.type === true && (
                      <span className="text-xs">($ / month)</span>
                    )}
                  </div>
                </div>
              )}
            </div>
            <p className="font-semibold text-xs">
              Images:
              <span className="font-normal text-gray-600 ml-2">
                The first image will be the cover (max 6)
              </span>
            </p>
            <div className="flex gap-4">
              <input
                ref={uploadRef}
                onChange={(e) => addImages(e)}
                className="p-3 border border-gray-300 rounded w-full"
                type="file"
                id="images"
                hidden
                accept="image/*"
                multiple
              />
              <button
                type="button"
                onClick={() => uploadRef.current.click()}
                className="px-3 py-2 text-sm font-medium text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
              >
                {"Upload Images"}
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-4     ">
            {preview.length > 0 &&
              preview.map((url, index) => (
                <div
                  key={url}
                  className="flex justify-between p-3 border items-center"
                >
                  <img
                    src={url}
                    alt="listing image"
                    className="w-30 h-20 object-contain rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75"
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2.5 block mx-auto my-6 text-sm font-medium bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Creating..." : "Create listing"}
        </button>
      </form>
    </main>
  );
};

export default CreateListing;
