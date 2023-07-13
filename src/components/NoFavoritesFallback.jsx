import React from "react";

export default function NoFavoritesFallback() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-zinc-800 sm:p-2">
      <h3 className="mb-5 font-bold text-center lg:text-5xl text-slate-200 sm:text-2xl">
        No favorite questions yet!
      </h3>
      <p className="mb-5 text-center lg:text-xl text-zinc-400 sm:text-sm">
        Use the heart icon on any of the questions to add it to your favorites!
      </p>
    </div>
  );
}
