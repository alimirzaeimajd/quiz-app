import type { Question } from "../types";

export const questions: Question[] = [
  // General
  {
    id: 1,
    category: "general",
    question: "What is the capital of France?",
    options: [
      { id: 1, text: "Berlin" },
      { id: 2, text: "Madrid" },
      { id: 3, text: "Paris" },
      { id: 4, text: "Rome" },
    ],
    correctAnswer: 3,
  },
  {
    id: 2,
    category: "general",
    question: "Which planet is known as the Red Planet?",
    options: [
      { id: 1, text: "Venus" },
      { id: 2, text: "Mars" },
      { id: 3, text: "Jupiter" },
      { id: 4, text: "Saturn" },
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    category: "general",
    question: "How many continents are there on Earth?",
    options: [
      { id: 1, text: "5" },
      { id: 2, text: "6" },
      { id: 3, text: "7" },
      { id: 4, text: "8" },
    ],
    correctAnswer: 3,
  },
  {
    id: 4,
    category: "general",
    question: "What is the largest ocean on Earth?",
    options: [
      { id: 1, text: "Atlantic Ocean" },
      { id: 2, text: "Indian Ocean" },
      { id: 3, text: "Arctic Ocean" },
      { id: 4, text: "Pacific Ocean" },
    ],
    correctAnswer: 4,
  },
  {
    id: 5,
    category: "general",
    question: "Who painted the Mona Lisa?",
    options: [
      { id: 1, text: "Vincent van Gogh" },
      { id: 2, text: "Pablo Picasso" },
      { id: 3, text: "Leonardo da Vinci" },
      { id: 4, text: "Michelangelo" },
    ],
    correctAnswer: 3,
  },

  // Programming
  {
    id: 6,
    category: "programming",
    question: "What does HTML stand for?",
    options: [
      { id: 1, text: "Hyper Text Markup Language" },
      { id: 2, text: "High Tech Modern Language" },
      { id: 3, text: "Hyperlink and Text Markup Language" },
      { id: 4, text: "Home Tool Markup Language" },
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    category: "programming",
    question: "Which of the following is a JavaScript framework?",
    options: [
      { id: 1, text: "Django" },
      { id: 2, text: "Flask" },
      { id: 3, text: "React" },
      { id: 4, text: "Laravel" },
    ],
    correctAnswer: 3,
  },
  {
    id: 8,
    category: "programming",
    question: "What is the correct way to declare a constant in JavaScript?",
    options: [
      { id: 1, text: "var x = 10;" },
      { id: 2, text: "let x = 10;" },
      { id: 3, text: "const x = 10;" },
      { id: 4, text: "constant x = 10;" },
    ],
    correctAnswer: 3,
  },
  {
    id: 9,
    category: "programming",
    question: "Which language is primarily used for styling web pages?",
    options: [
      { id: 1, text: "HTML" },
      { id: 2, text: "JavaScript" },
      { id: 3, text: "CSS" },
      { id: 4, text: "Python" },
    ],
    correctAnswer: 3,
  },
  {
    id: 10,
    category: "programming",
    question: "What does API stand for?",
    options: [
      { id: 1, text: "Application Programming Interface" },
      { id: 2, text: "Advanced Programming Interface" },
      { id: 3, text: "Automated Program Interaction" },
      { id: 4, text: "Application Process Integration" },
    ],
    correctAnswer: 1,
  },

  // History
  {
    id: 11,
    category: "history",
    question: "In which year did World War II end?",
    options: [
      { id: 1, text: "1943" },
      { id: 2, text: "1944" },
      { id: 3, text: "1945" },
      { id: 4, text: "1946" },
    ],
    correctAnswer: 3,
  },
  {
    id: 12,
    category: "history",
    question: "Who was the first President of the United States?",
    options: [
      { id: 1, text: "Thomas Jefferson" },
      { id: 2, text: "George Washington" },
      { id: 3, text: "Abraham Lincoln" },
      { id: 4, text: "John Adams" },
    ],
    correctAnswer: 2,
  },
  {
    id: 13,
    category: "history",
    question: "The ancient city of Rome was founded in which year (traditionally)?",
    options: [
      { id: 1, text: "753 BC" },
      { id: 2, text: "509 BC" },
      { id: 3, text: "27 BC" },
      { id: 4, text: "476 AD" },
    ],
    correctAnswer: 1,
  },
  {
    id: 14,
    category: "history",
    question:
      "Who was the Egyptian queen known for her relationships with Julius Caesar and Mark Antony?",
    options: [
      { id: 1, text: "Nefertiti" },
      { id: 2, text: "Hatshepsut" },
      { id: 3, text: "Cleopatra" },
      { id: 4, text: "Hatshepsut" },
    ],
    correctAnswer: 3,
  },
  {
    id: 15,
    category: "history",
    question: "The Industrial Revolution began in which country?",
    options: [
      { id: 1, text: "France" },
      { id: 2, text: "Germany" },
      { id: 3, text: "United States" },
      { id: 4, text: "England" },
    ],
    correctAnswer: 4,
  },

  // Sports
  {
    id: 16,
    category: "sports",
    question: "How many players are on a standard soccer (football) team on the field?",
    options: [
      { id: 1, text: "9" },
      { id: 2, text: "10" },
      { id: 3, text: "11" },
      { id: 4, text: "12" },
    ],
    correctAnswer: 3,
  },
  {
    id: 17,
    category: "sports",
    question: "Which country has won the most FIFA World Cups?",
    options: [
      { id: 1, text: "Germany" },
      { id: 2, text: "Italy" },
      { id: 3, text: "Argentina" },
      { id: 4, text: "Brazil" },
    ],
    correctAnswer: 4,
  },
  {
    id: 18,
    category: "sports",
    question: "In basketball, how many points is a free throw worth?",
    options: [
      { id: 1, text: "1" },
      { id: 2, text: "2" },
      { id: 3, text: "3" },
      { id: 4, text: "4" },
    ],
    correctAnswer: 1,
  },
  {
    id: 19,
    category: "sports",
    question: "Which sport is played at Wimbledon?",
    options: [
      { id: 1, text: "Golf" },
      { id: 2, text: "Tennis" },
      { id: 3, text: "Cricket" },
      { id: 4, text: "Rugby" },
    ],
    correctAnswer: 2,
  },
  {
    id: 20,
    category: "sports",
    question: "How many holes are there in a standard round of golf?",
    options: [
      { id: 1, text: "9" },
      { id: 2, text: "12" },
      { id: 3, text: "18" },
      { id: 4, text: "21" },
    ],
    correctAnswer: 3,
  },
];
