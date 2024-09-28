import React from 'react';
import Card from './Card';
const Panel = () => {
  return (
    <div className="w-full">
      <p className="text-lg  text-additional-second">Quick Start</p>
      <div className="mt-2 flex flex-col">
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
