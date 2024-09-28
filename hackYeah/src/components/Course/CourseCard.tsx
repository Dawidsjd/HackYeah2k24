import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link

const CourseCard = ({ title, levelOfAdvancement, id }) => {
  return (
    <div key={id} className="border p-4 rounded-md">
      <h3 className="font-bold text-lg">{title}</h3>
      <p>{levelOfAdvancement}</p>
      <Link
        to={`/course/${id}`} // Navigate to course detail
        className="text-blue-500"
      >
        Read More
      </Link>
    </div>
  );
};

export default CourseCard;
