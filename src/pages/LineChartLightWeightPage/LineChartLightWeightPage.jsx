import LineChartLightWeight from "../../components/charts/LineChartLightWeight/LineChartLightWeight";

const LineChartLightWeightPage = () => {
  const dataExample = [
    { time: "2024-03-01", value: 45000 },
    { time: "2024-03-02", value: 46000 },
    { time: "2024-03-03", value: 45500 },
    { time: "2024-03-04", value: 47000 },
  ];
  return (
    <div className={"w-full h-full "}>
      <LineChartLightWeight data={dataExample} />
    </div>
  );
};

export default LineChartLightWeightPage;
