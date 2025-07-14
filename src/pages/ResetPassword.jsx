import React from "react";
import Main from "../../public/assets/images/mainimg.png";
import Logo from "../../public/assets/icons/loginlogo.svg";
import Input from "../components/Input";
import { FiLock } from "react-icons/fi"; // Correct icon for password

const ResetPassword = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-2.5 bg-[#F6F6F6] min-h-screen items-center justify-center">
      <div className="w-full lg:w-1/2">
        <img
          src={Main}
          alt="Main img"
          className="w-full h-auto rounded-[18px] object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <div className="bg-white rounded-[18px] p-12">
          <div className="text-center mb-4">
            <img src={Logo} alt="Logo" className="mx-auto" />
          </div>
          <h2 className="text-[#252525] font-black text-[25px] leading-[1] mb-1.5">
            🔐 Reset Password
          </h2>
          <p className="text-[#252525] opacity-80 text-[16px] leading-6 mb-6">
            Create a new password for your winery account.
          </p>

          <form>
            <Input
              inputLabel="New Password"
              inputPlaceholder="•••••••••••••"
              inputId="new-password"
              inputType="password"
              icon={<FiLock />}
            />
            <Input
              inputLabel="Confirm Password"
              inputPlaceholder="•••••••••••••"
              inputId="confirm-password"
              inputType="password"
              icon={<FiLock />}
            />

            <button
              type="submit"
              className="bg-black rounded-[10px] py-[9px] text-white cursor-pointer w-full mt-6 mb-4"
            >
              Reset Password
            </button>

            <button
              type="button"
              className="text-[#51111D] underline hover:text-[#330c11] transition"
            >
              Back to Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
