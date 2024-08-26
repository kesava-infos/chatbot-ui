import React, { useState } from "react";
import bg from "../assets/bg.png";
import logo from "../assets/logo.png";
import LoginComponent from "../components/LoginComponent";
import SigupComponent from "../components/SigupComponent";
import ForgotComponent from "../components/ForgotComponent";

const style1 = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#fff"
}
const style2 = {
    cursor: "pointer"
}

export default function Login() {
    const [currentState, setCurretState] = useState("login");

    return <div className="bg-[#f2f2f2] h-screen flex gap-1 p-4 sm:p-8 md:p-4">
        <p>{currentState}</p>
        <div className="w-1/2 flex hidden sm:block relative">
            <img src={bg} alt="Background Image" className="self-end w-100 absolute top-[100px] right-[-5px]" />
        </div>
        <div className="flex flex-col items-center gap-2 justify-start min-w-[320px] bg-white  h-[96%] rounded-3xl grow px-12 py-6 xl:max-w-[600px]">
            <img src={logo} alt="logo" className="w-[150px]" />
            <div className=" bg-[#03234D] flex flex-col gap-4 rounded-3xl w-[100%] text-white">
                <p className="  text-right pt-5 px-5 text-[#F86167] ">
                    <span onClick={() => setCurretState("login")} style={currentState == "login" || currentState == "forgot" ? style1 : style2}>Login </span> /
                    <span onClick={() => setCurretState("sigup")} style={currentState == "sigup" ? style1 : style2}> Sign up</span></p>
                <div className="p-5 w-[100%] items-center flex flex-col gap-5 ">
                    {
                        currentState == "login" && <LoginComponent setPageState={setCurretState} />
                    }
                    {
                        currentState == "sigup" && <SigupComponent />
                    }
                     {
                        currentState == "forgot" && <ForgotComponent setPageState={setCurretState} />
                    }

                </div>
                <p></p>
            </div>
        </div>
    </div>
}