import { TooltipProvider } from "./components/ui/tooltip";

import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { lazy } from "react";
import { LoadingPage } from "./components/core/LoadingPage";
import DashboardContainer from "./components/container/DashboardContainer";

const LazyOrders = lazy(() => import("@/pages/dashboard/home/Page"));
const LazyProducts = lazy(() => import("@/pages/dashboard/products/Page"));
const LazyClients = lazy(() => import("@/pages/dashboard/clients/Page"));
const LazyAnality = lazy(() => import("@/pages/dashboard/Chart"));

export default function App() {
  const isAuth = true;

  if (!isAuth) return <Navigate to={"/login"} />;

  return (
    <TooltipProvider>
      <Routes>
        <Route Component={DashboardContainer} path="/dashboard">
          <Route
            path="orders"
            element={
              <LoadingPage>
                <LazyOrders />
              </LoadingPage>
            }
          ></Route>
          <Route
            path="products"
            element={
              <LoadingPage>
                <LazyProducts />
              </LoadingPage>
            }
          />
          <Route
            path="clients"
            element={
              <LoadingPage>
                <LazyClients />
              </LoadingPage>
            }
          />
          <Route
            path="anality"
            element={
              <LoadingPage>
                <LazyAnality />
              </LoadingPage>
            }
          />
        </Route>
        <Route Component={Login} path="/"></Route>
        <Route Component={Login} path="/login"></Route>

        <Route element={<div className="mx-auto ">404</div>} path="*"></Route>
      </Routes>
    </TooltipProvider>
  );
}
