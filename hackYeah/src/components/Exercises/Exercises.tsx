import React from 'react';
import Sidebar from '../Global/Sidebar';
import { Exercise } from './Exercise';
import { ExerciseType } from '../../type';

function shuffle(array: number[]) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

const Exercises = (exercise:ExerciseType) => {
  var order = [ 0, 1, 2, 3 ];
  shuffle(order)
  var answers = Exercise.createQuestionTemplate(exercise.falseAnswers,exercise.correctAnswer)
  var answersTab = answers.falseAnswers
  answersTab.push(answers.correctAnswer)
  return <>
  
    <div>{exercise.question}</div>

    {order.forEach(num => {
      return <div>{answersTab[num]+'\n'}</div>
    })}
  
  </>;
};

export default Exercises;
