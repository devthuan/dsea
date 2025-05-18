import BoxNarrativePerformance from "../../components/Dashboard/BoxNarrativePerformance/BoxNarrativePerformance";
import BoxHeapMap from "../../components/Dashboard/BoxHeapMap/BoxHeapMap";
import BoxPerform from "../../components/Dashboard/BoxPerform/BoxPerform";
import StableCoinNetFlow from "../../components/Dashboard/StableCoinNetFlow/StableCoinNetFlow";
import BitcoinNetFlow from "../../components/Dashboard/BitcoinNetFlow/BitcoinNetFlow";
import BoxNotification from "../../components/Dashboard/BoxNotification/BoxNotification";
import { useEffect, useState } from "react";
import { bitcoinNetFlowServices } from "../../services/dashboard/bitcoinNetFlowService";
const Dashboard = () => {

 


  return (
    <div className={"w-full h-full "}>
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
        <div
          className="rounded-[15px] bg-[linear-gradient(to_top,_#dfe9f3_0%,_white_100%)]
"
        >
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
