// Sidebar.jsx
import { ReactSVG } from "react-svg";
import Logo1 from "/assets/icons/logo1.svg";
import Logo2 from "/assets/icons/logo2.svg";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { id: 1, name: "Dashboard", iconA: "/assets/icons/icon1a.svg", iconB: "/assets/icons/icon1b.svg", link: "/" },
  { id: 2, name: "Wine Listings", iconA: "/assets/icons/icon2a.svg", iconB: "/assets/icons/icon2b.svg", link: "/wine-listing" },
  { id: 3, name: "Wine-Level Analytic", iconA: "/assets/icons/icon3a.svg", iconB: "/assets/icons/icon3b.svg", link: "/wine-level" },
  { id: 4, name: "Log Location Breakdown", iconA: "/assets/icons/icon4a.svg", iconB: "/assets/icons/icon4b.svg", link: "/log-location-breakdown" },
  { id: 5, name: "Engagement Summary", iconA: "/assets/icons/icon5a.svg", iconB: "/assets/icons/icon5b.svg", link: "/engagment-summary" },
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

const Sidebar = ({ isCompressed }) => {
  return (
    <div className={`${isCompressed ? 'w-20' : 'w-72'} text-black h-screen ${isCompressed ? 'p-2' : 'p-5'} flex flex-col  border-gray-200 bg-white transition-all duration-300`}>

      {/* Logo Section */}
    <div className={`mb-4 border-b border-gray-200 pb-4 ${isCompressed ? '' : '-mx-5 px-5'}`}>
  <Link
    to="/"
    className={`cursor-pointer flex ${isCompressed ? 'justify-center' : 'justify-center items-center space-x-2'}`}
  >
    <ReactSVG src={Logo1} className="w-8 h-10" />
    {!isCompressed && <ReactSVG src={Logo2} className="h-6" />}
  </Link>
</div>


      {/* Navigation Items */}
      <nav className={`space-y-2 flex-1 mt-3 pb-4 ${isCompressed ? 'px-1' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center ${isCompressed ? 'justify-center' : ''} p-3 rounded-lg transition-colors ${isActive
                ? 'font-medium bg-primary text-white'
                : 'hover:bg-[#F9E9DD] text-black'
              }`
            }

            title={isCompressed ? item.name : ''}
          >
            {({ isActive }) => (
              <>
                <ReactSVG
                  src={isActive ? item.iconA : item.iconB}
                  className={`w-5 h-5 ${isCompressed ? '' : 'mr-3'}`}
                />
                {!isCompressed && <span>{item.name}</span>}
              </>
            )}
          </NavLink>
        ))}
      </nav>


      {/* Logout */}
      <div className={`pt-4 mt-4 border-t border-gray-200 ${isCompressed ? '' : '-mx-5 px-5'}`}>
        <NavLink
          to={logoutItem.link}
          className={({ isActive }) =>
            `flex items-center ${isCompressed ? 'justify-center p-3' : 'p-3'} rounded-lg transition-colors ${isActive ? "font-medium bg-primary text-white" : "hover:bg-gray-100 text-black"
            }`
          }
          title={isCompressed ? logoutItem.name : ''}
        >
          {({ isActive }) => (
            <>
              <ReactSVG
                src={isActive ? logoutItem.iconA : logoutItem.iconB}
                className={`w-5 h-5 ${isCompressed ? '' : 'mr-3'}`}
              />
              {!isCompressed && <span>{logoutItem.name}</span>}
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
};


export default Sidebar;