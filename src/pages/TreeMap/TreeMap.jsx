import TreeMapChart from "../../components/charts/TreeMapChart/TreeMapChart";
import InflowOutflowChart from "../../components/charts/InFlowOutFlow/InFlowOutFlow";
import LineChart from "../../components/charts/LineChartLightWeight/LineChartLightWeight";
import useTickerWS from "../../hooks/useTickerWS";
import { useEffect } from "react";

const TreeMap = () => {
  const dataTop10Token = useTickerWS();

  useEffect(() => {
    console.log(dataTop10Token);
  }, []);

  return (
    <div className={"w-full h-full "}>
      <TreeMapChart data={dataTop10Token} />
    </div>
  );
};

export default TreeMap;
