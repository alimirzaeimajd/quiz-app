import { useState } from "react";
import { questions } from "../data/questions";
import type { Status } from "../types";
interface QuestionCardProps {
  category: string | undefined;
  onChange: React.Dispatch<React.SetStateAction<Status>>;
}

export default function QuestionCard({ category, onChange }: QuestionCardProps) {
  const [index, setIndex] = useState<number>(0);
  const filteredQuestions = questions.filter((q) => q.category === category);

  function nextHandler() {
    if (filteredQuestions.length <= index + 1) {
      onChange("finished");
      return;
    }
    setIndex((prev) => prev + 1);
  }

  return (
    <div>
      <div>
        <h1 key={filteredQuestions[index].id}>{filteredQuestions[index].question}</h1>
        {filteredQuestions[index].options.map((o) => (
          <button
            key={`${filteredQuestions[index].id}${filteredQuestions[index].options.indexOf(o)}`}
          >
            {o}
          </button>
        ))}
      </div>
      <button onClick={nextHandler}>NEXT</button>
    </div>
  );
}
