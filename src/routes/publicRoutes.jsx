// import BarChart from "../components/charts/BarChart/BarChart";
// import BarChartRechart from "../components/charts/BarChartRechart/BarChartRechart";
// import CandlestickVolume from "../components/charts/CandlestickVolume/CandlestickVolume";
// import CandlestickRealTime from "../components/charts/CandlestickVolume/CandlestickVolume";
// import LineChart from "../components/charts/LineChartLightWeight/LineChartLightWeight";
// import NetFlowChart from "../components/charts/NetFlowChart/NetFlowChart";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
// import BarChartReChartPage from "../pages/BarChartReChartPage/BarChartReChartPage";
// import CandlestickPage from "../pages/CandlestickPage/CandlestickPage";
// import LineChartLightWeightPage from "../pages/LineChartLightWeightPage/LineChartLightWeightPage";
// import LineChartReChartPage from "../pages/LineChartReChartPage/LineChartReChartPage";
// import NetFlowLightWeightPage from "../pages/NetFlowLightWeightPage/NetFlowLightWeightPage";
// import PieChartNeedlePage from "../pages/PieChartNeedlePage/PieChartNeedlePage";
// import PieChartPage from "../pages/PieChartPage/PieChartPage";
// import TreeMap from "../pages/TreeMap/TreeMap";
// import AreaChartLightWeightPage from "../pages/AreaChartLightWeightPage/AreaChartLightWeightPage";
// import PieChartPage2 from "../pages/PieChartPage2/PieChartPage2";
// import NetFlowReChartPage from "../pages/NetFlowReChartPage/NetFlowReChartPage";
// import CandlestickVolumePage from "../pages/CandlestickVolumePage/CandlestickVolumePage";
import Test from "../pages/Test/Test";
import Deepsea from "../pages/Deepsea/Deepsea";
import OrderHistory from "../pages/OrderHistory/OrderHistory";
import ShakeAI from "../pages/SharkAI/ShakeAI";
import Dashboard from "../pages/Dashboard/Dashboard";
import Asset from "../pages/Asset/Asset";
import AssetDetail from "../pages/AssetDetail/AssetDetail";
// import CandlestickChart from "../components/charts/CandlestickChart/CandlestickChart";

export const publicRoutes = [
  { path: "/", component: Dashboard, layout: DashboardLayout },
  { path: "/asset", component: Asset, layout: DashboardLayout },
  { path: "/asset/solona", component: AssetDetail, layout: DashboardLayout },
  { path: "/deep-sea", component: Deepsea, layout: DashboardLayout },
  { path: "/order-history", component: OrderHistory, layout: DashboardLayout },
  { path: "/shark-ai", component: ShakeAI, layout: DashboardLayout },
  { path: "/test", component: Test, layout: DashboardLayout },
  // {
  //   path: "/barChart-rechart",
  //   component: BarChartReChartPage,
  //   layout: DashboardLayout,
  // },

  // {
  //   path: "/barChart-lightweight",
  //   component: BarChart,
  //   layout: DashboardLayout,
  // },

  // {
  //   path: "/netFlow-rechart",
  //   component: NetFlowReChartPage,
  //   layout: DashboardLayout,
  // },
  // {
  //   path: "/netFlow-lightWeight",
  //   component: NetFlowLightWeightPage,
  //   layout: DashboardLayout,
  // },
  // {
  //   path: "/pieChart-rechart-1",
  //   component: PieChartPage,
  //   layout: DashboardLayout,
  // },
  // {
  //   path: "/pieChart-rechart-2",
  //   component: PieChartPage2,
  //   layout: DashboardLayout,
  // },
  // {
  //   path: "/pieChart-rechart-needle",
  //   component: PieChartNeedlePage,
  //   layout: DashboardLayout,
  // },
  // {
  //   path: "/treeMapChart-rechart",
  //   component: TreeMap,
  //   layout: DashboardLayout,
  // },

  // {
  //   path: "/candleStrick",
  //   component: CandlestickPage,
  //   layout: DashboardLayout,
  // },
  // {
  //   path: "/candle-lightWeight-realTime",
  //   component: CandlestickPage,
  //   layout: DashboardLayout,
  // },

  // {
  //   path: "/lineChart-lightWeight",
  //   component: LineChartLightWeightPage,
  //   layout: DashboardLayout,
  // },
  // {
  //   path: "/lineChart-rechart",
  //   component: LineChartReChartPage,
  //   layout: DashboardLayout,
  // },
  // {
  //   path: "/areaChart-lightWeight",
  //   component: AreaChartLightWeightPage,
  //   layout: DashboardLayout,
  // },
];
