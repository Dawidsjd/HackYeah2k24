import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
}

const CryptoList: React.FC = () => {
  // Typowanie dla stanu
  const [cryptos, setCryptos] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get<Crypto[]>(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 5, // Pobieramy tylko 5 największych krypto
              page: 1,
            },
          }
        );
        setCryptos(response.data); // Ustawiamy dane w stanie
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptos();
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg my-2 w-[45%] p-2">
      <h1 className="text-white bold">Most popular crypto</h1>
      <ul className="space-y-2">
        {cryptos.map((crypto) => (
          <li key={crypto.id} className="flex flex-row justify-between">
            <div className="flex items-center space-x-2">
              <img src={crypto.image} alt={crypto.name} className="w-6 h-6" />
              <div className="text-s">
                <p className="text-white">{crypto.name}</p>
                <p className="text-gray-400">({crypto.symbol.toUpperCase()})</p>
              </div>
            </div>
            <p className="text-white">
              ${crypto.current_price.toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;
