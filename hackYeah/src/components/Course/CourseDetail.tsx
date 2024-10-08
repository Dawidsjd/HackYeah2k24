import React from 'react';
import { CourseType } from '../../type'; // Ensure this path is correct
import { useParams } from 'react-router-dom';
import Sidebar from '../Global/Sidebar';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

interface CourseDetailProps {
  courses: CourseType[];
}

const CourseDetail: React.FC<CourseDetailProps> = ({ courses }) => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((course) => course.id === Number(id));

  if (!course) {
    return <p>Course not found.</p>;
  }

  const getCourseLevelName = (level: number): string => {
    if (level === 1) {
      return 'Beginner';
    } else if (level === 2) {
      return 'Intermediate';
    } else if (level === 3) {
      return 'Expert';
    }
    return 'No Level';
  };

  return (
    <div className="flex bg-primary">
      <Sidebar />
      <div
        className="flex-1 ml-2 rounded-sm p-0 overflow-y-auto" // Set padding to 0
        style={{ maxHeight: '95vh', position: 'relative' }}
      >
        {/* Make the Back link sticky */}
        <div
          className="sticky top-0 bg-primary z-10 p-2"
          style={{ marginTop: 0 }}
        >
          <Link
            to="/course"
            className="flex flex-row items-center space-x-2 text-additional-second hover:text-secondary"
            style={{ margin: 0, padding: 0 }}
          >
            <FaArrowLeft />
            <span>Back</span>
          </Link>
        </div>

        {/* Ensure no margin/padding for the image container */}
        <div
          className="rounded-t-md w-full h-1/3 bg-cover bg-center"
          style={{
            backgroundImage: `url(${course.image})`,
            margin: 0,
            padding: 0,
          }}
        />

        <div className="p-4">
          <div className="flex justify-between relative">
            <h1 className="text-2xl font-bold text-additional-second">
              {course.title}
            </h1>
            <div className="absolute right-8 top-[-30px]">
              <p
                className="bg-secondary px-4 py-2 text-md text-primary font-semibold rounded-md"
                style={{ display: 'inline-block' }}
              >
                {getCourseLevelName(course.levelOfAdvancement)}
              </p>
            </div>
          </div>
          <div className="text-tertiary text-md">
            <p>{course.introduction}</p>
            <br />
            <p>{course.mainArticle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
