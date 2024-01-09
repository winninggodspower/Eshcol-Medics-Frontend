// ProtectedRoute.js
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, useSearchParams, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated);
    const navigate = useNavigate();

    const currentLocation = useLocation().pathname;
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        if (!isAuthenticated) {
            navigate('/login');
            setSearchParams({'redirect': currentLocation});
        }
    }, [isAuthenticated])

    return isAuthenticated ? element : null;
};

export default ProtectedRoute;
