import React from "react";
import QuestionCard from "./QuestionCard";
import { pastQs } from "../assets/PastQuestions";

export default function PastQuestions() {
  const [randomQuestionIndex, setRandomQuestionIndex] = React.useState(() =>
    Math.floor(Math.random() * (pastQs.length - 1))
  );
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <QuestionCard
        content={pastQs[randomQuestionIndex]}
        setRandomQuestionIndex={setRandomQuestionIndex}
        Questions={pastQs}
      />
    </div>
  );
}
