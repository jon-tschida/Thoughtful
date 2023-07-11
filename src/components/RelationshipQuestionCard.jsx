import React from "react";
import QuestionCard from "./QuestionCard";
import { RelationshipQs } from "../assets/RelationshipQuestions";
import Back from "./Back";

export default function RelationshipQuestionCard() {
  const [randomQuestionIndex, setRandomQuestionIndex] = React.useState(() =>
    Math.floor(Math.random() * (RelationshipQs.length - 1))
  );
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen relationship-question-bg">
      <Back />
      <QuestionCard
        content={RelationshipQs[randomQuestionIndex]}
        setRandomQuestionIndex={setRandomQuestionIndex}
        randomQuestionIndex={randomQuestionIndex}
        Questions={RelationshipQs}
      />
    </div>
  );
}
