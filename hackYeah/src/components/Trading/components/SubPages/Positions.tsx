import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importuj Link
import Sidebar from "../../../Global/Sidebar";
import { ArrowLeft } from "lucide-react";

// Zdefiniuj interfejs dla pozycji
interface Position {
  symbol: string;
  image: string;
  amount: number;
  entryPrice: number;
  currentPrice: number;
}

const Positions = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<Position | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tron&vs_currencies=usd"
        );
        const priceData = await response.json();

        const btcResponse = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        const btcData = await btcResponse.json();
        const ethResponse = await fetch(
          "https://api.coingecko.com/api/v3/coins/ethereum"
        );
        const ethData = await ethResponse.json();
        const trxResponse = await fetch(
          "https://api.coingecko.com/api/v3/coins/tron"
        );
        const trxData = await trxResponse.json();

        const formattedData: Position[] = [
          {
            symbol: "bitcoin",
            image: btcData.image.small,
            amount: 1,
            entryPrice: 54000,
            currentPrice: parseFloat(priceData.bitcoin.usd),
          },
          {
            symbol: "ethereum",
            image: ethData.image.small,
            amount: 1,
            entryPrice: 2300,
            currentPrice: parseFloat(priceData.ethereum.usd),
          },
          {
            symbol: "tron",
            image: trxData.image.small,
            amount: 1,
            entryPrice: 0.1,
            currentPrice: parseFloat(priceData.tron.usd),
          },
        ];

        setPositions(formattedData);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openModal = (coin: Position) => {
    setSelectedCoin(coin);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCoin(null);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="positions mt-8 p-4 rounded-lg flex-grow">
        <h2 className="text-xl font-bold text-white mb-2">Current Positions</h2>
        <Link
          to="/traiding"
          className="text-gray-400 hover:underline mb-4 flex"
        >
          <ArrowLeft className="mr-2" />{" "}
          {/* Dodanie klasy marginesu do prawej */}
          Back to Trading
        </Link>{" "}
        {/* Dodaj przycisk */}
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
                  const profitLoss =
                    position.currentPrice - position.entryPrice;
                  const profitLossPercentage =
                    (profitLoss / position.entryPrice) * 100;

                  return (
                    <tr
                      key={index}
                      className="bg-gray-700 hover:bg-gray-600"
                      onClick={() => openModal(position)}
                    >
                      <td>
                        <img
                          src={position.image}
                          alt={`${position.symbol} icon`}
                          className="h-10 w-10"
                        />
                      </td>
                      <td className="text-white">
                        {position.symbol.toUpperCase()}
                      </td>
                      <td>
                        <div className="flex flex-col">
                          <span className="text-gray-400">
                            {position.amount}
                          </span>
                          <span className="text-green-600">
                            {position.amount} qty
                          </span>
                        </div>
                      </td>
                      <td className="text-white">
                        ${parseFloat(position.entryPrice.toString()).toFixed(2)}
                      </td>
                      <td className="text-white">
                        $
                        {parseFloat(position.currentPrice.toString()).toFixed(
                          2
                        )}
                      </td>
                      <td
                        className={`text-white ${
                          profitLoss > 0 ? "text-green-400" : "text-red-400"
                        }`}
                      >
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

      {/* Modal */}
      {modalOpen && selectedCoin && (
        <div className="modal modal-open">
          <div className="modal-box p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">
                {selectedCoin.symbol.toUpperCase()}
              </h2>
              <button className="btn btn-sm btn-circle" onClick={closeModal}>
                ✖
              </button>
            </div>
            <div className="flex justify-center my-6">
              <img
                src={selectedCoin.image}
                alt={`${selectedCoin.symbol} icon`}
                className="h-14 w-14"
              />
            </div>
            <div className="flex flex-col items-center my-4">
              {selectedCoin.currentPrice && selectedCoin.entryPrice ? (
                <div
                  className={`text-xl font-bold ${
                    selectedCoin.currentPrice > selectedCoin.entryPrice
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {selectedCoin.currentPrice > selectedCoin.entryPrice
                    ? "Zysk"
                    : "Strata "}
                  :{" "}
                  {Math.abs(
                    parseFloat(
                      (
                        selectedCoin.currentPrice - selectedCoin.entryPrice
                      ).toFixed(2)
                    )
                  )}{" "}
                  USD
                </div>
              ) : (
                <span className="text-gray-400">
                  Brak danych o zysku/stracie
                </span>
              )}
            </div>
            <div className="flex justify-center">
              <button className="btn btn-warning w-64" onClick={closeModal}>
                Sell
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Positions;
