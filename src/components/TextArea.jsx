import React from "react";

const TextArea = ({ areaId, areaPlaceholder, areaLabel }) => {
  return (
    <div className="text-[#252525] font-medium text-[16px] leading-6 ">
      {areaLabel && <label htmlFor={areaId}>{areaLabel}</label>}
      <textarea
        name={areaId}
        id={areaId}
        placeholder={areaPlaceholder}
        required
        className="bg-[#F5F5F5] mt-3.5 py-2.5 px-4 rounded-[8px] placeholder:opacity-50 w-full resize-none min-h-[80px] focus:outline-none"
      />
    </div>
  );
};

export default TextArea;
