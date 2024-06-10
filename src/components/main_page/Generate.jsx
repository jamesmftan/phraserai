import React from "react";

const Generate = ({ messages }) => {
  const assistantMessage = messages.filter((m) => m.role === "assistant");
  const newestMessage = assistantMessage[assistantMessage.length - 1];

  return (
    <div className="bg-slate-700 lg:rounded-xl border-t-2 border-b-2 lg:border-2 border-slate-600 min-h-96 h-96 p-5">
      <div className="text-slate-200 text-start font-normal tracking-normal leading-normal bg-slate-800 outline-none rounded-[8px] w-full h-full p-5 overflow-x-hidden overflow-y-auto">
        {newestMessage ? (
          <p> {newestMessage.content}</p>
        ) : (
          <p className="text-slate-400 select-text">
            I will generate the reply here...
          </p>
        )}
      </div>
    </div>
  );
};

export default Generate;
