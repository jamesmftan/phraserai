import React from "react";

const GenerateText = () => {
  return (
    <div className="bg-slate-700 rounded-xl h-3/4 border-2 p-5 border-slate-600">
      <textarea
        className="text-slate-200 text-start font-normal tracking-normal leading-normal bg-slate-800 outline-none rounded-[8px] w-full h-full p-5 overflow-x-hidden overflow-y-auto resize-none"
        placeholder="I will generate the reply here..."
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default GenerateText;
