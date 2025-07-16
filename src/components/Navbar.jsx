import { ReactSVG } from "react-svg";
import DropDownButton from "../components/DropDownButton";

const Navbar = ({ onSettingsClick, onToggleSidebar }) => {
  const handleDropdownSelect = (option) => {
    if (option.value === "Profile") {
      console.log("Profile selected");
      // Navigate if needed
    }
  };

  const dropdownOptions = [
    {
      label: "Profile",
      value: "Profile",
      icon: "/assets/icons/icon1b.svg",
    },
    {
      label: "Messages",
      value: "Message",
      icon: "/assets/icons/icon5b.svg",
    },
    {
      label: "Recent",
      value: "Recent",
      icon: "/assets/icons/notification.svg",
    },
  ];

  return (
    <div className="bg-white shadow p-4.5 flex justify-between items-center border-b border-gray-200">
      {/* Hamburger for mobile */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-gray-600 hover:text-black"
          onClick={onToggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <h1 className="text-2xl font-bold hidden md:block">👋 Welcome Back</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification Dropdown */}
        <DropDownButton
          label={
            <ReactSVG
              src="/assets/icons/notification.svg"
              className="w-6 h-6 cursor-pointer hover:opacity-80 text-gray-600"
            />
          }
          options={dropdownOptions}
          onSelect={handleDropdownSelect}
          unstyled
          showIcon={false}
          dropdownClassName="w-100 h-100 t py-3 text-base"
        />

        {/* Settings */}
        <ReactSVG
          src="/assets/icons/setting.svg"
          className="w-6 h-6 cursor-pointer hover:opacity-80 text-gray-600"
          onClick={onSettingsClick}
        />

        {/* Profile */}
        <div className="flex items-center gap-3 ml-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">Blueberry Hill</span>
            <span className="text-xs text-gray-500">Winery</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navbar;