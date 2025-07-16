import { ReactSVG } from "react-svg";
import { useEffect, useState } from "react";

const settingsItems = [
  { id: 1, name: "User Profile", iconA: "/assets/icons/up-a.svg", iconB: "/assets/icons/up-b.svg", key: "profile" },
  { id: 2, name: "Manage Password", iconA: "/assets/icons/mp-a.svg", iconB: "/assets/icons/mp-b.svg", key: "password" },
  { id: 3, name: "Wine Club", iconA: "/assets/icons/wc-a.svg", iconB: "/assets/icons/wc-b.svg", key: "wine" },
  { id: 4, name: "Pricing Plan", iconA: "/assets/icons/pp-a.svg", iconB: "/assets/icons/pp-b.svg", key: "pricing" },
  { id: 5, name: "Notification", iconA: "/assets/icons/notification-a.svg", iconB: "/assets/icons/notification-b.svg", key: "notifications" },
];

const SettingsSidebar = ({ isOpen, onClose, activeItem, setActiveItem }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isCompressed, setIsCompressed] = useState(isMobile && isOpen);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsCompressed(mobile && isOpen);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // init

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const sidebarWidth = isOpen ? (isCompressed ? "w-20" : "w-64") : "w-0";

  return (
    <div className={`h-screen transition-all duration-300 bg-white border-r border-gray-200 overflow-hidden ${sidebarWidth}`}>
      {/* Header */}
      {!isCompressed && isOpen && (
        <div className="p-4 ">
          <h2 className="text-sm font-semibold text-gray-400">Account Settings</h2>
        </div>
      )}

      {/* Navigation */}
      <div className={`p-2 ${isCompressed ? "flex flex-col items-center space-y-2" : ""}`}>
        {settingsItems.map((item) => {
          const isActive = activeItem === item.key;
          const isUserProfile = item.key === "profile";

          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.key)}
              className={`
                flex items-center ${isCompressed ? "justify-center" : "space-x-3"} 
                w-full px-3 py-3 text-left rounded-lg transition-colors mb-2
                ${isActive
                  ? isUserProfile
                    ? "bg-[#F9E9DD] text-black font-medium"
                    : "bg-primary text-white font-medium"
                  : "text-gray-700 hover:bg-[#F9E9DD]"
                }
              `}
              title={isCompressed ? item.name : ""}
            >
              <ReactSVG src={isActive ? item.iconA : item.iconB} className="w-5 h-5" />
              {!isCompressed && <span className="text-sm font-medium">{item.name}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsSidebar;
