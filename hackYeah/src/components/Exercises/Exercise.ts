import { ExerciseType } from "../../type";
import { shuffle } from "./Exercises";
export class Exercise {
  falseAnswers: string[];
  correctAnswer: string;
  question: string;

  constructor(newExercise: ExerciseType) {
    this.correctAnswer = newExercise.correctAnswer;
    this.falseAnswers = newExercise.falseAnswers;
    this.question = newExercise.question;
  }

  createQuestionTemplate() {
    let temp = this.falseAnswers;
    let falseAnswers: string[] = temp.slice(0, 3);
    shuffle(temp);
    return {
      falseAnswers,
      correctAnswer: this.correctAnswer,
    };
  }
}

export const TestExercises: ExerciseType[] = [
  {
    question: "What is a cryptocurrency?",
    correctAnswer: "A digital currency based on cryptographic technology",
    falseAnswers: [
      "A physical form of money",
      "A currency issued by a government",
      "Paper money",
    ],
  },
  {
    question:
      "Which of the following projects is considered the first cryptocurrency?",
    correctAnswer: "BitCoin",
    falseAnswers: ["Ethereum", "Litecoin", "Doge coin"],
  },
  {
    question: "What are the main advantages of cryptocurrencies?",
    correctAnswer: "Lack of intermediaries and decentralization",
    falseAnswers: [
      "High inflation",
      "Requires central control",
      "Low anonymity",
    ],
  },

  {
    question:
      "What technology do cryptocurrencies use to store transaction data?",
    correctAnswer: "Blockchain",
    falseAnswers: ["Cloud storage", "Centralized servers", "SQL Databases"],
  },
  {
    question:
      "What does the term decentralization mean in the context of cryptocurrencies?",
    correctAnswer: "Distribution of data across different locations",
    falseAnswers: [
      "Control by one person",
      "Centralized management",
      "Usage only in one country",
    ],
  },
  {
    question:
      "What are the key functions of cryptography in cryptocurrencies??",
    correctAnswer: "Securing transactions and ensuring anonymity",
    falseAnswers: [
      "Speeding up transaction processes",
      "Increasing the number of transactions",
      "Restricting network access",
    ],
  },

  {
    question:
      "Which of the following types of wallets is considered the most secure?",
    correctAnswer: "Hardware wallet",
    falseAnswers: ["Mobile wallet", "Online wallet", "Paper wallet"],
  },
  {
    question:
      "What should be the most important factor when choosing a cryptocurrency exchange?",
    correctAnswer: "Transaction fees",
    falseAnswers: [
      "The color of the website",
      "Amount of advertisements",
      "Number of available cryptocurrencies",
    ],
  },
  {
    question: "What are the potential risks of using cryptocurrency exchanges?",
    correctAnswer: "Hacking and fraud risks",
    falseAnswers: ["Guaranteed profits", "High availability", "Low fees"],
  },

  {
    question: "What investment principle should you follow?",
    correctAnswer: "Don’t invest more than you can afford to lose",
    falseAnswers: [
      "Invest everything in one cryptocurrency",
      "Only invest when others are doing it",
      "Ignore market",
    ],
  },
  {
    question: "What is fundamental analysis?",
    correctAnswer:
      "Evaluating the asset's value based on technical and market data",
    falseAnswers: [
      "Analyzing price charts",
      "Predicting future prices",
      "Creating market forecasts",
    ],
  },
  {
    question: "What are the key elements of an investment strategy?",
    correctAnswer: "Portfolio diversification and risk management",
    falseAnswers: [
      "Investing in a single cryptocurrency",
      "Limiting information",
      "Quick decision-making",
    ],
  },
];
