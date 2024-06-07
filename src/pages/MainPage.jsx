"use client";
import SideBar from "../components/main_page/SideBar";
import GenerateText from "../components/main_page/GenerateText";
import PromptArea from "../components/main_page/PromptArea";
import { useChat } from "ai/react";

const MainPage = ({ session }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex items-center h-screen gap-5 p-4">
      <SideBar session={session} />
      <div className="justify-between flex flex-col w-full h-full gap-5">
        <GenerateText messages={messages} />
        <PromptArea
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default MainPage;

/**"use client";
import { useChat } from "ai/react";
import SideBar from "../components/main_page/SideBar";
import GenerateText from "../components/main_page/GenerateText";
import PromptArea from "../components/main_page/PromptArea";

const MainPage = ({ session }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const assistantMessages = messages.filter((m) => m.role === "assistant");
  /**  return (
    <>
      <div className="flex-grow rounded-lg border p-4">
        {assistantMessages.map((m, index) => (
          <p className="whitespace-pre-line" key={index}>
            {m.content}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </>
  ); 

  
};

export default MainPage;**/
