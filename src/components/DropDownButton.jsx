import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropDownButton = ({
  label = "Options",
  options = [],
  onSelect,
  className = "",
  dropdownClassName = "",
  showIcon = true,
  unstyled = false,
  fullWidthOnMobile = false, // New prop for mobile behavior
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const [dropdownStyle, setDropdownStyle] = useState({
    position: "right",
    width: "auto",
  });

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

    const updateDropdownPosition = () => {
      if (!dropdownRef.current) return;

      const buttonRect = dropdownRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const isMobile = viewportWidth < 640; // Tailwind's 'sm' breakpoint

      let newStyle = {
        position: "right",
        width: "auto"
      };

      if (isMobile) {
        // Check if dropdown would go off-screen on the right
        const spaceOnRight = viewportWidth - buttonRect.right;
        const spaceOnLeft = buttonRect.left;
        
        // Position dropdown on the side with more space
        newStyle.position = spaceOnLeft > spaceOnRight ? "left" : "right";
        
        // Optionally take full width
        if (fullWidthOnMobile) {
          newStyle.width = `${viewportWidth - 32}px`; // 16px padding on each side
          newStyle.position = "left"; // Full width should always be left-aligned
        }
      }

      setDropdownStyle(newStyle);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", updateDropdownPosition);
    updateDropdownPosition(); // Initial calculation

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, [fullWidthOnMobile]);

 const baseButtonClass = unstyled
  ? `inline-flex items-center justify-center p-1 ${className}`
  : `inline-flex items-center ${
      className ||
      "gap-[8px] py-[10px] px-[12px] rounded-[12px] border border-black text-sm text-black"
    } ${fullWidthOnMobile ? "w-full sm:w-auto" : ""}`;


  return (
    <div 
      className={`relative ${fullWidthOnMobile ? "w-full" : "inline-block"} text-left`} 
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className={baseButtonClass}
        style={
          unstyled
            ? { background: "none", border: "none", boxShadow: "none", padding: 0 }
            : fullWidthOnMobile ? { justifyContent: "space-between" } : {}
        }
      >
        <span className="whitespace-nowrap truncate">{label}</span>
        {showIcon && <FaChevronDown className={`w-3 h-3 ml-1 ${open ? "transform rotate-180" : ""}`} />}
      </button>

      {open && (
        <div
          className={`
            absolute ${dropdownStyle.position === "right" ? "right-0" : "left-0"} 
            mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50
            ${dropdownClassName}
          `}
          style={{
            width: dropdownStyle.width,
            minWidth: fullWidthOnMobile ? undefined : "180px",
            maxWidth: "calc(100vw - 32px)"
          }}
        >
          <ul className="py-1 overflow-y-auto max-h-[60vh]">
            {options.map((option, index) => {
              const isObj = typeof option === "object" && option !== null;
              const label = isObj ? option.label : option;
              const icon = isObj ? option.icon : null;
              const value = isObj ? option.value : option;

              return (
                <li
                  key={value || index}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 hover:bg-[#F9E9DD] cursor-pointer flex items-center gap-2"
                >
                  {icon && (
                    <img
                      src={icon}
                      alt="icon"
                      className="w-5 h-5 flex-shrink-0"
                      loading="lazy"
                    />
                  )}
                  <span className="truncate">{label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;