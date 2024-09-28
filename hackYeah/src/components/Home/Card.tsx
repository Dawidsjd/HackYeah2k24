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
    <div className="bg-white shadow-md rounded-lg p-4">
      <p>{step}</p>
      <p>{title}</p>
      <p className="text-gray-600">{description}</p>
      <Link to={buttonLink}>{buttonName}</Link>
    </div>
  );
};

export default Card;
