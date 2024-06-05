"use client";
import MainPage from "@/pages/MainPage";
import { useSession } from "next-auth/react";

const Main = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="justify-center flex items-center h-screen">
        <h1 className="text-slate-200 text-6xl animate-pulse">PhraserAI</h1>
      </div>
    );
  }
  return <MainPage session={session} />;
};

export default Main;
