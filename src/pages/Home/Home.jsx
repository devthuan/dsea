import Button from "../../components/ButtonCustom/ButtonCustom";
import BoxNotification from "../../components/BoxNotification/BoxNotification";
import BarChart from "../../components/BarChart/BarChart";
import InflowOutflowChart from "../../components/InFlowOutFlow/InFlowOutFlow";
import NetFlowChart from "../../components/NetFlowChart/NetFlowChart";
import CustomPieChart from "../../components/PieChart/PieChart";
import BarChartRechart from "../../components/BarChartRechart/BarChartRechart";

const Home = () => {
  return (
    <div className={"w-full h-full "}>
      <div className="">
        <BarChartRechart />
        <div className="w-full h-full border-[1px] border-black rounded-[32px]"></div>
      </div>
    </div>
  );
};

export default Home;
