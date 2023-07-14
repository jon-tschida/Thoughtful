import QuestionCard from "./components/QuestionCard";
import WelcomeModal from "./components/WelcomeModal";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <WelcomeModal />
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
        <div className="absolute w-screen text-center bottom-4 text-zinc-600">
          <p>
            Created by{" "}
            <a
              href="https://github.com/jon-tschida"
              rel="noreferrer"
              target="_blank"
            >
              <i>Jon Tschida</i>{" "}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
