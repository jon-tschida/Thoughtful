import React from "react";

export default function QuestionCard({ topic, content }) {
  return (
    // We do a bit of conditional rendering here
    // We need to dispaly different styles for if the Question card component is being used on the main menu, or actually disaplaying questions.
    // To do this, we use the logical && operator in our main div, if the `topic` prop has been passed in, than we set the cursor to pointer.
    // We use a ternary operator for our font size in the p tag. If the content prop has been passed in, then we set the text-3x class, otherwise we do text-6xl
    <div
      className={` h-[500px] w-[350px] shadow-lg mx-3 my-1 shrink-0 bg-[#edf6f9] rounded-lg flex items-center justify-center p-4 ${
        topic && `cursor-pointer`
      } select-none`}
    >
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
