import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Global/Sidebar';

const Positions = () => {
  const [positions, setPositions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Wczytaj dane o aktywach
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tron&vs_currencies=usd');
        const priceData = await response.json();

        // Wczytaj dane o obrazach
        const btcResponse = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
        const btcData = await btcResponse.json();
        const ethResponse = await fetch('https://api.coingecko.com/api/v3/coins/ethereum');
        const ethData = await ethResponse.json();
        const trxResponse = await fetch('https://api.coingecko.com/api/v3/coins/tron');
        const trxData = await trxResponse.json();

        // Przykład mapowania danych do struktury komponentu
        const formattedData = [
          {
            symbol: 'bitcoin',
            image: btcData.image.small, // Obrazek BTC
            amount: 1, // Wartość przykładowa
            entryPrice: 54000, // Statyczna cena wejścia
            currentPrice: priceData.bitcoin.usd,
          },
          {
            symbol: 'ethereum',
            image: ethData.image.small, // Obrazek ETH
            amount: 1, // Wartość przykładowa
            entryPrice: 2300, // Statyczna cena wejścia
            currentPrice: priceData.ethereum.usd,
          },
          {
            symbol: 'tron',
            image: trxData.image.small, // Obrazek TRX
            amount: 1, // Wartość przykładowa
            entryPrice: 0.1, // Przykładowa cena wejścia dla Tron (możesz dostosować)
            currentPrice: priceData.tron.usd,
          },
        ];

        console.log('Pobrane dane:', formattedData);

        setPositions(formattedData);
      } catch (error) {
        console.error('Błąd pobierania danych:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="positions mt-8 p-4 rounded-lg flex-grow">
        <h2 className="text-xl font-bold text-white mb-2">Current Positions</h2>
        {loading ? (
          <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <span className="loading loading-dots loading-lg"></span>
          </div>
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
                  const profitLossPercentage = (profitLoss / position.entryPrice) * 100;

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
                      <td className="text-white">${parseFloat(position.entryPrice).toFixed(2)}</td>
                      <td className="text-white">${parseFloat(position.currentPrice).toFixed(2)}</td>
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
