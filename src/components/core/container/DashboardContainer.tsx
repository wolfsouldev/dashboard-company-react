import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../layout/HeaderAdmin";
import SideBar from "../../layout/Sidebar";

export default function DashboardContainer() {
  return (
    <>
      <section className="flex min-h-screen   flex-col bg-muted/40">
        <SideBar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <HeaderAdmin />
          <main className=" w-[95vw] px-5">
            <Outlet />
          </main>
        </div>
      </section>
    </>
  );
}
