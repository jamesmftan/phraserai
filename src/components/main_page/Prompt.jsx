"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { cn } from "@/utils/cn";
import {
  behaviorOptions,
  moodOptions,
  languageOptions,
} from "@/utils/dropdown_options";
import {
  dropdownBehaviorClick,
  dropdownMoodClick,
  dropdownLanguageClick,
  behaviorSelectClick,
  moodSelectClick,
  languageSelectClick,
} from "@/utils/onclicks";

const Prompt = ({
  session,
  interactionID,
  input,
  setInput,
  handleInputChange,
  handleSubmit,
  isLoading,
  setIsFinished,
}) => {
  const [behavior, setBehavior] = useState("Professional");
  const [mood, setMood] = useState("Happy");
  const [language, setLanguage] = useState("English");
  const [isDropdownBehavior, setIsDropdownBehavior] = useState(false);
  const [isDropdownMood, setIsDropdownMood] = useState(false);
  const [isDropdownLanguage, setIsDropdownLanguage] = useState(false);

  return (
    <form
      className="bg-slate-700 lg:rounded-xl lg:border-2 border-slate-600 justify-between flex flex-col md:h-full gap-5 p-5 lg:p-[18px]"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e, {
          data: {
            interaction_id: interactionID,
            email: session?.user?.email,
            behavior: behavior,
            mood: mood,
            language: language,
          },
        });
        setInput(input);
        setIsFinished(false);
      }}
    >
      <div className="md:justify-end flex flex-col md:flex-row items-end gap-3">
        <div className="relative w-full md:w-auto space-y-1">
          <button
            className="text-slate-200 bg-slate-900 justify-center flex flex-row items-center rounded-[8px] border-2 border-slate-800 hover:scale-95 duration-300 w-full md:w-44 gap-1 px-3 py-1.5"
            onClick={(e) =>
              dropdownBehaviorClick(
                e,
                isDropdownBehavior,
                setIsDropdownBehavior,
                setIsDropdownMood,
                setIsDropdownLanguage
              )
            }
          >
            {behavior}
            <span>
              <IoMdArrowDropdown size={25} />
            </span>
          </button>
          {isDropdownBehavior && (
            <ul className="text-white bg-slate-900 rounded-[8px] border-2 border-slate-800 absolute w-full h-48 z-30 overflow-y-auto overflow-x-hidden p-1.5">
              {behaviorOptions.map((b, index) => (
                <li
                  className="hover:bg-slate-700 rounded-[4px] px-3 py-1.5"
                  key={index}
                  onClick={(e) =>
                    behaviorSelectClick(
                      e,
                      b,
                      isDropdownBehavior,
                      setBehavior,
                      setIsDropdownBehavior
                    )
                  }
                >
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative w-full md:w-auto space-y-1">
          <button
            className="text-slate-200 bg-slate-900 justify-center flex flex-row items-center rounded-[8px] border-2 border-slate-800 hover:scale-95 duration-300 w-full md:w-44 gap-1 px-3 py-1.5"
            onClick={(e) =>
              dropdownMoodClick(
                e,
                isDropdownMood,
                setIsDropdownMood,
                setIsDropdownBehavior,
                setIsDropdownLanguage
              )
            }
          >
            {mood}
            <span>
              <IoMdArrowDropdown size={25} />
            </span>
          </button>
          {isDropdownMood && (
            <ul className="text-white bg-slate-900 rounded-[8px] border-2 border-slate-800 absolute w-full h-48 z-20 overflow-y-auto overflow-x-hidden p-1.5">
              {moodOptions.map((m, index) => (
                <li
                  className="hover:bg-slate-700 rounded-[4px] px-3 py-1.5"
                  key={index}
                  onClick={(e) =>
                    moodSelectClick(
                      e,
                      m,
                      isDropdownMood,
                      setMood,
                      setIsDropdownMood
                    )
                  }
                >
                  {m}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative w-full md:w-auto space-y-1">
          <button
            className="text-slate-200 bg-slate-900 justify-center flex flex-row items-center rounded-[8px] border-2 border-slate-800 hover:scale-95 duration-300 w-full md:w-44 gap-1 px-3 py-1.5"
            onClick={(e) =>
              dropdownLanguageClick(
                e,
                isDropdownLanguage,
                setIsDropdownLanguage,
                setIsDropdownBehavior,
                setIsDropdownMood
              )
            }
          >
            {language}
            <span>
              <IoMdArrowDropdown size={25} />
            </span>
          </button>
          {isDropdownLanguage && (
            <ul className="text-white bg-slate-900 rounded-[8px] border-2 border-slate-800 absolute w-full h-48 z-10 overflow-y-auto overflow-x-hidden p-1.5">
              {languageOptions.map((l, index) => (
                <li
                  className="hover:bg-slate-700 rounded-[4px] px-3 py-1.5"
                  key={index}
                  onClick={(e) =>
                    languageSelectClick(
                      e,
                      l,
                      isDropdownLanguage,
                      setLanguage,
                      setIsDropdownLanguage
                    )
                  }
                >
                  {l}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <textarea
        className="text-slate-200 text-start font-normal tracking-normal leading-normal bg-slate-800 outline-none rounded-[8px] w-full h-full p-5 overflow-x-hidden overflow-y-auto resize-none"
        placeholder="Please paste the sender's message here..."
        cols="30"
        rows="10"
        value={input}
        onChange={handleInputChange}
      ></textarea>
      <div className="justify-end flex items-end">
        <button
          className={cn(
            "text-slate-200 font-medium bg-[linear-gradient(110deg,#0F172A,45%,#1e2631,55%,#0F172A)] bg-[length:200%_100%] rounded-[8px] border-2 border-slate-800 animate-shimmer hover:scale-95 duration-300 px-5 py-2.5",
            isLoading ? "pointer-events-none" : ""
          )}
        >
          Generate
        </button>
      </div>
    </form>
  );
};

export default Prompt;
