import { ReactSVG } from "react-svg";
import { Link, NavLink } from "react-router-dom";
import LogoSvg from "/assets/images/logo.svg";

const navItems = [
  { id: 1, name: "Dashboard", iconA: "/assets/icons/icon1a.svg", iconB: "/assets/icons/icon1b.svg", link: "/" },
  { id: 2, name: "Wine Listings", iconA: "/assets/icons/icon2a.svg", iconB: "/assets/icons/icon2b.svg", link: "/wine-listing" },
  { id: 3, name: "Wine-Level Analytic", iconA: "/assets/icons/icon3a.svg", iconB: "/assets/icons/icon3b.svg", link: "/wine-level" },
  { id: 4, name: "Log Location Breakdown", iconA: "/assets/icons/icon4a.svg", iconB: "/assets/icons/icon4b.svg", link: "/log-location-breakdown" },
  { id: 5, name: "Engagment Summary", iconA: "/assets/icons/icon5a.svg", iconB: "/assets/icons/icon5b.svg", link: "/engagment-summary" },
  { id: 6, name: "Visitor Breakdown", iconA: "/assets/icons/icon6a.svg", iconB: "/assets/icons/icon6b.svg", link: "/visitor-breakdown" },
  { id: 7, name: "Wine Club Insights", iconA: "/assets/icons/icon7a.svg", iconB: "/assets/icons/icon7b.svg", link: "/wine-club" },
  { id: 8, name: "Bench Marking", iconA: "/assets/icons/icon8a.svg", iconB: "/assets/icons/icon8b.svg", link: "/bench-marking" },
  { id: 9, name: "Instant Report Generator", iconA: "/assets/icons/icon9a.svg", iconB: "/assets/icons/icon9b.svg", link: "/instant-report" },
];


const logoutItem = {
  id: 10,
  name: "Logout",
  iconA: "/assets/icons/logoutb.svg",
  iconB: "/assets/icons/logoutb.svg",
  link: "/login-page",
};

const Sidebar = () => {
  return (
    <div className="w-72 text-black h-screen p-5 flex flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="mb-4 flex items-center border-b border-gray-200 pb-4 -mx-5 px-5">
        <Link to="/" className="cursor-pointer">
          <ReactSVG src={LogoSvg} />
        </Link>
      </div>

      {/* Main nav items */}
      <nav className="space-y-2 flex-1 mt-3 pb-4 ">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-colors ${
                isActive ? "font-medium bg-primary text-white" : "hover:bg-gray-100 text-black"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <ReactSVG
                  src={isActive ? item.iconA : item.iconB}
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
  <button
    onClick={() => {
      // 1. Clear auth token/localStorage/session
      localStorage.removeItem("token"); // or whatever your key is

      // 2. Redirect to login page
      window.location.href = "/login-page";
    }}
    className="w-full flex items-center p-3 rounded-lg transition-colors hover:bg-gray-100 text-black"
  >
    <ReactSVG
      src={logoutItem.iconB}
      className="mr-3 w-5 h-5"
    />
    <span>{logoutItem.name}</span>
  </button>
</div>

    </div>
  );
};

export default Sidebar;
