"use client";
import { useState, useEffect } from "react";
import { getInteractions } from "@/utils/interactions";
import { signOut } from "next-auth/react";
import { FaPlus } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const Sidebar = ({
  session,
  interactionID,
  setInteractionID,
  uuidv4,
  setInput,
  setContent,
  isFinished,
}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [interactions, setInteractions] = useState([]);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    if (isLargeScreen) {
      setIsSideBarOpen(true);
    } else {
      setIsSideBarOpen(false);
    }
    if (isFinished) {
      getInteractions(session, setInteractions);
    }
    getInteractions(session, setInteractions);
  }, [isFinished, isLargeScreen]);

  const sideBarClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  const addInteractionClick = (e) => {
    e.preventDefault();
    setInteractionID(uuidv4);
    setInput("");
    setContent("");
  };

  const selectInteractionClick = (e, interaction) => {
    e.preventDefault();
    setInteractionID(interaction.interaction_id);
    setInput(interaction.raw_prompt);
    setContent("");
    if (!isLargeScreen) {
      setIsSideBarOpen(false);
    }
  };

  return (
    <>
      <div className="bg-slate-700 w-full justify-between flex flex-row lg:hidden items-center p-4">
        <button onClick={sideBarClick}>
          <GiHamburgerMenu className="text-lg text-slate-200" />
        </button>
        <h1 className="text-lg text-slate-200 font-bold">PhraserAI</h1>
        <button>
          <FaPlus
            className="text-lg text-slate-200"
            onClick={(e) => addInteractionClick(e)}
          />
        </button>
      </div>
      {isSideBarOpen && (
        <div className="bg-slate-700 lg:shadow-xl lg:rounded-xl lg:border-2 lg:border-slate-600 justify-between flex flex-col fixed lg:static w-full lg:max-w-[20rem] h-full gap-8 z-40 p-5 lg:p-[18px]">
          <div className="justify-between flex flex-row items-center">
            <h1 className="text-lg text-slate-200 font-bold">PhraserAI</h1>
            <button>
              {isLargeScreen ? (
                <button>
                  <FaPlus
                    className="text-lg text-slate-200"
                    onClick={(e) => addInteractionClick(e)}
                  />
                </button>
              ) : (
                <IoMdClose
                  className="text-2xl text-slate-200"
                  onClick={sideBarClick}
                />
              )}
            </button>
          </div>
          <ul className="h-full lg:h-[761.49996px] space-y-0.5 pr-3 overflow-y-auto">
            {interactions.map((i) => {
              const updatedAt = new Date(i.updatedAt);
              let hours = updatedAt.getHours();
              const minutes = updatedAt.getMinutes();
              const seconds = updatedAt.getSeconds();
              const period = hours >= 12 ? "PM" : "AM";
              hours = hours % 12 || 12;

              const timestring = `${hours.toString().padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")} ${period}`;

              const datestring = `${updatedAt.getFullYear()}-${(
                updatedAt.getMonth() + 1
              )
                .toString()
                .padStart(2, "0")}-${updatedAt
                .getDate()
                .toString()
                .padStart(2, "0")}`;

              return (
                <li
                  key={i.interaction_id}
                  className={`hover:bg-slate-800 rounded-[8px] flex flex-col duration-300 px-3 py-1 ${
                    interactionID === i.interaction_id
                      ? "bg-slate-800 pointer-events-none"
                      : ""
                  }`}
                  onClick={(e) => selectInteractionClick(e, i)}
                >
                  <p className="text-slate-200 font-semibold capitalize tracking-normal leading-normal truncate">
                    {i.raw_prompt}
                  </p>
                  <p className="text-slate-200 font-normal tracking-normal leading-normal">
                    {datestring} {timestring}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="justify-between flex flex-row items-center">
            <button className="text-slate-200 hover:text-slate-900 font-bold flex flex-row items-center duration-300 gap-3">
              <span>
                {session?.user?.image ? (
                  <img
                    className="rounded-full w-8 h-8"
                    src={session?.user?.image}
                    alt="user_image"
                  />
                ) : (
                  <div className="bg-white rounded-full w-6 h-6 justify-center flex items-center">
                    <p className="text-sm text-slate-700 font-medium">
                      {session?.user?.name.charAt(0)}
                    </p>
                  </div>
                )}
              </span>
              {session?.user?.name}
            </button>
            <button onClick={() => signOut()}>
              <PiSignOutBold className="text-slate-200 hover:text-slate-900 duration-300 w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
