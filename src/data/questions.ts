import type { Question } from "../types";

export const questions: Question[] = [
  {
    id: 1,
    category: "general",
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    category: "general",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    category: "general",
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    id: 4,
    category: "general",
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean",
  },
  {
    id: 5,
    category: "general",
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci",
  },
];
