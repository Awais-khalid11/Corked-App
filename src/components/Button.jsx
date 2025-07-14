import React from "react";

const Button = ({ buttonIcon, buttonText }) => {
  return (
    <div>
      <button className="bg-[#B2642A] rounded-[12px] py-2 px-3.5 flex gap-1.5 text-white  font-semibold text-sm leading-[1.5] items-center cursor-pointer">
        <img
          src={buttonIcon}
          alt="Button Icon"
          className="w-4 h-4 rounded-full"
        />
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
