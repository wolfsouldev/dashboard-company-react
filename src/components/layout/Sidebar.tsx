import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Settings,
  Store,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { getRoutes } from "./routes-link";

export default function SideBar() {
  const { pathname } = useLocation();

  const routes = getRoutes(pathname);
  
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <a
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Store className="size-5 transition-all group-hover:scale-110" />
          </a>
          {routes.map((route) => {
            const { to, label, tooltip, icon: Icon, id, current } = route;

            return (
              <>
                <Tooltip key={id}>
                  <TooltipTrigger asChild>
                    <NavLink
                      to={to}
                      className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
                        current && "text-black bg-accent"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{label}</span>
                    </NavLink>
                  </TooltipTrigger>
                  <TooltipContent side="right">{tooltip}</TooltipContent>
                </Tooltip>
              </>
            );
          })}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Ajustes</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">Ajustes</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </>
  );
}

{
  /* <Tooltip>
<TooltipTrigger asChild>
  <NavLink
    to=""
    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  >
    <Home className="h-5 w-5" />
    <span className="sr-only">Home</span>
  </NavLink>
</TooltipTrigger>
<TooltipContent side="right">Home</TooltipContent>
</Tooltip>
<Tooltip>
<TooltipTrigger asChild>
  <a
    href="#"
    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  >
    <ShoppingCart className="h-5 w-5" />
    <span className="sr-only">Ordenes</span>
  </a>
</TooltipTrigger>
<TooltipContent side="right">Ordenes</TooltipContent>
</Tooltip>
<Tooltip>
<TooltipTrigger asChild>
  <a
    href="#"
    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  >
    <Package className="h-5 w-5" />
    <span className="sr-only">Productos</span>
  </a>
</TooltipTrigger>
<TooltipContent side="right">Productos</TooltipContent>
</Tooltip>
<Tooltip>
<TooltipTrigger asChild>
  <a
    href="#"
    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  >
    <Users2 className="h-5 w-5" />
    <span className="sr-only">Clientes</span>
  </a>
</TooltipTrigger>
<TooltipContent side="right">Clientes</TooltipContent>
</Tooltip>
<Tooltip>
<TooltipTrigger asChild>
  <NavLink
    to="anality"
    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  >
    <LineChart className="h-5 w-5" />
    <span className="sr-only">Análisis</span>
  </NavLink>
</TooltipTrigger>
<TooltipContent side="right">Análisis</TooltipContent>
</Tooltip> */
}
