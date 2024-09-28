import React from 'react';
import Card from './Card';
const Panel = () => {
  return (
    <div>
      <p className="text-lg  mt-4 text-additional-second">Quick Start</p>
      <div className="mt-2 flex flex-row space-x-2">
        <Card
          step={1}
          title="Learn from courses"
          description="Learn the basics by doing courses"
          buttonName="Courses"
          buttonLink="/course"
        />
        <Card
          step={2}
          title="Do some exercises"
          description="Test your knowledge by doing exercises"
          buttonName="Exams"
          buttonLink="/exams"
        />
        <Card
          step={3}
          title="Try demo trading"
          description="First thing you have  to do is make some courses"
          buttonName="Demo Traiding"
          buttonLink="/traiding"
        />
      </div>
    </div>
  );
};

export default Panel;
