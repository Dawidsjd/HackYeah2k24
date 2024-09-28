import { useState } from "react";
import Sidebar from "../Global/Sidebar";
import { Exams } from "./Exams";
import Exam from "./Exam";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  } as React.CSSProperties,

  exerciseContainer: {
    flex: 1,
    overflowY: "auto",
    maxHeight: `calc(100vh - 50px)`, // Ustal wysokość sidebaru
    padding: "10px",
  } as React.CSSProperties,
};
const ExamStart = () => {
  const [examOpen, setExamOpen] = useState<number | null>(null);
  return (
    <>
      <div style={styles.container} className="bg-primary">
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
              onEnd={(correctCounter: number) => {
                return <h1>Correct Answers: {correctCounter}</h1>;
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ExamStart;
