import { ReactSVG } from "react-svg";

const settingsItems = [
  {
    id: 1,
    name: "User Profile",
    iconA: "/assets/icons/up-a.svg",
    iconB: "/assets/icons/up-b.svg",
    key: "profile"
  },
  {
    id: 2,
    name: "Manage Password",
    iconA: "/assets/icons/mp-a.svg",
    iconB: "/assets/icons/mp-b.svg",
    key: "password"
  },
  {
    id: 3,
    name: "Wine Club",
    iconA: "/assets/icons/wc-a.svg",
    iconB: "/assets/icons/wc-b.svg",
    key: "wine"
  },
  {
    id: 4,
    name: "Pricing Plan",
    iconA: "/assets/icons/pp-a.svg",
    iconB: "/assets/icons/pp-b.svg",
    key: "pricing"
  },
  {
    id: 5,
    name: "Notification",
    iconA: "/assets/icons/notification-a.svg",
    iconB: "/assets/icons/notification-b.svg",
    key: "notifications"
  },
];

const SettingsSidebar = ({ isOpen, onClose, activeItem, setActiveItem }) => {
  return (
    <div className={`${isOpen ? 'w-64' : 'w-0'} bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden h-screen`}>
      {/* Header */}
      <div className="p-4 border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-400">Account Settings</h2>
         
        </div>
      </div>

      {/* Navigation Items */}
      <div className="p-2">
        {settingsItems.map((item) => {
          const isActive = activeItem === item.key;
          const isUserProfile = item.key === "profile";

          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.key)}
              className={`w-full flex items-center space-x-3 px-3 py-3 text-left rounded-lg transition-colors mb-2 ${
                isActive
                  ? isUserProfile
                    ? 'bg-[#F9E9DD] text-black font-medium'
                    : 'bg-primary text-white font-medium'
                  : 'text-gray-700 hover:bg-[#F9E9DD]'
              }`}
            >
              <ReactSVG
                src={isActive ? item.iconA : item.iconB}
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsSidebar;
