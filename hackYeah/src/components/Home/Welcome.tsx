import React from 'react';
import './Welcome.css'; // Importuj plik CSS dla animacji

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <h1 className="text-additional-second text-6xl bold fade-in">
        Welcome to <b>Investify</b>
      </h1>
      <span className="text-neutral fade-in">Description text to setup</span>
    </div>
  );
};

export default Welcome;
