import React, { useState , useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SettingsSidebar from "../components/SettingSidebar";

const MainLayouts = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isSettingsOpen, setIsSettingsOpen] = useState(location.pathname.startsWith("/settings"));
  const [activeSettingItem, setActiveSettingItem] = useState("profile");

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
    setActiveSettingItem("profile");
    navigate("/settings/profile");
  };

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
    // Optionally navigate back to dashboard or previous page
    navigate("/");
  };
useEffect(() => {
    if (!location.pathname.startsWith("/settings")) {
      setIsSettingsOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="flex h-screen">
      {/* Main Sidebar - compressed when settings is open */}
      <Sidebar isCompressed={isSettingsOpen} />

      {/* Settings Sidebar */}
      <SettingsSidebar
        isOpen={isSettingsOpen}
        onClose={handleSettingsClose}
        activeItem={activeSettingItem}
        setActiveItem={(key) => {
          setActiveSettingItem(key);
          navigate(`/settings/${key}`);
        }}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar onSettingsClick={handleSettingsClick} />
        <main className="p-4 overflow-y-auto flex-1 bg-[#F6F6F6]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayouts;
