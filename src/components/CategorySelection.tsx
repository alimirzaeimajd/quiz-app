import { CATEGORIES, type Status } from "../types";

interface CategorySelectionProps {
  onChange: React.Dispatch<React.SetStateAction<Status>>;
}

export default function CategorySelection({ onChange }: CategorySelectionProps) {
  return (
    <div>
      {CATEGORIES.map((category) => (
        <div key={category}>
          <button onClick={() => onChange("playing")}>{category}</button>
        </div>
      ))}
    </div>
  );
}
