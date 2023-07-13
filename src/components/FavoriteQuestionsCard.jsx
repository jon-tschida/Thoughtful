import React from "react";
import Back from "./Back";
import HeartFilled from "../assets/heart-filled.svg";
import NoFavoritesFallback from "./NoFavoritesFallback";

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
    <>
      <Back />
      {/* We use a ternary operator to display either the NoFavoritesFallback  */}
      {favoriteQuestions.length === 0 ? (
        <NoFavoritesFallback />
      ) : (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-y-hidden bg-zinc-800">
          <div className="relative flex flex-row w-screen p-10 m-auto overflow-x-scroll overflow-y-hidden sm:w-screen">
            {favoriteQuestions.map((favoriteQuestion, i) => {
              return (
                <div
                  key={i}
                  className="relative h-[500px] w-[350px] mx-3 my-1 shrink-0 bg-[#edf6f9] rounded-lg flex items-center justify-center p-4 select-none md:h-[400px] md:w-[300px] sm:h-[300px] sm:w-[200px]"
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
      )}
    </>
  );
}
