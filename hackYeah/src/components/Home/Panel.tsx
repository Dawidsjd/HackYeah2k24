import QuickStart from "./QuickStart";
import CheckKnowledge from "./CheckKnowledge";
import CryptoList from "./CryptoList";
import CryptoNews from "./CryptoNews";
import CryptoChartEur from "./CryptoChartEur";
import MarketStandChart from "./MarketStandChart";
const Panel = ({ level }: { level: number }) => {
  const tileStyle = "flex rounded-xl shadow-custom-light p-2 ";
  return (
    <div className="flex flex-col w-full mt-8 space-y-4">
      <div className="flex space-x-4">
        <div className={`justify-start w-1/2 bg-secondary ${tileStyle}`}>
          <CheckKnowledge level={level} />
        </div>
        <div className={`justify-end bg-[#1e222d] w-1/2 ${tileStyle}`}>
          <QuickStart />
        </div>
      </div>
      <div className="flex  space-x-4 mt-2">
        <div className={`justify-start w-2/3 `}>
          {/* <CryptoChartEur/> */}
          <MarketStandChart/>
        </div>
        <div className={`relative justify-end w-1/3 h-[40vh] shadow-custom-light rounded-xl overflow-hidden`}>
  <CryptoNews />
  <img
    src="/wombat-win.png"
    alt="Wombat"
    className="absolute -translate-x-1/2 rotate-[347deg] right-[-70px] bottom-[-30px] w-24 h-24 object-contain"
  />
</div>



      </div>
    </div>
  );
};

export default Panel;
