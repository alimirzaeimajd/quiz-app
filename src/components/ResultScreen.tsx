interface ResultScreenProps {
  score: number;
}

export default function ResultScreen({ score }: ResultScreenProps) {
  return (
    <>
      <h1>ResultScreen</h1>
      <h2>{score}</h2>
    </>
  );
}
