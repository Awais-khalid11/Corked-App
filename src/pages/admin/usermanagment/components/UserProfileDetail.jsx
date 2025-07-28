import React, { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import UploadImage from '../../../../components/UploadImages';

// Dummy PasswordInput Component
const PasswordInput = ({ label, required }) => (
  <div>
    <label className="block text-sm font-medium text-black mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type="password"
      className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
    />
  </div>
);

const UserProfileDetail = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);

  return (
    <div className="">
      <div className="flex flex-col items-start gap-[25px] p-4 mb-6 rounded-[12px] bg-white">
        <button onClick={() => navigate(-1)} className="cursor-pointer">
          <h1 className="text-xl font-semibold text-black flex items-center gap-2">
            <FiArrowLeft className="w-5 h-5 text-gray-600 hover:text-gray-800" />
            User Profile Details
          </h1>
        </button>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white py-5 px-4 rounded-2xl">
        {/* Winery Name */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-black mb-2">
            User Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            defaultValue="Golden Vine Estates"
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            defaultValue="(707) 555-1234"
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Email Address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            defaultValue="goldenvine@gmail.com"
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Country<span className="text-red-500">*</span>
          </label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700">
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
          </select>
        </div>

        {/* Region */}
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Region<span className="text-red-500">*</span>
          </label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700">
            <option>California</option>
            <option>Ontario</option>
            <option>Bordeaux</option>
          </select>
        </div>

        {/* Upload Image */}
        <div className="md:col-span-2">
          <UploadImage
            image={profileImage}
            onImageSelect={(file) => setProfileImage(file)}
          />
        </div>

        {/* Password Inputs */}
        <PasswordInput label="Create Password" required />
        <PasswordInput label="Confirm Password" required />

        {/* Submit Button */}
        <div className="pt-4 md:col-span-2">
          <button
            type="submit"
            className="flex w-[161px] h-[42px] px-[13px] py-[8px] justify-center items-center gap-[5px] rounded-[12px] bg-[#252525] text-white text-sm font-medium"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileDetail;
