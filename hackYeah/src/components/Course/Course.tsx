import React from 'react';
import { courses } from './Courses'; // Import your courses array
import { CourseType } from '../../type'; // Typing for course objects
import Sidebar from '../Global/Sidebar';
import CourseCard from './CourseCard';

interface CourseProps {
  level: number; // Current level prop
  setLevel: (level: number) => void; // Function to change level
}

const Course: React.FC<CourseProps> = ({ level, setLevel }) => {
  // Function to determine level name
  const getCourseLevelName = (level: number): string => {
    if (level == 1) {
      return 'Beginner';
    } else if (level == 2) {
      return 'Intermediate';
    } else if (level == 3) {
      return 'Expert';
    }
    return 'No Level'; // Default case
  };

  const getUserLevelName = (level: number): string => {
    if (level >= 0) return 'Beginner';
    if (level > 3) return 'Intermediate';
    if (level > 6) return 'Expert';
    return 'No level';
  };
  // Filter courses by the current level
  const filteredCourses = courses.filter(
    (course: CourseType) =>
      getCourseLevelName(course.levelOfAdvancement) === getUserLevelName(level)
  );

  // Remaining courses not at the selected level
  const otherCourses = courses.filter(
    (course: CourseType) =>
      getCourseLevelName(course.levelOfAdvancement) !== getUserLevelName(level)
  );

  console.log('Filtered Courses:', filteredCourses); // Debugging line
  console.log('Other Courses:', otherCourses); // Debugging line

  return (
    <div className="flex bg-primary">
      <Sidebar />
      <div
        className="flex-1 m-4 rounded-sm p-2 overflow-y-auto"
        style={{ maxHeight: '95vh' }}
      >
        <h1>Courses for {getUserLevelName(level)}</h1>

        {/* Grid layout for filtered courses */}
        <div className="grid grid-cols-3 gap-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course: CourseType) => {
              console.log('Course Level:', course.levelOfAdvancement); // Debugging line
              return (
                <CourseCard
                  key={course.id} // Add a key prop for unique identification
                  id={course.id}
                  image={course.image}
                  levelOfAdvancement={getCourseLevelName(
                    course.levelOfAdvancement
                  )}
                  title={course.title}
                />
              );
            })
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
              image={course.image}
              levelOfAdvancement={getCourseLevelName(course.levelOfAdvancement)} // Use correct course level
              title={course.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
