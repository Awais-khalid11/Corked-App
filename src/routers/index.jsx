import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "@pages/Dashboard";
import Settings from "@pages/Settings";
import MainLayouts from "@layouts/MainLayouts";
import NotFound from "@pages/NotFound";
import Dashboard from "@pages/Dashboard"
import WineLevel from "../pages/WineLevel";
import LogLocationBreakdown from "../pages/LogLocationBreakdwon";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="wine-level" element={<WineLevel />} />
        <Route path="log-location-breakdown" element={<LogLocationBreakdown />} />

      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
