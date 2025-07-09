import { FaHome, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { id: 1, name: "Home", icon: FaHome, link: "/" },
    { id: 2, name: "Settings", icon: FaCog, link: "/settings" },
  ];

  return (
    <div className="w-64 bg-primary text-white h-screen p-5 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg  ${
                  isActive ? "bg-white/20 font-medium" : "hover:bg-white/10"
                }`
              }
            >
              <Icon className="mr-3" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="pt-4 border-t border-white/20">
        <div className="text-sm text-white/80">User Name</div>
      </div>
    </div>
  );
};

export default Sidebar;
