import { Exercise } from "./Exercise";
import { ExerciseProps } from "../../type";

export function shuffle(array: any[]) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

const Exercises = (props: ExerciseProps) => {
  var order = [0, 1, 2, 3];
  shuffle(order);
  const exercise = new Exercise(props.exercise);
  var answers = exercise.createQuestionTemplate();
  var answersTab: { correct: boolean; answer: string }[] = [];
  answers.falseAnswers.forEach((answer) =>
    answersTab.push({ correct: false, answer })
  );
  answersTab.push({ correct: true, answer: answers.correctAnswer });
  return (
    <div style={{ color: "white" }}>
      <div>{props.exercise.question}</div>
      {order.map((num) => (
        <div onClick={() => props.onAnswer(answersTab[num].correct)}>
          &nbsp;&nbsp;&nbsp;&nbsp;{answersTab[num].answer}
        </div>
      ))}
    </div>
  );
};

export default Exercises;
