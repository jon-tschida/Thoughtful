import React from "react";
import QuestionCard from "./QuestionCard";
import { RelationshipQs } from "../assets/RelationshipQuestions";

export default function RelationshipQuestionCard() {
  const [randomQuestionIndex, setRandomQuestionIndex] = React.useState(() =>
    Math.floor(Math.random() * (RelationshipQs.length - 1))
  );
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <QuestionCard
        content={RelationshipQs[randomQuestionIndex]}
        setRandomQuestionIndex={setRandomQuestionIndex}
        Questions={RelationshipQs}
      />
    </div>
  );
}
