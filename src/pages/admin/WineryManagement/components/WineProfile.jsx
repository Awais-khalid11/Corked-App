import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import ProfileImg from "../../../../../public/assets/images/wine1.png"; // Replace with your actual image
import Map from "../../../../../public/assets/images/Map.png"; 
import { useNavigate } from "react-router-dom";
const WineProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-6 rounded-lg  w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        {/* Profile and Info */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Profile Image */}
          <img
            src={ProfileImg}
            alt="User"
            className="w-20 h-20 rounded-full object-cover"
          />

          {/* Name and Email */}
          <div>
            <h2 className="text-xl font-semibold">Golden Vine Estates</h2>
            <p className="text-gray-600">Jacksongraham@gmail.com</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button onClick={() => navigate(`/dashboard/winery-profile-detail`)} className="px-4 py-2 border cursor-pointer  border-gray-400 rounded-md hover:bg-gray-100 transition">
            Edit Details
          </button>
          <button className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition">
            Suspend Account
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-6 gap-6">
        <div className="bg-gray-50 p-5 rounded-lg flex-1 space-y-2">
          <p className="flex items-center gap-7">
            <span className="font-semibold">Account Status:</span>{" "}
            <span className="text-white bg-green-500 text-xs px-2 py-1 rounded">
              Active
            </span>
          </p>
          <p className="flex items-center gap-22">
            <span className="font-semibold">Phone:</span>
            <span>+1 (707) 555-1234</span> 
          </p>
          <p className="flex items-center gap-19">
            <span className="font-semibold">Location:</span> 
            <span>Napa Valley, California</span>
          </p>
          <p className="flex items-center gap-17">
            <span className="font-semibold">Joined On:</span>
            <span>25/06/2025</span> 
          </p>
          <p className="flex items-center gap-13">
            <span className="font-semibold">Current Tier:</span> 
            <span>Premium</span>
          </p>
          <p className="flex items-center gap-16">
            <span className="font-semibold">Trial Status:</span>
            <span>Active until (30/06/2025 09:00PM)</span> 
          </p>
        </div>

        
        <div className="rounded-lg overflow-hidden flex-1">
          <img
            src={Map}
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WineProfile;
