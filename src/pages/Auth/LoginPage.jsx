import { useState } from "react";
import Main from "../../../public/assets/images/mainimg.png";
import Logo from "../../../public/assets/icons/loginlogo.svg";
import Goggle from "../../../public/assets/icons/google.svg";
import Apple from "../../../public/assets/icons/apple-logo 1.svg";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth(); // from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
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

      <div className="w-full lg:w-1/2">
        <div className="bg-white rounded-[18px] p-[50px]">
          <div className="text-center mb-4">
            <img src={Logo} alt="Logo" className="mx-auto" />
          </div>
          <h2 className="text-[#252525] font-black text-[25px] leading-[1] mb-1.5">
            Welcome Back!
          </h2>
          <p className="text-[#252525] opacity-80 text-[16px] leading-6 mb-[16px]">
            Continue where you left off to access your account.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FiMail />
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="Goldenvine@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            {/* Password Input with Eye Toggle */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FiLock />
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="flex justify-between mt-4 mb-5 text-sm">
              <label htmlFor="rememberme" className="flex items-center gap-1">
                <input type="checkbox" id="rememberme" />
                Remember me
              </label>
              <Link to="/email-page">
                <button className="text-black cursor-pointer">Forgot Password?</button>
              </Link>
            </div>

            <button
              type="submit"
              className="bg-black rounded-[10px] py-[9px] text-white cursor-pointer w-full mb-2"
            >
              Login
            </button>

            <p className="text-black text-center mb-5">
              Don’t have an account?{" "}
              <Link to="/signup-page">
                <button className="text-[#51111D]">Register</button>
              </Link>
            </p>
          </form>

          <div className="flex items-center gap-4 my-3">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="text-[#252525] opacity-50 text-sm whitespace-nowrap">
              Or Login With
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
