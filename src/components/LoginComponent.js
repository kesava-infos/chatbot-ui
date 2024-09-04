import React from "react";
import InputTextField from "./common/InputTextField";
import ButtonField from "./common/ButtonField";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../config/AuthContext";
import { loginService } from "../services";
import { toast } from "react-toast";
import { useFormik } from "formik";

export default function LoginComponent(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      } else {
        errors.email = "";
      }

      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
  });
  const { login } = useAuth();
  let navigate = useNavigate();
  formik.handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formik.values;
    const { errors } = formik;
    if (email && password && !errors.email && !errors.password) {
      loginService(email, password, login, navigate);
    } else {
      toast.error("Please enter valid details !");
    }
  };
  return (
    <>
      <InputTextField
        color="#F86167"
        border="#fff"
        label="Email Id"
        name="email"
        formik={formik}
      />
      <InputTextField
        color="#F86167"
        border="#fff"
        label="Password"
        name="password"
        type="password"
        formik={formik}
      />
      <p
        className="text-left text-base text-[#fff] cursor-pointer"
        onClick={() => props.setPageState("forgot")}
      >
        Forgot Password ?
      </p>
      <ButtonField bg="#F86167" label="Login" clicked={formik.handleSubmit} />
    </>
  );
}
