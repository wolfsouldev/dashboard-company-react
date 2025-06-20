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
const LazyProductDetail = lazy(
  () => import("@/pages/dashboard/products/ProductDetail")
);
const LazyProductNew = lazy(
  () => import("@/pages/dashboard/products/NewProduct")
);
const LazyProductEdit = lazy(
  () => import("@/pages/dashboard/products/ProductEdit")
);

export default function App() {
  const isAuth = true;

  if (!isAuth) return <Navigate to={"/login"} />;

  return (
    <TooltipProvider>
      <Routes>
        <Route Component={DashboardContainer} path="/dashboard">
          <Route
            path=""
            element={
              <LoadingPage>
                <LazyOrders />
              </LoadingPage>
            }
          ></Route>
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
            path="products/:id"
            element={
              <LoadingPage>
                <LazyProductDetail />
              </LoadingPage>
            }
          />
          <Route
            path="products/new"
            element={
              <LoadingPage>
                <LazyProductNew />
              </LoadingPage>
            }
          />
          <Route
            path="products/:id/edit"
            element={
              <LoadingPage>
                <LazyProductEdit />
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
