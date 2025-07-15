import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import UploadImage from '../../components/UploadImages'

const WineClubForm = () => {
  const [clubImage, setClubImage] = useState(null);
  const [tierImage, setTierImage] = useState(null);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col items-start gap-[25px] flex-1 p-5 rounded-[12px] bg-white">
        <h1 className="text-xl font-semibold text-black flex items-center gap-2">
          <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          Wine Club Details
        </h1>
      </div>

      {/* Full Form: Club + Tier Fields */}
      <div className="bg-white rounded-[12px] p-6 border border-gray-200 space-y-10">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Club Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-2">
              Club Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Golden Vine Estates"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Club Overview */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-2">
              Wine club overview<span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              placeholder="Enter wine club overview details..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Club Image using UploadImage */}
          <div className="md:col-span-2">
            <UploadImage
              image={clubImage}
              onImageSelect={(file) => setClubImage(file)}
            />
          </div>

          {/* Tier Fields */}
          <div className="col-span-2 pt-6">
            <h2 className="text-sm font-medium text-gray-500 mb-4">Tier Fields (repeatable)</h2>

            {/* Tier Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-2">
                Tier Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter tier name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
              />
            </div>

            {/* Shipment Toggle */}
            <div className="mb-4 border-t border-dotted border-gray-300 pt-4 pb-4">
              <label className="block text-sm font-medium text-black mb-2">
                Shipment Details<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700">Disable</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-10 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-all" />
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-full transition-transform" />
                </label>
                <span className="text-sm text-gray-700">Enable</span>
              </div>
            </div>

            {/* Complimentary Tastings */}
            <div className="mb-4 border-t border-dotted border-gray-300 pt-4 pb-4">
              <label className="block text-sm font-medium text-black mb-2">
                Complimentary Tastings or Flights?
              </label>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700">No</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-10 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-all" />
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-full transition-transform" />
                </label>
                <span className="text-sm text-gray-700">Yes</span>
              </div>
            </div>

            {/* Tasting Room Discount */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-2">
                Tasting Room Discount
              </label>
              <input
                type="text"
                placeholder="Enter discount details"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
              />
            </div>

            {/* Tier Overview */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-2">
                Tier Overview<span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                placeholder="Enter perks"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
              />
            </div>

            {/* Tier Image using UploadImage */}
            <div>
              <UploadImage
                image={tierImage}
                onImageSelect={(file) => setTierImage(file)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="flex w-[161px] h-[42px] px-[13px] py-[8px] justify-center items-center gap-[5px] rounded-[12px] bg-[#252525] text-white text-sm font-medium"
            >
              Create Club Tier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WineClubForm;
