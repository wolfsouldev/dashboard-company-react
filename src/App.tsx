import { Orders } from "./pages/dashboard/home/Page";
import { TooltipProvider } from "./components/ui/tooltip";

import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import DashboardContainer from "./components/core/container/DashboardContainer";
import { Charts } from "./pages/dashboard/Chart";
import { Products } from "./pages/dashboard/products/Page";
import { ClientPage } from "./pages/dashboard/clients/Page";

export default function App() {
  const isAuth = true;

  if (!isAuth) return <Navigate to={"/login"} />;

  return (
    <TooltipProvider>
      <Routes>
        <Route Component={DashboardContainer} path="/dashboard">
          <Route path="orders" Component={Orders}></Route>
          <Route path="clients" Component={ClientPage}></Route>
          <Route path="anality" Component={Charts}></Route>
          <Route path="products" Component={Products}></Route>
        </Route>
        <Route Component={Login} path="/"></Route>
        <Route Component={Login} path="/login"></Route>

        <Route element={<div className="mx-auto ">404</div>} path="*"></Route>
      </Routes>
    </TooltipProvider>
  );
}
