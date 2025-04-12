import BoxNarrativePerformance from "../../components/Dashboard/BoxNarrativePerformance/BoxNarrativePerformance";
import BoxHeapMap from "../../components/Dashboard/BoxHeapMap/BoxHeapMap";
import BoxPerform from "../../components/Dashboard/BoxPerform/BoxPerform";
import StableCoinNetFlow from "../../components/Dashboard/StableCoinNetFlow/StableCoinNetFlow";
import BitcoinNetFlow from "../../components/Dashboard/BitcoinNetFlow/BitcoinNetFlow";
import BoxNotification from "../../components/Dashboard/BoxNotification/BoxNotification";
import { useEffect } from "react";
import { bitcoinNetFlowServices } from "../../services/dashboard/bitcoinNetFlow";
import { candleChartByDayService } from "../../services/asset/candleChartService";
import { TestSMCService } from "../../services/testService";
const Dashboard = () => {

  useEffect(() => {
   

    const fetchData = async () => {
      await candleChartByDayService();
    };
    fetchData();
  }, []);
  return (
    <div className={"w-full h-full "}>
      {/* <div className="px-6 py-2 bg-[#76e1db] rounded-[60px] inline-flex justify-center items-center gap-1">
        <div className="justify-start text-[#0c2c40] text-lg font-bold font-['Inter']">
          My Dashboard
        </div>
      </div>

      <div className="w-full mt-[30px] flex justify-between items-center ">
        <div className="inline-flex justify-start items-center gap-6">
          <div className="justify-start text-black text-2xl font-semibold font-['Inter']">
            Signal
          </div>
          <div className="px-4 py-2 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-1">
            <div className="justify-start text-black text-xs font-normal font-['Inter']">
              Create Aleart
            </div>
            <div className="w-4 h-4 bg-[#d9d9d9] rounded-full" />
          </div>
        </div>

        <div className="w-[268px] flex justify-center gap-4">
          <ButtonCustom text={"Create Alert"} size="medium" />
          <ButtonCustom
            text={"Create Alert"}
            size="medium"
            iconRight={images.backArrowIcon}
          />
        </div>
      </div> */}

      <div className="my-[30px] gap-2 ">
        <BoxNotification
          type={"PEPE"}
          time={"6h ago"}
          user={"Lorem Ipsum"}
          content={
            "is simply dummy text of the printing and typesetting industry"
          }
        />
      </div>

      <div className="mt-[10px] w-full h-full max-h-[660px] grid grid-cols-2 gap-2">
        <div className="">
          {/* bitcoin netFlow */}
          <BitcoinNetFlow />
        </div>
        {/* stablecoin netFlow */}
        <div className="">
          <StableCoinNetFlow />
        </div>
      </div>

      <div className="mt-[10px] w-full h-full rounded-[15px] p-[20px] bg-white shadow-sm  gap-4">
        <BoxNarrativePerformance />
      </div>

      <div className="mt-[10px] grid grid-cols-2 gap-2">
        <div className="">
          <BoxHeapMap />
          {/* <TreeMapChart2 /> */}
        </div>
        <div className="">
          <BoxPerform />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
