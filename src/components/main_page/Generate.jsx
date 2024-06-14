"use client";
import { useEffect } from "react";
import { filterMessages } from "@/utils/filter_messages";

const Generate = ({ isLoading, messages, content, setContent }) => {
  useEffect(() => {
    if (messages) {
      const filtered = filterMessages(messages);
      setContent(filtered);
    }
  }, [messages]);

  if (isLoading) {
    return (
      <div className="bg-slate-700 lg:rounded-xl border-t-2 border-b-2 lg:border-2 border-slate-600 min-h-96 h-96 p-5 lg:p-[18px]">
        <div className="bg-slate-800 flex relative w-full h-full overflow-hidden cursor-pointer rounded-[8px] p-[2px]">
          <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#172554_50%,#3B82F6_100%)]"></div>
          <div className="bg-[linear-gradient(110deg,#1e293b,45%,#172554,55%,#1e293b)] bg-[length:200%_100%] justify-center flex items-center rounded-[8px] animate-shimmer relative w-full h-full">
            <p className="text-slate-200 text-center font-normal tracking-normal leading-normal animate-pulse">
              Hang tight while PhraserAI whips up some magic...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-700 lg:rounded-xl border-t-2 border-b-2 lg:border-2 border-slate-600 min-h-96 h-96 p-5 lg:p-[18px]">
      {messages ? (
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
