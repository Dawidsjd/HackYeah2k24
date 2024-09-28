import { useState } from "react"; // Importuj useState
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
  const [answersVisible, setAnswersVisible] = useState(true); // Stan do kontrolowania widoczności odpowiedzi
  const [questionVisible, setQuestionVisible] = useState(true); // Stan do kontrolowania widoczności pytania
  const order = [0, 1, 2, 3];
  shuffle(order);
  const exercise = new Exercise(props.exercise);
  const answers = exercise.createQuestionTemplate();
  const answersTab: { correct: boolean; answer: string }[] = [];
  answers.falseAnswers.forEach((answer) =>
    answersTab.push({ correct: false, answer })
  );
  answersTab.push({ correct: true, answer: answers.correctAnswer });

  const handleAnswer = (isCorrect: boolean) => {
    // Ustaw obrazek w zależności od poprawności odpowiedzi
    setImageSrc(isCorrect ? "/wombat-like.png" : "/wombat-dislike.png");

    // Ukryj pytanie i odpowiedzi
    setAnswersVisible(false);
    setQuestionVisible(false);

    // Po 1.5 sekundy przywróć obrazek do neutralnego i wyświetl pytanie oraz odpowiedzi
    setTimeout(() => {
      setImageSrc("/wombat-neutral.png");
      props.onAnswer(isCorrect); // Wywołaj callback z odpowiedzią
      setAnswersVisible(true); // Przywróć widoczność odpowiedzi
      setQuestionVisible(true); // Przywróć widoczność pytania
    }, 1500);
  };

  return (
    <div style={{ color: "white" }}>
      <div className="p-4 bg-gray-800 rounded-md shadow-lg">
        {/* Dodanie zdjęcia nad pytaniem */}
        <img src={imageSrc} alt="Wombat" className="mx-auto mb-4 w-64 h-64 drop-shadow-2xl" />
        {questionVisible && (
          <div className="font-bold text-lg mb-2 text-center">{props.exercise.question}</div>
        )}
        <div className="space-y-2">
          {answersVisible &&
            order.map((num) => (
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
