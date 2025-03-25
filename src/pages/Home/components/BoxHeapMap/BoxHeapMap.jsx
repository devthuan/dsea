import classNames from "classnames/bind";
import styles from "./BoxHeapMap.module.scss";
import TreeMapChart from "../../../../components/charts/TreeMapChart/TreeMapChart";
import useTickerWS from "../../../../hooks/useTickerWS";
import TabButtons from "../../../../components/TabButtons/TabButtons";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

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
    { id: "+", label: "+" },
  ];
  const tabsTime = [
    { id: "24h", label: "24h" },
    { id: "1d", label: "1d" },
    { id: "7d", label: "7d" },
  ];

  return (
    <div className="">
      <div className="bg-white rounded-[32px] p-[24px] flex flex-col gap-y-[16px]">
        <h1 className="justify-start text-black text-2xl font-semibold font-['Inter']">
          Narratives performance
        </h1>
        <div className="w-full h-full flex justify-between items-center">
          <TabButtons
            tabs={tabsData}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            tabType="type3"
          />

          <div className=" inline-flex justify-start items-start gap-2.5">
            <TabButtons
              tabs={tabsTime}
              activeTab={activeTabTime}
              onTabClick={setActiveTabTime}
              tabType="type2"
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
