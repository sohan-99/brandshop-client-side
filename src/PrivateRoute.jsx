/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    {
        const { user, loading } = useContext(AuthContext);
        const location = useLocation();
        // console.log(location.pathname);
    
        if (loading) {
            return <span className="loading loading-dots loading-lg"></span>;
        }
        if (user) {
            return children;
        }
        return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;