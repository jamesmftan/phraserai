"use client";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { cn } from "@/utils/cn";
import { getInteractions } from "@/utils/interactions";
import { swal } from "@/utils/sweet_alert_two";
import {
  sideBarClick,
  addInteractionClick,
  selectInteractionClick,
} from "@/utils/onclicks";
import { time } from "@/utils/time";
import { signOut } from "next-auth/react";

const Sidebar = ({
  session,
  uuidv4,
  interactionID,
  setInteractionID,
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

  const deleteInteraction = async (i) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/delete_interaction",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            interaction_id: i.interaction_id,
          }),
        }
      );
      const result = await response.json();
      if (response.ok) {
        swal(result.message);
        getInteractions(session, setInteractions);
        addInteractionClick(uuidv4, setInteractionID, setInput, setContent);
      } else {
        swal(result.message);
      }
    } catch (error) {
      console.log("Something went wrong.");
    }
  };

  return (
    <>
      <div className="bg-slate-700 w-full justify-between flex flex-row lg:hidden items-center p-4">
        <button onClick={() => sideBarClick(isSideBarOpen, setIsSideBarOpen)}>
          <GiHamburgerMenu className="text-lg text-slate-200 hover:text-slate-800 duration-300" />
        </button>
        <h1 className="text-lg text-slate-200 font-bold">PhraserAI</h1>
        <button>
          <FaPlus
            className="text-lg text-slate-200 hover:text-slate-800 duration-300"
            onClick={() =>
              addInteractionClick(
                uuidv4,
                setInteractionID,
                setInput,
                setContent
              )
            }
          />
        </button>
      </div>
      {isSideBarOpen && (
        <div className="bg-slate-700 lg:shadow-xl lg:rounded-xl lg:border-2 lg:border-slate-600 justify-between flex flex-col fixed lg:static w-full lg:max-w-[20rem] h-full gap-8 z-40 p-5 lg:p-[18px]">
          <div className="justify-between flex flex-row items-center">
            <h1 className="text-lg text-slate-200 font-bold">PhraserAI</h1>
            {isLargeScreen ? (
              <button>
                <FaPlus
                  className="text-lg text-slate-200 hover:text-slate-800 duration-300"
                  onClick={() =>
                    addInteractionClick(
                      uuidv4,
                      setInteractionID,
                      setInput,
                      setContent
                    )
                  }
                />
              </button>
            ) : (
              <button>
                <IoMdClose
                  className="text-2xl text-slate-200 hover:text-slate-800 duration-300"
                  onClick={() => sideBarClick(isSideBarOpen, setIsSideBarOpen)}
                />
              </button>
            )}
          </div>
          <ul className="h-full lg:h-[47.5937480rem] lg:grow space-y-0.5 pr-3 overflow-y-auto">
            {interactions.map((i) => (
              <li
                key={i.interaction_id}
                className={cn(
                  "hover:bg-slate-800 rounded-[8px] justify-between flex flex-row items-center duration-300 px-3 py-1",
                  interactionID === i.interaction_id ? "bg-slate-800" : ""
                )}
              >
                <button
                  className="flex flex-col w-[80%]"
                  onClick={() =>
                    selectInteractionClick(
                      i,
                      setInteractionID,
                      isLargeScreen,
                      setInput,
                      setContent,
                      setIsSideBarOpen
                    )
                  }
                >
                  <p className="text-start text-slate-200 font-semibold capitalize tracking-normal leading-normal">
                    {isLargeScreen
                      ? i.raw_prompt.slice(0, 25)
                      : i.raw_prompt.slice(0, i.raw_prompt.length / 2)}
                    ...
                  </p>
                  <p className="text-slate-200 font-normal tracking-normal leading-normal">
                    {time(i)}
                  </p>
                </button>
                <button
                  className="text-slate-200 hover:text-slate-700 duration-300"
                  onClick={() => deleteInteraction(i)}
                >
                  <RiDeleteBin6Line />
                </button>
              </li>
            ))}
          </ul>
          <div className="justify-between flex flex-row items-center">
            <div className="text-slate-200 font-bold flex flex-row items-center gap-3">
              <span>
                {session?.user?.image ? (
                  <img
                    className="rounded-full w-8 h-8"
                    src={session?.user?.image}
                    alt="user_image"
                  />
                ) : (
                  <div className="bg-slate-200 rounded-full w-6 h-6 justify-center flex items-center">
                    <p className="text-sm text-slate-800 font-medium">
                      {session?.user?.name.charAt(0)}
                    </p>
                  </div>
                )}
              </span>
              {session?.user?.name}
            </div>
            <button onClick={() => signOut()}>
              <PiSignOutBold className="text-slate-200 hover:text-slate-800 duration-300 w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
