import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import SettingsSidebar from "../components/SettingSidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const MainLayouts = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isSettingsOpen, setIsSettingsOpen] = useState(location.pathname.startsWith("/settings"));
  const [activeSettingItem, setActiveSettingItem] = useState("profile");
  const [showSidebar, setShowSidebar] = useState(true);

  const handleSettingsClick = () => {
    // Toggle the settings open state
    setIsSettingsOpen(prev => !prev);
    
    // If opening, navigate to profile settings
    if (!isSettingsOpen) {
      setActiveSettingItem("profile");
      navigate("/dashboard/settings/profile");
    } else {
      // If closing, navigate back to dashboard
      navigate("/dashboard");
    }
  };

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
    navigate("/");
  };

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    if (!location.pathname.startsWith("/dashboard/settings")) {
      setIsSettingsOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (Responsive) */}
      <div
        className={`
          fixed z-40 md:static h-full transition-transform duration-300
          ${showSidebar ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar
          isCompressed={isSettingsOpen}
          isMobileOpen={showSidebar}
          onCloseMobile={() => setShowSidebar(false)}
        />
      </div>

      {/* Settings Sidebar */}
      <SettingsSidebar
        isOpen={isSettingsOpen}
        onClose={handleSettingsClose}
        activeItem={activeSettingItem}
        setActiveItem={(key) => {
          setActiveSettingItem(key);
          navigate(`/dashboard/settings/${key}`);
        }}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar
          onSettingsClick={handleSettingsClick}
          onToggleSidebar={toggleSidebar}
        />
        <main className="p-4 overflow-y-auto flex-1 bg-[#F6F6F6]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayouts;