import React, { useState } from "react";
import InputTextField from "./common/InputTextField";
import ButtonField from "./common/ButtonField";
import { signupService } from "../services";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../config/AuthContext";

export default function SigupComponent(props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    // const [cpassword, setcPassword] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const { login } = useAuth();
    const handler = async () => {
        if (email && password && name && mobile) {
            const response = signupService(name, mobile, email, password, login, navigate);
        }
    }
    let navigate = useNavigate();
    return <>
        <InputTextField color="#F86167" border="#fff" label=" Name"  value={name} onchange={setName} />
        <InputTextField color="#F86167" border="#fff" label="Mobile" value={mobile} onchange={setMobile}  />
        <InputTextField color="#F86167" border="#fff" label="Email Id"  value={email} onchange={setEmail}  />
        <InputTextField color="#F86167" border="#fff" label="Password" value={password} onchange={setPassword} />
        {/* <InputTextField color="#F86167" border="#fff" label="Confirm Password"  value={cpassword} onchange={setcPassword}  /> */}
        <ButtonField bg="#F86167" label="Signup" clicked={handler}  />
    </>
}