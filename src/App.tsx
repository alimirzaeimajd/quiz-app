import StartScreen from "./components/StartScreen";
import CategorySelection from "./components/CategorySelection";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import type { Category, Status } from "./types";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState<Status>("start");
  const [category, setCategory] = useState<Category | undefined>(undefined);

  switch (status) {
    case "start":
      return <StartScreen onChange={setStatus} />;
    case "category":
      return <CategorySelection onSelectCategory={setCategory} onChange={setStatus} />;
    case "playing":
      return <QuestionCard category={category} onChange={setStatus} />;
    case "finished":
      return <ResultScreen />;
    default:
      return <p>Unknown status</p>;
  }
}

export default App;
