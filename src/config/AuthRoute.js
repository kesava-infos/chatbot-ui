import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

export const AuthRoute = (props) => {
    const context = useAuth();
    // const isAuth = window?.sessionStorage("isAuth")
    // console.log(isAuth)
    if(context.isAuth){
        return props.children
    }
    return <Navigate to="/" replace />
    
}