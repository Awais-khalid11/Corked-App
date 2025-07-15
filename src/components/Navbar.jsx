import { ReactSVG } from "react-svg";
import DropDownButton from "../components/DropDownButton";

const Navbar = ({ onSettingsClick }) => {
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
      icon: "/assets/icons/icon1b.svg", // from public folder
    },
  ];

  return (
    <div className="bg-white shadow p-4.5 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-2xl font-bold">👋 Welcome Back</h1>

      <div className="flex items-center gap-4">
        {/* Notification Dropdown with Icon */}
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
        />

        {/* Settings */}
        <ReactSVG
          src="/assets/icons/setting.svg"
          className="w-6 h-6 cursor-pointer hover:opacity-80 text-gray-600"
          onClick={onSettingsClick}
        />

        {/* User Profile Section */}
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
