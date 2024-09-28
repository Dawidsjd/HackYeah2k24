// CryptoDetails.tsx
import React, { useState, useEffect } from 'react'; // Import useEffect
import TradingViewWidget from './TradingViewWidget'; // Upewnij się, że ścieżka jest poprawna
import { FiPlus } from 'react-icons/fi'; // Import ikony "+" z react-icons
import { ArrowUpCircle, ArrowDownCircle, ArrowDownUp } from 'lucide-react'; // Import ikony do przycisków

interface CryptoDetailsProps {
  onBack: () => void; // Dodajemy funkcję do powrotu
}

const CryptoDetails: React.FC<CryptoDetailsProps> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Stan do zarządzania modalem
  const [actionType, setActionType] = useState<'buy' | 'sell' | null>(null); // Typ akcji
  const [usdAmount, setUsdAmount] = useState(''); // Kwota w dolarach
  const [btcAmount, setBtcAmount] = useState(''); // Kwota w BTC
  const [btcLogo, setBtcLogo] = useState(''); // Logo BTC
  const [usdtLogo, setUsdtLogo] = useState(''); // Logo USDT

  useEffect(() => {
    // Funkcja do pobierania logo
    const fetchLogos = async () => {
      try {
        const btcResponse = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
        const btcData = await btcResponse.json();
        setBtcLogo(btcData.image.small); // Ustaw logo BTC

        const usdtResponse = await fetch('https://api.coingecko.com/api/v3/coins/tether');
        const usdtData = await usdtResponse.json();
        setUsdtLogo(usdtData.image.small); // Ustaw logo USDT
      } catch (error) {
        console.error('Error fetching logos:', error);
      }
    };

    fetchLogos(); // Wywołaj funkcję po zamontowaniu komponentu
  }, []);

  const handleOpenModal = (type: 'buy' | 'sell') => {
    setActionType(type); // Ustaw typ akcji
    setIsModalOpen(true); // Otwórz modal
    setUsdAmount(''); // Resetuj kwoty
    setBtcAmount('');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Zamknij modal
    setActionType(null); // Resetuj typ akcji
  };

  const handleExchange = () => {
    // Logika wymiany
    console.log(`Exchange ${usdAmount} USD for ${btcAmount} BTC`);
    handleCloseModal(); // Zamknij modal po wymianie
  };

  return (
    <div className="relative p-4">
      <button
        onClick={onBack} // Przyciski do cofania
        className="mb-4 text-blue-500 hover:underline"
      >
        &lt; Back to Gallery
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
    
      <TradingViewWidget /> {/* Wstawienie komponentu TradingViewWidget */}

      {/* Buy and Sell buttons below the chart */}
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

{/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="modal modal-open">
      <div className="modal-box relative">
        <h2 className="font-bold text-lg">{actionType === 'buy' ? 'Buy Confirmation' : 'Sell Confirmation'}</h2>
        
        {/* Close button (X) in the top right corner */}
        <button 
          onClick={handleCloseModal} 
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-3xl"
        >
          &times; {/* Unicode for multiplication sign */}
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
                onChange={(e) => setUsdAmount(e.target.value)} 
                className="input input-bordered w-full"
                placeholder="Enter amount in USDT"
              />
            </div>
            
            {/* Ikona wymiany */}
            <div className="flex justify-center -mb-[40px] mt-[10px]">
              <ArrowDownUp className="h-6 w-6 text-gray-500" />
            </div>

            <div className="py-4">
              <label className="block text-sm">Amount in BTC:</label>
              <div className="flex items-center mb-2">
                <img src={btcLogo} alt="BTC Logo" className="h-6 w-6 mr-2" />
              </div>
              <input 
                type="number" 
                value={btcAmount} 
                onChange={(e) => setBtcAmount(e.target.value)} 
                className="input input-bordered w-full"
                placeholder="Enter amount in BTC"
              />
            </div>
            <button onClick={handleExchange} className="btn bg-amber-400 hover:bg-amber-300 w-full mt-4 text-black">
  Exchange
</button>

          </div>
        )}
        {/* Możesz dodać więcej logiki dla sell modal tutaj */}
      </div>
    </div>
  </div>
)}



    </div>
  );
};

export default CryptoDetails;
