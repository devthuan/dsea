import { useState } from "react";
import InFlowOutFlow from "../../../../components/charts/InFlowOutFlow/InFlowOutFlow";
import NetFlowChart from "../../../../components/charts/NetFlowChart/NetFlowChart";
import TabButtons from "../../../../components/TabButtons/TabButtons";
const BoxBtcNetFlow = () => {
  const [activeTab, setActiveTab] = useState("flows");

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
    { id: "flows", label: "Flows (USD)" },
    { id: "aum", label: "AUM" },
    { id: "marketCap", label: "Market Cap" },
    { id: "volume", label: "Volume" },
  ];

  return (
    <div className="w-full h-full  rounded-[32px] p-[24px] bg-white">
      <h1 className="justify-start text-black text-2xl font-semibold font-['Inter']">
        Bitcoin Exchange Net Flow
      </h1>
      <div className="mt-4 ">
        <TabButtons
          tabs={tabsData}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
      </div>

      <div className="mt-[27px]">
        {activeTab === "flows" && <NetFlowChart data={btcData} />}
        {activeTab === "aum" && <div>Nội dung của AUM</div>}
        {activeTab === "marketCap" && <div>Nội dung của Market Cap</div>}
        {activeTab === "volume" && <div>Nội dung của Volume</div>}
      </div>
    </div>
  );
};

export default BoxBtcNetFlow;
