// ProtectedRoute.js
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
    const auth = useSelector((state)=> state.auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if (!auth.accessToken) {
            navigate('/login');
        }
    }, [auth.accessToken, navigate])

    return auth.accessToken ? element : null;
};

export default ProtectedRoute;
