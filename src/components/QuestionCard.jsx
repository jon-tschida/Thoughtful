import React from "react";

export default function QuestionCard({ topic }) {
  console.log(topic);
  return (
    <div className=" h-[500px] w-[350px] shadow-lg mx-3 my-1 shrink-0 bg-[#edf6f9] rounded-lg flex items-center justify-center">
      <p className=" text-black text-6xl font-light h-fit">{topic}</p>
    </div>
  );
}
