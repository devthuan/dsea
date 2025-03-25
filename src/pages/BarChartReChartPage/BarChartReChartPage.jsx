import BarChartRechart from "../../components/charts/BarChartRechart/BarChartRechart";

const BarChartReChartPage = () => {
  const data = [
    { name: "Page A", uv: 4000 },
    { name: "Page B", uv: 3000 },
    { name: "Page C", uv: 2000 },
    { name: "Page D", uv: 2780 },
    { name: "Page E", uv: 1890 },
    { name: "Page F", uv: 2390 },
    { name: "Page G", uv: 3490 },
  ];

  return (
    <div className={"w-full h-full "}>
      <BarChartRechart data={data} dataKey={"uv"} />
    </div>
  );
};

export default BarChartReChartPage;
