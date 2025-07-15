import Main from "../../../public/assets/images/mainimg.png";
import Logo from "../../../public/assets/icons/loginlogo.svg";
import Input from "../../components/Input";
import { FiMail } from "react-icons/fi";
import {Link} from "react-router-dom"


const EmailPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-2.5 bg-[#F6F6F6] min-h-screen  justify-center">
      <div className="w-full lg:w-1/2">
        <img
                  src={Main}
                  alt="Main img"
                  className="w-full h-full rounded-[18px] "
                />
      </div>

      <div className="w-full lg:w-1/2 ">
       <div className="bg-white rounded-[18px] p-12 flex flex-col justify-center  h-full">

          <div className="text-center mb-4">
            <img src={Logo} alt="Logo" className="mx-auto" />
          </div>
          <h2 className="text-[#252525] font-black text-[25px] leading-[1] mb-2.5">
            Email Verification
          </h2>
          <p className="text-[#252525] opacity-80 text-[16px] leading-6 mb-[16px]">
            No worries! Enter your registered email address and we’ll send you a link.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>

            <Input
              inputLabel="Email Address"
              inputPlaceholder="Goldenvine@gmail.com"
              inputId="email"
              inputType="email"
              icon={<FiMail />}
            />

              <Link to = "/reset-password">
                          <button
              type="submit"
              className="bg-black rounded-[10px] py-[9px] text-white cursor-pointer w-full mt-1 mb-3"
            >
              Send Reset Link
            </button>
            </Link>
                <div className="text-center">
                  <button
              type="button"
              className="text-[#51111D]  hover:text-[#330c11] transition"
            >
              Back to Login
            </button>
                </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailPage;
