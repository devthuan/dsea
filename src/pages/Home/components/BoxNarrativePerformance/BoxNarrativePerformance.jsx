import { useState } from "react";
import InFlowOutFlow from "../../../../components/charts/InFlowOutFlow/InFlowOutFlow";
import NetFlowChart from "../../../../components/charts/NetFlowChart/NetFlowChart";
import TabButtons from "../../../../components/TabButtons/TabButtons";
import { images } from "../../../../assets";
import TableCustom from "../../../../components/TableCustom/TableCustom";
const BoxNarrativePerformance = () => {
  const [activeTab, setActiveTab] = useState("24h");

  const tabsData = [
    { id: "24h", label: "24h" },
    { id: "1w", label: "1w" },
    { id: "1m", label: "1m" },
    { id: "1y", label: "1y" },
  ];

  const cardPriceData = [
    {
      label: "Bitcoin",
      percentageChange: "3.96%",
      percentageDom: "3.96%",
    },
    {
      label: "Bitcoin",
      percentageChange: "3.96%",
      percentageDom: "3.96%",
    },
    {
      label: "Bitcoin",
      percentageChange: "3.96%",
      percentageDom: "3.96%",
    },
    {
      label: "Bitcoin",
      percentageChange: "3.96%",
      percentageDom: "3.96%",
    },
    {
      label: "Bitcoin",
      percentageChange: "3.96%",
      percentageDom: "3.96%",
    },
  ];

  const tableDataContent = [
    {
      label: "Bitcoin",
      price: "$100,86B",
      percentageChange: "3.96%",
      netInflow: "+3.96%",
    },
    {
      label: "Bitcoin",
      price: "$100,86B",
      percentageChange: "3.96%",
      netInflow: "+3.96%",
    },
    {
      label: "Bitcoin",
      price: "$100,86B",
      percentageChange: "3.96%",
      netInflow: "+3.96%",
    },
    {
      label: "Bitcoin",
      price: "$100,86B",
      percentageChange: "3.96%",
      netInflow: "+3.96%",
    },
    {
      label: "Bitcoin",
      price: "$100,86B",
      percentageChange: "3.96%",
      netInflow: "+3.96%",
    },
  ];

  return (
    <div className="">
      <h1 className="justify-start text-black text-2xl font-semibold font-['Inter']">
        Narratives performance
      </h1>

      <div className="mt-4">
        <TabButtons
          tabs={tabsData}
          activeTab={activeTab}
          onTabClick={setActiveTab}
          tabType="type2"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 ">
        <div className="mt-[20px] grid grid-cols-3 gap-3 border-r-[1px] border-black pr-[16px]">
          {activeTab === "24h" &&
            cardPriceData?.map((item, index) => {
              return cartPrice(item, index);
            })}
          {activeTab === "1w" && <div className="">1w</div>}
          {activeTab === "1m" && <div className="">1m</div>}
          {activeTab === "1y" && <div className="">1y</div>}
        </div>

        <div className="w-full h-full overflow-auto ">
          {tableGenerate(tableDataContent)}
        </div>
      </div>
    </div>
  );
};

const cartPrice = (data, index) => {
  return (
    <div
      key={index}
      className="w-full h-[92px] p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-black inline-flex flex-col justify-start items-start"
    >
      <div className="w-[41px] flex flex-col justify-start items-start">
        <div className="self-stretch text-center justify-center text-black text-xs font-medium font-['Poppins'] leading-snug">
          {data?.percentageDom}
        </div>
        <div className="self-stretch justify-center text-black text-base font-medium font-['Poppins'] leading-snug">
          {data.label}
        </div>
      </div>
      <div className="w-full text-right justify-center text-black text-xs font-medium font-['Poppins'] leading-snug">
        {data.percentageChange}
      </div>
    </div>
  );
};

const tableGenerate = (dataContent) => {
  return (
    <table className="w-full h-auto border-none">
      <thead>
        <tr className="text-[#76E1DB]">
          <th className="p-2 text-left">#</th>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Price</th>
          <th className="p-2 text-left">24 Change</th>
          <th className="p-2 text-left">Net Inflow</th>
        </tr>
      </thead>
      <tbody>
        {dataContent?.map((item, index) => {
          return (
            <tr key={index} className="">
              <td className="p-2">{index}</td>
              <td className="p-2 flex gap-3 items-center h-full">
                <div className="w-[24px] h-[24px] bg-black/20 rounded-lg"></div>
                <div className="">{item.label}</div>
              </td>
              <td className="p-2">{item.price}</td>
              <td className="p-2 flex gap-2">
                <img src={images.arrowDownIcon} alt="icon" />
                <span>{item.percentageChange}</span>
              </td>
              <td className="p-2">{item.netInflow}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BoxNarrativePerformance;
