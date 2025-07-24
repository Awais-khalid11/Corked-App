import { ReactSVG } from "react-svg";
import DropDownButton from "../components/DropDownButton";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSettingsClick, onToggleSidebar }) => {
  const navigate = useNavigate();

  const handleDropdownSelect = (option) => {
    if (option.value === "Profile") {
      navigate("/dashboard/settings/user-profile");
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

  const handleProfileClick = () => {
    navigate("/dashboard/settings/profile");
  };

  return (
    <div className="bg-white shadow p-4.5 flex justify-between items-center border-b border-gray-200">
      {/* Left: Logo or Welcome */}
      <h1 className="text-2xl font-bold hidden md:block">👋 Welcome Back</h1>

      {/* Right: Hamburger, Notifications, Settings, Profile */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Notification Dropdown */}
        <DropDownButton
         label={
  <div className="p-1.5 flex items-center justify-center">
    <ReactSVG
      src="/assets/icons/notification.svg"
      className="w-6 h-6 text-gray-600 hover:opacity-80"
    />
  </div>
}

          options={dropdownOptions}
          onSelect={handleDropdownSelect}
          unstyled
          showIcon={false}
          dropdownClassName="
            w-max max-w-[90vw]
            max-h-[400px]
            overflow-y-auto
            scrollbar-thin scrollbar-thumb-gray-300
            bg-white rounded-md shadow-md text-base p-0
          "
        />

        {/* Settings */}
        <ReactSVG
          src="/assets/icons/setting.svg"
          className="w-6 h-6 cursor-pointer hover:opacity-80 text-gray-600"
          onClick={onSettingsClick}
        />

        {/* Profile */}
        <div
          className="flex items-center gap-3 ml-2 cursor-pointer"
          onClick={handleProfileClick}
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-col hidden sm:flex">
            <span className="text-sm font-semibold text-gray-900">Blueberry Hill</span>
            <span className="text-xs text-gray-500">Winery</span>
          </div>
        </div>

        {/* Hamburger (Only on mobile, aligned right) */}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
