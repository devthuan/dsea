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

const Test = () => {
  const updateDataChart = (newData) => {
    setDataCandle((prevData) => {
      // Tìm kiếm xem ngày có tồn tại trong dữ liệu trước đó không
      const existingIndex = prevData.findIndex(
        (item) => item.time === newData.time
      );

      // Nếu ngày đã tồn tại, ghi đè dữ liệu
      if (existingIndex !== -1) {
        const updatedData = [...prevData];
        updatedData[existingIndex] = {
          ...newData, // Ghi đè hoàn toàn dữ liệu cũ bằng dữ liệu mới
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

  const [candlesticks, setCandlesticks] = useState([]); // Lưu trữ mảng nến
  const socketRef = useRef(null);
  const lastCandleRef = useRef(null);

  useEffect(() => {
    async function callBitcoinNetFlow() {
      const result = await bitcoinNetFlowServices(); // Gọi hàm để bắt đầu lắng nghe sự kiện
      if (result) {
        console.log("Dữ liệu từ sự kiện FlowTotalRecorded:", result);
      } else {
        console.log("Không có dữ liệu từ sự kiện.");
      }
    }
    callBitcoinNetFlow();
  }, []);

  // useEffect(() => {
  //   if (contract) {
  //     listenToEvent("Recorded", (event) => {
  //       // console.log("event listening:", event.returnValues.formData);
  //       const result = event.returnValues.formData;
  //       const timeStamp = Number(result.timestamp);

  //       const dataFormat = {
  //         time: convertTimestampToDateString(timeStamp, "YYYY-MM-DD"),
  //         open: parseFloat(result.open),
  //         high: parseFloat(result.high),
  //         low: parseFloat(result.low),
  //         close: parseFloat(result.close),
  //         value: parseFloat(result.volume),
  //       };
  //       console.log(dataFormat)
  //       updateDataChart(dataFormat);
  //     });
  //   }
  // }, [contract]);
  console.log(getContractInstance("ContractNetFLowDay"));

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
