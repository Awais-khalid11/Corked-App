import { ArrowLeft } from 'lucide-react';

const UserProfile = () => {
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

          {/* Country, City, Region in one row */}
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

          {/* ZIP Code and Street Address in one row */}
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

          {/* Short Description */}
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
         {/* Upload Image */}
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

export default UserProfile;
