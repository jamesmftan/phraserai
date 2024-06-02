"use client";
import { useState } from "react";
import IndexLeftSide from "../components/landing_page/IndexLeftSide";
import IndexRightSide from "../components/landing_page/IndexRightSide";

const LandingPage = () => {
  const [isLoginButton, setIsLoginButton] = useState(false);
  const [isCreateAccountButton, setIsCreateAccountButton] = useState(false);

  const loginClick = () => {
    setIsCreateAccountButton(false);
    setIsLoginButton(true);
  };

  const createAccountClick = () => {
    setIsLoginButton(false);
    setIsCreateAccountButton(true);
  };

  return (
    <div className="lg:justify-center flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:h-screen">
      <IndexLeftSide
        loginClick={loginClick}
        createAccountClick={createAccountClick}
      />
      <IndexRightSide
        isLoginButton={isLoginButton}
        isCreateAccountButton={isCreateAccountButton}
      />
    </div>
  );
};

export default LandingPage;
