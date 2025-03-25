import BarChart from "../components/charts/BarChart/BarChart";
import BarChartRechart from "../components/charts/BarChartRechart/BarChartRechart";
import CandlestickVolume from "../components/charts/CandlestickVolume/CandlestickVolume";
import CandlestickRealTime from "../components/charts/CandlestickVolume/CandlestickVolume";
import LineChart from "../components/charts/LineChartLightWeight/LineChartLightWeight";
import NetFlowChart from "../components/charts/NetFlowChart/NetFlowChart";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import BarChartReChartPage from "../pages/BarChartReChartPage/BarChartReChartPage";
import CandlestickPage from "../pages/CandlestickPage/CandlestickPage";
import Home from "../pages/Home/Home";
import LineChartLightWeightPage from "../pages/LineChartLightWeightPage/LineChartLightWeightPage";
import LineChartReChartPage from "../pages/LineChartReChartPage/LineChartReChartPage";
import NetFlowLightWeightPage from "../pages/NetFlowLightWeightPage/NetFlowLightWeightPage";
import PieChartNeedlePage from "../pages/PieChartNeedlePage/PieChartNeedlePage";
import PieChartPage from "../pages/PieChartPage/PieChartPage";
import TreeMap from "../pages/TreeMap/TreeMap";
import AreaChartLightWeightPage from "../pages/AreaChartLightWeightPage/AreaChartLightWeightPage";
import PieChartPage2 from "../pages/PieChartPage2/PieChartPage2";
import NetFlowReChartPage from "../pages/NetFlowReChartPage/NetFlowReChartPage";
import CandlestickVolumePage from "../pages/CandlestickVolumePage/CandlestickVolumePage";
import Test from "../pages/Test/Test";
import TopGainer from "../pages/TopGainer/TopGainer";
import MmActive from "../pages/MmActive/MmActive";
import Deepsea from "../pages/Deepsea/Deepsea";

export const publicRoutes = [
  { path: "/", component: Home, layout: DashboardLayout },
  { path: "/top-gainer", component: TopGainer, layout: DashboardLayout },
  { path: "/mm-active", component: MmActive, layout: DashboardLayout },
  { path: "/deep-sea", component: Deepsea, layout: DashboardLayout },
  { path: "/test", component: Test, layout: DashboardLayout },
  {
    path: "/barChart-rechart",
    component: BarChartReChartPage,
    layout: DashboardLayout,
  },

  {
    path: "/barChart-lightweight",
    component: BarChart,
    layout: DashboardLayout,
  },

  {
    path: "/netFlow-rechart",
    component: NetFlowReChartPage,
    layout: DashboardLayout,
  },
  {
    path: "/netFlow-lightWeight",
    component: NetFlowLightWeightPage,
    layout: DashboardLayout,
  },
  {
    path: "/pieChart-rechart-1",
    component: PieChartPage,
    layout: DashboardLayout,
  },
  {
    path: "/pieChart-rechart-2",
    component: PieChartPage2,
    layout: DashboardLayout,
  },
  {
    path: "/pieChart-rechart-needle",
    component: PieChartNeedlePage,
    layout: DashboardLayout,
  },
  {
    path: "/treeMapChart-rechart",
    component: TreeMap,
    layout: DashboardLayout,
  },

  {
    path: "/candleStrick",
    component: CandlestickVolumePage,
    layout: DashboardLayout,
  },
  {
    path: "/candle-lightWeight-realTime",
    component: CandlestickPage,
    layout: DashboardLayout,
  },

  {
    path: "/lineChart-lightWeight",
    component: LineChartLightWeightPage,
    layout: DashboardLayout,
  },
  {
    path: "/lineChart-rechart",
    component: LineChartReChartPage,
    layout: DashboardLayout,
  },
  {
    path: "/areaChart-lightWeight",
    component: AreaChartLightWeightPage,
    layout: DashboardLayout,
  },
];
