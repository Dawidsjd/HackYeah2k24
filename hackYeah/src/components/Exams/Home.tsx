import { useState } from "react";
import Sidebar from "../Global/Sidebar";
import { Exams } from "./Exams";
import Exam from "./Exam";
import "../Exercises/styles.css";

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

const ExamStart = ({ level }: { level: number }) => {
  const [examOpen, setExamOpen] = useState<number | null>(null);
  const openExam = (id: number) => {
    setCorrectAnswers(0);
    setExamOpen(id);
    setTotalAnswers(0);
  };
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [totalAnswers, setTotalAnswers] = useState<number>(0);
  const [imageSrc, setImageSrc] = useState("/wombat-neutral.png"); // Stan dla źródła obrazka

  let recommendId = 0;
  if (level >= 0) recommendId = 1;
  if (level > 3) recommendId = 2;
  if (level > 6) recommendId = 3;

  const handleExamEnd = (
    correctCounter: number,
    setCounter: any,
    setQuestionNr: any
  ) => {
    setCorrectAnswers(correctCounter);
    setTotalAnswers(Exams[examOpen!].exercises.length);
    setCounter(0);
    setQuestionNr(0);
    setExamOpen(null);
    // Ustaw zdjęcie w zależności od poprawności odpowiedzi
    setImageSrc(
      correctAnswers > totalAnswers / 2 ? "/wombat-win.png" : "/wombat-cry.png"
    );
  };

  return (
    <>
      <div style={styles.container} className="bg-primary">
        <Sidebar />
        <div className="flex-1 m-4 rounded-sm p-2">
          Exam Recomennded to Pass into next level:
          {recommendId < 3 ? (
            <div>
              <span
                className="badge badge-white cursor-pointer"
                onClick={() => openExam(Exams[recommendId].id)}
              >
                {Exams[recommendId].title}
              </span>
            </div>
          ) : (
            <span>
              You have reached maximum level of knowledge that we provide
            </span>
          )}
          All Exams:
          <div className="flex space-x-2">
            {Exams.map((exam) => (
              <span
                key={exam.id}
                className="badge badge-white cursor-pointer"
                onClick={() => openExam(exam.id)}
              >
                {exam.title}
              </span>
            ))}
          </div>
          {examOpen != null && (
            <Exam
              exercises={Exams[examOpen].exercises}
              title={Exams[examOpen].title}
              onEnd={(
                correctCounter: number,
                setCounter: any,
                setQuestionNr: any
              ) => {
                handleExamEnd(correctCounter, setCounter, setQuestionNr);
              }}
            />
          )}
          {/* Wyświetlanie wyniku po zakończeniu egzaminu */}
          {totalAnswers > 0 && (
            <div className="flex flex-col items-center mt-4">
              <h1
                className="text-2xl drop-shadow-custom"
                style={{
                  color: correctAnswers > totalAnswers / 2 ? "green" : "red",
                }}
              >
                Correct Answers: {correctAnswers} / {totalAnswers}
              </h1>
              {/* Wyświetlanie zdjęcia w zależności od poprawności odpowiedzi */}
              <img
                src={imageSrc}
                alt="Wombat"
                className="mx-auto w-64 h-64 drop-shadow-custom"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExamStart;
