import NotFound from "@pages/NotFound";
import Dashboard from "@pages/Dashboard";
import WineClub from "../pages/WineClub";
import WineLevel from "../pages/WineLevel";
import MainLayout from "../layouts/MainLayout";
import DetailPages from "../pages/WineListings/Components/DetailPages";
import WineListing from "../pages/WineListings/WineListing";
import BenchMarking from "../pages/BenchMarking";
import InstantReport from "../pages/InstantReport";
import EngagmentSummary from "../pages/EngagmentSummary";
import VisitorBreakdown from "../pages/VisitorBreakdown";
import LogLocationBreakdown from "../pages/LogLocationBreakdwon";
import ViewDetail from "../pages/WineListings/Components/ViewDetail";
import LoginPage from "../pages/Login Folder/LoginPage";
import EmailPage from "../pages/Login Folder/EmailPage";
import ResetPassword from "../pages/Login Folder/ResetPassword";
import Signup from "../pages/Login Folder/Singup";

import { Navigate, Route, Routes } from "react-router-dom";

// Settings pages
import SettingsLayout from "../layouts/SettingsLayout";
import UserProfile from "../pages/Settings/UserProfile";  
import ManagePassword from "../pages/Settings/ManagePassword";
import PricingPlan from "../pages/Settings/PricingPlan";
import Notification from "../pages/Settings/Notification";
import WineClubb from "../pages/Settings/WineClubb";

import UserManagement from "../pages/admin/UserManagement";
import WineryManagement from "../pages/admin/WineryManagement";
import BillingSubscriptions from "../pages/admin/BillingSubscriptions";
import BenchmarkInsights from "../pages/admin/BenchmarkInsights";
import ReportsExports from "../pages/admin/ReportsExports";


const Routers = () => {
  return (
    <Routes>
      {/* Default Route to Login */}
     <Route path="/" element={<Navigate to="/login-page" replace />} />

{/* Public Auth Routes */}
<Route path="/login-page" element={<LoginPage />} />
<Route path="/email-page" element={<EmailPage />} />
<Route path="/reset-password" element={<ResetPassword />} />
<Route path="/signup-page" element={<Signup />} />

{/* ✅ Admin Dashboard Route – outside MainLayout */}

<Route path="/dashboard" element={<MainLayout />}>
  {/* Shared Dashboard Page */}
  <Route index element={<Dashboard />} />

  {/* Winery Pages */}
  <Route path="wine-level" element={<WineLevel />} />
  <Route path="engagement-summary" element={<EngagmentSummary />} />
  <Route path="bench-marking" element={<BenchMarking />} />
  <Route path="log-location-breakdown" element={<LogLocationBreakdown />} />
  <Route path="visitor-breakdown" element={<VisitorBreakdown />} />
  <Route path="wine-club" element={<WineClub />} />
  <Route path="instant-report" element={<InstantReport />} />
  <Route path="wine-listing" element={<WineListing />} />
  <Route path="wine-detail-page" element={<DetailPages />} />
  <Route path="view-detail/:id" element={<ViewDetail />} />

  {/* Admin Pages */}
  <Route path="user-management" element={<UserManagement />} />
  <Route path="winery-management" element={<WineryManagement />} />
  <Route path="billing-subscriptions" element={<BillingSubscriptions />} />
  <Route path="benchmark-insights" element={<BenchmarkInsights />} />
  <Route path="reports-exports" element={<ReportsExports />} />

  {/* Settings Pages */}
  <Route path="settings" element={<SettingsLayout />}>
    <Route index element={<UserProfile />} />
    <Route path="profile" element={<UserProfile />} />
    <Route path="password" element={<ManagePassword />} />
    <Route path="pricing" element={<PricingPlan />} />
    <Route path="notifications" element={<Notification />} />
    <Route path="wine" element={<WineClubb />} />
  </Route>
</Route>

      {/* Catch-all for invalid URLs */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
