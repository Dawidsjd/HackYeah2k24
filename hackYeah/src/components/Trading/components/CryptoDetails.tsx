// CryptoDetails.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';

// Rejestrujemy elementy Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CryptoDetailsProps {
  id: string;
  onClose: () => void;
}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({ id, onClose }) => {
  const [chartData, setChartData] = useState<ChartData<'line'> | undefined>(); // Uwzględnienie undefined
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
          {
            params: {
              vs_currency: 'usd',
              days: 7, // Pobieranie danych z ostatnich 7 dni
            },
          }
        );

        const prices = response.data.prices;
        const labels = prices.map((price: number[]) =>
          new Date(price[0]).toLocaleDateString()
        );
        const data = prices.map((price: number[]) => price[1]);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Price (USD)',
              data,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            },
          ],
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchMarketData();
  }, [id]);

  if (loading) return <div className="text-center">Loading chart...</div>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-4 rounded shadow-md w-full max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
        >
          Close
        </button>
        <h2 className="text-xl font-bold mb-4">Price Chart - Last 7 Days</h2>
        {chartData && <Line data={chartData} />} {/* Sprawdzamy, czy chartData jest dostępne */}
      </div>
    </div>
  );
};

export default CryptoDetails;
