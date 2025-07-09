import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "@pages/Dashboard";
import Settings from "@pages/Settings";
import MainLayouts from "@layouts/MainLayouts";
import NotFound from "@pages/NotFound";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
