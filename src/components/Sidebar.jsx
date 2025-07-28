import { ReactSVG } from "react-svg";
import Logo1 from "/assets/icons/logo1.svg";
import Logo2 from "/assets/icons/logo2.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useAuth } from "../context/AuthContext"; // Adjust if needed

const adminNavItems = [
  { id: 1, name: "Dashboard", iconA: "/assets/icons/icon1a.svg", iconB: "/assets/icons/icon1b.svg", link: "/dashboard" },
  { id: 2, name: "User Management", iconA: "/assets/icons/uma.svg", iconB: "/assets/icons/umb.svg", link: "/dashboard/user-management" },
  { id: 3, name: "Winery Management", iconA: "/assets/icons/icon2a.svg", iconB: "/assets/icons/icon2b.svg", link: "/dashboard/winery-management" },
  { id: 4, name: "Billing & Subscriptions", iconA: "/assets/icons/billinga.svg", iconB: "/assets/icons/billingb.svg", link: "/dashboard/billing-subscriptions" },
];

const wineryNavItems = [
  { id: 1, name: "Dashboard", iconA: "/assets/icons/icon1a.svg", iconB: "/assets/icons/icon1b.svg", link: "/dashboard" },
  { id: 2, name: "Wine Listings", iconA: "/assets/icons/icon2a.svg", iconB: "/assets/icons/icon2b.svg", link: "/dashboard/wine-listing" },
  { id: 3, name: "Wine-Level Analytic", iconA: "/assets/icons/icon3a.svg", iconB: "/assets/icons/icon3b.svg", link: "/dashboard/wine-level" },
  { id: 4, name: "Log Location Breakdown", iconA: "/assets/icons/icon4a.svg", iconB: "/assets/icons/icon4b.svg", link: "/dashboard/log-location-breakdown" },
  { id: 5, name: "Engagement Summary", iconA: "/assets/icons/icon5a.svg", iconB: "/assets/icons/icon5b.svg", link: "/dashboard/engagement-summary" },
  { id: 6, name: "Visitor Breakdown", iconA: "/assets/icons/icon6a.svg", iconB: "/assets/icons/icon6b.svg", link: "/dashboard/visitor-breakdown" },
  { id: 7, name: "Wine Club Insights", iconA: "/assets/icons/icon7a.svg", iconB: "/assets/icons/icon7b.svg", link: "/dashboard/wine-club" },
  { id: 8, name: "Benchmark Analysis", iconA: "/assets/icons/icon8a.svg", iconB: "/assets/icons/icon8b.svg", link: "/dashboard/bench-marking" },
  { id: 9, name: "Instant Report Generator", iconA: "/assets/icons/icon9a.svg", iconB: "/assets/icons/icon9b.svg", link: "/dashboard/instant-report" },
];

const Sidebar = ({ isCompressed, isMobileOpen = false, onCloseMobile }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;
  const navItems = user.role === "admin" ? adminNavItems : wineryNavItems;

  const sidebarClasses = `
    ${isCompressed ? 'w-20' : 'w-72'}
    text-black h-screen ${isCompressed ? 'p-2' : 'p-5'}
    flex flex-col border-r border-gray-200 bg-white
    transition-all duration-300
    fixed md:relative top-0 left-0 z-40
    ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0 transform md:transform-none
    overflow-y-auto
  `;

  const handleLogout = () => {
    logout();
    onCloseMobile?.();
  };

  return (
    <div className={sidebarClasses}>
      {/* Logo */}
      <div className={`mb-4 border-b border-gray-200 pb-4 ${isCompressed ? '' : '-mx-5 px-5'}`}>
        <div className="flex items-center justify-center">
          <Link to="/" className="flex items-center space-x-2">
            <ReactSVG src={Logo1} className="w-8 h-10" />
            {!isCompressed && <ReactSVG src={Logo2} className="h-6" />}
          </Link>
          {!isCompressed && (
            <button
              onClick={onCloseMobile}
              className="md:hidden text-gray-500 hover:text-black absolute right-5"
            >
              <IoCloseCircleOutline className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      {/* Nav Items */}
      <nav className={`space-y-2 flex-1 mt-3 pb-4 ${isCompressed ? 'px-1' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            end={item.link === "/dashboard" || item.link === "/admin-dashboard"}
            className={({ isActive }) =>
              `flex items-center ${isCompressed ? 'justify-center' : ''} p-3 rounded-lg transition-colors ${
                isActive ? 'font-medium bg-primary text-white' : 'hover:bg-[#F9E9DD] text-black'
              }`
            }
            onClick={onCloseMobile}
            title={isCompressed ? item.name : ''}
          >
            {({ isActive }) => (
              <>
                <ReactSVG src={isActive ? item.iconA : item.iconB} className={`w-5 h-5 ${isCompressed ? '' : 'mr-3'}`} />
                {!isCompressed && <span>{item.name}</span>}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className={`pt-4 mt-4 border-t border-gray-200 ${isCompressed ? '' : '-mx-5 px-5'}`}>
        <button
          onClick={handleLogout}
          className={`flex items-center w-full ${isCompressed ? 'justify-center p-3' : 'p-3'} rounded-lg hover:bg-gray-100 text-black`}
          title={isCompressed ? "Logout" : ""}
        >
          <ReactSVG src="/assets/icons/logoutb.svg" className={`w-5 h-5 ${isCompressed ? '' : 'mr-3'}`} />
          {!isCompressed && <span>Logout</span>}
        </button>
      </div>

      {/* Custom scrollbar styling (added to global CSS would be better) */}
      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 2px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;