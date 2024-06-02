"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Main = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="justify-center flex items-center h-screen">
        <h1 className="text-slate-200 text-6xl animate-pulse">PhraserAI</h1>
      </div>
    );
  }

  return (
    <div className="justify-center flex flex-col items-center h-screen gap-3">
      {session?.user?.image ? (
        <img
          className="rounded-full"
          src={session?.user?.image}
          alt="user_image"
        />
      ) : (
        <div className="bg-white rounded-full w-24 h-24 justify-center flex items-center">
          <h1 className="text-6xl text-slate-700 font-medium">
            {session?.user?.name.charAt(0)}
          </h1>
        </div>
      )}
      <p className="text-white text-3xl uppercase font-normal tracking-normal leading-normal">
        Welcome Back <b>{session?.user?.name}</b>
      </p>
      <button
        className="text-white border-2 border-white rounded-md hover:text-black hover:bg-white duration-300 px-3 py-1.5"
        onClick={() => signOut()}
      >
        Log Out
      </button>
    </div>
  );
};

export default Main;
