import {
  PanelLeft,
  Users2,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ModeToggle } from "../core/ModeToggle";
import { SideBarMobile } from "./SiderbarMobile";

export default function HeaderAdmin() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
         <SideBarMobile/>
        </SheetContent>
      </Sheet>

      <div className="relative ml-auto flex-1 md:grow-0">
      <ModeToggle/>

      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>

          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            {/* <img
              src={Users2}
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            /> */}
            <Users2/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Mi cuenta </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Ajustes</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
