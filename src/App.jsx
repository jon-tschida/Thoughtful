import React from "react";
import QuestionCard from "./components/QuestionCard";
import WelcomeModal from "./components/WelcomeModal";
import { Link } from "react-router-dom";
import { version } from "../package.json";
import questionMark from "./assets/questionMark.svg";
import GoogleAdsense from "./components/GoogleAdsense";

export default function App() {
  const [closedModal, setClosedModal] = React.useState(true);
  return (
    <>
      <img
        src={questionMark}
        className="absolute cursor-pointer left-5 top-5"
        onClick={() => setClosedModal((prevState) => !prevState)}
      />
      {/* Display our welcomeModal only on first visit. 
      When the user hits the close button in the WelcomeModal, we set the `closedModal` state to true and save that in localstorage.
      Our state is initialized with the default value found in the localstorage, either false or true. 
      If closedModal is true, then we don't display WelcomeModal and just display the site content. 
    */}
      {closedModal || <WelcomeModal setClosedModal={setClosedModal} />}
      <div className="flex w-screen h-screen overflow-hidden bg-zinc-800">
        <div className="relative w-[1000px] p-1 m-auto flex flex-row overflow-x-scroll overflow-y-hidden rounded-3xl drop-shadow-2xl backdrop-blur">
          <Link to={"/lifeQuestions"}>
            <QuestionCard topic="Life" />
          </Link>
          <Link to={"/relationshipQuestions"}>
            <QuestionCard topic="Relationship" />
          </Link>
          <Link to={"/pastQuestions"}>
            <QuestionCard topic="Past" />
          </Link>
          <Link to={"/favoriteQuestions"}>
            <QuestionCard topic="Favorites" />
          </Link>
        </div>
        <GoogleAdsense dataAdSlot="5712181705"/>
        <div className="absolute w-screen text-sm font-thin text-center bottom-4 text-zinc-600">
          <p>
            Created by{" "}
            <a
              href="https://github.com/jon-tschida"
              rel="noreferrer"
              target="_blank"
            >
              <i>Jon Tschida</i>
            </a>{" "}
            -{" "}
            <a
              href="https://github.com/jon-tschida/Thoughtful/tree/main"
              rel="noreferrer"
              target="_blank"
            >
              <i>version {version}</i>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
