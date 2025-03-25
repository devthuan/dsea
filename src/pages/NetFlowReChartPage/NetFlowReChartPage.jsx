import NetFlowChart from "../../components/charts/NetFlowChart/NetFlowChart";

const NetFlowReChartPage = () => {
  const btcData = [
    { name: "Jan", inflow: 32000, outflow: 28000, price: 42000 },
    { name: "Feb", inflow: 35000, outflow: 37000, price: 45000 },
    { name: "Mar", inflow: 40000, outflow: 39000, price: 47000 },
    { name: "Apr", inflow: 42000, outflow: 45000, price: 48000 },
    { name: "May", inflow: 46000, outflow: 43000, price: 50000 },
    { name: "Jun", inflow: 50000, outflow: 52000, price: 51000 },
    { name: "Jul", inflow: 54000, outflow: 51000, price: 53000 },
    { name: "Aug", inflow: 58000, outflow: 60000, price: 55000 },
    { name: "Sep", inflow: 62000, outflow: 59000, price: 57000 },
    { name: "Oct", inflow: 66000, outflow: 68000, price: 59000 },
    { name: "Nov", inflow: 70000, outflow: 72000, price: 61000 },
    { name: "Dec", inflow: 75000, outflow: 73000, price: 63000 },
  ];
  return (
    <div className={"w-full h-full "}>
      <NetFlowChart data={btcData} />
    </div>
  );
};

export default NetFlowReChartPage;
