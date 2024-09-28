// Traiding.tsx
import React, { useState } from 'react';
import CryptoGallery from './components/CryptoGallery';
import CryptoDetails from './components/CryptoDetails'; // Importuj CryptoDetails
import SearchBar from './components/SearchBar';

const Traiding = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null); // Stan dla wybranej kryptowaluty

  const handleCryptoSelect = (id: string) => {
    setSelectedCrypto(id); // Ustaw ID wybranej kryptowaluty
  };

  const handleCloseDetails = () => {
    setSelectedCrypto(null); // Resetuj stan po zamknięciu wykresu
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {selectedCrypto ? (
        <CryptoDetails id={selectedCrypto} onClose={handleCloseDetails} /> // Wyświetl tylko wykres
      ) : (
        <>
          <SearchBar />
          <div className="p-4">
            <CryptoGallery onCryptoSelect={handleCryptoSelect} /> {/* Przekaż funkcję do CryptoGallery */}
          </div>
        </>
      )}
    </div>
  );
};

export default Traiding;
