import React from "react";
import Sidebar from "../Global/Sidebar";
import { TestExercises } from "../Exercises/Exercise";
import Exercises from "../Exercises/Exercises";

// Stylizacje w pliku CSS
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
  } as React.CSSProperties,

  exerciseContainer: {
    flex: 1,
    overflowY: 'auto',
    maxHeight: `calc(100vh - 50px)`, // Ustal wysokość sidebaru
    padding: '10px',
  } as React.CSSProperties,
};

const ExamStart: React.FC = () => {
  return (
    <div style={styles.container} className="bg-primary">
      <Sidebar />
      <div style={styles.exerciseContainer}>
        {TestExercises.map((exercise, index) => (
          <Exercises key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExamStart;
