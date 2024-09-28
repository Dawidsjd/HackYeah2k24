import React from 'react';

// Definiujemy interfejs dla propsów
interface CardProps {
  step: number;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ step, title, description }) => {
  return (
    <div className="flex mb-2 bg-secondary rounded-md mw-full">
      <div className="flex ml-1 space-x-1">
        <p className="text-xl">{step}.</p>
        <div>
          <p className="font-bold">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
