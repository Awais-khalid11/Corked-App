import React, { useState } from "react";
import Main from "../../../public/assets/images/mainimg.png";
import Logo from "../../../public/assets/icons/loginlogo.svg";
import Input from "../../components/Input";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import Completion from "../../components/Completion";

const ResetPassword = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-2.5 bg-[#F6F6F6] min-h-screen justify-center">
      <div className="w-full lg:w-1/2">
        <img
          src={Main}
          alt="Main img"
          className="w-full h-full rounded-[18px] "
        />
      </div>

      <div className="w-full lg:w-1/2">
        <div className="bg-white rounded-[18px] p-12 flex flex-col justify-center h-full">
          {showPopup ? (
            <Completion />
          ) : (
            <>
              <div className="text-center mb-4">
                <img src={Logo} alt="Logo" className="mx-auto" />
              </div>
              <h2 className="text-[#252525] font-black text-[25px] leading-[1] mb-1.5">
                🔐 Reset Password
              </h2>
              <p className="text-[#252525] opacity-80 text-[16px] leading-6 mb-6">
                Create a new password for your winery account.
              </p>

              <form onSubmit={handleSubmit}>
                <Input
                  inputLabel="New Password"
                  inputPlaceholder="•••••••••••••"
                  inputId="new-password"
                  inputType={showPassword ? "text" : "password"}
                  icon={
                    <div
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="cursor-pointer"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                  }
                />
                <Input
                  inputLabel="Confirm Password"
                  inputPlaceholder="•••••••••••••"
                  inputId="confirm-password"
                  inputType={showConfirmPassword ? "text" : "password"}
                  icon={
                    <div
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="cursor-pointer"
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                  }
                />

                <button
                  type="submit"
                  className="bg-black rounded-[10px] py-[9px] text-white cursor-pointer w-full mt-6 mb-4"
                >
                  Reset Password
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    className="text-[#51111D] hover:text-[#330c11] transition"
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
