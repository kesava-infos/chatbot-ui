import InputTextField from "./common/InputTextField";
import ButtonField from "./common/ButtonField";
export default function SigupComponent(props) {
    return <>
        <InputTextField color="#F86167" border="#fff" label="First Name" />
        <InputTextField color="#F86167" border="#fff" label="Last Name" />
        <InputTextField color="#F86167" border="#fff" label="Email Id" />
        <InputTextField color="#F86167" border="#fff" label="Password" />
        <InputTextField color="#F86167" border="#fff" label="Confirm Password" />
        <ButtonField bg="#F86167" label="Signup" />
    </>
}