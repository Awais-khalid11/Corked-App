import Settings from "@pages/Settings";
import NotFound from "@pages/NotFound";
import Dashboard from "@pages/Dashboard"
import WineLevel from "../pages/WineLevel";
import MainLayout from "@layouts/MainLayout";
import BenchMarking from "../pages/BenchMarking";
import EngagmentSummary from "../pages/EngagmentSummary";
import { Navigate, Route, Routes } from "react-router-dom";
import LogLocationBreakdown from "../pages/LogLocationBreakdwon";


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

      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};


export default Routers;