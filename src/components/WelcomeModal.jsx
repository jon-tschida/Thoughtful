import React from "react";
import Close from "../assets/Close.svg";
import Thoughtful from "../assets/Thoughtful.png";

export default function WelcomeModal({ setClosedModal }) {
  const handleClose = () => setClosedModal((prevState) => !prevState);
  return (
    <div className="absolute z-30 flex w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="w-[600px] m-auto rounded-sm  h-[300px] bg-stone-600 relative p-1">
        {/* Close button and pulse effect */}
        <div className="absolute w-4 h-4 duration-1000 border border-black cursor-pointer top-2 right-2 rounded-xl animate-ping"></div>
        <img
          src={Close}
          onClick={handleClose}
          className="absolute w-4 cursor-pointer top-2 right-2"
        />
        {/* End close button and pulse effect */}
        <div className="flex flex-row w-full h-full ">
          <div className="flex items-center justify-center w-2/5 bg-white ">
            <img src={Thoughtful} className="w-[200px]" />
          </div>
          <div className="flex flex-col items-center justify-center w-3/5 px-3 text-center text-white">
            <h3 className="text-2xl">
              <b>Welcome to Thoughtful</b>
            </h3>
            <br />
            <p>
              This site is designed to help deepen your conversations. Just
              select a topic, and use the arrow to go through the prompts. You
              can use the heart icon to favorite questions to save for later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
