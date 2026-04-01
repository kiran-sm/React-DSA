import { Outlet } from "react-router-dom";
import SideNavigationBar from "./SideNavigationBar";

export default function Layout() {
  return (
    <div className="flex  ">
      <SideNavigationBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
