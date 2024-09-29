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
        <div className={`justify-end  w-1/2 ${tileStyle}`}>
          <QuickStart />
        </div>
      </div>
      <div className="flex space-x-4 mt-2">
        <div className={`justify-start w-2/3 `}>
          {/* <CryptoChartEur/> */}
          <MarketStandChart/>
        </div>
        <div className={`justify-end w-1/3 h-[40vh]`}>
          <CryptoNews />
        </div>
      </div>
    </div>
  );
};

export default Panel;
