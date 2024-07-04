"use client";
import { useState } from "react";
import Login from "@/components/landing_page/Login";
import CreateAccount from "@/components/landing_page/CreateAccount";

const IndexRightSide = ({
  isLoginButton,
  isCreateAccountButton,
  setEmail,
  setIsOtp,
}) => {
  const [eyeStates, setEyeStates] = useState({
    loginPasswordVisibilityButton: { isEye: false, type: "password" },
    createAccountPasswordVisibilityButton: {
      isEye: false,
      type: "password",
    },
    createAccountConfirmPasswordVisibilityButton: {
      isEye: false,
      type: "password",
    },
  });

  return (
    <div className="lg:bg-[url('/paint.jpg')] justify-center flex lg:items-center relative lg:h-full gap-5 p-4 lg:p-16">
      {isLoginButton && (
        <Login
          eyeStates={eyeStates}
          setEyeStates={setEyeStates}
          setEmail={setEmail}
          setIsOtp={setIsOtp}
        />
      )}
      {isCreateAccountButton && (
        <CreateAccount eyeStates={eyeStates} setEyeStates={setEyeStates} />
      )}
    </div>
  );
};

export default IndexRightSide;
