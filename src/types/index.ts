export type Status = "start" | "category" | "playing" | "finished";

export const CATEGORIES = ["general", "programming", "history", "sports"] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Question {
  id: number;
  category: Category;
  question: string;
  options: string[];
  correctAnswer: string;
}

// export type QuizStatus = "start" | "playing" | "finished";

// export interface QuizState {
//   status: QuizStatus;
//   currentQuestionIndex: number;
//   score: number;
//   selectedCategory: Category | null;
//   answers: (string | null)[];
//   timeLeft: number;
// }
