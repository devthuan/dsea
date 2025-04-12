import { useState } from "react";
import TabButtons from "../../TabButtons/TabButtons";
import { images } from "../../../assets";
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

      <div className=" w-[48%] h-auto flex items-center justify-between">
        <h1 className="justify-start text-black text-2xl font-semibold font-['Inter']">
          Narratives performance
        </h1>
        <div className="">
          <TabButtons
            tabs={tabsData}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            tabType="type1"
          />
        </div>

      </div>

      <div className="grid grid-cols-2 gap-3 ">
        <div className="mt-[20px] grid grid-cols-3 gap-3 border-r-[1px] border-black pr-[16px]">
          
          <div className="w-full h-[92px] bg-white p-3 rounded-lg  flex  flex-col justify-start items-start border-[2px] border-black">
            <div className="w-[41px] flex flex-col justify-start items-start">
              <div className="self-stretch text-center justify-center text-black text-xs font-medium font-['Poppins'] leading-snug">
                3.96%
              </div>
              <div className="self-stretch justify-center text-black text-base font-medium font-['Poppins'] leading-snug">
                All
              </div>
            </div>
            <div className="w-full flex justify-between text-black text-xs font-medium font-['Poppins'] leading-snug">
              <div className="w-full h-full"></div>
              <div className="">3.96%</div>
            </div>
          </div>

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
      className="w-full h-[92px] bg-white p-3 rounded-lg  flex  flex-col justify-start items-start shadow-md"
    >
      <div className="w-[41px] flex flex-col justify-start items-start">
        <div className="self-stretch text-center justify-center text-black text-xs font-medium font-['Poppins'] leading-snug">
          {data?.percentageDom}
        </div>
        <div className="self-stretch justify-center text-black text-base font-medium font-['Poppins'] leading-snug">
          {data.label}
        </div>
      </div>
      <div className="w-full flex justify-between text-black text-xs font-medium font-['Poppins'] leading-snug">
        <div className="w-full h-full"></div>
        <div className="">{data.percentageChange}</div>
      </div>
    </div>
  );
};

const tableGenerate = (dataContent) => {
  return (
    <table className="w-full h-auto border-none">
      <thead>
        <tr className="text-black">
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
