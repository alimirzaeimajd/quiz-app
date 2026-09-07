interface StartPageProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function StartScreen({ onChange }: StartPageProps) {
  return (
    <>
      <h1>Welcome to quiz app</h1>
      <button onClick={() => onChange("category")}>START</button>
    </>
  );
}
