import { Outlet } from "react-router-dom";
import DashboardSideBar from "../components/DashboardSideBar";


function DashboardLayout() {
  return (
    <div className="flex border-t-4">
      <DashboardSideBar />
      <Outlet />
    </div>
  )
}

export default DashboardLayout;
