import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileOnlyFooter from "../components/Footer/MobileOnlyFooter";
import excludeUrl from "../data/excludeUrl";


function RootLayout() {
    let location = useLocation()
    return (
        <>
            <Navbar />
            <Outlet />
            {!excludeUrl.includes(location.pathname) &&
                <MobileOnlyFooter />
            }
        </>
    )
}

export default RootLayout;