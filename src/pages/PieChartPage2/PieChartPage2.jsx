import TreeMapChart from "../../components/charts/TreeMapChart/TreeMapChart";
import InflowOutflowChart from "../../components/charts/InFlowOutFlow/InFlowOutFlow";
import LineChart from "../../components/charts/LineChartLightWeight/LineChartLightWeight";
import CustomPieChart from "../../components/charts/PieChart/PieChart";
import CustomPieChart2 from "../../components/charts/PieChart2/PieChart2";

const PieChartPage2 = () => {
  const sampleData = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
  ];
  return (
    <div className={"w-full h-full "}>
      <CustomPieChart2 data={sampleData} />
    </div>
  );
};

export default PieChartPage2;
