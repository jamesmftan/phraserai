"use client";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { createAccountSubmit } from "@/utils/create_account";
import { handleGoogleLoginClick } from "@/utils/login";

const CreateAccountModal = ({ eyeStates, toggleVisibility }) => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleFormChange = (e, name) => {
    setForm({ ...form, [name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => createAccountSubmit(e, form, setForm)}
      className="bg-slate-100 rounded-lg w-full 2xl:w-4/5 space-y-8 p-8"
    >
      <h1 className="text-2xl lg:text-3xl text-black font-medium">
        Create Account
      </h1>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <input
            className="bg-slate-100 border-b border-black outline-none w-full px-2 py-1"
            type="text"
            placeholder="First Name"
            value={form.first_name}
            onChange={(e) => handleFormChange(e, "first_name")}
          />
          <input
            className="bg-slate-100 border-b border-black outline-none w-full px-2 py-1"
            type="text"
            placeholder="Last Name"
            value={form.last_name}
            onChange={(e) => handleFormChange(e, "last_name")}
          />
        </div>
        <input
          className="bg-slate-100 border-b border-black outline-none w-full px-2 py-1"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => handleFormChange(e, "email")}
        />
        <div className="flex gap-3">
          <div className="flex w-full">
            <input
              className="bg-slate-100 border-b border-black outline-none w-full px-2 py-1"
              type={eyeStates.createAccountPasswordVisibilityButton.type}
              placeholder="Password"
              value={form.password}
              onChange={(e) => handleFormChange(e, "password")}
            />
            <button
              className="bg-slate-100 border-b border-black outline-none flex items-center px-2 py-1"
              onClick={(e) => {
                e.preventDefault();
                toggleVisibility("createAccountPasswordVisibilityButton");
              }}
            >
              {eyeStates.createAccountPasswordVisibilityButton.isEye ? (
                <LuEyeOff />
              ) : (
                <LuEye />
              )}
            </button>
          </div>
          <div className="flex w-full">
            <input
              className="bg-slate-100 border-b border-black outline-none w-full px-2 py-1"
              type={
                eyeStates.createAccountconfirm_passwordVisibilityButton.type
              }
              placeholder="Confirm Password"
              value={form.confirm_password}
              onChange={(e) => handleFormChange(e, "confirm_password")}
            />
            <button
              className="bg-slate-100 border-b border-black outline-none flex items-center px-2 py-1"
              onClick={(e) => {
                e.preventDefault();
                toggleVisibility(
                  "createAccountconfirm_passwordVisibilityButton"
                );
              }}
            >
              {eyeStates.createAccountconfirm_passwordVisibilityButton.isEye ? (
                <LuEyeOff />
              ) : (
                <LuEye />
              )}
            </button>
          </div>
        </div>
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
          className="text-black font-medium bg-white shadow-md rounded-md hover:text-white hover:bg-blue-900 justify-center flex items-center duration-300 w-full gap-1.5 px-5 py-2.5"
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

export default CreateAccountModal;
