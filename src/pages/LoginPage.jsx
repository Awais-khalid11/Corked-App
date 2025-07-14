import Main from "../../public/assets/images/mainimg.png";
import Logo from "../../public/assets/icons/loginlogo.svg";
import Input from "../components/Input";
import Goggle from "../../public/assets/icons/google.svg";
import Apple from "../../public/assets/icons/apple-logo 1.svg";
import { FiMail, FiLock } from "react-icons/fi";

const LoginPage = () => {
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
            Welcome Back!
          </h2>
          <p className="text-[#252525] opacity-80 text-[16px] leading-6 mb-6">
            Continue where you left off to access your account.
          </p>

          <form>
            <Input
              inputLabel="Email Address"
              inputPlaceholder="Goldenvine@gmail.com"
              inputId="email"
              inputType="email"
              icon={<FiMail />}
            />

            <Input
              inputLabel="Password*"
              inputPlaceholder="••••••••"
              inputId="password"
              inputType="password"
              icon={<FiLock />}
            />

            <div className="flex justify-between mt-4 mb-5 text-sm">
              <label htmlFor="rememberme" className="flex items-center gap-1">
                <input type="checkbox" id="rememberme" />
                Remember me
              </label>
              <button className="text-black">Forgot Password?</button>
            </div>

            <button
              type="submit"
              className="bg-black rounded-[10px] py-[9px] text-white cursor-pointer w-full mb-4"
            >
              Login
            </button>

            <p className="text-black text-center mb-7">
              Don’t have an account?{" "}
              <button className="text-[#51111D] ">Register</button>
            </p>
          </form>

          <div className="flex items-center gap-4 my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="text-[#252525] opacity-50 text-sm whitespace-nowrap">
              Or Login With
            </span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex gap-2.5 justify-center items-center">
            <div className="bg-[#C22E00] w-11 h-11 rounded-full p-3.5 flex items-center justify-center">
              <img src={Goggle} alt="Google icon" />
            </div>
            <div className="bg-black w-11 h-11 rounded-full p-3.5 flex items-center justify-center">
              <img src={Apple} alt="Apple icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
