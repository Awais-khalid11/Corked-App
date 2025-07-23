import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import UploadImage from "../../../../components/UploadImages";

const WineForm = () => {
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const PasswordInput = ({ label, required }) => {
    const [show, setShow] = useState(false);
    return (
      <div>
        <label className="block text-sm font-medium text-black mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 bg-gray-100 text-gray-700"
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Form Box */}
      <div className="bg-white rounded-[12px] p-6 ">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* User Name */}
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

          {/* Phone */}
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

          {/* Website url */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Website URL
            </label>
            <input
              type="text"
              defaultValue="https://www.goldenvine.com"
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
          {/* ZIP Code* */}
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

          {/* Street Address* */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Street Address <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              defaultValue="1457 Vineyard Lane"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>
          {/* Visiting Hours** */}
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
          {/* Short Description*** */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-2">
             Short Description<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="A bold red with hints of black cherry, tobacco, and cocoa."
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700 min-h-20"
            />
          </div>

          {/* Upload Image */}
          <div className="md:col-span-2">
            <UploadImage
              image={profileImage}
              onImageSelect={(file) => setProfileImage(file)}
            />
          </div>

          {/* Password Fields */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:col-span-2">
            <PasswordInput label="New Password" required />
            <PasswordInput label="Confirm Password" required />
          </div>
          */}
           <div className="pt-4">
            <button
              type="submit"
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

export default WineForm;
