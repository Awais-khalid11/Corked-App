 import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNotificationToggle = () => {
    setShowNotifications((prev) => !prev);
    setShowProfileDropdown(false);
  };

  const handleProfileToggle = () => {
    setShowProfileDropdown((prev) => !prev);
    setShowNotifications(false);
  };

  const handleProfileClick = (value) => {
    if (value === "Profile") {
      navigate("/dashboard/settings/profile");
    }
    setShowProfileDropdown(false);
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
          {/* Notification badge */}
          <span className="absolute top-2 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
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

        {/* Profile Dropdown */}
        {showProfileDropdown && (
          <div className={`absolute top-full right-0 mt-2 ${isMobile ? 'w-48' : 'w-56'} bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden`}>
            <ul className="py-2 text-sm text-gray-700">
              {dropdownOptions.map((option) => (
                <li
                  key={option.value}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleProfileClick(option.value)}
                >
                  <ReactSVG src={option.icon} className="w-4 h-4 text-gray-600" />
                  <span>{option.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      {showNotifications && (
  <div className={`absolute top-full right-0 mt-2 ${isMobile ? 'w-72' : 'w-96'} bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden`}>
    
    {/* Notifications List */}
    {[1, 2, 3, 4].map((_, i) => (
      <div key={i}>
        <div className="flex items-start gap-3 px-4 py-3">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Avatar"
            className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full object-cover flex-shrink-0`}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm text-gray-800">Drew Cano</span>
              <span className="text-xs text-gray-500">09:42 AM</span>
            </div>
            <p className="text-sm text-gray-600">marked job #1021 as Completed</p>
          </div>
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
        </div>
        {i < 3 && <div className="border-t border-gray-200" />}
      </div>
    ))}

    {/* Footer */}
    <div className="border-t border-gray-300 bg-gray-50">
      <div className="text-center py-3">
        <button className="text-blue-700 font-medium text-sm hover:underline">
          View All Notifications →
        </button>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default Navbar;