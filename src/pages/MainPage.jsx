"use client";
import SideBar from "../components/main_page/SideBar";
import Generate from "../components/main_page/Generate";
import Prompt from "../components/main_page/Prompt";
import { useChat } from "ai/react";

const MainPage = ({ session }) => {
  const {
    messages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChat();

  return (
    <div className="grid h-screen">
      <div className="flex flex-col lg:flex-row items-start h-full lg:gap-4 lg:p-4">
        <SideBar session={session} />
        <div className="justify-between flex flex-col w-full h-full lg:gap-4">
          <Generate messages={messages} isLoading={isLoading} />
          <Prompt
            input={input}
            setInput={setInput}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
