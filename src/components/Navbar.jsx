import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    icon: "/assets/icons/notification-b.svg",
  },
];

const Navbar = ({ onSettingsClick, onToggleSidebar }) => {
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleNotificationToggle = () => {
    setShowNotifications((prev) => !prev);
    setShowProfileDropdown(false); // Close profile dropdown
  };

  const handleProfileToggle = () => {
    setShowProfileDropdown((prev) => !prev);
    setShowNotifications(false); // Close notifications
  };

  const handleProfileClick = (value) => {
    if (value === "Profile") {
      navigate("/dashboard/settings/profile");
    }
    // Handle others as needed
  };

  return (
    <div className="bg-white shadow p-4.5 flex justify-between items-center border-b border-gray-200">
      {/* Left: Welcome */}
      <h1 className="text-2xl font-bold hidden md:block">👋 Welcome Back</h1>

      {/* Right Side */}
      <div className="flex items-center gap-4 ml-auto relative">
        {/* Notification Icon */}
        <div
          className="p-1.5 flex items-center justify-center cursor-pointer relative"
          onClick={handleNotificationToggle}
        >
          <ReactSVG
            src="/assets/icons/notification.svg"
            className="w-6 h-6 text-gray-600 hover:opacity-80"
          />
        </div>

        {/* Settings Icon */}
        <ReactSVG
          src="/assets/icons/setting.svg"
          className="w-6 h-6 cursor-pointer hover:opacity-80 text-gray-600"
          onClick={onSettingsClick}
        />

        {/* Profile */}
        <div className="flex items-center gap-3 ml-2 relative">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            onClick={handleProfileToggle}
          />
          <div className="flex-col hidden sm:flex">
            <span className="text-sm font-semibold text-gray-900">Blueberry Hill</span>
            <span className="text-xs text-gray-500">Winery</span>
          </div>
        </div>

        {/* Hamburger */}
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

        {/* Profile Dropdown (with icons, placed beside image) */}
        {showProfileDropdown && (
          <div className="absolute top-full right-0 mt-4 w-[220px] bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
            <ul className="py-2 text-sm text-gray-700">
              {dropdownOptions.map((option) => (
                <li
                  key={option.value}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleProfileClick(option.value)}
                >
                  <ReactSVG src={option.icon} className="w-4 h-4 text-gray-600" />
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Notification Dropdown (placed right of profile image) */}
        {showNotifications && (
          <div className="absolute top-full right-0 mt-4 w-[360px] bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
            <div className="p-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex items-start gap-3 py-2  ">
                  <img
                    src="https://i.pravatar.cc/40?img=3"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-semibold text-sm">Drew Cano</span>
                      <span className="text-xs text-gray-500">09:42 AM</span>
                    </div>
                    <p className="text-sm text-gray-700">marked job #1021 as Completed</p>
                  </div>
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-1" />
                </div>
              ))}
            </div>
            <div className="text-center py-2 ">
              <button className="text-blue-600 font-medium text-sm hover:underline">
                View All Notifications →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
