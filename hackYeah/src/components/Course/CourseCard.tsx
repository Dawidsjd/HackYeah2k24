import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link

const CourseCard = ({ title, levelOfAdvancement, id }) => {
  return (
    <Link
      to={`/course/${id}`} // Navigate to course detail
      className="shadow-custom-light hover:shadow-custom-hover rounded-md"
    >
      <div key={id} className="rounded-md w-full h-[240px]">
        <div className="bg-red-400 rounded-t-md h-[65%]">img</div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p>{levelOfAdvancement}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
