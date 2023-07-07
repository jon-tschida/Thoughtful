import QuestionCard from "./components/QuestionCard";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="h-screen w-screen bg-[#6d6875] overflow-hidden flex">
      <div className=" w-[1000px] px-15 m-auto flex flex-row overflow-x-scroll rounded-3xl">
        <Link to={"/lifeQuestions"}>
          <QuestionCard topic="Life" />
        </Link>
        <Link to={"/relationshipQuestions"}>
          <QuestionCard topic="Relationship" />
        </Link>
        <QuestionCard topic="Past" />
        <QuestionCard topic="Past" />
      </div>
    </div>
  );
}
