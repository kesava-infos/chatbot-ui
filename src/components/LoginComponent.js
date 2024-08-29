import InputTextField from "./common/InputTextField";
import ButtonField from "./common/ButtonField";
import { useNavigate } from "react-router-dom";
// import { Formik } from 'formik';
import { useAuth } from "../config/AuthContext";
export default function LoginComponent(props) {
    const { login } = useAuth();
    let navigate = useNavigate();
    const handler = () => {
        login();
        navigate("/dashboard")
    }
    return <>
        <InputTextField color="#F86167" border="#fff" label="Email Id" />
        <InputTextField color="#F86167" border="#fff" label="Password" type="password" />
        <p className="text-left text-[#F86167] cursor-pointer" onClick={() => props.setPageState("forgot")}>Forgot Password ?</p>
        <ButtonField bg="#F86167" label="Login" clicked={handler} />
    </>
}