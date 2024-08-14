import { NavLink, useLocation } from "react-router-dom";
import { getRoutes } from "./routes-link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui";
import { Package2 } from "lucide-react";

export const SideBarMobile = () => {
  const { pathname } = useLocation();

  const routes = getRoutes(pathname);
  return (
   
      <nav className="grid gap-6 text-lg font-medium">
         <a
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </a>
        {routes.map((route) => {
          const { to, label, tooltip, icon: Icon, id, current } = route;

          return (
            <>
              <Tooltip key={id}>
                <TooltipTrigger asChild>
                  <NavLink
                    to={to}
                    className={`flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground rounded-md p-2 ${
                      current && "text-black bg-accent"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                    <span className="sr-only">{label}</span>
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent side="right">{tooltip}</TooltipContent>
              </Tooltip>
            </>
          );
        })}
      </nav>
  );
};
