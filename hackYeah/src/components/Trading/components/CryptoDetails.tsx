// CryptoDetails.tsx
import React from 'react';
import TradingViewWidget from './TradingViewWidget'; // Upewnij się, że ścieżka jest poprawna

interface CryptoDetailsProps {
  onBack: () => void; // Dodajemy funkcję do powrotu
}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({ onBack }) => {
  return (
    <div className="p-4">
      <button
        onClick={onBack} // Przyciski do cofania
        className="mb-4 text-blue-500 hover:underline"
      >
        &lt; Back to Gallery
      </button>
      <TradingViewWidget /> {/* Wstawienie komponentu TradingViewWidget */}
    </div>
  );
};

export default CryptoDetails;
