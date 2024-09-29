import { useState, useEffect } from "react";
import { ExamProps, ExerciseType } from "../../type";
import Exercises from "../Exercises/Exercises";

const Exam = (props: ExamProps) => {
  const { exercises, title } = props;
  const [correctCounter, setCounter] = useState(0);
  const [questionNr, setQuestionNr] = useState(0);

  const onAnswer = (correct: boolean) => {
    if (correct) setCounter(correctCounter + 1);
    setQuestionNr(questionNr + 1);
  };

  const onEnd = () => {
    return props.onEnd(correctCounter, setCounter, setQuestionNr);
  };

  // Resetuje stany za każdym razem, gdy zmieniają się props.title lub props.exercises
  if (!props.knowledgeTest)
    useEffect(() => {
      setCounter(0);
      setQuestionNr(0);
    }, [title, exercises]);

  return (
    <div>
      {questionNr < exercises.length && (
        <Exercises exercise={exercises[questionNr]} onAnswer={onAnswer} />
      )}
      {questionNr === exercises.length && onEnd()}
    </div>
  );
};

export default Exam;
