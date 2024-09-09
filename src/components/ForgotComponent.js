import InputTextField from "./common/InputTextField";
import ButtonField from "./common/ButtonField";
import { colors } from "../typography";
export default function ForgotComponent(props) {
  const handlerCancel = () => {
    props.setPageState("login");
  };
  return (
    <>
      <p className="text-left text-white text-base">Please Enter Email Id</p>
      <InputTextField color={colors.primary} border="#fff" label="Email Id" />
      <div className="flex gap-4 p-2">
        <ButtonField bg={colors.primary} label="Reset" />
        <ButtonField
          bg={colors.primary}
          label="Cancel"
          clicked={handlerCancel}
        />
      </div>
    </>
  );
}
