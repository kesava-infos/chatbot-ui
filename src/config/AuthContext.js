import React, { useContext, createContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isAuth, setAuth] = useState(false);
    const login = () => {
        window.sessionStorage.setItem("isAuth", true);
        setAuth(true)
    }
    const logout = () => {
        window.sessionStorage.setItem("isAuth", false);
        setAuth(false)
    }
    return <AuthContext.Provider value={{ isAuth, login, logout }}>
        {
            props.children
        }
    </AuthContext.Provider>
}

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth}