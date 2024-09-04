import InputTextField from "./common/InputTextField";
import ButtonField from "./common/ButtonField";
export default function ForgotComponent(props) {
  const handlerCancel = () => {
    props.setPageState("login");
  };
  return (
    <>
      <p className="text-left text-white  text-base">Please Enter Email Id</p>
      <InputTextField color="#F86167" border="#fff" label="Email Id" />
      <div className="flex gap-4 p-2">
        <ButtonField bg="#F86167" label="Reset" />
        <ButtonField bg="#F86167" label="Cancel" clicked={handlerCancel} />
      </div>
    </>
  );
}
