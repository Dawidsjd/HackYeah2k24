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
