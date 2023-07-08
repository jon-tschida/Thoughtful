import React from "react";
import RightArrow from "../assets/rightArrow.svg";
import Heart from "../assets/heart.svg";
import HeartFilled from "../assets/heart-filled.svg";

// We have to pull some props in for our the "next arrow" to work, namely a Questions array and the setRandomQuestionIndex setter function.
export default function QuestionCard({
  topic,
  content,
  setRandomQuestionIndex,
  randomQuestionIndex,
  Questions,
}) {
  const [favoriteQuestions, setFavoriteQuestions] = React.useState(() => {
    if (!!localStorage.getItem("favoriteQuestions") === false) return [];
    else return localStorage.getItem("favoriteQuestions").split(`,`);
  });

  const handleFavorite = () =>
    setFavoriteQuestions((prevFavorites) => [
      ...prevFavorites,
      Questions[randomQuestionIndex],
    ]);

  const handleNext = () =>
    setRandomQuestionIndex(() =>
      Math.floor(Math.random() * (Questions.length - 1))
    );
  console.log(favoriteQuestions);

  React.useEffect(() => {
    localStorage.setItem(`favoriteQuestions`, favoriteQuestions);
  }, [favoriteQuestions]);
  return (
    // We do a bit of conditional rendering here
    // We need to dispaly different styles for if the Question card component is being used on the main menu, or actually disaplaying questions.
    // To do this, we use the logical && operator in our main div, if the `topic` prop has been passed in, than we set the cursor to pointer.
    // We use a ternary operator for our font size in the p tag. If the content prop has been passed in, then we set the text-3x class, otherwise we do text-6xl
    <div
      className={` relative h-[500px] w-[350px] shadow-lg mx-3 my-1 shrink-0 bg-[#edf6f9] rounded-lg flex items-center justify-center p-4 ${
        topic && `cursor-pointer`
      } select-none`}
    >
      {content && (
        <>
          <div className="absolute right-5 top-3">
            <img
              onClick={handleNext}
              src={RightArrow}
              className="w-8 transition-all ease-in-out cursor-pointer hover:scale-110"
            />
          </div>
          <div className="absolute left-5 top-3">
            <img
              onClick={handleFavorite}
              src={
                favoriteQuestions.includes(Questions[randomQuestionIndex])
                  ? HeartFilled
                  : Heart
              }
              className="w-8 transition-all ease-in-out cursor-pointer hover:scale-110"
            />
          </div>
        </>
      )}
      <p
        className={`${
          content ? `text-3xl` : `text-6xl`
        } font-light text-black h-fit text-center`}
      >
        {topic || content}
      </p>
    </div>
  );
}
