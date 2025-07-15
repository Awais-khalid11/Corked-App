import React, { useState } from "react";
import Main from "../../../public/assets/images/mainimg.png";
import Logo from "../../../public/assets/icons/loginlogo.svg";
import Input from "../../components/Input";
import Goggle from "../../../public/assets/icons/google.svg";
import Apple from "../../../public/assets/icons/apple-logo 1.svg";
import Selector from "../../components/Selector";
import VisitingHours from "../../components/VisitingHours";
import TextArea from "../../components/TextArea";
import UploadImage from "../../components/UploadImages";
import Tick from "../../../public/assets/icons/Sticker tick.svg";
import { Link } from "react-router-dom";

import { FiLock, FiPhoneCall, FiEye, FiEyeOff } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-2.5 bg-[#F6F6F6] justify-center">
      <div className="w-full lg:w-1/2">
        <img
          src={Main}
          alt="Main img"
          className="w-full h-full rounded-[18px]"
        />
      </div>

      <div className="w-full lg:w-1/2 overflow-y-auto max-h-screen">
        <div className="bg-white rounded-[18px] p-[50px] ">
          {!formSubmitted ? (
            <>
              <div className="text-center mb-4">
                <img src={Logo} alt="Logo" className="mx-auto" />
              </div>

              <h2 className="text-[#252525] font-black text-[25px] leading-[1] mb-1.5">
                Sign Up
              </h2>
              <p className="text-[#252525] opacity-80 text-[16px] leading-6 mb-[16px]">
                Get access to powerful tools for wine listings, engagement insights.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="flex gap-5">
                  <Input
                    inputLabel="Winery Name"
                    inputPlaceholder="Golden Vine Estates"
                    inputId="wineName"
                    inputType="text"
                    icon={<LuUserRound />}
                  />
                  <Input
                    inputLabel="Email Address"
                    inputPlaceholder="Goldenvine@gmail.com"
                    inputId="email"
                    inputType="email"
                    icon={<FiLock />}
                  />
                </div>

                <div className="flex gap-5">
                  <Input
                    inputLabel="Phone Number"
                    inputPlaceholder="707 555-1234"
                    inputId="wineNumber"
                    inputType="tel"
                    icon={<FiPhoneCall />}
                  />
                  <Input
                    inputLabel="Website URL"
                    inputPlaceholder="https://www.examplewinery.com"
                    inputId="websiteName"
                    inputType="text"
                    icon={<AiOutlineGlobal />}
                      showAsterisk={false}

                  />
                </div>

                <div className="flex gap-5">
                  <Selector
                    selectorLabel="Country"
                    selectorId="country"
                    selectorPlaceholder="Select Country"
                    options={["USA", "UK", "France", "Canada"]}
                  />
                  <Selector
                    selectorLabel="City"
                    selectorId="city"
                    selectorPlaceholder="Select City"
                    options={["New York", "London", "Paris", "Toronto"]}
                  />
                </div>

                <div>
                  <Selector
                    selectorLabel="Region"
                    selectorId="region"
                    selectorPlaceholder="Select Region"
                    options={["Napa", "Bordeaux", "Niagara", "Tuscany"]}
                  />
                </div>

                <div className="flex gap-5">
                  <Input
                    inputLabel="ZIP Code"
                    inputPlaceholder="Enter Zip Code"
                    inputId="winecode"
                    inputType="text"
                  />
                  <Input
                    inputLabel="Street Address (optional)"
                    inputPlaceholder="Enter street address"
                    inputId="street"
                    inputType="text"
                    icon={<AiOutlineGlobal />}
                  />
                </div>

                <div>
                  <VisitingHours />
                </div>

                <div>
                  <TextArea
                    areaId="short-desc"
                    areaPlaceholder="A bold red with hints of black cherry, tobacco, and cocoa."
                    areaLabel="Short Description"
                  />
                </div>

                <div>
                  <UploadImage />
                </div>

                <div className="flex gap-5">
                  <Input
                    inputLabel="Create Password"
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
                </div>

                <div className="flex justify-between mt-4 mb-5 text-sm">
                  <label htmlFor="rememberme" className="flex items-center gap-1">
                    <input type="checkbox" id="rememberme" />
                    Remember me
                  </label>
                  <button className="text-black" type="button">
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="bg-black rounded-[10px] py-[9px] text-white cursor-pointer w-full mb-2"
                >
                  Create Winery Account
                </button>

                <p className="text-black text-center mb-5">
                  Already have an account?{" "}
                  <Link to="/login-page" className="text-[#51111D]">
                    Login
                  </Link>
                </p>
              </form>

              <div className="flex items-center gap-4 my-3">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="text-[#252525] opacity-50 text-sm whitespace-nowrap">
                  Or Signup With
                </span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>

              <div className="flex gap-2.5 justify-center items-center">
                <div className="bg-[#C22E00] w-[42px] h-[42px] rounded-full p-2.5 flex items-center justify-center">
                  <img src={Goggle} alt="Google icon" />
                </div>
                <div className="bg-black w-[42px] h-[42px] rounded-full p-2.5 flex items-center justify-center">
                  <img src={Apple} alt="Apple icon" />
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center h-[678px]">
              <div className="text-center mb-4">
                <img src={Tick} alt="Success Tick" className="mx-auto" />
              </div>
              <h2 className="text-[#252525] font-black text-[25px] text-center leading-[1] mb-1.5">
                Password updated successfully
              </h2>
              <p className="text-[#252525] opacity-80 text-[16px] text-center leading-6 mb-6">
                You can now log in with your new password.
              </p>
              <div className="flex justify-center">
                <Link to="/login-page">
                  <button className="bg-black text-white rounded-[10px] py-[11px] px-6">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
