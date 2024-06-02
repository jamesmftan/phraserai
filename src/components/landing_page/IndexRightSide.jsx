"use client";
import { useState } from "react";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

const IndexRightSide = ({ isLoginButton, isCreateAccountButton }) => {
  const [eyeStates, setEyeStates] = useState({
    loginPasswordVisibilityButton: { isEye: false, type: "password" },
    createAccountPasswordVisibilityButton: {
      isEye: false,
      type: "password",
    },
    createAccountconfirm_passwordVisibilityButton: {
      isEye: false,
      type: "password",
    },
  });

  const toggleVisibility = (buttonKey) => {
    setEyeStates((prevState) => {
      const newState = !prevState[buttonKey].isEye;
      return {
        ...prevState,
        [buttonKey]: {
          isEye: newState,
          type: newState ? "text" : "password",
        },
      };
    });
  };

  return (
    <div className="lg:bg-[url('/paint.jpg')] justify-center flex lg:items-center relative lg:h-full gap-5 p-4 lg:p-16">
      {isLoginButton && (
        <Login eyeStates={eyeStates} toggleVisibility={toggleVisibility} />
      )}
      {isCreateAccountButton && (
        <CreateAccount
          eyeStates={eyeStates}
          toggleVisibility={toggleVisibility}
        />
      )}
    </div>
  );
};

export default IndexRightSide;
