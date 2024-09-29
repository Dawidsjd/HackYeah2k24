import { useState } from 'react'; // Import useState
import { Exercise } from './Exercise';
import { ExerciseProps } from '../../type';
import './styles.css';

export function shuffle(array: any[]) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

const Exercises = (props: ExerciseProps) => {
  const [imageSrc, setImageSrc] = useState('/wombat-neutral.png'); // State for image source
  const [answersVisible, setAnswersVisible] = useState(true); // State to control answer visibility
  const [questionVisible, setQuestionVisible] = useState(true); // State to control question visibility
  const order = [0, 1, 2, 3];
  shuffle(order); // Shuffle answer order
  const exercise = new Exercise(props.exercise);
  const answers = exercise.createQuestionTemplate();

  // Prepare answers array
  const answersTab: { correct: boolean; answer: string }[] = [
    ...answers.falseAnswers.map((answer) => ({ correct: false, answer })),
    { correct: true, answer: answers.correctAnswer },
  ];

  const handleAnswer = (isCorrect: boolean) => {
    // Set image based on answer correctness
    setImageSrc(isCorrect ? '/wombat-like.png' : '/wombat-dislike.png');

    // Hide question and answers
    setAnswersVisible(false);
    setQuestionVisible(false);

    // Restore image and visibility after 750ms
    setTimeout(() => {
      setImageSrc('/wombat-neutral.png');
      props.onAnswer(isCorrect); // Call the onAnswer prop
      setAnswersVisible(true); // Restore answers visibility
      setQuestionVisible(true); // Restore question visibility
    }, 750);
  };

  return (
    <div className="flex justify-center w-full items-center h-full">
      <div className="mockup-window drop-shadow-custom-mockup w-full h-[70vh] bg-gray-950 p-4">
        <div className="flex flex-col bg-gray-900 h-full rounded-lg">
          {/* Dodanie zdjęcia nad pytaniem */}
          <img
            src={imageSrc}
            alt="Wombat"
            className={`mx-auto mb-4 w-64 h-64 drop-shadow-custom pointer-events-none select-none transition-all duration-300 ${
              !answersVisible ? 'mt-20' : ''
            }`}
          />
          {questionVisible && (
            <div className="font-bold text-lg mb-2 text-center text-white">
              {props.exercise.question}
            </div>
          )}
          <div className="space-y-2">
            {answersVisible &&
              order.map((num) => (
                <div
                  key={num}
                  onClick={() => handleAnswer(answersTab[num].correct)}
                  className="cursor-pointer p-2 rounded-md transition-colors duration-300 hover:bg-gray-700"
                >
                  {answersTab[num].answer}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
