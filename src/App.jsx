import QuestionCard from "./components/QuestionCard";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="h-screen w-screen bg-[#6d6875] overflow-hidden flex">
      <div className="relative w-[1000px] p-1 m-auto flex flex-row overflow-x-scroll overflow-y-hidden rounded-3xl bg-black bg-opacity-20 shadow-md shadow-black">
        <Link to={"/lifeQuestions"}>
          <QuestionCard topic="Life" />
        </Link>
        <Link to={"/relationshipQuestions"}>
          <QuestionCard topic="Relationship" />
        </Link>
        <Link to={"/pastQuestions"}>
          <QuestionCard topic="Past" />
        </Link>
      </div>
    </div>
  );
}
