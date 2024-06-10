import { useState, useEffect } from "react";

const Generate = ({ messages, isLoading }) => {
  const assistantMessage = messages.filter((m) => m.role === "assistant");
  const newestMessage = assistantMessage[assistantMessage.length - 1];

  const [content, setContent] = useState("");

  useEffect(() => {
    if (newestMessage) {
      setContent(newestMessage.content);
    }
  }, [newestMessage]);

  if (isLoading) {
    return (
      <div className="bg-slate-700 lg:rounded-xl border-t-2 border-b-2 lg:border-2 border-slate-600 min-h-96 h-96 p-5 lg:p-[18px]">
        <div className="bg-slate-800 outline-none rounded-[8px] justify-center flex items-center w-full h-full p-5">
          <p className="text-slate-200 text-center font-normal tracking-normal leading-normal animate-pulse">
            Please wait while PhraserAI is cooking...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-700 lg:rounded-xl border-t-2 border-b-2 lg:border-2 border-slate-600 min-h-96 h-96 p-5 lg:p-[18px]">
      {newestMessage ? (
        <textarea
          className="text-slate-200 text-start font-normal tracking-normal leading-normal select-text bg-slate-800 outline-none rounded-[8px] w-full h-full p-5 overflow-x-hidden overflow-y-auto resize-none"
          placeholder="I will generate the reply here..."
          value={content}
          onChange={() => setContent(content)}
          cols="30"
          rows="10"
        ></textarea>
      ) : (
        <p className="text-slate-400 text-start font-normal tracking-normal leading-normal bg-slate-800 outline-none rounded-[8px] w-full h-full p-5">
          I will generate the reply here...
        </p>
      )}
    </div>
  );
};

export default Generate;
