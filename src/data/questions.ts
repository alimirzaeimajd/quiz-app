import type { Question } from "../types";

export const questions: Question[] = [
  // General
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

  // Programming
  {
    id: 6,
    category: "programming",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 7,
    category: "programming",
    question: "Which of the following is a JavaScript framework?",
    options: ["Django", "Flask", "React", "Laravel"],
    correctAnswer: "React",
  },
  {
    id: 8,
    category: "programming",
    question: "What is the correct way to declare a constant in JavaScript?",
    options: ["var x = 10;", "let x = 10;", "const x = 10;", "constant x = 10;"],
    correctAnswer: "const x = 10;",
  },
  {
    id: 9,
    category: "programming",
    question: "Which language is primarily used for styling web pages?",
    options: ["HTML", "JavaScript", "CSS", "Python"],
    correctAnswer: "CSS",
  },
  {
    id: 10,
    category: "programming",
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Automated Program Interaction",
      "Application Process Integration",
    ],
    correctAnswer: "Application Programming Interface",
  },

  // History
  {
    id: 11,
    category: "history",
    question: "In which year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: "1945",
  },
  {
    id: 12,
    category: "history",
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
    correctAnswer: "George Washington",
  },
  {
    id: 13,
    category: "history",
    question: "The ancient city of Rome was founded in which year (traditionally)?",
    options: ["753 BC", "509 BC", "27 BC", "476 AD"],
    correctAnswer: "753 BC",
  },
  {
    id: 14,
    category: "history",
    question:
      "Who was the Egyptian queen known for her relationships with Julius Caesar and Mark Antony?",
    options: ["Nefertiti", "Hatshepsut", "Cleopatra", "Hatshepsut"],
    correctAnswer: "Cleopatra",
  },
  {
    id: 15,
    category: "history",
    question: "The Industrial Revolution began in which country?",
    options: ["France", "Germany", "United States", "England"],
    correctAnswer: "England",
  },

  // Sports
  {
    id: 16,
    category: "sports",
    question: "How many players are on a standard soccer (football) team on the field?",
    options: ["9", "10", "11", "12"],
    correctAnswer: "11",
  },
  {
    id: 17,
    category: "sports",
    question: "Which country has won the most FIFA World Cups?",
    options: ["Germany", "Italy", "Argentina", "Brazil"],
    correctAnswer: "Brazil",
  },
  {
    id: 18,
    category: "sports",
    question: "In basketball, how many points is a free throw worth?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "1",
  },
  {
    id: 19,
    category: "sports",
    question: "Which sport is played at Wimbledon?",
    options: ["Golf", "Tennis", "Cricket", "Rugby"],
    correctAnswer: "Tennis",
  },
  {
    id: 20,
    category: "sports",
    question: "How many holes are there in a standard round of golf?",
    options: ["9", "12", "18", "21"],
    correctAnswer: "18",
  },
];
