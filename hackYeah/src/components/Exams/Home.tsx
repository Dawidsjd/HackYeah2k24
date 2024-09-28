import React from 'react';
import Sidebar from '../Global/Sidebar';
import { Exercise } from '../Exercises/Exercise';
import { TestExercises } from '../Exercises/Exercise';
import Exercises from '../Exercises/Exercises';
const ExamStart = () => {

  return <>
    {/* {TestExercises.forEach(exercise => <Exercises exercise={exercise}/>)} */}
    {TestExercises.forEach(exercise => {return exercise.correctAnswer})}
  </>;
};

export default ExamStart;
