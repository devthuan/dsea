import TreeMapChart from "../../charts/TreeMapChart/TreeMapChart";
import useTickerWS from "../../../hooks/useTickerWS";
import { useState } from "react";
import Dropdown from "../../Dropdown/Dropdown";


const BoxHeapMap = () => {
  const dataTop10Token = useTickerWS();

  const [activeTab, setActiveTab] = useState("Memes");
  const [activeTabTime, setActiveTabTime] = useState("24h");

  const tabsData = [
    { id: "All", label: "All" },
    { id: "Memes", label: "Memes" },
    { id: "Gamefi", label: "Gamefi" },
    { id: "DEPIN", label: "DEPIN" },
    { id: "RWA", label: "RWA" },
  ];
  const tabsTime = [
    { id: "24h", label: "24h" },
    { id: "1d", label: "1d" },
    { id: "7d", label: "7d" },
  ];

  return (
    <div className="">
      <div className="bg-white shadow-md rounded-[15px] p-[24px] flex flex-col gap-y-[16px]">
        <div className=" w-full flex items-center justify-between">
          <h1 className="w-full  text-black text-2xl font-semibold font-['Inter']">
            Narratives performance
          </h1>
          <div className="w-full h-full flex justify-end items-center gap-2">
          
            <Dropdown
              data={tabsData}
              handeSelectChange={(e) => setActiveTab(e.target.value)}
            />
            <Dropdown
              data={tabsTime}
              handeSelectChange={(e) => setActiveTabTime(e.target.value)}
            />
              
          </div>

        </div>

        {/* box chart */}
        <div className="w-full h-full">
          <TreeMapChart data={dataTop10Token} />
        </div>
      </div>
    </div>
  );
};

export default BoxHeapMap;
