import { useState } from "react";
import InFlowOutFlow from "../../../../components/charts/InFlowOutFlow/InFlowOutFlow";
import NetFlowChart from "../../../../components/charts/NetFlowChart/NetFlowChart";
import TabButtons from "../../../../components/TabButtons/TabButtons";
import { images } from "../../../../assets";
import TableCustom from "../../../../components/TableCustom/TableCustom";

const BoxPerform = () => {
  const [activeTab, setActiveTab] = useState("underperform");

  const tabsData = [
    { id: "underperform", label: "Underperform" },
    { id: "outperform", label: "Outperform" },
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
    <div className="w-full h-full bg-white rounded-[32px] p-[24px]">
      <div className="flex gap-4 mb-[17px]">
        {/* <div className="px-6 py-3 bg-[#76e1db] rounded-[40px] inline-flex flex-col justify-center items-center gap-3">
          <div className="self-stretch justify-start text-[#0c2c40] text-base font-medium font-['Inter']">
            underperform
          </div>
        </div>
        <div className="px-6 py-3 bg-white border-black border-[1px] rounded-[40px] inline-flex flex-col justify-center items-center gap-3">
          <div className="self-stretch justify-start text-[#0c2c40] text-base font-medium font-['Inter']">
            underperform
          </div>
        </div> */}
        <TabButtons
          activeTab={activeTab}
          onTabClick={setActiveTab}
          tabs={tabsData}
          tabType="type4"
        />
      </div>
      <div className="w-full h-auto overflow-auto">
        {tableGenerate(tableDataContent)}
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

export default BoxPerform;
