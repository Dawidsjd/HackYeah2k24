// Traiding.tsx
import React from 'react';
import CryptoGallery from './components/CryptoGallery';

const Traiding = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-4 rounded shadow-md flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="p-4">
        
        <CryptoGallery />
      </div>
    </div>
  );
};

export default Traiding;
