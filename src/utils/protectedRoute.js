// ProtectedRoute.js
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
    const auth = useSelector((state)=> state.auth);
    const navigate = useNavigate();

    const currentLocation = useLocation().pathname;
    let [searchParams, setSearchParams] = useSearchParams();


    useEffect(()=>{
        if (!auth.accessToken) {
            navigate('/login');
            setSearchParams({'redirect': currentLocation});
        }
    }, [auth.accessToken, navigate])

    return auth.accessToken ? element : null;
};

export default ProtectedRoute;
