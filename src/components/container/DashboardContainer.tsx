import { Outlet } from "react-router-dom";
import HeaderAdmin from "../layout/HeaderAdmin";
import SideBar from "../layout/Sidebar";

export default function DashboardContainer() {
  return (
    <>
      <section className="flex  flex-col bg-muted/40 min-h-screen inset-y-0 ">
        <SideBar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <HeaderAdmin />
          <main className=" px-8  ">
            <Outlet />
          </main>
        </div>
      </section>
    </>
  );
}
