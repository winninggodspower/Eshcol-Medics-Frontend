import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileOnlyFooter from "../components/Footer/MobileOnlyFooter";


function RootLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <MobileOnlyFooter/>
        </>
    )
}

export default RootLayout;