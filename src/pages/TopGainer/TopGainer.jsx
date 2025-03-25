import { images } from "../../assets";
import InFlowOutFlow from "../../components/charts/InFlowOutFlow/InFlowOutFlow";
import TreeMapChart from "../../components/charts/TreeMapChart/TreeMapChart";
import BoxNotification from "../Home/components/BoxNotification/BoxNotification";
import BoxBtcNetFlow from "../Home/components/BoxBtcNetFlow/BoxBtcNetFlow";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import BoxNarrativePerformance from "../Home/components/BoxNarrativePerformance/BoxNarrativePerformance";
import BoxHeapMap from "../Home/components/BoxHeapMap/BoxHeapMap";
import BoxPerform from "../Home/components/BoxPerform/BoxPerform";
import BoxItemChart from "../../components/BoxItemChart/BoxItemChart";
import BoxBitcoinDominance from "../TopGainer/components/BoxBitcoinDominance/BoxBitcoinDominance";
import BoxFearGear from "../TopGainer/components/BoxFearGear/BoxFearGear";
import BoxTableTopPerformance from "./components/BoxTableTopPerformance/BoxTableTopPerformance";
const TopGainer = () => {
  const dataChart = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className={"w-full h-full "}>
      <div className="justify-start text-black text-2xl font-semibold font-['Inter']">
        Crypto Market Insights and Analytics
      </div>
      <div className="justify-center text-[#8a8a8a] text-sm font-normal font-['Inter'] mt-[10px]">
        TOP Cryptocurrencies Price List by Market Capitalization.
      </div>

      <div className="my-[30px] flex gap-2 ">
        <BoxItemChart
          chartData={dataChart}
          textColor="green"
          percentage="+25%"
        />
        <BoxItemChart chartData={dataChart} textColor="#fc5252" />
        <BoxItemChart chartData={dataChart} textColor="#fc5252" />
      </div>

      <div className="mt-[30px] w-full h-full max-h-[660px] grid grid-cols-2 gap-4">
        <div className="w-full h-full">
          <BoxBitcoinDominance />
        </div>
        <div className="">
          <BoxFearGear />
        </div>
      </div>

      {/* wrap top performance top altCoin */}
      <div className="mt-[30px] ">
        <BoxTableTopPerformance />
      </div>
    </div>
  );
};

export default TopGainer;
