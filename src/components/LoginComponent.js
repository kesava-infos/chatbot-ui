import React, { useState } from "react";
import InputTextField from "./common/InputTextField";
import ButtonField from "./common/ButtonField";
import { useNavigate } from "react-router-dom";
// import { Formik } from 'formik';
import { useAuth } from "../config/AuthContext";
import { loginService } from "../services";

export default function LoginComponent(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    let navigate = useNavigate();
    const handler = async () => {
        if (email && password) {
            const response = loginService(email, password, login, navigate);
        }
    }
    return <>
        <InputTextField color="#F86167" border="#fff" label="Email Id" value={email} onchange={setEmail} />
        <InputTextField color="#F86167" border="#fff" label="Password" type="password" value={password} onchange={setPassword} />
        <p className="text-left text-base text-[#fff] cursor-pointer" onClick={() => props.setPageState("forgot")}>Forgot Password ?</p>
        <ButtonField bg="#F86167" label="Login" clicked={handler} />
    </>
}