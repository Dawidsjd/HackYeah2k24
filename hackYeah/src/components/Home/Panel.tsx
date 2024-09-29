import QuickStart from './QuickStart';
import CheckKnowledge from './CheckKnowledge';
import CryptoList from './CryptoList';
import CryptoNews from './CryptoNews';
import CryptoChartEur from './CryptoChartEur';
import MarketStandChart from './MarketStandChart';
import '../Exercises/styles.css'

const Panel = ({ level }: { level: number }) => {
  const tileStyle = 'flex rounded-xl shadow-custom-light  ';
  return (
    <div className="flex flex-col w-full mt-8 space-y-4">
      <div className="flex space-x-4">
        <div className={`justify-start w-1/2 bg-secondary ${tileStyle}`}>
          <CheckKnowledge level={level} />
        </div>
        <div className={`justify-end bg-[#1e222d] w-1/2 p-2 ${tileStyle}`}>
          <QuickStart />
        </div>
      </div>
      <div className="flex  space-x-4 mt-2">
        <div
          className={`relative justify-start shadow-custom-light rounded-xl h-[40vh] w-2/3 overflow-hidden`}
        >
          {/* <CryptoChartEur/> */}
          <MarketStandChart />
          <img
            src="/wombat-win.png"
            alt="Wombat"
            className="absolute rotate-[347deg] right-[-25px] bottom-[-30px] w-24 h-24 object-contain drop-shadow-custom pointer-events-none select-none`"
          />
        </div>
        <div
          className={`relative justify-end w-1/3 h-[40vh] shadow-custom-light rounded-xl overflow-hidden`}
        >
          <CryptoNews />
          <img
            src="/logo.png"
            alt="Wombat"
            className="absolute -translate-x-1/2 rotate-[347deg] right-[-70px] top-[-30px] w-24 h-24 object-contain pointer-events-none select-none`"
          />
        </div>
      </div>
    </div>
  );
};

export default Panel;
