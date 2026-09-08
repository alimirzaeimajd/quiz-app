import { CATEGORIES, type Category, type Status } from "../types";

interface CategorySelectionProps {
  onChange: React.Dispatch<React.SetStateAction<Status>>;
  onSelectCategory: React.Dispatch<React.SetStateAction<Category | undefined>>;
}

export default function CategorySelection({ onChange, onSelectCategory }: CategorySelectionProps) {
  return (
    <div>
      {CATEGORIES.map((category) => (
        <div key={category}>
          <button
            onClick={() => {
              onSelectCategory(category);
              onChange("playing");
            }}
          >
            {category}
          </button>
        </div>
      ))}
    </div>
  );
}
