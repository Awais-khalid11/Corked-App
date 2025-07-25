import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordInput = ({ label, required }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full relative">
      <label className="block text-sm font-medium text-black mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={show ? "text" : "password"}
        className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700 pr-10"
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute top-[35px] right-3 text-gray-500"
      >
        {show ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
      </button>
    </div>
  );
};

const ManagePassword = () => {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col items-start gap-[25px] flex-1 p-5 rounded-[12px] bg-white">
        <h1 className="text-xl font-semibold text-black flex items-center gap-2">
          Password Update
        </h1>
      </div>

      {/* Form */}
      <div className="bg-white rounded-[12px] p-6 border border-gray-200">
        <form className="space-y-5">
          {/* Old Password (occupying one grid column) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <PasswordInput label="Old Password" required />
            <div className="hidden md:block" /> {/* Placeholder for alignment */}
          </div>

          {/* New & Confirm Password in same row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <PasswordInput label="New Password" required />
            <PasswordInput label="Confirm Password" required />
          </div>

          {/* Save Button */}
          <div className="pt-4">
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

export default ManagePassword;
