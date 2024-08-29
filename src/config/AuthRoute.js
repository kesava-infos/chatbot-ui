import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

export const AuthRoute = (props) => {
    const context = useAuth();
    if(context.isAuth){
        return props.children
    }
    return <Navigate to="/" replace />
    
}