import { useState } from "react";
import { questions } from "../data/questions";
import type { Status } from "../types";
interface QuestionCardProps {
  category: string | undefined;
  onChange: React.Dispatch<React.SetStateAction<Status>>;
  score: number;
  getScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuestionCard({ category, onChange, getScore }: QuestionCardProps) {
  const [index, setIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const filteredQuestions = questions.filter((q) => q.category === category);
  const currentQuestion = filteredQuestions[index];

  function optionHandler(optionId: number) {
    if (selectedOptionId !== null) return; // already answered, ignore further clicks
    setSelectedOptionId(optionId); // use this for highlighting answer.
    if (optionId === currentQuestion.correctAnswer) {
      getScore((prev) => prev + 1);
    }
  }

  function getButtonClass(optionId: number) {
    if (selectedOptionId === null) return "bg-blue-500"; // nothing picked yet
    if (optionId === currentQuestion.correctAnswer) return "bg-green-500";
    if (optionId === selectedOptionId) return "bg-red-500";
    return "bg-blue-500"; // untouched, unrelated option
  }

  function nextHandler() {
    if (selectedOptionId === null) throw Error("please choose an answer first!"); // will work on this later.
    if (filteredQuestions.length <= index + 1) {
      onChange("finished");
      return;
    }
    setIndex((prev) => prev + 1);
    setSelectedOptionId(null); // reset for the new question
  }

  return (
    <div>
      <div>
        <h1 key={currentQuestion.id}>{currentQuestion.question}</h1>
        {currentQuestion.options.map((o) => (
          <button
            className={`${getButtonClass(o.id)} text-white font-bold py-2 px-4 rounded`}
            key={o.id}
            onClick={() => optionHandler(o.id)}
            disabled={selectedOptionId !== null}
          >
            {o.text}
          </button>
        ))}
      </div>
      <button onClick={nextHandler}>NEXT</button>
    </div>
  );
}
