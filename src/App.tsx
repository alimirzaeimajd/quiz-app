import CategorySelection from "./components/CategorySelection";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import StartScreen from "./components/StartScreen";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState("start");

  switch (status) {
    case "start":
      return <StartScreen onChange={setStatus} />;
    case "category":
      return <CategorySelection />;
    case "playing":
      return <QuestionCard />;
    case "finished":
      return <ResultScreen />;
    default:
      return <p>Unknown status</p>;
  }
}

export default App;
