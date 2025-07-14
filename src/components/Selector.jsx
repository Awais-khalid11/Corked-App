import React from "react";

const Selector = ({ selectorLabel, selectorId, options = [], selectorPlaceholder }) => {
  return (
    <div className="text-[#252525] font-medium text-[16px]   w-full ">
      <label className="" htmlFor={selectorId}>{selectorLabel}</label>
      <select
        id={selectorId}
        name={selectorId}
        required
        className="bg-[#F5F5F5] py-2.5 px-4 rounded-[8px] opacity-50 w-full mt-4 border border-[rgba(0,0,0,0.5)]"
        defaultValue=""
      >
        
        <option  value="" disabled hidden className="opacity-50">
          {selectorPlaceholder}
        </option>

      
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;





