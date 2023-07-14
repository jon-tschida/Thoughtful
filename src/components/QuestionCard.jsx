import React from "react";
import RightArrow from "../assets/rightArrow.svg";
import Heart from "../assets/heart.svg";
import HeartFilled from "../assets/heart-filled.svg";

// We have to pull some props in
// for our the "next arrow" to work, namely a Questions array and the setRandomQuestionIndex setter function.
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

  const handleUnfavorite = () =>
    setFavoriteQuestions(
      favoriteQuestions.filter((a) => a !== Questions[randomQuestionIndex])
    );

  const handleNext = () =>
    setRandomQuestionIndex(() => Math.floor(Math.random() * Questions.length));

  React.useEffect(() => {
    localStorage.setItem(`favoriteQuestions`, favoriteQuestions);
  }, [favoriteQuestions]);
  return (
    // We do a bit of conditional rendering here
    // We need to dispaly different styles for if the Question card component is being used on the main menu, or actually disaplaying questions.
    // To do this, we use the logical && operator in our main div, if the `topic` prop has been passed in, than we set the cursor to pointer.
    // We use a ternary operator for our font size in the p tag. If the content prop has been passed in, then we set the text-3x class, otherwise we do text-6xl
    <div
      className={` relative h-[500px] w-[350px] hover:drop-shadow-3xl transition-all duration-400 mx-3 my-1 shrink-0 bg-gray-200 rounded-lg flex items-center justify-center p-4 ${
        topic && `cursor-pointer`
      } select-none md:h-[400px] md:w-[300px] sm:h-[300px] sm:w-[200px]`}
    >
      {content && (
        <>
          <div className="absolute right-5 top-3">
            <img
              onClick={handleNext}
              src={RightArrow}
              className="w-8 transition-all duration-300 cursor-pointer hover:scale-110"
            />
          </div>
          <div className="absolute left-5 top-3">
            {favoriteQuestions.includes(Questions[randomQuestionIndex]) ? (
              <img
                onClick={handleUnfavorite}
                src={HeartFilled}
                className="w-8 transition-all duration-300 cursor-pointer hover:scale-110"
              />
            ) : (
              <img
                onClick={handleFavorite}
                src={Heart}
                className="w-8 transition-all duration-300 cursor-pointer hover:scale-110"
              />
            )}
          </div>
        </>
      )}
      <p
        className={`${
          content ? `text-3xl` : `text-6xl`
        } font-light text-black h-fit text-center sm:text-2xl md:text-4xl`}
      >
        {topic || content}
      </p>
    </div>
  );
}
