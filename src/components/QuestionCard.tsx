import { useState } from "react";
import { questions } from "../data/questions";
import type { Status } from "../types";
interface QuestionCardProps {
  category: string | undefined;
  onChange: React.Dispatch<React.SetStateAction<Status>>;
  getScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuestionCard({ category, onChange, getScore }: QuestionCardProps) {
  const [index, setIndex] = useState<number>(0);
  const filteredQuestions = questions.filter((q) => q.category === category);

  function nextHandler() {
    if (filteredQuestions.length <= index + 1) {
      onChange("finished");
      return;
    }
    setIndex((prev) => prev + 1);
  }

  function optionHandler(option: string) {
    if (option === filteredQuestions[index].correctAnswer) {
      console.log("True option");
      getScore((prev) => prev + 1);
    } else {
      console.log("false option");
    }
  }

  return (
    <div>
      <div>
        <h1 key={filteredQuestions[index].id}>{filteredQuestions[index].question}</h1>
        {filteredQuestions[index].options.map((o) => (
          <button
            key={`${filteredQuestions[index].id}${filteredQuestions[index].options.indexOf(o)}`}
            onClick={() => optionHandler(o)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {o}
          </button>
        ))}
      </div>
      <button onClick={nextHandler}>NEXT</button>
    </div>
  );
}
