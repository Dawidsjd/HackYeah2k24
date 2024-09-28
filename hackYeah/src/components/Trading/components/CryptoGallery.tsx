// CryptoGallery.tsx
import React, { useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
}

interface CryptoGalleryProps {
  onCryptoSelect: (id: string) => void; // Prop do przekazywania wybranej kryptowaluty
}

const CryptoGallery: React.FC<CryptoGalleryProps> = ({ onCryptoSelect }) => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCryptos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };

    fetchCryptos();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cryptos.map((crypto) => (
        <div
          key={crypto.id}
          className="relative w-54 h-52 overflow-hidden rounded-xl bg-gray-900 bg-opacity-30 backdrop-blur-md backdrop-filter border border-gray-800 flex flex-col items-center justify-center cursor-pointer p-4" // Added padding for spacing inside the card
          onClick={() => onCryptoSelect(crypto.id)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-transparent opacity-50"></div>
          <div className="relative flex flex-col items-center justify-center h-full space-y-2"> {/* Reduced space-y for less spacing */}
            <img
              src={crypto.image}
              alt={crypto.name}
              className="w-14 h-14 mb-2" // Removed the wrapper div for logo
            />
            <h2 className="text-2xl font-bold text-white text-center">{crypto.name}</h2>
            <p className="text-gray-500 uppercase">{crypto.symbol}</p>
            <p className="text-green-600 font-semibold mt-1"> {/* Reduced mt for less spacing */}
              ${crypto.current_price.toLocaleString()}
            </p>
          </div>
          <a
            href={`https://www.coingecko.com/en/coins/${crypto.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 text-gray-500 hover:text-blue-500"
          >
            <FiExternalLink size={20} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default CryptoGallery;
