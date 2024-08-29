import React, { useContext, createContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isAuth, setAuth] = useState(false);
    const login = () => {
        setAuth(true)
    }
    const logout = () => {
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
    console.log(context)
    return context;
}

export { AuthProvider, useAuth}