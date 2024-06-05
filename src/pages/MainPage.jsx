"use client";
import SideBar from "../components/main_page/SideBar";
import GenerateText from "../components/main_page/GenerateText";
import PromptArea from "../components/main_page/PromptArea";

const MainPage = ({ session }) => {
  return (
    <div className="flex items-center h-screen gap-5 p-4">
      <SideBar session={session} />
      <div className="justify-between flex flex-col w-full h-full gap-5">
        <GenerateText />
        <PromptArea />
      </div>
    </div>
  );
};

export default MainPage;
