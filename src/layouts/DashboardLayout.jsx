import { Outlet } from "react-router-dom";
import DashboardSideBar from "../components/DashboardSideBar";


function DashboardLayout() {
  const openSideBar = ()=>{
    console.log('open sidebar');
    document.querySelector('aside').classList.remove('-translate-x-full')
  }

  return (
    <div className="flex border-t-4 relative">
      <DashboardSideBar />
      <Outlet />
      <div className="absolute top-0 flex justify-center items-center mt-[6px] w-12 h-12 bg-secondary text-white rounded-[0px_24px_24px_0px] md:hidden" onClick={openSideBar}>
        <svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export default DashboardLayout;
