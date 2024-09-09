import React from "react";
import InputTextField from "./common/InputTextField";
import ButtonField from "./common/ButtonField";
import { signupService } from "../services";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../config/AuthContext";
import { useFormik } from "formik";
import { toast } from "react-toast";
import { colors } from "../typography";

export default function SigupComponent(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      mobile: "",
      name: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      } else {
        errors.name = "";
      }

      if (!values.mobile) {
        errors.mobile = "Required";
      } else if (!/^[6-9]\d{9}$/.test(values.mobile)) {
        errors.mobile = "Invalid mobile number";
      } else {
        errors.mobile = "";
      }
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

  formik.handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, name, mobile } = formik.values;
    const { errors } = formik;
    if (
      email &&
      password &&
      name &&
      mobile &&
      !errors.email &&
      !errors.password &&
      !errors.name &&
      !errors.mobile
    ) {
      signupService(name, mobile, email, password, login, navigate);
    } else {
      toast.error("Please enter valid details !");
    }
  };
  let navigate = useNavigate();
  return (
    <div
      className="w-full h-full justify-center items-center flex flex-col gap-5 "
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          formik.handleSubmit(e);
        }
      }}
    >
      <InputTextField
        color={colors.primary}
        border="#fff"
        label=" Name"
        name="name"
        formik={formik}
      />
      <InputTextField
        color={colors.primary}
        border="#fff"
        label="Mobile"
        name="mobile"
        formik={formik}
      />
      <InputTextField
        color={colors.primary}
        border="#fff"
        label="Email Id"
        name="email"
        formik={formik}
      />
      <InputTextField
        color={colors.primary}
        border="#fff"
        label="Password"
        name="password"
        type="password"
        formik={formik}
      />
      <ButtonField
        bg={colors.primary}
        label="Signup"
        clicked={formik.handleSubmit}
      />
    </div>
  );
}
