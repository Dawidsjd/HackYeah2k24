import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CryptoData {
  id: string;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
}

const CryptoList: React.FC = () => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 3,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptos(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err); // Log the error for debugging
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>; // Display error message
  }

  return (
    <div className="flex flex-col w-full">
      <p className="text-xl font-bold text-additional-second mb-2">
        Most Popular Crypto
      </p>
      {cryptos.map((crypto) => (
        <div
          key={crypto.id}
          className=" p-2 space-x-4 rounded-md shadow-xl items-center flex flex-row"
        >
          <img
            src={crypto.image}
            alt={crypto.name}
            className="w-10 h-10 mb-2"
          />
          <div className="flex flex-col flex-grow">
            <h2 className="text-md text-additional-second">{crypto.name}</h2>
            <p className="text-sm text-neutral uppercase">{crypto.symbol}</p>
          </div>
          <p className="text-green-600 font-semibold mt-1">
            ${crypto.current_price.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
