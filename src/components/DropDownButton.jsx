import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropDownButton = ({ label = "Yearly", options = [], onSelect, className = "" }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    onSelect?.(option);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`inline-flex items-center gap-1 px-4 py-1.5 border rounded-md text-sm font-medium shadow-sm ${
          className || "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        }`}
      >
        {label}
        <FaChevronDown className="w-3 h-3" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1 text-sm text-gray-700">
            {options.map((option) => (
              <li
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
