import React from 'react';
import { courses } from './Courses'; // Import your courses array
import { CourseType } from '../../type'; // Typing for course objects
import Sidebar from '../Global/Sidebar';

interface CourseProps {
  level: number; // Current level prop
  setLevel: (level: number) => void; // Function to change level
}

const Course: React.FC<CourseProps> = ({ level, setLevel }) => {
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
        <h1>Courses for Level {level}</h1>

        {/* Grid layout for filtered courses */}
        <div className="grid grid-cols-3 gap-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course: CourseType) => (
              <div
                key={course.id}
                className="border p-4 rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => setLevel(course.levelOfAdvancement)} // Click handler to change level
              >
                <h2 className="font-bold text-lg">{course.title}</h2>
                <p>Level: {course.levelOfAdvancement}</p>
                <a href={course.linkToArticle} className="text-blue-500">
                  Read More
                </a>
              </div>
            ))
          ) : (
            <p>No courses available at this level.</p>
          )}
        </div>

        {/* Other Courses section */}
        <h2 className="mt-6">Other Courses</h2>
        <div className="grid grid-cols-3 gap-4">
          {otherCourses.map((course: CourseType) => (
            <div
              key={course.id}
              className="border p-4 rounded-md cursor-pointer hover:bg-gray-100"
              onClick={() => setLevel(course.levelOfAdvancement)} // Click handler to change level
            >
              <h3 className="font-bold text-lg">{course.title}</h3>
              <p>Level: {course.levelOfAdvancement}</p>
              <a href={course.linkToArticle} className="text-blue-500">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
