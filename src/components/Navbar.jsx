import { ReactSVG } from "react-svg";

const Navbar = () => {
  return (
    <div className="bg-white shadow p-5.5 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-2xl font-bold">👋 Welcome Back</h1>
      
      <div className="flex items-center gap-4">
        {/* Notification */}
        <ReactSVG
          src="/assets/icons/notification.svg"
          className="w-6 h-6 cursor-pointer hover:opacity-80 text-gray-600"
        />
        
        {/* Settings */}
        <ReactSVG
          src="/assets/icons/setting.svg"
          className="w-6 h-6 cursor-pointer hover:opacity-80 text-gray-600"
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