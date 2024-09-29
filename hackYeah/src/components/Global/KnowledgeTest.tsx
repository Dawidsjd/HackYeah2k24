import { FullExcercises } from "../Exercises/CoursesExcercises";
import Exam from "../Exams/Exam";
import { ExerciseType } from "../../type";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
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
    <div className='mt-28'>
  <Exam
    exercises={questions}
    title="Knowledge Exam"
    onEnd={(correctCounter: number) => {
      let level = 0;

      if (correctCounter >= 0 && correctCounter <= 3) {
        level = 1;
      } else if (correctCounter >= 4 && correctCounter <= 6) {
        level = 2;
      } else if (correctCounter >= 7) {
        level = 3;
      }

      setLevel(level);

      return (
        <>
          <span>Correct Answers: {correctCounter}</span>
          <Link
            to={'/'}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-primary text-additional-second rounded-md hover:bg-tertiary hover:text-primary transition-all"
          >
            <span>Go Back to Home</span>
            <FaLongArrowAltRight />
          </Link>
          {/* Nowy przycisk "Back to Home" */}
          <Link
            to={'/'}
            className="inline-flex items-center space-x-2 px-3 py-1 mt-2 bg-secondary text-white rounded-md hover:bg-secondary-dark transition-all"
          >
            Back to Home
          </Link>
        </>
      );
    }}
  />
</div>

  );
};

export default KnowledgeTest;
