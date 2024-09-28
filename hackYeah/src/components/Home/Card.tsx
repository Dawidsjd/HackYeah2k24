import { Link } from 'react-router-dom';
import React from 'react';

// Definiujemy interfejs dla propsów
interface CardProps {
  step: number;
  title: string;
  description: string;
  buttonName: string;
  buttonLink: string;
}

const Card: React.FC<CardProps> = ({
  step,
  title,
  description,
  buttonName,
  buttonLink,
}) => {
  return (
    <div className="flex flex-col items-center text-center bg-gray-800 shadow-md rounded-lg p-4 w-1/3 ">
      <div className="bg-gray-700 rounded-full w-16 h-16 flex justify-center items-center">
        <p className="text-3xl text-gray-950">{step}</p>
      </div>
      <p className="mt-1 text-xl bold text-gray-300">{title}</p>
      <p className="text-gray-500">{description}</p>
      <Link
        to={buttonLink}
        className="bg-gray-900 text-gray-300 px-4 py-2 mt-2 mb-3 rounded-lg"
      >
        {buttonName}
      </Link>
    </div>
  );
};

export default Card;
