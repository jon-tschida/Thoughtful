import React from "react";
import QuestionCard from "./QuestionCard";
import { lifeQs } from "../assets/LifeQuestions";
import Back from "./Back";

export default function LifeQuestionCard() {
  const [randomQuestionIndex, setRandomQuestionIndex] = React.useState(() =>
    Math.floor(Math.random() * (lifeQs.length - 1))
  );
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen life-question-bg">
      <Back />
      <QuestionCard
        content={lifeQs[randomQuestionIndex]}
        setRandomQuestionIndex={setRandomQuestionIndex}
        randomQuestionIndex={randomQuestionIndex}
        Questions={lifeQs}
      />
    </div>
  );
}
