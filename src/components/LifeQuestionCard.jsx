import React from "react";
import QuestionCard from "./QuestionCard";

export default function LifeQuestionCard() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen life-questions-bg">
      <QuestionCard content="What is your favorite soda?" />
    </div>
  );
}
