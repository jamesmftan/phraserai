"use client";
import { TypewriterEffectSmooth } from "./TypewriterEffect";

const LoginLeftSide = ({ loginClick, createAccountClick }) => {
  const words = [
    {
      text: "Tailored",
    },
    {
      text: "Responses",
    },
    {
      text: "at",
    },
    {
      text: "Your",
    },
    {
      text: "Fingertips",
    },
  ];

  return (
    <div className="lg:justify-center flex flex-col lg:h-full gap-5 p-4 lg:p-16">
      <div className="space-y-3">
        <h1 className="text-4xl lg:text-6xl xl:text-7xl text-slate-200 font-medium">
          PhraserAI
        </h1>
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="flex flex-col items-center md:flex-row w-full gap-3">
        <button
          className="lg:text-lg xl:text-xl text-black font-medium bg-white shadow-md rounded-md hover:text-white hover:bg-blue-900 duration-300 w-full md:w-auto md:min-w-32 px-5 py-2.5 lg:px-8 lg:py-4"
          onClick={loginClick}
        >
          Log In
        </button>
        <button
          className="lg:text-lg xl:text-xl text-white font-medium bg-black shadow-md rounded-md hover:bg-blue-900 duration-300 w-full md:w-auto md:min-w-32 px-5 py-2.5 lg:px-8 lg:py-4"
          onClick={createAccountClick}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default LoginLeftSide;
