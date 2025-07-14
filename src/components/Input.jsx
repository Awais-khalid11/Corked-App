
const Input = ({ inputLabel, inputPlaceholder, inputId, inputType, icon }) => {
  return (
    <div className="text-[#252525] font-medium text-[16px] w-full">
      <label className="mb-3.5 block" htmlFor={inputId}>
        {inputLabel}
      </label>

      <div className="relative">
        <input
          className="bg-[#F5F5F5] py-2.5 px-4 pr-10 rounded-[8px] placeholder:opacity-50 w-full mt-4"
          type={inputType}
          name={inputId}
          id={inputId}
          placeholder={inputPlaceholder}
          required
        />

        {icon && (
          <span className="absolute right-3 top-9.5 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
