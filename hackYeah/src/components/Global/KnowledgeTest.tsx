import { FullExcercises } from "../Exercises/CoursesExcercises";
import Exam from "../Exams/Exam";
import { ExerciseType } from "../../type";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { shuffle } from "../Exercises/Exercises";

const KnowledgeTest = ({ setLevel }: { setLevel: any }) => {
  const questions: ExerciseType[] = [];
  FullExcercises.forEach((m) => {
    shuffle(m);
    questions.push(m[0]);
  });
  return (
    <Exam
      exercises={questions}
      title="Knowledge Exam"
      onEnd={(correctCounter: number) => {
        setLevel(correctCounter);
        return (
          <>
            <span>Correct Answers: {correctCounter}</span>
            <Link
              to={"/"}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-primary text-additional-second rounded-md hover:bg-tertiary hover:text-primary transition-all"
            >
              <span>Go Back to Home</span>
              <FaLongArrowAltRight />
            </Link>
          </>
        );
      }}
    />
  );
};

export default KnowledgeTest;
