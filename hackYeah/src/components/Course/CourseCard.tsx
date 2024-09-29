import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link

const CourseCard = ({ title, image, levelOfAdvancement, id }) => {
  return (
    <Link
      to={`/course/${id}`} // Navigate to course detail
      className="shadow-custom-light hover:shadow-custom-hover rounded-md"
    >
      <div key={id} className="rounded-md w-full h-[260px] overflow-hidden p-2">
        <div
          className="w-full h-[65%] rounded-t-md bg-cover bg-center transition-transform duration-300 ease-in-out filter grayscale hover:grayscale-0" // Added grayscale filter
          style={{ backgroundImage: `url(${image})` }}
        />
        <h3 className="font-bold text-md mt-2">{title}</h3>
        <div className="flex justify-start mt-2">
          <p
            className="bg-secondary px-2 py-1 text-sm text-primary font-semibold rounded-md"
            style={{ display: 'inline-block' }}
          >
            {levelOfAdvancement}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
