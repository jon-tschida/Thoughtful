import React from "react";
import QuestionCard from "./QuestionCard";

export default function FavoriteQuestionsCard() {
  const [randomQuestionIndex, setRandomQuestionIndex] = React.useState(() =>
    Math.floor(Math.random() * (lifeQs.length - 1))
  );
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <QuestionCard
        content={lifeQs[randomQuestionIndex]}
        setRandomQuestionIndex={setRandomQuestionIndex}
        randomQuestionIndex={randomQuestionIndex}
        Questions={lifeQs}
      />
    </div>
  );
}
