import React from 'react';
import Card from './Card';

const Panel = () => {
  return (
    <div className="w-full relative">
      {/* Tło z obrazem i filtrem */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/wombat-mys.png')",
          backgroundPosition: 'center top', // Ustawienie pozycji tła
          filter: "opacity(0.1)",
          zIndex: 0,
        }}
      />
      <p className="text-xl font-bold text-additional-second p-2 relative z-10">
        Quick Start
      </p>
      <div className="mt-2 ml-2 flex flex-col relative z-10">
        <Card
          step={1}
          title="Learn from courses"
          description="Learn the basics by doing courses"
        />
        <Card
          step={2}
          title="Do some exercises"
          description="Test your knowledge by doing exercises"
        />
        <Card
          step={3}
          title="Try demo trading"
          description="Train by investing in real cryptocurrencies"
        />
      </div>
    </div>
  );
};

export default Panel;
