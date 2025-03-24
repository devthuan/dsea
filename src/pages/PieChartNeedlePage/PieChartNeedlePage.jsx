import PieChartNeedle from "../../components/PieChartNeedle/PieChartNeedle";

const PieChartNeedlePage = () => {
  const data = [
    { name: "A", value: 80, color: "#ff0000" },
    { name: "B", value: 45, color: "#00ff00" },
    { name: "C", value: 25, color: "#0000ff" },
  ];
  return (
    <div className={"w-full h-full "}>
      <PieChartNeedle data={data} dataKey={"value"} />
    </div>
  );
};

export default PieChartNeedlePage;
