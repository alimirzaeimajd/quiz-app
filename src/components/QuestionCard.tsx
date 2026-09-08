import { questions } from "../data/questions";

interface QuestionCardProps {
  category: string | undefined;
}

export default function QuestionCard({ category }: QuestionCardProps) {
  return (
    <div>
      {questions
        .filter((q) => q.category === category)
        .map((q) => {
          return (
            <div>
              <h1 key={q.id}>{q.question}</h1>
              {q.options.map((o) => (
                <button key={`${q.id}${q.options.indexOf(o)}`}>{o}</button>
              ))}
            </div>
          );
        })}
    </div>
  );
}
