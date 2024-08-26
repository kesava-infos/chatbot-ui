import InputTextField from "./common/InputTextField";
import ButtonField from "./common/ButtonField";
import { Formik } from 'formik';
export default function LoginComponent(props) {
    return <>
        <InputTextField color="#F86167" border="#fff" label="Username / Email" />
        <InputTextField color="#F86167" border="#fff" label="Password" type="password" />
        <p className="text-left text-[#F86167] cursor-pointer" onClick={() => props.setPageState("forgot")}>Forgot Password ?</p>
        <ButtonField bg="#F86167" label="Login" />
    </>
}