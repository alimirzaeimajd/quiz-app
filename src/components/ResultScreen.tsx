import type { Status } from "../types";

interface ResultScreenProps {
  score: number;
  onChange: React.Dispatch<React.SetStateAction<Status>>;
  onChangeScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function ResultScreen({ score, onChange, onChangeScore }: ResultScreenProps) {
  function resetHandler() {
    onChangeScore(0);
    onChange("category");
    console.log("your game is reset!");
  }

  return (
    <>
      <h1>ResultScreen</h1>
      <h2>{score}</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={resetHandler}
      >
        AGAIN
      </button>
    </>
  );
}
