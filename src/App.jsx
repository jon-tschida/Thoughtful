import QuestionCard from "./components/QuestionCard";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="flex w-screen h-screen overflow-hidden app-bg">
        <div className="relative w-[1000px] p-1 m-auto flex flex-row overflow-x-scroll overflow-y-hidden rounded-3xl bg-gray-400 drop-shadow-md shadow-white">
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
      </div>
    </>
  );
}
