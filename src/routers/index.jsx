// Settings pages
import NotFound from "@pages/NotFound";
import Dashboard from "@pages/Dashboard";
import WineClub from "../pages/WineClub";
import Signup from "../pages/Auth/Singup";
import WineLevel from "../pages/WineLevel";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/Auth/LoginPage";
import EmailPage from "../pages/Auth/EmailPage";
import BenchMarking from "../pages/BenchMarking";
import InstantReport from "../pages/InstantReport";
import WineClubb from "../pages/Settings/WineClubb";
import SettingsLayout from "../layouts/SettingsLayout";
import ResetPassword from "../pages/Auth/ResetPassword";
import UserProfile from "../pages/Settings/UserProfile";
import PricingPlan from "../pages/Settings/PricingPlan";
import EngagmentSummary from "../pages/EngagmentSummary";
import VisitorBreakdown from "../pages/VisitorBreakdown";
import Notification from "../pages/Settings/Notification";
import { Navigate, Route, Routes } from "react-router-dom";
import WineListing from "../pages/WineListings/WineListing";
import ManagePassword from "../pages/Settings/ManagePassword";
import WineryManagement from "../pages/admin/WineryManagement/WineryManagement";
import LogLocationBreakdown from "../pages/LogLocationBreakdwon";
import Editprice from "../pages/admin/billing/components/EditPrice";
import ViewDetail from "../pages/WineListings/Components/ViewDetail";
import DetailPages from "../pages/WineListings/Components/DetailPages";
import UserManagement from "../pages/admin/usermanagment/UserManagement";
import CreatePricing from "../pages/admin/billing/components/CreatePrcing";
import UserDetail from "../pages/admin/usermanagment/components/UserDetail";
import LogDetails from "../pages/admin/usermanagment/components/LogDetails";
import BillingSubscriptions from "../pages/admin/billing/BillingSubscriptions";
import BadgeDetails from "../pages/admin/usermanagment/components/BadgeDetails";
import LogDetailsPage from "../pages/admin/usermanagment/components/LogDetailsPage";
import BillingDetails from "../pages/admin/usermanagment/components/BillingDetails";
import Winedetails from "../pages/admin/WineryManagement/components/Winedetails";
import WineryProfileDetail from "../pages/admin/WineryManagement/components/WineryProfileDetail"
import UserProfileDetail from "../pages/admin/WineryManagement/components/UserProfileDetail";

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
       
        <Route path="user-detail/:id" element={<UserDetail />} />
        <Route path="badge-details/:id" element={<BadgeDetails />} />
        <Route path="create-price" element={<CreatePricing />} />
        <Route path="edit-price" element={<Editprice />} />
        <Route path="log-details/:id" element={<LogDetails />} />
        <Route path="activity-log-details/:id" element={<LogDetailsPage />} />
        <Route path="billing-details/:id" element={<BillingDetails />} />
        <Route path="winery-detail/:id" element={<Winedetails />} />
        <Route path="winery-profile-detail" element={<WineryProfileDetail />} />
        <Route path="user-profile-detail" element={<UserProfileDetail />} />







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