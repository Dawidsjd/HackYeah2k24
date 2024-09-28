import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Global/Sidebar';

interface Position {
  symbol: string;
  entryPrice: number;
  amount: number;
  currentPrice?: number;
  image?: string; // Optional image property
}

interface CoinData {
  id: string; // Add id property
  current_price: number;
  image: string;
}

const Positions: React.FC = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      // Simulating fetching positions data
      const examplePositions: Position[] = [
        { symbol: 'ethereum', entryPrice: 2600, amount: 0.49 },
        { symbol: 'bitcoin', entryPrice: 30000, amount: 0.1 },
      ];
      setPositions(examplePositions);
      setLoading(false);
    };

    fetchPositions();
  }, []);

  const fetchCurrentPricesAndImages = async (symbols: string[]) => {
    try {
      const joinedSymbols = symbols.join(',');
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${joinedSymbols}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: CoinData[] = await response.json(); // Specify the expected type
      console.log("Fetched data:", data); // Log the fetched data to the console

      // Build an object mapping symbol to CoinData
      return data.reduce((acc: { [key: string]: CoinData }, coin: CoinData) => {
        acc[coin.id] = coin; // Directly assign the entire coin object
        return acc;
      }, {});
    } catch (error) {
      console.error('Error fetching current prices:', error);
      return {};
    }
  };

  useEffect(() => {
    const getCurrentPricesAndImages = async () => {
      const symbols = positions.map(position => position.symbol).join(',');
      const currentPricesAndImages = await fetchCurrentPricesAndImages(symbols.split(',')); // Ensure this is an array
      
      // Log the currentPricesAndImages to check for images
      console.log("Current prices and images:", currentPricesAndImages);

      setPositions(prevPositions =>
        prevPositions.map(position => ({
          ...position,
          currentPrice: currentPricesAndImages[position.symbol]?.current_price || position.currentPrice,
          image: currentPricesAndImages[position.symbol]?.image || position.image,
        }))
      );
    };

    if (positions.length > 0) {
      getCurrentPricesAndImages();
    }
  }, [positions]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="positions mt-8 p-4 rounded-lg flex-grow">
        <h2 className="text-xl font-bold text-white mb-2">Current Positions</h2>
        {loading ? (
          <p className="text-gray-400">Loading positions...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Asset</th>
                  <th>Qty</th>
                  <th>Entry Price</th>
                  <th>Current Price</th>
                  <th>Profit/Loss</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((position, index) => {
                  const profitLoss = position.currentPrice ? position.currentPrice - position.entryPrice : 0;
                  const profitLossPercentage = profitLoss / position.entryPrice * 100;

                  return (
                    <tr key={index} className="bg-gray-700 hover:bg-gray-600">
                      <td>
                        <img src={position.image || ''} alt={`${position.symbol} icon`} className="h-10 w-10" />
                      </td>
                      <td className="text-white">{position.symbol.toUpperCase()}</td>
                      <td>
                        <div className="flex flex-col">
                          <span className="text-gray-400">{position.amount}</span>
                          <span className="text-green-600">{position.amount} qty</span>
                        </div>
                      </td>
                      <td className="text-white">${position.entryPrice.toFixed(2)}</td>
                      <td className="text-white">${position.currentPrice?.toFixed(2) || 'N/A'}</td>
                      <td className={`text-white ${profitLoss > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        <div className="flex flex-col">
                          <span>{profitLoss.toFixed(2)}</span>
                          <span>{profitLossPercentage.toFixed(2)}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Positions;
