"use client";
import { useState } from "react";
import Sidebar from "../components/main_page/Sidebar";
import Generate from "../components/main_page/Generate";
import Prompt from "../components/main_page/Prompt";
import { useChat } from "ai/react";
import { v4 as uuidv4 } from "uuid";
import { swal } from "@/utils/sweet_alert_two";

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
    onError: (error) => {
      swal(error);
    },
  });

  return (
    <div className="grid h-screen">
      <div className="flex flex-col lg:flex-row items-start h-full lg:gap-4 lg:p-4">
        <Sidebar
          session={session}
          uuidv4={uuidv4()}
          interactionID={interactionID}
          setInteractionID={setInteractionID}
          setInput={setInput}
          setContent={setContent}
          isFinished={isFinished}
        />
        <div className="justify-between flex flex-col w-full h-full lg:gap-4">
          <Generate
            isLoading={isLoading}
            messages={messages}
            content={content}
            setContent={setContent}
          />
          <Prompt
            session={session}
            interactionID={interactionID}
            input={input}
            setInput={setInput}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            setIsFinished={setIsFinished}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
