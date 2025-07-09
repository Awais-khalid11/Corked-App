import { Navigate, Route, Routes } from "react-router-dom";
import Settings from "@pages/Settings";
import MainLayout from "@layouts/MainLayout";
import NotFound from "@pages/NotFound";
import Dashboard from "@pages/Dashboard"
import WineLevel from "../pages/WineLevel";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="wine-level" element={<WineLevel />} />

      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
