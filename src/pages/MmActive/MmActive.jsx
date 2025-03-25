import InFlowOutFlow from "../../components/charts/InFlowOutFlow/InFlowOutFlow";
import TreeMapChart from "../../components/charts/TreeMapChart/TreeMapChart";
import BoxNotification from "../Home/components/BoxNotification/BoxNotification";
import BoxBtcNetFlow from "../Home/components/BoxBtcNetFlow/BoxBtcNetFlow";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import BoxNarrativePerformance from "../Home/components/BoxNarrativePerformance/BoxNarrativePerformance";
import BoxHeapMap from "../Home/components/BoxHeapMap/BoxHeapMap";
import BoxPerform from "../Home/components/BoxPerform/BoxPerform";
import BoxItemChart from "../../components/BoxItemChart/BoxItemChart";
import BoxBitcoinDominance from "../MmActive/components/BoxBitcoinDominance/BoxBitcoinDominance";
import BoxFearGear from "../MmActive/components/BoxFearGear/BoxFearGear";
import BoxTableTopPerformance from "./components/BoxTableTopPerformance/BoxTableTopPerformance";
import BoxInformationDetailToken from "./components/BoxInformationDetailToken/BoxInformationDetailToken";
const MmActive = () => {
  return (
    <div className={"w-full h-full "}>
      <div className="justify-start text-black text-2xl font-semibold font-['Inter']">
        Crypto Market Insights and Analytics
      </div>
      <div className="justify-center text-[#8a8a8a] text-sm font-normal font-['Inter'] mt-[10px]">
        TOP Cryptocurrencies Price List by Market Capitalization.
      </div>

      <div className="my-[30px] flex gap-2 ">
        <BoxInformationDetailToken />
      </div>

      {/* <div className="mt-[30px] w-full h-full max-h-[660px] grid grid-cols-2 gap-4">
        <div className="w-full h-full">
          <BoxBitcoinDominance />
        </div>
        <div className="">
          <BoxFearGear />
        </div>
      </div>

      <div className="mt-[30px] ">
        <BoxTableTopPerformance />
      </div> */}
    </div>
  );
};

export default MmActive;
