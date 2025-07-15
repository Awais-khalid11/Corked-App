import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const WineClubForm = () => {
  const [clubImage, setClubImage] = useState(null);
  const [tierImage, setTierImage] = useState(null);

  const handleImageUpload = (e, isTier = false) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (isTier) {
          setTierImage(e.target.result);
        } else {
          setClubImage(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const ImageUploadArea = ({ image, onUpload, id }) => (
    <div className="relative">
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
      >
        {image ? (
          <div className="relative w-full h-full">
            <img
              src={image}
              alt="Upload preview"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm16 11l-4.5-6-3 4L7 10l-4 6h16z"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mb-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm16 11l-4.5-6-3 4L7 10l-4 6h16z"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 text-center">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">PNG or JPG</p>
          </div>
        )}
        <input
          id={id}
          type="file"
          className="hidden"
          accept="image/png, image/jpeg, image/jpg"
          onChange={onUpload}
        />
      </label>
    </div>
  );

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

          {/* Club Image */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-2">Upload Club Image</label>
            <ImageUploadArea
              image={clubImage}
              onUpload={(e) => handleImageUpload(e, false)}
              id="club-image"
            />
          </div>

          {/* Tier Fields (Static) */}
          <div className="col-span-2  pt-6">
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

            {/* Shipment Details */}
            {/* Shipment Details */}
            <div className="mb-4 border-t border-dotted border-gray-300 pt-4 pb-4">
              <label className="block text-sm font-medium text-black mb-2">
                Shipment Details<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700">Disable</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer w-12 h-6"
                    name="shipmentToggle"
                    defaultChecked={false}
                  />
                  <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-300 peer-checked:bg-blue-600 transition-all"></div>
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-full transition-transform"></span>
                </label>
                <span className="text-sm text-gray-700">Enable</span>
              </div>
            </div>


            {/* Complimentary Tastings */}
            {/* Complimentary Tastings or Flights */}
            <div className=" mb-4 border-t border-dotted border-gray-300 pt-4 pb-4">
              <label className="block text-sm font-medium text-black mb-2">
                Complimentary Tastings or Flights?
              </label>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700">No</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer "
                    name="tastingsToggle"
                    defaultChecked={false}
                  />
                  <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-300 peer-checked:bg-blue-600 transition-all"></div>
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-full transition-transform"></span>
                </label>
                <span className="text-sm text-gray-700">Yes</span>
              </div>
            </div>


            {/* Tasting Room Discount */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-2">Tasting Room Discount</label>
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

            {/* Tier Image */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">Tier Image Upload</label>
              <ImageUploadArea
                image={tierImage}
                onUpload={(e) => handleImageUpload(e, true)}
                id="tier-image"
              />
            </div>
          </div>
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