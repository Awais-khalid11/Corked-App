import { Outlet } from "react-router-dom";

const SettingsLayout = () => {
  return (
    <div className="p-4 bg-[#F6F6F6] min-h-screen">
      <Outlet />
    </div>
  );
};

export default SettingsLayout;
