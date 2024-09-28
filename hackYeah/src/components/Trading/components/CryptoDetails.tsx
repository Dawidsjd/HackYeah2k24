// CryptoDetails.tsx
import React from 'react';
import TradingViewWidget from './TradingViewWidget'; // Upewnij się, że ścieżka jest poprawna
import { FiPlus } from 'react-icons/fi'; // Import ikony "+" z react-icons
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react'; // Import ikony do przycisków

interface CryptoDetailsProps {
  onBack: () => void; // Dodajemy funkcję do powrotu
}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({ onBack }) => {
  return (
    <div className="relative p-4">
      <button
        onClick={onBack} // Przyciski do cofania
        className="mb-4 text-blue-500 hover:underline"
      >
        &lt; Back to Gallery
      </button>
      
      <div className="absolute transform scale-75 top-0 right-0 w-64 overflow-hidden rounded-lg bg-gray-900 bg-opacity-30 backdrop-blur-md backdrop-filter border border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-transparent opacity-50"></div>
        <div className="relative p-4">
          <h2 className="text-lg font-semibold text-white mb-1">Account Balance</h2>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-white">$1000</span>
            <button 
              className="text-white hover:bg-white hover:bg-opacity-10 p-1 rounded"
            >
              <FiPlus className="h-5 w-5" />
              <span className="sr-only">Add funds</span>
            </button>
          </div>
        </div>
      </div>
    
      <TradingViewWidget /> {/* Wstawienie komponentu TradingViewWidget */}

      {/* Buy and Sell buttons below the chart */}
      <div className="flex justify-center space-x-4 mt-4">
        <button className="flex-1 h-16 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center space-x-2">
          <ArrowUpCircle className="h-6 w-6" />
          <span>Buy</span>
        </button>
        <button className="flex-1 h-16 text-lg font-semibold bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center space-x-2">
          <ArrowDownCircle className="h-6 w-6" />
          <span>Sell</span>
        </button>
      </div>
    </div>
  );
};

export default CryptoDetails;
