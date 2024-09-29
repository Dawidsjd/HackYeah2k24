import React from 'react';

// Definiujemy interfejs dla propsów
interface CardProps {
  step: number;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ step, title, description }) => {
  return (
    <div className="flex mb-2 rounded-md mw-full p-1">
      <div className="flex items-center space-x-2">
        <div className="bg-secondary w-8 h-8 rounded-full flex justify-center items-center mr-3">
          <p className="text-xl text-primary flex items-center justify-center font-[600]">{step}</p>
        </div>

        <div>
          <p className="font-bold">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
