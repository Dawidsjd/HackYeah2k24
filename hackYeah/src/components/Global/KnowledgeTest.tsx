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
          let knowledgeLevel: string = "no level";
          let circleColor: string = "";
          if (correctCounter >= 0) knowledgeLevel = "beginner";
          if (correctCounter > 3) knowledgeLevel = "intermediate";
          if (correctCounter > 6) knowledgeLevel = "expert";
          if (knowledgeLevel === "no level") {
            circleColor = "bg-blue-500";
          } else if (knowledgeLevel === "beginner") {
            circleColor = "bg-green-500";
          } else if (knowledgeLevel === "intermediate") {
            circleColor = "bg-orange-500";
          } else if (knowledgeLevel === "expert") {
            circleColor = "bg-red-500";
          }

          return (
            <div className="w-full glass space-y-2 flex flex-row justify-around items-center shadow-custom-light">
              <div
                className={`w-32 h-32 rounded-full flex justify-center drop-shadow-custom-2 items-center ${circleColor}`}
              >
                <div className="w-28 h-28 rounded-full flex justify-center items-center bg-tertiary drop-shadow-custom-2">
                  <p className="text-m capitalize text-additional-first font-bold">
                    {knowledgeLevel}
                  </p>
                </div>
              </div>
              <Link to={"/"}>
                <button
                  style={{ color: "black" }}
                  className="bg-secondary text-additional-second px-2 py-1 rounded-md hover:bg-additional-second hover:text-primary transition"
                >
                  Go back to Home
                </button>
              </Link>
            </div>
          );
        }}
      />
    </div>
  );
};

export default KnowledgeTest;
