import { ReactSVG } from "react-svg";
import { Link, NavLink } from "react-router-dom";
import LogoSvg from "/assets/images/logo.svg";

const Sidebar = () => {
  const mainNavItems = [
    { id: 1, name: "Dashboard", iconA: "icon1a.svg", iconB: "icon1b.svg", link: "/" },
    { id: 2, name: "Wine Listings", iconA: "icon2a.svg", iconB: "icon2b.svg", link: "/settings" },
    { id: 3, name: "Wine-Level Analytic", iconA: "icon3a.svg", iconB: "icon3b.svg", link: "/wine-level" },
    { id: 4, name: "Log Location Breakdown", iconA: "icon4a.svg", iconB: "icon4b.svg", link: "/log-location" },
    { id: 5, name: "Engagment Summary", iconA: "icon5a.svg", iconB: "icon5b.svg", link: "/engagment-summary" },
    { id: 6, name: "Visitor Breakdown", iconA: "icon6a.svg", iconB: "icon6b.svg", link: "/visitor-breakdown" },
    { id: 7, name: "Wine Club Insights", iconA: "icon7a.svg", iconB: "icon7b.svg", link: "/wine-club" },
    { id: 8, name: "Bench Marking", iconA: "icon8a.svg", iconB: "icon8b.svg", link: "/bench-marking" },
    { id: 9, name: "Instant Report Generator", iconA: "icon9a.svg", iconB: "icon9b.svg", link: "/instant-report" },
  ];

  const logoutItem = { id: 10, name: "Logout", iconA: "logouta.svg", iconB: "logoutb.svg", link: "/logout" };

  return (
    <div className="w-70 text-black h-screen p-5 flex flex-col border-r border-gray-200">
      {/* Logo */}
      <div className="mb-4 flex items-center border-b border-gray-200 pb-4 -mx-5 px-5">
        <Link to="/" className="cursor-pointer">
          <ReactSVG src={LogoSvg} />
        </Link>
      </div>

      {/* Main nav items */}
      <nav className="space-y-2 flex-1 mt-3 pb-4">
        {mainNavItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-colors ${
                isActive ? "font-medium bg-primary text-white" : "hover:bg-white/10 text-black"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <ReactSVG
                  src={`/assets/icons/${isActive ? item.iconA : item.iconB}`}
                  className="mr-3 w-5 h-5"
                />
                <span>{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout Section */}
      <div className="pt-4 mt-4 border-t border-gray-200 -mx-5 px-5">
        <NavLink
          to={logoutItem.link}
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors ${
              isActive ? "font-medium bg-primary text-white" : "hover:bg-white/10 text-black"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <ReactSVG
                src={`/assets/icons/${isActive ? logoutItem.iconA : logoutItem.iconB}`}
                className="mr-3 w-5 h-5"
              />
              <span>{logoutItem.name}</span>
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;    