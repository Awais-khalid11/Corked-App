import Settings from "@pages/Settings";
import NotFound from "@pages/NotFound";
import Dashboard from "@pages/Dashboard";
import WineClub from "../pages/WineClub";
import WineLevel from "../pages/WineLevel";
import MainLayout from "@layouts/MainLayout";
import DetailPages from "../pages/WineListings/Components/DetailPages";
import WineListing from "../pages/WineListings/WineListing";
import BenchMarking from "../pages/BenchMarking";
import InstantReport from "../pages/InstantReport";
import EngagmentSummary from "../pages/EngagmentSummary";
import VisitorBreakdown from "../pages/VisitorBreakdown";
import { Route, Routes } from "react-router-dom";
import LogLocationBreakdown from "../pages/LogLocationBreakdwon";
import ViewDetail from "../pages/WineListings/Components/ViewDetail";
import LoginPage from "../pages/LoginPage";

const Routers = () => {
  return (
    <Routes>
     
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="wine-level" element={<WineLevel />} />
        <Route path="engagment-summary" element={<EngagmentSummary />} />
        <Route path="bench-marking" element={<BenchMarking />} />
        <Route path="log-location-breakdown" element={<LogLocationBreakdown />} />
        <Route path="visitor-breakdown" element={<VisitorBreakdown />} />
        <Route path="wine-club" element={<WineClub />} />
        <Route path="instant-report" element={<InstantReport />} />
        <Route path="wine-listing" element={<WineListing />} />
        <Route path="wine-detail-page" element={<DetailPages />} />
        <Route path="view-detail/:id" element={<ViewDetail />} />
      </Route>

      
      <Route path="/login-page" element={<LoginPage />} />

      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
