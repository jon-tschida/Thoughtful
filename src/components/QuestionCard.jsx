import React from "react";

export default function QuestionCard({ topic, content }) {
  return (
    <div className=" h-[500px] w-[350px] shadow-lg mx-3 my-1 shrink-0 bg-[#edf6f9] rounded-lg flex items-center justify-center cursor-pointer">
      <p className="text-6xl font-light text-black h-fit">{topic || content}</p>
    </div>
  );
}
