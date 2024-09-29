import { useState } from "react";
import { ExamProps, ExerciseType } from "../../type";
import Exercises from "../Exercises/Exercises";

const Exam = (props: ExamProps) => {
  let exercises: ExerciseType[] = props.exercises;
  let title: string = props.title;
  const [correctCounter, setCounter] = useState(0);
  const [questionNr, setQuestionNr] = useState(0);
  const onAnswer = (correct: boolean) => {
    if (correct) setCounter(correctCounter + 1);
    setQuestionNr(questionNr + 1);
  };
  const onEnd = () => {
    return props.onEnd(correctCounter, setCounter, setQuestionNr);
  };
  return (
    <div>
      {questionNr}
      {/* <h1 className="">{title}</h1> */}
      {questionNr < exercises.length && (
        <Exercises exercise={exercises[questionNr]} onAnswer={onAnswer} />
      )}
      {questionNr == exercises.length && onEnd()}
    </div>
  );
};

export default Exam;
