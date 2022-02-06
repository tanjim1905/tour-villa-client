import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    return user.email ? children : <Navigate to="/signup" />
};

export default PrivateRoute;