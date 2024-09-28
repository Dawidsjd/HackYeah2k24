import React, { useState } from 'react';
import { courses } from './Courses';
import { CourseType } from '../../type';
import Sidebar from '../Global/Sidebar';

const CourseCard: React.FC = () => {
  const [expandedCourseId, setExpandedCourseId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    if (expandedCourseId === id) {
      setExpandedCourseId(null);
    } else {
      setExpandedCourseId(id);
    }
  };

  return (
    <div className="flex bg-primary">
      <Sidebar />
      <div className="flex-1 m-4 border">
        <div className="h-1/6 relative ml-2">
          <div className="absolute bottom-0 mb-2">
            <p className="text-2xl text-secondary font-bold">Courses</p>
            <p className="text-m text-neutral">Description</p>
          </div>
        </div>
        <div className="flex flex-col ml-2">
          <p className="text-l text-neutral font-bold">
            Based on your knowledge level
          </p>
          <div>Soon...</div>
        </div>
        <div className="flex flex-col mt-2 ml-2">
          <p className="text-l text-neutral font-bold">Other courses</p>
          {courses.map((course: CourseType) => (
            <div
              key={course.id}
              className={`w-full mt-3 rounded-lg p-4 shadow-custom-light ${
                expandedCourseId === course.id
                  ? 'bg-secondary'
                  : 'bg-tail-gradient'
              }`}
            >
              <div className="flex justify-between items-center font-bold text-lg">
                <span>
                  {course.id}. {course.title}
                </span>
                <button
                  onClick={() => toggleExpand(course.id)}
                  className="text-2xl focus:outline-none"
                >
                  {expandedCourseId === course.id ? '▲' : '▼'}
                </button>
              </div>
              {expandedCourseId === course.id && (
                <div className="mt-4 space-y-2 text-gray-700">
                  <p>
                    <strong>Introduction:</strong> {course.introduction}
                  </p>
                  <p>
                    <strong>Main Article Part One:</strong>{' '}
                    {course.mainArticlePartOne}
                  </p>
                  <p>
                    <strong>Main Article Part Two:</strong>{' '}
                    {course.mainArticlePartTwo}
                  </p>
                  <p>
                    <strong>Level of Advancement:</strong>{' '}
                    {course.levelOfAdvancement}
                  </p>
                  <p>
                    <strong>Link to Article:</strong> {course.linkToArticle}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
