import React from 'react';
import { CourseType } from '../../type'; // Ensure this path is correct
import { useParams } from 'react-router-dom';

interface CourseDetailProps {
  courses: CourseType[]; // Accept courses as a prop
}

const CourseDetail: React.FC<CourseDetailProps> = ({ courses }) => {
  const { id } = useParams<{ id: string }>(); // Get the course ID from URL
  const course = courses.find((course) => course.id === Number(id)); // Find the course by ID

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p>{course.introduction}</p>
      <h2 className="mt-4 text-xl">Main Article</h2>
      <p>{course.mainArticlePartOne}</p>
      <p>{course.mainArticlePartTwo}</p>
      <a href={course.linkToArticle} className="text-blue-500">
        Read Full Article
      </a>
    </div>
  );
};

export default CourseDetail;
