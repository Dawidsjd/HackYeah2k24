import React from "react";
import Sidebar from "../Global/Sidebar";
import { Exercise } from "../Exercises/Exercise";
import { TestExercises } from "../Exercises/Exercise";
import Exercises from "../Exercises/Exercises";
const ExamStart = () => {
  return (
    <>
      <div className="flex bg-primary">
        <Sidebar />
        <div className="flex-1 m-4 rounded-sm p-2">
          {TestExercises.map((exercise) => (
            <Exercises exercise={exercise} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExamStart;
