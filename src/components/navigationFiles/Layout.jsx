import { Outlet } from "react-router-dom";
import SideNavigationBar from "./SideNavigationBar";

export default function Layout() {
  return (
    <div className="flex  ">
      <SideNavigationBar />
      <div className="flex flex-col items-center gap-4 mt-10 w-full">
        <Outlet />
      </div>
    </div>
  );
}
