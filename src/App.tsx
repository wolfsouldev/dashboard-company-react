import { Dashboard } from "./pages/dashboard/Dasboard";
import { TooltipProvider } from "./components/ui/tooltip";

import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import DashboardContainer from "./components/core/container/Dashboard-container";
import { Charts } from "./pages/dashboard/Chart";

export default function App() {
  const isAuth = true;

  if (!isAuth) return <Navigate to={"/login"} />;

  return (
    <TooltipProvider>
      <Routes>
        <Route Component={DashboardContainer} path="/dashboard">
          <Route path="" Component={Dashboard}></Route>
          <Route path="anality" Component={Charts}></Route>
        </Route>
        <Route Component={Login} path="/"></Route>
        <Route Component={Login} path="/login"></Route>

        <Route element={<div className="mx-auto ">404</div>} path="*"></Route>
      </Routes>
    </TooltipProvider>
  );
}
