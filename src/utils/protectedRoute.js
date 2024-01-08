// ProtectedRoute.js
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated);
    const navigate = useNavigate();

    const currentLocation = useLocation().pathname;
    let [searchParams, setSearchParams] = useSearchParams();


    useEffect(()=>{
        console.log(auth);
        if (!isAuthenticated) {
            navigate('/login');
            setSearchParams({'redirect': currentLocation});
        }
    }, [isAuthenticated, navigate])

    return auth.accessToken ? element : null;
};

export default ProtectedRoute;
