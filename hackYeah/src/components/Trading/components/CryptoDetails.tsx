import React, { useState, useEffect } from 'react';
import TradingViewWidget from './TradingViewWidget';
import { FiPlus } from 'react-icons/fi';
import { ArrowUpCircle, ArrowDownCircle, ArrowDownUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface CryptoDetailsProps {
  onBack: () => void;
}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState<'buy' | 'sell' | null>(null);
  const [usdAmount, setUsdAmount] = useState('');
  const [btcAmount, setBtcAmount] = useState('');
  const [btcLogo, setBtcLogo] = useState('');
  const [usdtLogo, setUsdtLogo] = useState('');
  const [btcPrice, setBtcPrice] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const fetchLogosAndRate = async () => {
      try {
        const btcResponse = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
        const btcData = await btcResponse.json();
        setBtcLogo(btcData.image.small);

        const usdtResponse = await fetch('https://api.coingecko.com/api/v3/coins/tether');
        const usdtData = await usdtResponse.json();
        setUsdtLogo(usdtData.image.small);

        const priceResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const priceData = await priceResponse.json();
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
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActionType(null);
  };

  const handleUsdChange = (value: string) => {
    const usdValue = parseFloat(value);
    if (usdValue >= 0) {
      setUsdAmount(value);
      if (!isNaN(usdValue) && btcPrice > 0) {
        const btcValue = usdValue / btcPrice;
        setBtcAmount(btcValue.toFixed(6));
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
        setUsdAmount(usdValue.toFixed(2));
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
    setIsModalOpen(false);
    setActionType(null);
    setUsdAmount('');
    setBtcAmount('');
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000); // Alert will disappear after 3 seconds
  };

  return (
    <div className="relative p-4 ml-[30px]">
      <button
        onClick={onBack}
        className="mb-4 text-blue-500 hover:underline"
      >
        &lt; Back to Coins
      </button>

      
      <div className="absolute transform scale-75 top-0 -right-5 w-64 overflow-hidden rounded-lg bg-gray-900 bg-opacity-30 backdrop-blur-md backdrop-filter border border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-transparent opacity-50"></div>
        <div className="relative p-4">
          <h2 className="text-lg font-semibold text-white mb-1">Account Balance</h2>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-white">$1000</span>
            <button 
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
              <h2 className="font-bold text-lg">{actionType === 'buy' ? 'Buy Confirmation' : 'Sell Confirmation'}</h2>
              <button 
                onClick={handleCloseModal} 
                className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-3xl"
              >
                &times;
              </button>

              {actionType === 'buy' && (
                <div>
                  <div className="py-4">
                    <label className="block text-sm">Amount in USD:</label>
                    <div className="flex items-center mb-2">
                      <img src={usdtLogo} alt="USDT Logo" className="h-6 w-6 mr-2" />
                    </div>
                    <input 
                      type="number" 
                      value={usdAmount} 
                      onChange={(e) => handleUsdChange(e.target.value)}
                      className="input input-bordered w-full"
                      placeholder="Enter amount in USDT"
                    />
                  </div>
                  
                  <div className="flex justify-center -mb-[40px] mt-[10px]">
                    <ArrowDownUp className="h-6 w-6 text-gray-500" />
                  </div>

                  <div className="py-4">
                    <label className="block text-sm">Amount in BTC:</label>
                    <div className="flex items-center mb-2">
                      <img src={btcLogo} alt="BTC Logo" className="h-6 w-6 mr-2" />
                    </div>
                    <input 
                      type="text"
                      value={btcAmount} 
                      onChange={(e) => handleBtcChange(e.target.value)}
                      className="input input-bordered w-full"
                      placeholder="Enter amount in BTC"
                    />
                  </div>
                  <button 
                    onClick={handleExchange}
                    className="btn bg-amber-400 hover:bg-amber-300 w-full mt-4 text-black"
                  >
                    Exchange
                  </button>
                </div>
              )}
              {/* Add logic for sell modal here */}
            </div>
          </div>
        </div>
      )}

    {alertVisible && (
       <motion.div
       role="alert"
       initial={{ opacity: 0, x: 100 }}  // Initial state: hidden and off-screen to the right
       animate={{ opacity: 1, x: 0 }}     // Animate to visible and move to original position
       exit={{ opacity: 0, x: 100 }}       // Animate back to hidden and move off-screen to the right
       transition={{ duration: 0.3 }}      // Transition duration
       className="fixed bottom-4 right-4 w-1/2 z-50 alert alert-success mb-4 shadow-2xl"
     >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Your purchase has been confirmed!</span>
      </motion.div>
    )}
    </div>
  );
};

export default CryptoDetails;
