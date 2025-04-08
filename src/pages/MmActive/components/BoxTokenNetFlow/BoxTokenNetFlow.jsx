import { useState } from "react";
import InFlowOutFlow from "../../../../components/charts/InFlowOutFlow/InFlowOutFlow";
import NetFlowChart from "../../../../components/charts/NetFlowChart/NetFlowChart";
import TabButtons from "../../../../components/TabButtons/TabButtons";
import ButtonCustom from "../../../../components/ButtonCustom/ButtonCustom";
import CustomPieChart from "../../../../components/charts/PieChart/PieChart";
import LineChartOI from "../../../../components/charts/LineChartLightWeight/lineChartOIt";
import FundingRateChart from "../../../../components/charts/LineChartReChart/FundingRateChart";
import AccumulationChart from "../../../../components/charts/LineChartReChart/AccumulationChart";

const BoxTokenNetFlow = () => {
  const [activeTab, setActiveTab] = useState("netflow");
  const [activeTabPieChart, setActiveTabPieChart] = useState("24h");

  const btcData = [
    { name: "2024-01-01", inflow: 32000, outflow: 28000, price: 42000 },
    { name: "2024-02-01", inflow: 35000, outflow: 37000, price: 45000 },
    { name: "2024-03-01", inflow: 40000, outflow: 39000, price: 47000 },
    { name: "2024-04-01", inflow: 42000, outflow: 45000, price: 48000 },
    { name: "2024-05-01", inflow: 46000, outflow: 43000, price: 50000 },
    { name: "2024-06-01", inflow: 50000, outflow: 52000, price: 91000 },
    { name: "2024-07-01", inflow: 54000, outflow: 51000, price: 83000 },
    { name: "2024-08-01", inflow: 58000, outflow: 60000, price: 55000 },
    { name: "2024-09-01", inflow: 62000, outflow: 59000, price: 77000 },
    { name: "2024-10-01", inflow: 66000, outflow: 68000, price: 59000 },
    { name: "2024-11-01", inflow: 70000, outflow: 72000, price: 61000 },
    { name: "2024-12-01", inflow: 75000, outflow: 73000, price: 63000 },
    { name: "2025-01-01", inflow: 32000, outflow: 28000, price: 42000 },
    { name: "2025-02-01", inflow: 35000, outflow: 37000, price: 45000 },
    { name: "2025-03-01", inflow: 40000, outflow: 39000, price: 47000 },
    { name: "2025-04-01", inflow: 42000, outflow: 45000, price: 48000 },
    { name: "2025-05-01", inflow: 46000, outflow: 43000, price: 50000 },
    { name: "2025-06-01", inflow: 50000, outflow: 52000, price: 91000 },
    { name: "2025-07-01", inflow: 54000, outflow: 51000, price: 83000 },
    { name: "2025-08-01", inflow: 58000, outflow: 60000, price: 55000 },
    { name: "2025-09-01", inflow: 62000, outflow: 59000, price: 77000 },
    { name: "2025-10-01", inflow: 66000, outflow: 68000, price: 59000 },
    { name: "2025-11-01", inflow: 70000, outflow: 72000, price: 61000 },
    { name: "2025-12-01", inflow: 75000, outflow: 73000, price: 63000 },
  ];

  const tabsData = [
    { id: "netflow", label: "Net Inflow/Outflow" },
    { id: "exchange", label: "On-chain Exchange Flow" },
    { id: "whaleStatus", label: "Whales' status" },
    { id: "accumulation", label: "Whale accumulation trend" },
  ];

  return (
    <div className="w-full h-full rounded-[32px] p-[24px] bg-white">
      <h1 className="text-black text-2xl font-semibold font-['Inter']">
        Bitcoin Exchange Net Flow
      </h1>

      <div className="mt-4">
        <TabButtons
          tabs={tabsData}
          activeTab={activeTab}
          onTabClick={setActiveTab}
          tabType="type4"
        />
      </div>

      <div className="mt-[27px]">
        {(activeTab === "netflow" || activeTab === "exchange") && (
          <NetFlowChart data={btcData} />
        )}

        {activeTab === "whaleStatus" && (
          <WhaleStatusTab
            activeTab={activeTabPieChart}
            onTabChange={setActiveTabPieChart}
          />
        )}

        {activeTab === "accumulation" && <AccumulationChart/>}
      </div>
    </div>
  );
};

const WhaleStatusTab = ({ activeTab, onTabChange }) => {
  const tabsDataPieChart = [
    { id: "24h", label: "24h" },
    { id: "7day", label: "7 day" },
    { id: "14day", label: "14 day" },
  ];

  return (
    <div className="grid grid-cols-3 justify-between">
      <div className="col-span-2 flex justify-center items-center">
        <CustomPieChart width={800} height={600} outerRadius={150} />
      </div>

      <div className="w-[404px] h-[595px] relative overflow-hidden">
        <div className="absolute left-0 top-[3px] w-[402px] h-[592px] bg-[#d9d9d9]/40 rounded-[20px]" />

        <div className="absolute left-[32px] top-[35px] inline-flex justify-start items-center gap-2">
          <TabButtons
            tabs={tabsDataPieChart}
            activeTab={activeTab}
            onTabClick={onTabChange}
            tabType="type2"
          />
        </div>

        <div className="absolute left-[32px] top-[105px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="text-black text-2xl font-normal font-['Poppins'] leading-[48px]">
              Whales sold at a loss
            </div>
            <div className="text-black text-[64px] font-semibold font-['Poppins'] leading-[48px]">
              8%
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-black text-2xl font-normal font-['Poppins'] leading-[48px]">
              Whales sold at a profit
            </div>
            <div className="text-black text-[64px] font-semibold font-['Poppins'] leading-[48px]">
              12%
            </div>
          </div>
        </div>

        <div className="absolute left-[32px] top-[401px] w-[338px] h-0 outline outline-2 outline-offset-[-1px] outline-[#4d4d4d]" />

        <div className="absolute left-[32px] top-[417px] w-[338px] text-black text-xs font-normal font-['Poppins']">
          Whales have sold at a loss or gained a profit over 24 hours, 7 days,
          and 14 days. This shows the activities of all whales at the moment.
        </div>
      </div>
    </div>
  );
};

export default BoxTokenNetFlow;
