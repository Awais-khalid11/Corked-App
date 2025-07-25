import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import UploadImage from '../../components/UploadImages';

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(null);

  return (
    <div className="space-y-5">
      {/* Header Box */}
      <div className="flex flex-col items-start gap-[25px] flex-1 p-5 rounded-[12px] bg-white">
        <h1 className="text-xl font-semibold text-black flex items-center gap-2">
          <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          Edit Profile Details
        </h1>
      </div>  

      {/* Form Box */}
      <div className="bg-white rounded-[12px] p-6 border border-gray-200">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Winery Name */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Winery Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Golden Vine Estates"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Email Address */}
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

          {/* Website URL */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Website URL
            </label>
            <input
              type="url"
              defaultValue="https://www.goldenwine.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Country, City, Region */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-5">
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
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                City<span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700">
                <option>Napa</option>
                <option>Sonoma</option>
                <option>Santa Rosa</option>
              </select>
            </div>
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
          </div>

          {/* ZIP & Street Address */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                ZIP Code<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="94558"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Street Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="1457 Vineyard Lane"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
              />
            </div>
          </div>

          {/* Visiting Hours */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-2">
              Visiting Hours<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Mon–Fri: 10am–6pm"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-2">
              Short Description<span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              placeholder="Enter a short description..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Upload Image */}
          <div className="md:col-span-2 pointer-events-auto">
            <UploadImage
              image={profileImage}
              onImageSelect={(file) => setProfileImage(file)}
              disableOverlayClick
            />
          </div>

          {/* Save Button */}
          <div className="md:col-span-2 pt-4">
            <button
              type="button"
              className="flex w-[161px] h-[42px] px-[13px] py-[8px] justify-center items-center gap-[5px] rounded-[12px] bg-[#252525] text-white text-sm font-medium"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
