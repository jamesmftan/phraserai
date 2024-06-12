"use client";
import { useState } from "react";
import SideBar from "../components/main_page/SideBar";
import Generate from "../components/main_page/Generate";
import Prompt from "../components/main_page/Prompt";
import { useChat } from "ai/react";
import { v4 as uuidv4 } from "uuid";

const MainPage = ({ session }) => {
  const [interactionID, setInteractionID] = useState(uuidv4());
  const [content, setContent] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const {
    messages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChat({
    onFinish: () => {
      setIsFinished(true);
    },
  });

  return (
    <div className="grid h-screen">
      <div className="flex flex-col lg:flex-row items-start h-full lg:gap-4 lg:p-4">
        <SideBar
          session={session}
          isFinished={isFinished}
          setInteractionID={setInteractionID}
          interactionID={interactionID}
          setInput={setInput}
          uuidv4={uuidv4()}
          setContent={setContent}
        />
        <div className="justify-between flex flex-col w-full h-full lg:gap-4">
          <Generate
            messages={messages}
            isLoading={isLoading}
            content={content}
            setContent={setContent}
          />
          <Prompt
            session={session}
            interactionID={interactionID}
            input={input}
            setInput={setInput}
            isLoading={isLoading}
            setIsFinished={setIsFinished}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
