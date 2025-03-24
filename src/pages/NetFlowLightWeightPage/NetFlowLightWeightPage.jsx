import BarChartRechart from "../../components/BarChartRechart/BarChartRechart";
import InFlowOutFlowChart from "../../components/InFlowOutFlow/InFlowOutFlow";
import NetFlowChart from "../../components/NetFlowChart/NetFlowChart";

const NetFlowLightWeightPage = () => {
  const btcPriceData = [
    { time: "2024-03-01 10:30:00", value: 60000 },
    { time: "2024-03-02 11:00:00", value: 60500 },
    { time: "2024-03-03 12:15:00", value: 61000 },
    { time: "2024-03-04 13:45:00", value: 62000 },
    { time: "2024-03-05 15:00:00", value: 61500 },
  ];

  const inflowOutflowData = [
    { time: "2024-03-01 10:30:00", value: 5000 },
    { time: "2024-03-02 11:00:00", value: -3000 },
    { time: "2024-03-03 12:15:00", value: 7000 },
    { time: "2024-03-04 13:45:00", value: -5000 },
    { time: "2024-03-05 15:00:00", value: 2000 },
  ];
  return (
    <div className={"w-full h-full "}>
      <InFlowOutFlowChart
        btcPriceData={btcPriceData}
        inflowOutflowData={inflowOutflowData}
      />
    </div>
  );
};

export default NetFlowLightWeightPage;
