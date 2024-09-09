import React, { useState } from "react";
import bg from "../assets/bg.png";
import settingsIcon from "../assets/setttings-icon.png";
import bell from "../assets/bell.png";
import chat from "../assets/chat.png";
import logo from "../assets/logo.png";
import graph from "../assets/graph1.png";
import LoginComponent from "../components/LoginComponent";
import SigupComponent from "../components/SigupComponent";
import ForgotComponent from "../components/ForgotComponent";

const style1 = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#fff",
};
const style2 = {
  cursor: "pointer",
};

export default function Login() {
  const [currentState, setCurretState] = useState("login");

  return (
    <div className="bg-[#f2f2f2] h-screen flex gap-1 p-4 sm:p-8 md:p-4">
      <div className="overflow-hidden md:w-[55%] lg:w-[60%] flex hidden sm:block relative">
        <img
          src={bg}
          alt="Background Image"
          className="self-end h-[90%] absolute top-[50px] right-[5px] md:right-[-25px] lg:right-[55px]"
        />
        <img
          src={settingsIcon}
          alt="icon "
          className="w-[60px] opacity-25 absolute bottom-[50px] sm:left-[-100px] md:left-[10px]"
        />
        <img
          src={chat}
          alt="icon "
          className="w-[50px] opacity-25 absolute top-[50px] right-[6%] xl:right-[56%]"
        />
        <img
          src={bell}
          alt="icon "
          className="w-[50px] opacity-25 absolute top-[105px] sm:left-[-100px] md:left-[70px]"
        />
        <img
          src={graph}
          alt="icon "
          className="w-[50px] opacity-25 absolute top-[375px] right-[46%]"
        />
      </div>
      <div className="sm:w-[30%] flex flex-col items-center gap-2 justify-start min-w-[320px] bg-white  h-[96%] rounded-3xl grow px-12 py-4 xl:max-w-[600px]">
        <img src={logo} alt="logo" className="w-[130px]" />
        <h1 className="text-4xl py-6 text-primary font-bold text-center">
          Welcome To AI Chatbot
        </h1>
        <div className=" bg-secondary flex flex-col gap-4 rounded-3xl w-[100%] text-white">
          <p className="  text-right pt-5 px-5 text-primary ">
            <span
              className="text-lg"
              onClick={() => setCurretState("login")}
              style={
                currentState === "login" || currentState === "forgot"
                  ? style1
                  : style2
              }
            >
              Login
            </span>{" "}
            /
            <span
              className="text-lg"
              onClick={() => setCurretState("sigup")}
              style={currentState === "sigup" ? style1 : style2}
            >
              {" "}
              Sign up
            </span>
          </p>
          <div className="p-5 w-[100%] items-center flex flex-col gap-5 ">
            {currentState === "login" && (
              <LoginComponent setPageState={setCurretState} />
            )}
            {currentState === "sigup" && <SigupComponent />}
            {currentState === "forgot" && (
              <ForgotComponent setPageState={setCurretState} />
            )}
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}
