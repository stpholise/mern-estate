import { MapPin, BedDouble, Bath } from "lucide-react";
import { useNavigate } from "react-router";

export default function ListingCard({ listing }) {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/listing/${listing._id}`)} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      
 
      <div className="relative">
        <img
          src={listing.imageUrls[0]}
          alt={listing.name}
          className="h-56 w-full object-cover"
        />

        
        <span className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-lg text-sm font-semibold">
          ₦{listing.regularPrice}k
        </span>
      </div>

   
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-1">
          {listing.name}
        </h3>
 
        <div className="flex items-center text-gray-500 text-sm gap-1">
          <MapPin size={16} />
          <span>{listing.address}</span>
        </div>

         
        <div className="flex justify-between text-sm text-gray-600 pt-2">
          <div className="flex items-center gap-1">
            <BedDouble size={16} />
            {listing.bedrooms} Beds
          </div>

          <div className="flex items-center gap-1">
            <Bath size={16} />
            {listing.bathrooms} Baths
          </div>
        </div>
      </div>
    </div>
  );
}