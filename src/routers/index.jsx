import NotFound from "@pages/NotFound";
import Dashboard from "@pages/Dashboard";
import WineClub from "../pages/WineClub";
import WineLevel from "../pages/WineLevel";
import MainLayout from "@layouts/MainLayout";
import WineListing from "../pages/WineListings/WineListing";
import BenchMarking from "../pages/BenchMarking";
import InstantReport from "../pages/InstantReport";
import EngagmentSummary from "../pages/EngagmentSummary";
import VisitorBreakdown from "../pages/VisitorBreakdown";
import LogLocationBreakdown from "../pages/LogLocationBreakdwon";

import { Navigate, Route, Routes } from "react-router-dom";

// Settings pages
import SettingsLayout from "@layouts/SettingsLayout";
import UserProfile from "../pages/Settings/UserProfile";  
import ManagePassword from "../pages/Settings/ManagePassword";
import PricingPlan from "../pages/Settings/PricingPlan";
import Notification from "../pages/Settings/Notification";
import WineClubb from "../pages/Settings/WineClubb"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="wine-level" element={<WineLevel />} />
        <Route path="engagment-summary" element={<EngagmentSummary />} />
        <Route path="bench-marking" element={<BenchMarking />} />
        <Route path="log-location-breakdown" element={<LogLocationBreakdown />} />
        <Route path="visitor-breakdown" element={<VisitorBreakdown />} />
        <Route path="wine-club" element={<WineClub />} />
        <Route path="instant-report" element={<InstantReport />} />
        <Route path="wine-listing" element={<WineListing />} />

        {/* Settings Nested Routes */}
        <Route path="settings" element={<SettingsLayout />}>
          <Route index element={<UserProfile />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="password" element={<ManagePassword />} />
          <Route path="pricing" element={<PricingPlan />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="wine" element={<WineClubb />} />

        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
