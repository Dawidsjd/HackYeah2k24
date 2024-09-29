import { FullExcercises } from "../Exercises/CoursesExcercises";
import Exam from "../Exams/Exam";
import { ExerciseType } from "../../type";
import { Link } from "react-router-dom";
import { shuffle } from "../Exercises/Exercises";

interface KnowledgeTestProps {
  setLevel: (level: number) => void; // Specify the type for setLevel
}

const KnowledgeTest: React.FC<KnowledgeTestProps> = ({ setLevel }) => {
  const questions: ExerciseType[] = [];

  FullExcercises.forEach((m) => {
    shuffle(m); // Shuffle exercises
    questions.push(m[0]); // Push the first exercise from the shuffled array
  });

  return (
    <div className="mt-28">
      <Exam
        exercises={questions}
        title="Knowledge Exam"
        knowledgeTest={true}
        onEnd={(
          correctCounter: number,
          setCounter: any,
          setQuestionNr: any
        ) => {
          setLevel(correctCounter);

          return (
            <div className="flex flex-col justify-center items-center">
              <span className="text-2xl text-additional-second">
                Correct Answers: {correctCounter}
              </span>
              <Link
                to={"/"}
                className="inline-flex items-center space-x-2 px-3 py-1 mt-6 bg-secondary text-additional-second rounded-md hover:bg-additional-second hover:text-primary transition-all"
              >
                Back to Home
              </Link>
            </div>
          );
        }}
      />
    </div>
  );
};

export default KnowledgeTest;
