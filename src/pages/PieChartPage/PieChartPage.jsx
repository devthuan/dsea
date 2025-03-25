import TreeMapChart from "../../components/charts/TreeMapChart/TreeMapChart";
import InflowOutflowChart from "../../components/charts/InFlowOutFlow/InFlowOutFlow";
import LineChart from "../../components/charts/LineChartLightWeight/LineChartLightWeight";
import CustomPieChart from "../../components/charts/PieChart/PieChart";

const PieChartPage = () => {
    const sampleData = [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
    ];

  return (
    <div className={"w-full h-full "}>
      <CustomPieChart data={sampleData} />
    </div>
  );
};

export default PieChartPage;
