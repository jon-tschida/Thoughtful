import React from "react";
import Close from "../assets/Close.svg";

export default function WelcomeModal() {
  return (
    <div className="absolute z-30 flex w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="w-[600px] m-auto rounded-lg  h-[500px] bg-zinc-400 relative">
        {" "}
        <img
          src={Close}
          className="absolute cursor-pointer w-7 top-1 right-1"
        />
        <div className="absolute duration-1000 border border-black cursor-pointer h-7 w-7 top-1 right-1 rounded-xl animate-ping"></div>
      </div>
    </div>
  );
}
