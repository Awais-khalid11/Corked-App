import Tick from "../../public/assets/icons/Sticker tick.svg";
import {Link} from "react-router-dom"

const Completion = () => {
  return (
    <div className="bg-white rounded-[18px] p-12 flex flex-col justify-center h-full">

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
        <Link to= "/login-page">
        <button className="bg-black text-white rounded-[10px] py-[11px] px-6">
          Login
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Completion;
