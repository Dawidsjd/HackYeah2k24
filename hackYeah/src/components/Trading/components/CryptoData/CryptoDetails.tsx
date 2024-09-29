import React, { useState, useEffect } from 'react';
import TradingViewWidget from '../TradingViewWidget';
import { FiPlus } from 'react-icons/fi';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';

interface CryptoDetailsProps {
  onBack: () => void;
}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddFundsModalOpen, setIsAddFundsModalOpen] = useState(false);
  const [actionType, setActionType] = useState<'buy' | 'sell' | null>(null);
  const [usdAmount, setUsdAmount] = useState('');
  const [btcAmount, setBtcAmount] = useState('');
  const [btcLogo, setBtcLogo] = useState('');
  const [usdtLogo, setUsdtLogo] = useState('');
  const [btcPrice, setBtcPrice] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);
  const [accountBalance, setAccountBalance] = useState(1000);
  const [addFundsAmount, setAddFundsAmount] = useState('');
  const [currentCryptoAmount, setCurrentCryptoAmount] = useState(0);
  const [sellAmount, setSellAmount] = useState('');

  useEffect(() => {
    const fetchLogosAndRate = async () => {
      try {
        const [btcData, usdtData, priceData] = await Promise.all([
          fetch('https://api.coingecko.com/api/v3/coins/bitcoin').then((res) =>
            res.json()
          ),
          fetch('https://api.coingecko.com/api/v3/coins/tether').then((res) =>
            res.json()
          ),
          fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
          ).then((res) => res.json()),
        ]);

        setBtcLogo(btcData.image.small);
        setUsdtLogo(usdtData.image.small);
        setBtcPrice(priceData.bitcoin.usd);
      } catch (error) {
        console.error('Error fetching logos or price:', error);
      }
    };

    fetchLogosAndRate();
  }, []);

  const handleOpenModal = (type: 'buy' | 'sell') => {
    setActionType(type);
    setIsModalOpen(true);
    setUsdAmount('');
    setBtcAmount('');
    setAlertVisible(false);
    if (type === 'sell') {
      setSellAmount('');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActionType(null);
  };

  const handleAddFunds = () => {
    const amount = parseFloat(addFundsAmount);
    if (!isNaN(amount) && amount > 0) {
      setAccountBalance((prevBalance) => prevBalance + amount);
      setAddFundsAmount('');
      setIsAddFundsModalOpen(false);
    }
  };

  const handleOpenAddFundsModal = () => {
    setIsAddFundsModalOpen(true);
  };

  const handleCloseAddFundsModal = () => {
    setIsAddFundsModalOpen(false);
    setAddFundsAmount('');
  };

  const handleUsdChange = (value: string) => {
    const usdValue = parseFloat(value);
    if (usdValue >= 0 && usdValue <= accountBalance) {
      setUsdAmount(value);
      if (!isNaN(usdValue) && btcPrice > 0) {
        const btcValue = usdValue / btcPrice;
        setBtcAmount(btcValue.toFixed(6)); // Ensure BTC amount is rounded to 6 decimal places
      } else {
        setBtcAmount('');
      }
    } else {
      setUsdAmount('');
      setBtcAmount('');
    }
  };

  const handleBtcChange = (value: string) => {
    const btcValue = parseFloat(value);
    if (btcValue >= 0) {
      setBtcAmount(value);
      if (!isNaN(btcValue) && btcPrice > 0) {
        const usdValue = btcValue * btcPrice;
        if (usdValue <= accountBalance) {
          setUsdAmount(usdValue.toFixed(2));
        } else {
          setUsdAmount('');
        }
      } else {
        setUsdAmount('');
      }
    } else {
      setBtcAmount('');
      setUsdAmount('');
    }
  };

  const handleExchange = () => {
    setAlertVisible(true);

    if (actionType === 'buy') {
      const usdValue = parseFloat(usdAmount);
      if (!isNaN(usdValue)) {
        setAccountBalance((prevBalance) => prevBalance - usdValue);
        setCurrentCryptoAmount(
          (prevAmount) => prevAmount + usdValue / btcPrice
        ); // Update BTC holdings on buy
      }
    } else if (actionType === 'sell') {
      const btcValue = parseFloat(sellAmount); // Używamy sellAmount, które użytkownik wprowadził
      if (!isNaN(btcValue) && btcValue > 0) {
        const usdValue = btcValue * btcPrice; // Obliczamy wartość w USD
        setAccountBalance((prevBalance) => prevBalance + usdValue); // Dodajemy wartość USD do salda
        setCurrentCryptoAmount((prevAmount) => prevAmount - btcValue); // Odejmujemy BTC od posiadanej ilości
      }
    }

    setIsModalOpen(false);
    setActionType(null);
    setUsdAmount('');
    setBtcAmount('');
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  return (
    <div className="relative p-4 ml-[30px]">
      <button
        onClick={onBack}
        className="mb-4 text-secondary hover:text-tertiary"
      >
        &lt; Back to Coins
      </button>

      <Navbar />

      <div className="absolute transform scale-75 top-0 -right-5 w-64 overflow-hidden rounded-lg bg-gray-900 bg-opacity-30 backdrop-blur-md backdrop-filter border border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-transparent opacity-50"></div>
        <div className="relative p-4">
          <h2 className="text-lg font-semibold text-white mb-1">
            Account Balance
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-white">
              ${accountBalance.toFixed(2)}
            </span>
            <button
              onClick={handleOpenAddFundsModal}
              className="text-white hover:bg-white hover:bg-opacity-10 p-1 rounded"
            >
              <FiPlus className="h-5 w-5" />
              <span className="sr-only">Add funds</span>
            </button>
          </div>
        </div>
      </div>

      <TradingViewWidget />

      <div className="flex justify-center space-x-2 mt-4">
        <button
          onClick={() => handleOpenModal('buy')}
          className="flex-1 h-12 text-md font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center space-x-2"
        >
          <ArrowUpCircle className="h-5 w-5" />
          <span>Buy</span>
        </button>
        <button
          onClick={() => handleOpenModal('sell')}
          className="flex-1 h-12 text-md font-semibold bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center space-x-2"
        >
          <ArrowDownCircle className="h-5 w-5" />
          <span>Sell</span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-open">
            <div className="modal-box relative">
              <h2 className="font-bold text-lg">
                {actionType === 'buy'
                  ? 'Buy Confirmation'
                  : 'Sell Confirmation'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-3xl"
              >
                &times;
              </button>

              {actionType === 'buy' && (
                <div>
                  <div className="py-4">
                    <label className="block">Amount in USD:</label>
                    <input
                      type="number"
                      value={usdAmount}
                      onChange={(e) => handleUsdChange(e.target.value)}
                      className="input input-bordered w-full"
                      placeholder="Enter amount"
                    />
                  </div>
                  <div className="py-4">
                    <label className="block">Amount in BTC:</label>
                    <input
                      type="number"
                      value={btcAmount}
                      onChange={(e) => handleBtcChange(e.target.value)}
                      className="input input-bordered w-full"
                      placeholder="Calculated BTC amount"
                      disabled
                    />
                  </div>
                </div>
              )}

              {actionType === 'sell' && (
                <div>
                  <div className="py-4">
                    <label className="block">Amount in BTC:</label>
                    <input
                      type="number"
                      step="0.000001" // Umożliwia wprowadzanie wartości z 6 miejscami po przecinku
                      value={sellAmount}
                      onChange={(e) => {
                        const value = e.target.value; // Pobierz wartość jako string
                        // Sprawdź, czy wartość jest poprawna i w odpowiednim zakresie
                        const parsedValue = parseFloat(value);
                        if (!isNaN(parsedValue) && parsedValue >= 0) {
                          if (parsedValue <= currentCryptoAmount) {
                            setSellAmount(value); // Ustaw sellAmount na wprowadzoną wartość
                          } else {
                            setSellAmount(currentCryptoAmount.toFixed(6)); // Ustaw na maksimum
                          }
                        } else {
                          setSellAmount(''); // Wyczyść, jeśli nie jest liczbą
                        }
                      }}
                      onBlur={() => {
                        // Przy utracie fokusu, zaokrąglij do 6 miejsc po przecinku
                        setSellAmount((prev) => {
                          const parsedValue = parseFloat(prev);
                          return isNaN(parsedValue) || parsedValue <= 0
                            ? ''
                            : parsedValue.toFixed(6);
                        });
                      }}
                      className="input input-bordered w-full"
                      placeholder="Enter amount"
                    />
                  </div>
                  <div className="py-4">
                    <label className="block">You have:</label>
                    <span className="font-bold">
                      {currentCryptoAmount.toFixed(6)} BTC
                    </span>
                  </div>
                </div>
              )}

              <div className="modal-action">
                <button onClick={handleExchange} className="btn btn-primary">
                  {actionType === 'buy' ? 'Confirm Buy' : 'Confirm Sell'}
                </button>
                <button onClick={handleCloseModal} className="btn">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAddFundsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-open">
            <div className="modal-box relative">
              <h2 className="font-bold text-lg">Add Funds</h2>
              <button
                onClick={handleCloseAddFundsModal}
                className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-3xl"
              >
                &times;
              </button>
              <div className="py-4">
                <label className="block">Amount to add:</label>
                <input
                  type="number"
                  value={addFundsAmount}
                  onChange={(e) => setAddFundsAmount(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Enter amount"
                />
              </div>
              <div className="modal-action">
                <button onClick={handleAddFunds} className="btn btn-primary">
                  Add Funds
                </button>
                <button onClick={handleCloseAddFundsModal} className="btn">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {alertVisible && (
        <motion.div
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {actionType === 'buy' ? 'Purchase successful!' : 'Sale successful!'}
        </motion.div>
      )}
    </div>
  );
};

export default CryptoDetails;
