import React from "react";

const GenerateText = ({ messages }) => {
  const assistantMessage = messages.filter((m) => m.role === "assistant");
  const newestMessage = assistantMessage[assistantMessage.length - 1];

  return (
    <div className="bg-slate-700 rounded-xl h-3/4 border-2 p-5 border-slate-600">
      <div className="text-slate-200 text-start font-normal tracking-normal leading-normal bg-slate-800 outline-none rounded-[8px] w-full h-full p-5 overflow-x-hidden overflow-y-auto resize-none">
        {newestMessage ? (
          <p> {newestMessage.content}</p>
        ) : (
          <p className="text-slate-400">I will generate the reply here...</p>
        )}
      </div>
    </div>
  );
};

export default GenerateText;

/**<textarea
        className="text-slate-200 text-start font-normal tracking-normal leading-normal bg-slate-800 outline-none rounded-[8px] w-full h-full p-5 overflow-x-hidden overflow-y-auto resize-none"
        placeholder="I will generate the reply here..."
        cols="30"
        rows="10"
      ></textarea>**/
