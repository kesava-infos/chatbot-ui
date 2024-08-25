import React from "react";
import bg from "../assets/bg.png";
import logo from "../assets/logo.png";
import InputTextField from "../components/InputTextField";
import ButtonField from "../components/ButtonField";

export default function Login() {
    return <div className="bg-[#f2f2f2] h-screen flex gap-1 p-4 sm:p-8 md:p-4">
        <div className="w-1/2 flex hidden sm:block relative">
            <img src={bg} alt="Background Image" className="self-end w-100 absolute bottom-[-10px] right-[-5px]" />
        </div>
        <div className="flex flex-col items-center gap-2 justify-start min-w-[380px] bg-[#03234D]  h-[96%] rounded-3xl grow p-6">
            <img src={logo} alt="logo" className="w-[150px]" />
            <div className="flex flex-col gap-4 bg-white rounded-3xl w-[100%] text-white">
                <p className="  text-right pt-5 px-5 text-[#F86167] ">Login / Sign up</p>
                <div className="p-5 w-[100%] items-center flex flex-col gap-5 ">
                <InputTextField color="#F86167" border="#03234D" label="User Name" />
                <InputTextField color="#F86167" border="#03234D" label="Password" />
                <p className="text-left text-[#F86167]">Forgot Password ?</p>
                <ButtonField bg="#F86167" label="Login"  />
                </div>
                <p></p>
            </div>
        </div>
    </div>
}