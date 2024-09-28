import React from 'react';
import { courses } from './Courses'; // Import your courses array
import { CourseType } from '../../type'; // Typing for course objects
import Sidebar from '../Global/Sidebar';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

interface CourseProps {
  level: number; // Current level prop
  setLevel: (level: number) => void; // Function to change level
}

const Course: React.FC<CourseProps> = ({ level, setLevel }) => {
  // Function to determine level name
  const getLevelName = (level: number): string => {
    if (level >= 0 && level <= 3) {
      return 'Beginner';
    } else if (level >= 4 && level <= 6) {
      return 'Intermediate';
    } else {
      return 'Expert';
    }
  };

  // Filter courses by the current level
  const filteredCourses = courses.filter(
    (course: CourseType) => course.levelOfAdvancement === level
  );

  // Remaining courses not at the selected level
  const otherCourses = courses.filter(
    (course: CourseType) => course.levelOfAdvancement !== level
  );

  return (
    <div className="flex bg-primary">
      <Sidebar />
      <div className="flex-1 m-4 rounded-sm p-2">
        <h1>Courses for {getLevelName(level)}</h1>

        {/* Grid layout for filtered courses */}
        <div className="grid grid-cols-3 gap-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course: CourseType) => (
              <CourseCard
                key={course.id} // Add a key prop for unique identification
                id={course.id}
                levelOfAdvancement={getLevelName(course.levelOfAdvancement)}
                title={course.title}
              />
            ))
          ) : (
            <p>No courses available at this level.</p>
          )}
        </div>

        {/* Other Courses section */}
        <h2 className="mt-6">Other Courses</h2>
        <div className="grid grid-cols-3 gap-4">
          {otherCourses.map((course: CourseType) => (
            <CourseCard
              key={course.id} // Add a key prop for unique identification
              id={course.id}
              levelOfAdvancement={getLevelName(course.levelOfAdvancement)}
              title={course.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
