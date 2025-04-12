import { useEffect, useRef, useState } from "react";
import InFlowOutFlow from "../../components/charts/InFlowOutFlow/InFlowOutFlow";
import useWeb3Contract from "../../hooks/useWeb3Contract";
import contractCandleStrickDay from "../../config/contractCandleStrickDay";
import { convertTimestampToDateString } from "../../util/fotmatDate";
import CandlestickVolume from "../../components/charts/CandlestickVolume/CandlestickVolume";
import LineChartLightWeight from "../../components/charts/LineChartLightWeight/LineChartLightWeight";
import CryptoPieChart from "../../components/charts/CryptPieChart/CryptPieChart";
import PieChartNeedle from "../../components/charts/PieChartNeedle/PieChartNeedle";
import CustomPieChart from "../../components/charts/PieChart/PieChart";
import LineChartReChart2 from "../../components/charts/LineChartReChart2/LineChartReChart2";
import LineChartOI from "../../components/charts/LineChartLightWeight/lineChartOIt";
import FundingRateChart from "../../components/charts/LineChartReChart/FundingRateChart";
import { getContractInstance } from "../../services/smartContractService";
import { bitcoinNetFlowServices } from "../../services/dashboard/bitcoinNetFlow";
import useWeb3 from "../../hooks/useWeb3";




const Test = () => {

  
  useEffect(() => {
    const web3 = new Web3("wss://ethereum-rpc.publicnode.com");
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

    let subscription;

    const subscribe = async () => {
      try {
        subscription = contract.events[EVENT_NAME]({
          fromBlock: "latest",
        })
          .on("data", (event) => {
            console.log("📦 Event data:", event);
          })
          .on("error", (error) => {
            console.error("❌ Event error:", error);
          });
      } catch (error) {
        console.error("❌ Error during subscription:", error);
      }
    };

    subscribe();

    return () => {
      if (subscription && typeof subscription.unsubscribe === "function") {
        subscription.unsubscribe((error, success) => {
          if (success) {
            console.log("📴 Unsubscribed successfully");
          } else {
            console.warn("⚠️ Unsubscribe failed:", error);
          }
        });
      }
    };
  }, []);
 

  return (
    <div
      className={"w-full h-full  bg-white/60 rounded-[32px] p-[32px] shadow-lg"}
    >
      <CandlestickVolume />
      {/* <LineChartLightWeight /> */}
      {/* <PieChartNeedle /> */}
      {/* <CustomPieChart/> */}
      {/* <LineChartOI /> */}
      {/* <FundingRateChart /> */}
    </div>
  );
};

export default Test;
