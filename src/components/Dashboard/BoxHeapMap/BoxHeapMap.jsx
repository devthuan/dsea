import TreeMapChart from "../../charts/TreeMapChart/TreeMapChart";
import { useEffect, useState } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import { heapMapServices } from "../../../services/dashboard/heamapService";


const BoxHeapMap = () => {

  const [activeTab, setActiveTab] = useState("Memes");
  const [activeTabTime, setActiveTabTime] = useState("day");
  const [dataHeamapDay, setDataHeamapDay] = useState([])

  const tabsData = [
    { id: "All", label: "All" },
    { id: "Memes", label: "Memes" },
    { id: "Gamefi", label: "Gamefi" },
    { id: "DEPIN", label: "DEPIN" },
    { id: "RWA", label: "RWA" },
  ];

  const tabsTime = [
    { id: "day", label: "day" },
    { id: "week", label: "week" },
    { id: "month", label: "month" },
  ];


  //  useEffect(() => {
  //     const getDataByDay = async () => {
  //       const result = await heapMapServices.fetchData({
  //         type: activeTabTime, // ví dụ: "24h", "7d"
  //         category: activeTab,
  //       });
  //       console.log(result)
  //       setDataHeamapDay(result);
  //     };

  //     getDataByDay()
  //   }, [activeTab, activeTabTime]);
  
  
    useEffect(() => {
      const getDataByDay = async () => {
       
  
        await heapMapServices.listeningEvent({
          type: "day",
          callback: (newData) => {
            if (newData) {
              console.log(newData);
              setDataHeamapDay(newData)
              // setDataHeamapDay((prevData) => {
              //   const existingIndex = prevData.findIndex(
              //     (item) => item.name === newData.name
              //   );

              //   if (existingIndex !== -1) {
              //     const updatedData = [...prevData];
              //     updatedData[existingIndex] = {
              //       ...updatedData[existingIndex],
              //       ...newData, // Gộp lại các trường
              //     };
              //     return updatedData;
              //   } else {
              //     return [...prevData, newData];
              //   }
              // });
            }

          },
        });
      };
  
      // const getDataByWeek = async () => {
  
      //   await bitcoinNetFlowServices.listeningEvent({
      //     type: activeTab,
      //     callback: (newData) => {
      //       if (newData) {
      //         console.log(newData);
      //         setDataStableNetFlowByWeek((prevData) => {
      //           // Kiểm tra xem dữ liệu của ngày này đã có chưa
      //           const existingDataIndex = prevData.findIndex(
      //             (item) => item.time === newData.time
      //           );
  
      //           if (existingDataIndex >= 0) {
      //             // Nếu dữ liệu ngày này đã có, cộng dồn giá trị mới vào
      //             const updatedData = [...prevData];
      //             updatedData[existingDataIndex].inflow += newData.inflow;
      //             updatedData[existingDataIndex].outflow += newData.outflow;
      //             updatedData[existingDataIndex].price += newData.price;
      //             return updatedData;
      //           } else {
      //             // Nếu chưa có dữ liệu cho ngày này, thêm mới
      //             return [...prevData, newData];
      //           }
      //         });
      //       }
      //     },
      //   });
      // };
  
      // const getDataByMonth = async () => {
       
      //   await bitcoinNetFlowServices.listeningEvent({
      //     type: activeTab,
      //     callback: (newData) => {
      //       if (newData) {
      //         console.log(newData);
      //         setDataStableNetFlowByMonth((prevData) => {
      //           // Kiểm tra xem dữ liệu của ngày này đã có chưa
      //           const existingDataIndex = prevData.findIndex(
      //             (item) => item.time === newData.time
      //           );
  
      //           if (existingDataIndex >= 0) {
      //             // Nếu dữ liệu ngày này đã có, cộng dồn giá trị mới vào
      //             const updatedData = [...prevData];
      //             updatedData[existingDataIndex].inflow += newData.inflow;
      //             updatedData[existingDataIndex].outflow += newData.outflow;
      //             updatedData[existingDataIndex].price += newData.price;
      //             return updatedData;
      //           } else {
      //             // Nếu chưa có dữ liệu cho ngày này, thêm mới
      //             return [...prevData, newData];
      //           }
      //         });
      //       }
      //     },
      //   });
      // };


      getDataByDay()
      // switch (activeTab) {
      //   case "day":
      //     getDataByDay();
      //     break;
      //   // case "week":
      //   //   getDataByWeek();
      //   //   break;
      //   // case "month":
      //   //   getDataByMonth();
      //   //   break;
      //   default:
      //     break;
      // }
    }, [activeTab]);


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
          <TreeMapChart data={dataHeamapDay} />
        </div>
      </div>
    </div>
  );
};

export default BoxHeapMap;
