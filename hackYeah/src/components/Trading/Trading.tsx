// Traiding.tsx
import React, { useState } from 'react';
import CryptoGallery from './components/CryptoData/CryptoGallery';
import CryptoDetails from './components/CryptoData/CryptoDetails'; // Importuj CryptoDetails
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar/Navbar';

const Traiding = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null); // Stan dla wybranej kryptowaluty

  const handleCryptoSelect = (id: string) => {
    setSelectedCrypto(id); // Ustaw ID wybranej kryptowaluty
  };

  const handleBack = () => {
    setSelectedCrypto(null); // Cofnij do galerii
  };

  return (
    <div className="min-h-screen bg-[#0F172A] p-4">
      {selectedCrypto ? (
        <CryptoDetails onBack={handleBack} /> // Wyświetl wykres bez opakowania modalnego
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
