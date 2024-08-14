import { Home, LineChart, Package, ShoppingCart, Users2 } from "lucide-react";

export const getRoutes = (pathname : string)=>[
    {
      id: 1,
      label: "Home",
      tooltip: "Home",
      to: "",
      icon: Home,
      current : pathname.endsWith("dashboard")
    },
    {
      id: 2,
      label: "Ordenes",
      tooltip: "Ordenes",
      to: "orders",
      icon: ShoppingCart,
      current : pathname.includes("orders")
    },
    {
      id: 3,
      label: "Productos",
      tooltip: "Productos",
      to: "products",
      icon: Package,
      current : pathname.includes("products")
    },
    {
      id: 4,
      label: "Clientes",
      tooltip: "Clientes",
      to: "clients",
      icon: Users2,
      current : pathname.includes("client")
    },
    {
      id: 5,
      label: "Analítica",
      tooltip: "Analítica",
      to: "anality",
      icon: LineChart,
      current : pathname.includes("anality")
    },
  ];