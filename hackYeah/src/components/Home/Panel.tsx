import React from 'react';
import Card from './Card';
const Panel = () => {
  return (
    <div className="mt-4 flex flex-row space-x-2">
      <Card
        step={1}
        title="Make course"
        description="First thing you have  to do is make some courses"
        buttonName="Courses"
        buttonLink="/course"
      />
      <Card
        step={2}
        title="Do some exercises"
        description="After completing the courses, test your knowledge by doing exercises"
        buttonName="Courses"
        buttonLink="/exercises"
      />
      <Card
        step={3}
        title="Try demo trading"
        description="First thing you have  to do is make some courses"
        buttonName="Courses"
        buttonLink="/traiding"
      />
    </div>
  );
};

export default Panel;
