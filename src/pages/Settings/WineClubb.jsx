import React from 'react';

const WineClubb = () => {
  return (
    <div className="space-y-5">
      {/* Header Box */}
      <div className="flex flex-col items-start gap-[25px] flex-1 p-5 rounded-[12px] bg-white">
        <h1 className="text-xl font-semibold text-black flex items-center gap-2">
          Wine Club Details
        </h1>
      </div>

      {/* Form Box */}
      <div className="bg-white rounded-[12px] p-6 border border-gray-200">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-2">
              Club Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Golden Vine Estates "
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>
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
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-2">
              Upload Image
            </label>
            <label
              htmlFor="fileUpload"
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
            >
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
                <p className="text-xs text-gray-500">PNG, JPG, JPEG (max 5MB)</p>
              </div>
              <input
                id="fileUpload"
                type="file"
                className="hidden"
                accept="image/png, image/jpeg, image/jpg"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};


export default WineClubb;