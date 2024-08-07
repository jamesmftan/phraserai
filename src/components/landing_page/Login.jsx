"use client";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { swalOtpCode } from "@/utils/sweet_alert_two";
import {
  handleFormChange,
  handleLoginSubmit,
  handleGoogleLoginClick,
} from "@/utils/login";
import { toggleVisibility } from "@/utils/toggle_visiblity";

const LoginModal = ({ eyeStates, setEyeStates, setEmail, setIsOtp }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  return (
    <form
      className="bg-slate-100 rounded-lg w-full 2xl:w-4/5 space-y-8 p-8"
      onSubmit={(e) => handleLoginSubmit(e, form, router)}
    >
      <h1 className="text-2xl lg:text-3xl text-black font-medium">Log In</h1>
      <div className="flex flex-col gap-3">
        <input
          className="bg-slate-100 border-b border-black outline-none w-full px-2 py-1"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => handleFormChange(e, "email", form, setForm)}
        />
        <div className="flex">
          <input
            className="bg-slate-100 border-b border-black outline-none w-full px-2 py-1"
            type={eyeStates.loginPasswordVisibilityButton.type}
            placeholder="Enter Password"
            onChange={(e) => handleFormChange(e, "password", form, setForm)}
          />
          <button
            className="bg-slate-100 border-b border-black outline-none flex items-center px-2 py-1"
            onClick={(e) =>
              toggleVisibility(e, "loginPasswordVisibilityButton", setEyeStates)
            }
          >
            {eyeStates.loginPasswordVisibilityButton.isEye ? (
              <LuEyeOff />
            ) : (
              <LuEye />
            )}
          </button>
        </div>
        <button
          className="text-end"
          onClick={(e) => swalOtpCode(e, setEmail, setIsOtp)}
        >
          <u>Forgot Password?</u>
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <button
          className="text-white font-medium bg-black shadow-md rounded-md hover:bg-blue-900 duration-300 w-full px-5 py-2.5"
          type="submit"
        >
          Continue
        </button>
        <p className="text-center">or</p>
        <button
          className="text-black font-medium bg-white shadow-md rounded-md hover:text-white hover:bg-blue-900 justify-center flex items-center gap-1.5 duration-300 w-full px-5 py-2.5"
          onClick={(e) => handleGoogleLoginClick(e)}
        >
          <span>
            <FcGoogle size={24} />
          </span>
          Continue with Google
        </button>
      </div>
    </form>
  );
};

export default LoginModal;
