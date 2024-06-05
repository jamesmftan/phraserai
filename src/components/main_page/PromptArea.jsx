import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const PromptArea = () => {
  return (
    <div className="bg-slate-700 rounded-xl justify-between flex flex-col h-full border-2 border-slate-600 gap-5 p-5">
      <div className="justify-end flex flex-row gap-3">
        <button className="text-slate-200 bg-slate-900 flex flex-row items-center rounded-[8px] border-2 border-slate-800 gap-1 px-3 py-1.5">
          Professional
          <span>
            <IoMdArrowDropdown size={25} />
          </span>
        </button>
        <button className="text-slate-200 bg-slate-900 flex flex-row items-center rounded-[8px] border-2 border-slate-800 gap-1 px-3 py-1.5">
          Happy
          <span>
            <IoMdArrowDropdown size={25} />
          </span>
        </button>
        <button className="text-slate-200 bg-slate-900 flex flex-row items-center rounded-[8px] border-2 border-slate-800 gap-1 px-3 py-1.5">
          English
          <span>
            <IoMdArrowDropdown size={25} />
          </span>
        </button>
        <button className="text-slate-200 bg-slate-900 flex flex-row items-center rounded-[8px] border-2 border-slate-800 gap-1 px-3 py-1.5">
          Auto
          <span>
            <IoMdArrowDropdown size={25} />
          </span>
        </button>
      </div>
      <textarea
        className="text-slate-200 text-start font-normal tracking-normal leading-normal bg-slate-800 outline-none rounded-[8px] w-full h-full p-5 overflow-x-hidden overflow-y-auto resize-none"
        placeholder="Please paste the sender's message here..."
        cols="30"
        rows="10"
      ></textarea>
      <div className="justify-end flex items-end">
        <button className="text-black font-medium hover:text-white bg-slate-200 hover:bg-slate-900 rounded-[8px] border-2 border-slate-100 hover:border-slate-800 duration-300 px-5 py-2.5">
          Generate
        </button>
      </div>
    </div>
  );
};

export default PromptArea;
