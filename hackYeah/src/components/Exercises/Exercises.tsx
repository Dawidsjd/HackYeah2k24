import React, { useState } from "react";
import { Exercise } from "./Exercise";
import { ExerciseProps } from "../../type";

// Funkcja tasująca odpowiedzi
export function shuffle(array: any[]) {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

// Komponent Exercise z bardziej dopracowanym designem
const Exercises = (props: ExerciseProps) => {
  const [score, setScore] = useState(0); // Punkty
  const [currentQuestion, setCurrentQuestion] = useState(0); // Aktualne pytanie
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null); // Wybrana odpowiedź
  const [isQuizFinished, setIsQuizFinished] = useState(false); // Czy quiz się skończył?

  const exercise = new Exercise(props.exercise);
  const allQuestions = [exercise]; // Zakładamy jedno pytanie; można rozbudować na więcej

  const totalQuestions = allQuestions.length; // Łączna liczba pytań
  const order = [0, 1, 2, 3];
  shuffle(order);

  const answers = exercise.createQuestionTemplate();
  const answersTab: { correct: boolean; answer: string }[] = [];
  answers.falseAnswers.forEach((answer) =>
    answersTab.push({ correct: false, answer })
  );
  answersTab.push({ correct: true, answer: answers.correctAnswer });

  // Stylizacja inline dla komponentu
  const styles = {
    container: {
      backgroundColor: "#f4f7fc", // Subtelne, jasne tło
      padding: "30px",
      borderRadius: "12px",
      color: "#333",
      maxWidth: "700px",
      margin: "20px auto",
      textAlign: "center" as "center",
      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
    },
    question: {
      fontSize: "1.8rem",
      marginBottom: "30px",
      color: "#2c3e50",
      fontWeight: "600",
    },
    answer: {
      backgroundColor: "#eaf2f8", // Delikatny błękit
      padding: "15px",
      margin: "12px 0",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "background-color 0.4s ease, transform 0.3s",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
      fontSize: "1.2rem",
      fontWeight: "500",
    },
    answerHover: {
      backgroundColor: "#3498db", // Intensywniejszy niebieski na hover
      color: "white",
    },
    answerCorrect: {
      backgroundColor: "#2ecc71", // Zielony dla poprawnej odpowiedzi
      color: "white",
    },
    answerWrong: {
      backgroundColor: "#e74c3c", // Czerwony dla niepoprawnej odpowiedzi
      color: "white",
    },
    button: {
      padding: "12px 25px",
      margin: "25px 10px",
      backgroundColor: "#3498db",
      color: "white",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.3s",
      fontSize: "1.1rem",
    },
    buttonReset: {
      padding: "12px 25px",
      margin: "25px 10px",
      backgroundColor: "#e74c3c",
      color: "white",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.3s",
      fontSize: "1.1rem",
    },
    score: {
      fontSize: "1.6rem",
      color: "#2c3e50",
      fontWeight: "bold" as "bold",
      marginTop: "20px",
    },
  };

  // Funkcja obsługująca wybór odpowiedzi
  const handleAnswerSelect = (isCorrect: boolean, index: number) => {
    if (selectedAnswer !== null) return; // Blokowanie ponownego wyboru

    setSelectedAnswer(index);

    if (isCorrect) {
      setScore(score + 1); // Aktualizacja wyniku
    }

    // Następne pytanie lub zakończenie quizu
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null); // Reset wyboru odpowiedzi
      } else {
        setIsQuizFinished(true); // Koniec quizu
      }
    }, 1200); // 1.2-sekundowa pauza, aby pokazać wynik odpowiedzi
  };

  // Funkcja resetowania quizu
  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsQuizFinished(false);
  };

  // Obliczenie wyniku w procentach
  const getScorePercentage = () => {
    return Math.round((score / totalQuestions) * 100);
  };

  return (
    <div style={styles.container}>
      {isQuizFinished ? (
        <div>
          <h2>Gratulacje! Twój wynik:</h2>
          <div style={styles.score}>
            {getScorePercentage()}% ( {score} / {totalQuestions} )
          </div>
          <button style={styles.buttonReset} onClick={resetQuiz}>
            Zresetuj Quiz
          </button>
        </div>
      ) : (
        <div>
          <div style={styles.question}>
            Pytanie {currentQuestion + 1} z {totalQuestions}:<br />
            {props.exercise.question}
          </div>
          {order.map((num) => (
            <div
              key={num}
              style={{
                ...styles.answer,
                ...(selectedAnswer !== null &&
                num === selectedAnswer &&
                answersTab[num].correct
                  ? styles.answerCorrect
                  : {}),
                ...(selectedAnswer !== null &&
                num === selectedAnswer &&
                !answersTab[num].correct
                  ? styles.answerWrong
                  : {}),
              }}
              onMouseEnter={(e) => {
                if (selectedAnswer === null) {
                  (e.target as HTMLDivElement).style.backgroundColor =
                    styles.answerHover.backgroundColor;
                  (e.target as HTMLDivElement).style.color =
                    styles.answerHover.color;
                }
              }}
              onMouseLeave={(e) => {
                if (selectedAnswer === null) {
                  (e.target as HTMLDivElement).style.backgroundColor =
                    styles.answer.backgroundColor;
                  (e.target as HTMLDivElement).style.color = "#333";
                }
              }}
              onClick={() =>
                handleAnswerSelect(answersTab[num].correct, num)
              }
            >
              {answersTab[num].answer}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exercises;
