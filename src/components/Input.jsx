const Input = ({
  inputLabel,
  inputPlaceholder,
  inputId,
  inputType,
  icon,
  showAsterisk = true, 
}) => {
  return (
    <div className="text-[#252525] font-medium text-[16px] w-full">
      <label className="mb-2.5 block" htmlFor={inputId}>
        {inputLabel}
        {showAsterisk && <span className="text-red-500"> *</span>}
      </label>

      <div className="relative mb-4">
        <input
          className="bg-[#F5F5F5] py-[9px] px-4 pr-10 rounded-[8px] placeholder:opacity-50 w-full"
          type={inputType}
          name={inputId}
          id={inputId}
          placeholder={inputPlaceholder}
          required={showAsterisk}
        />

        {icon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
