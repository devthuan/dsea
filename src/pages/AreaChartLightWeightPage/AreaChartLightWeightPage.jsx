import AreaChartLightWeight from "../../components/AreaChartLightWeight/AreaChartLightWeight";
import CustomPieChart2 from "../../components/PieChart2/PieChart2";

const AreaChartLightWeightPage = () => {
  const data = [
    { time: "2024-03-01", value: 120 },
    { time: "2024-03-02", value: 125 },
    { time: "2024-03-03", value: 130 },
    { time: "2024-03-04", value: 128 },
    { time: "2024-03-05", value: 135 },
  ];
  return (
    <div className={"w-full h-full "}>
      <AreaChartLightWeight data={data} />
    </div>
  );
};

export default AreaChartLightWeightPage;
