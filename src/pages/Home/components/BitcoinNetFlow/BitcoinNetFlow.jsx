import { useEffect, useState } from "react";
import InFlowOutFlow from "../../../../components/charts/InFlowOutFlow/InFlowOutFlow";
import NetFlowChart from "../../../../components/charts/NetFlowChart/NetFlowChart";
import TabButtons from "../../../../components/TabButtons/TabButtons";
import {
  CONTRACT_ABI_DAY,
  CONTRACT_ADDRESS_DAY,
  PROVIDER_URL,
  PRIVATE_KEY,
  CONTRACT_ADDRESS_WEEK,
  CONTRACT_ABI_WEEK,
  CONTRACT_ADDRESS_MONTH,
  CONTRACT_ABI_MONTH,
} from "../../../../config/smartContract";

import contractNetFlowDay from "../../../../config/contractNetFlowDay";
import useWeb3Contract from "../../../../hooks/useWeb3Contract";
import StableCoinNetFlowChart from "../../../../components/charts/NetFlowChart/StableCoinNetFlowChart";
import { convertTimestampToDateString } from "../../../../util/fotmatDate";
import { groupDataByWeekMonth } from "../../../../util/groupData";

const initialData = [
  { time: "2024-01-01", inflow: 20000, outflow: 10000, balance: 11000 },
  { time: "2024-01-02", inflow: 46500, outflow: 96100, balance: 26900 },
  { time: "2024-01-03", inflow: 56500, outflow: 35100, balance: 57400 },
  { time: "2024-01-04", inflow: 38000, outflow: 20600, balance: 74300 },
  { time: "2024-01-05", inflow: 48200, outflow: 13600, balance: 64200 },
  { time: "2024-01-01", inflow: 32000, outflow: 28000, balance: 42000 },
  { time: "2024-01-02", inflow: 34465, outflow: 25961, balance: 40269 },
  { time: "2024-01-03", inflow: 36565, outflow: 54351, balance: 36574 },
  { time: "2024-01-04", inflow: 34380, outflow: 54206, balance: 40743 },
  { time: "2024-01-05", inflow: 35482, outflow: 62136, balance: 43642 },
  { time: "2024-01-06", inflow: 33193, outflow: 74340, balance: 42846 },
  { time: "2024-01-07", inflow: 34066, outflow: 86015, balance: 43986 },
  { time: "2024-01-08", inflow: 36824, outflow: 18997, balance: 40471 },
  { time: "2024-01-09", inflow: 39809, outflow: 29057, balance: 37256 },
  { time: "2024-01-10", inflow: 36446, outflow: 23774, balance: 34677 },
  { time: "2024-01-11", inflow: 38763, outflow: 29194, balance: 31257 },
  { time: "2024-01-12", inflow: 36355, outflow: 26742, balance: 31109 },
  { time: "2024-01-13", inflow: 37999, outflow: 26651, balance: 27747 },
  { time: "2024-01-14", inflow: 37421, outflow: 27429, balance: 31185 },
  { time: "2024-01-15", inflow: 36662, outflow: 28092, balance: 30779 },
  { time: "2024-01-16", inflow: 39473, outflow: 0, balance: 32765 },
  { time: "2024-01-17", inflow: 39348, outflow: 0, balance: 36271 },
  { time: "2024-01-18", inflow: 39898, outflow: 0, balance: 36682 },
  { time: "2024-01-19", inflow: 36653, outflow: 26077, balance: 38984 },
  { time: "2024-01-20", inflow: 36372, outflow: 28985, balance: 37099 },
  { time: "2024-01-21", inflow: 36437, outflow: 28716, balance: 35736 },
  { time: "2024-01-22", inflow: 34691, outflow: 30777, balance: 32976 },
  { time: "2024-01-23", inflow: 31734, outflow: 30855, balance: 37262 },
  { time: "2024-01-24", inflow: 33061, outflow: 32574, balance: 39208 },
  { time: "2024-01-25", inflow: 31408, outflow: 33189, balance: 35043 },
  { time: "2024-01-26", inflow: 31998, outflow: 36252, balance: 32575 },
  { time: "2024-01-27", inflow: 28948, outflow: 38110, balance: 35492 },
  { time: "2024-01-28", inflow: 29048, outflow: 37857, balance: 33794 },
  { time: "2024-01-29", inflow: 27357, outflow: 36962, balance: 31268 },
  { time: "2024-01-30", inflow: 28056, outflow: 38921, balance: 29173 },
  { time: "2024-01-31", inflow: 29637, outflow: 39983, balance: 27185 },
  // { time: "2024-02-01", inflow: 31975, outflow: 41755, balance: 25835 },
  // { time: "2024-02-02", inflow: 33204, outflow: 42386, balance: 29742 },
  // { time: "2024-02-03", inflow: 33743, outflow: 41921, balance: 32985 },
  // { time: "2024-02-04", inflow: 35208, outflow: 40197, balance: 35628 },
  // { time: "2024-02-05", inflow: 33829, outflow: 39745, balance: 37415 },
  // { time: "2024-02-06", inflow: 31596, outflow: 38562, balance: 40261 },
  // { time: "2024-02-07", inflow: 34402, outflow: 40256, balance: 41983 },
  // { time: "2024-02-08", inflow: 36256, outflow: 41537, balance: 45762 },
  // { time: "2024-02-09", inflow: 38013, outflow: 42288, balance: 43927 },
  // { time: "2024-02-10", inflow: 40126, outflow: 41092, balance: 46582 },
  // { time: "2024-02-11", inflow: 41735, outflow: 43185, balance: 48762 },
  // { time: "2024-02-12", inflow: 43972, outflow: 45892, balance: 50937 },
  // { time: "2024-02-13", inflow: 45628, outflow: 47182, balance: 52415 },
  // { time: "2024-02-14", inflow: 46892, outflow: 48937, balance: 54012 },
  // { time: "2024-02-15", inflow: 48273, outflow: 50729, balance: 55837 },
  // { time: "2024-02-16", inflow: 50162, outflow: 52138, balance: 57468 },
  // { time: "2024-02-17", inflow: 51532, outflow: 53392, balance: 59872 },
  // { time: "2024-03-01", inflow: 32000, outflow: 28000, balance: 42000 },
  // { time: "2024-03-02", inflow: 34465, outflow: 25961, balance: 40269 },
  // { time: "2024-03-03", inflow: 36565, outflow: 54351, balance: 36574 },
  // { time: "2024-03-04", inflow: 34380, outflow: 54206, balance: 40743 },
  // { time: "2024-03-05", inflow: 35482, outflow: 62136, balance: 43642 },
  // { time: "2024-03-06", inflow: 33193, outflow: 74340, balance: 42846 },
  // { time: "2024-03-07", inflow: 34066, outflow: 86015, balance: 43986 },
  // { time: "2024-03-08", inflow: 36824, outflow: 18997, balance: 40471 },
  // { time: "2024-03-09", inflow: 39809, outflow: 29057, balance: 37256 },
  // { time: "2024-03-10", inflow: 36446, outflow: 23774, balance: 34677 },
  // { time: "2024-03-11", inflow: 38763, outflow: 29194, balance: 31257 },
  // { time: "2024-03-12", inflow: 36355, outflow: 26742, balance: 31109 },
  // { time: "2024-03-13", inflow: 37999, outflow: 26651, balance: 27747 },
  // { time: "2024-03-14", inflow: 37421, outflow: 27429, balance: 31185 },
  // { time: "2024-03-15", inflow: 36662, outflow: 28092, balance: 30779 },
  // { time: "2024-03-16", inflow: 39473, outflow: 0, balance: 32765 },
  // { time: "2024-03-17", inflow: 39348, outflow: 0, balance: 36271 },
  // { time: "2024-03-18", inflow: 39898, outflow: 0, balance: 36682 },
  // { time: "2024-03-19", inflow: 36653, outflow: 26077, balance: 38984 },
  // { time: "2024-03-20", inflow: 36372, outflow: 28985, balance: 37099 },
  // { time: "2024-03-21", inflow: 36437, outflow: 28716, balance: 35736 },
  // { time: "2024-03-22", inflow: 34691, outflow: 30777, balance: 32976 },
  // { time: "2024-03-23", inflow: 31734, outflow: 30855, balance: 37262 },
  // { time: "2024-03-24", inflow: 33061, outflow: 32574, balance: 39208 },
  // { time: "2024-03-25", inflow: 31408, outflow: 33189, balance: 35043 },
  // { time: "2024-03-26", inflow: 31998, outflow: 36252, balance: 32575 },
  // { time: "2024-03-27", inflow: 28948, outflow: 38110, balance: 35492 },
  // { time: "2024-03-28", inflow: 29048, outflow: 37857, balance: 33794 },
  // { time: "2024-03-29", inflow: 27357, outflow: 36962, balance: 31268 },
  // { time: "2024-03-30", inflow: 28056, outflow: 38921, balance: 29173 },
  // { time: "2024-03-31", inflow: 29637, outflow: 39983, balance: 27185 },
];

const handleEventListening = (contract, listenToEvent, updateBtcData) => {
  if (contract) {
    listenToEvent("FlowTotalRecorded", (event) => {
      console.log("event listening FlowTotalRecorded:", event.returnValues);

      const timestamp = Number(event.returnValues.timestamp);
      const dataNew = {
        time: convertTimestampToDateString(timestamp, "YYYY-MM-DD"),
        inflow: parseFloat(event.returnValues.incoming),
        outflow: parseFloat(event.returnValues.outgoing),
        balance: parseFloat(event.returnValues.balance),
      };

      console.log(dataNew);
      updateBtcData(dataNew);
    });
  }
};

const BitcoinNetFlow = () => {
  const {
    contract: contractDay,
    listenToEvent: listenToEventDay,
    fetchData: fetchDataDay,
  } = useWeb3Contract({
    contractAddress: contractNetFlowDay.address,
    contractAbi: contractNetFlowDay.abi,
  });
  const {
    contract: contractWeek,
    listenToEvent: listenToEventWeek,
    fetchData: fetchDataWeek,
  } = useWeb3Contract({
    contractAddress: CONTRACT_ADDRESS_WEEK,
    contractAbi: CONTRACT_ABI_WEEK,
  });
  const {
    contract: contractMonth,
    listenToEvent: listenToEventMonth,
    fetchData: fetchDataMonth,
  } = useWeb3Contract({
    contractAddress: CONTRACT_ADDRESS_MONTH,
    contractAbi: CONTRACT_ABI_MONTH,
  });

  const [activeTab, setActiveTab] = useState("day");

  const [dataStableNetFlowByDay, setDataStableNetFlowByDay] =
    useState(initialData);

  const [dataStableNetFlowByWeek, setDataStableNetFlowByWeek] =
    useState(initialData);

  const [dataStableNetFlowByMonth, setDataStableNetFlowByMonth] =
    useState(initialData);

  const tabsData = [
    { id: "day", label: "Day" },
    { id: "week", label: "Week" },
    { id: "month", label: "Month" },
  ];

  const handleChooseTab = (event) => {
    setActiveTab(event);
  };

  // Hàm cập nhật dữ liệu realtime (ghi đè vào data cũ)
  const updateBtcData = (newData) => {
    setDataStableNetFlowByDay((prevData) => {
      // Tìm kiếm xem ngày có tồn tại trong dữ liệu trước đó không
      const existingIndex = prevData.findIndex(
        (item) => item.time === newData.time
      );

      // Nếu ngày đã tồn tại, ghi đè dữ liệu
      if (existingIndex !== -1) {
        const updatedData = [...prevData];
        updatedData[existingIndex] = {
          ...newData, // Ghi đè hoàn toàn dữ liệu cũ bằng dữ liệu mới
          balance: newData.inflow - newData.outflow, // Cập nhật lại balance (hoặc giữ lại công thức tính toán của bạn nếu cần)
        };
        return updatedData;
      } else {
        // Nếu ngày mới, thêm vào cuối danh sách
        const lastBalance =
          prevData.length > 0 ? prevData[prevData.length - 1].balance : 0;
        return [
          ...prevData,
          {
            time: newData.time,
            inflow: newData.inflow,
            outflow: newData.outflow,
            balance: lastBalance + (newData.inflow - newData.outflow),
          },
        ];
      }
    });
  };

  useEffect(() => {
    handleEventListening(contractDay, listenToEventDay, updateBtcData);
  }, [contractDay]);

  useEffect(() => {
    handleEventListening(contractWeek, listenToEventWeek, updateBtcData);
  }, [contractWeek]);

  useEffect(() => {
    handleEventListening(contractMonth, listenToEventMonth, updateBtcData);
  }, [contractMonth]);

  // useEffect(() => {
  //   if (contractDay) {
  //     listenToEventDay("Recorded", (event) => {
  //       console.log("event listening Recorded:", event.returnValues);
  //     });
  //   }
  // }, [contractDay]);

  // useEffect(() => {
  //   const getBalance = async () => {
  //     const result = await fetchDataDay(
  //       "getFlowInRange",
  //       1743412523,
  //       1743413103,
  //       "USDT",
  //       "binance"
  //     ); // Gọi hàm getBalance từ smart contractDay
  //     console.log(result);
  //   };

  //   if (contractDay) {
  //     getBalance();
  //   }
  // }, [contractDay, fetchDataDay]);

  return (
    <div className="w-full h-full  rounded-[32px] p-[24px] bg-white/70 shadow-lg">
      <h1 className="justify-start text-black text-2xl font-bold font-['Inter']">
        Bitcoin Exchange Net Flow
      </h1>
      <div className="mt-4 w-auto ">
        <TabButtons
          tabs={tabsData}
          activeTab={activeTab}
          onTabClick={(e) => handleChooseTab(e)}
        />
      </div>

      <div className="mt-[27px]">
        {activeTab === "day" && (
          <StableCoinNetFlowChart data={dataStableNetFlowByDay} />
        )}
        {activeTab === "week" && (
          <StableCoinNetFlowChart data={dataStableNetFlowByDay} />
        )}
        {activeTab === "month" && (
          <StableCoinNetFlowChart data={dataStableNetFlowByDay} />
        )}
      </div>
    </div>
  );
};

export default BitcoinNetFlow;
