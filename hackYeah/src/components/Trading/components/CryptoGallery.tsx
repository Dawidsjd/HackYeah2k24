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
          className="bg-white p-4 rounded shadow-md flex flex-col items-center border border-gray-200 relative cursor-pointer"
          onClick={() => onCryptoSelect(crypto.id)} // Wywołaj funkcję przekazaną jako prop
        >
          <a
            href={`https://www.coingecko.com/en/coins/${crypto.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 text-gray-500 hover:text-blue-500"
          >
            <FiExternalLink size={20} />
          </a>

          <img
            src={crypto.image}
            alt={crypto.name}
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-lg font-bold">{crypto.name}</h2>
          <p className="text-gray-500 uppercase">{crypto.symbol}</p>
          <p className="text-green-600 font-semibold mt-2">
            ${crypto.current_price.toLocaleString()}
          </p>
          <p className="text-gray-700 mt-1">
            Market Cap: ${crypto.market_cap.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CryptoGallery;
