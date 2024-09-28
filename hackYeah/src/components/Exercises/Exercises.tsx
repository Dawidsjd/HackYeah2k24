import { useState, useEffect } from "react"; // Importuj useState i useEffect
import { Exercise } from "./Exercise";
import { ExerciseProps } from "../../type";

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

const Exercises = (props: ExerciseProps) => {
  const [imageSrc, setImageSrc] = useState("/wombat-neutral.png"); // Stan dla źródła obrazka
  var order = [0, 1, 2, 3];
  shuffle(order);
  const exercise = new Exercise(props.exercise);
  var answers = exercise.createQuestionTemplate();
  var answersTab: { correct: boolean; answer: string }[] = [];
  answers.falseAnswers.forEach((answer) =>
    answersTab.push({ correct: false, answer })
  );
  answersTab.push({ correct: true, answer: answers.correctAnswer });

  const handleAnswer = (isCorrect: boolean) => {
    // Ustaw obrazek w zależności od poprawności odpowiedzi
    setImageSrc(isCorrect ? "/wombat-like.png" : "/wombat-dislike.png");

    // Po 1.5 sekundy przywróć obrazek do neutralnego
    setTimeout(() => {
      setImageSrc("/wombat-neutral.png");
      props.onAnswer(isCorrect); // Wywołaj callback z odpowiedzią
    }, 1500);
  };

  return (
    <div style={{ color: "white" }}>
      <div className="p-4 bg-gray-800 rounded-md shadow-lg">
        {/* Dodanie zdjęcia nad pytaniem */}
        <img src={imageSrc} alt="Wombat" className="mx-auto mb-4 w-64 h-64" />
        <div className="font-bold text-lg mb-2 text-center">{props.exercise.question}</div>
        <div className="space-y-2">
          {order.map((num) => (
            <div
              key={num}
              onClick={() => handleAnswer(answersTab[num].correct)} // Użyj nowej funkcji handleAnswer
              className="cursor-pointer p-2 rounded-md transition-colors duration-300 hover:bg-gray-700"
            >
              {answersTab[num].answer}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercises;
