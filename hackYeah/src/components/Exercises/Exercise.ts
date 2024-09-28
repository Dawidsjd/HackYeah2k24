import { ExerciseType } from "../../type";
export class Exercise {
  falseAnswers: string[];
  correctAnswer: string;
  question: string;

  constructor(question: string, correct: string, ...falseAns: string[]) {
    this.correctAnswer = correct;
    this.falseAnswers = falseAns;
    this.question = question;
  }

  static createQuestionTemplate(falseAnswers: string[], correctAnswer: string) {
    let falseAns: string[] = [];
    let temp = falseAnswers;
    for (let i = 0; i < 3; i++) {
      const random = (Math.random() * 1000) % temp.length;
      falseAnswers.push(temp[random]);
      temp = temp.filter((answer) => answer != temp[random]);
    }
    return {
      falseAnswers,
      correctAnswer,
    };
  }
}

export const TestExercises: ExerciseType[] = [
  {
    question: "SSADAD",
    correctAnswer: "sadasdasdsa",
    falseAnswers: ["asdsadasd", "dadsadasd"],
  },
  {
    question: "SS23523532ADAD",
    correctAnswer: "sadasdas23523532532dsa",
    falseAnswers: ["asds23523523adasd", "dad234243sadasd"],
  },
  {
    question: "SSADAasdajughfD",
    correctAnswer: "sadasghgfhdfgsdddasdsa",
    falseAnswers: ["asfdsvgdsadasd", "dadrsgdgsgsadasd"],
  },
];
