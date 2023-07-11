import React from "react";
import Back from "./Back";
import HeartFilled from "../assets/heart-filled.svg";

export default function FavoriteQuestionsCard() {
  const [favoriteQuestions, setFavoriteQuestions] = React.useState(() => {
    if (!!localStorage.getItem("favoriteQuestions") === false) return [];
    else return localStorage.getItem("favoriteQuestions").split(`,`);
  });

  const handleUnfavorite = (question) =>
    setFavoriteQuestions(favoriteQuestions.filter((a) => a !== question));

  React.useEffect(() => {
    localStorage.setItem(`favoriteQuestions`, favoriteQuestions);
  }, [favoriteQuestions]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Back />
      {/* If we don't have any favorites yet, then we display this div */}
      {favoriteQuestions.length === 0 && (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-zinc-200">
          <h3 className="mb-5 text-5xl font-bold">
            No favorite questions yet!
          </h3>
          <p className="mb-5">
            Use the heart icon on any of the questions to add it to your
            favorites!
          </p>
        </div>
      )}
      {/* End "no favorites" div */}
      <div className="relative w-[1000px] p-1 m-auto flex flex-row overflow-x-scroll overflow-y-hidden rounded-3xl bg-black bg-opacity-20 shadow-md shadow-black">
        {favoriteQuestions.map((favoriteQuestion, i) => {
          return (
            <div
              key={i}
              className="relative h-[500px] w-[350px] shadow-lg mx-3 my-1 shrink-0 bg-[#edf6f9] rounded-lg flex items-center justify-center p-4 select-none"
            >
              <div className="absolute left-5 top-3">
                <img
                  onClick={() => handleUnfavorite(favoriteQuestion)}
                  src={HeartFilled}
                  className="w-8 transition-all duration-300 cursor-pointer hover:scale-110"
                />
              </div>
              <p className="text-3xl font-light text-center text-black h-fit">
                {favoriteQuestion}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
