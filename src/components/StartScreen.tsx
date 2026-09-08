import type { Status } from "../types";

interface StartScreenProps {
  onChange: React.Dispatch<React.SetStateAction<Status>>;
}

export default function StartScreen({ onChange }: StartScreenProps) {
  return (
    <>
      <h1>Welcome to quiz app</h1>
      <button onClick={() => onChange("category")}>START</button>
    </>
  );
}
