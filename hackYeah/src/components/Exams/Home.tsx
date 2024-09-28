import { useState } from "react";
import Sidebar from "../Global/Sidebar";
import { Exams } from "./Exams";
import Exam from "./Exam";
const ExamStart = () => {
  const [examOpen, setExamOpen] = useState<number | null>(null);
  return (
    <>
      <div className="flex bg-primary">
        <Sidebar />
        <div className="flex-1 m-4 rounded-sm p-2">
          {Exams.map((exam) => (
            <div>
              <button onClick={() => setExamOpen(exam.id)}>{exam.title}</button>
            </div>
          ))}

          {examOpen != null && (
            <Exam
              exercises={Exams[examOpen].exercises}
              title={Exams[examOpen].title}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ExamStart;
