

import Test from "../pages/Test/Test";
import Deepsea from "../pages/Deepsea/Deepsea";
import OrderHistory from "../pages/OrderHistory/OrderHistory";
import ShakeAI from "../pages/SharkAI/ShakeAI";
import Dashboard from "../pages/Dashboard/Dashboard";
import Asset from "../pages/Asset/Asset";
import AssetDetail from "../pages/AssetDetail/AssetDetail";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";

export const publicRoutes = [
  { path: "/", component: Dashboard, layout: DefaultLayout },
  { path: "/asset", component: Asset, layout: DefaultLayout },
  { path: "/asset/solona", component: AssetDetail, layout: DefaultLayout },
  { path: "/deep-sea", component: Deepsea, layout: DefaultLayout },
  { path: "/order-history", component: OrderHistory, layout: DefaultLayout },
  { path: "/shark-ai", component: ShakeAI, layout: DefaultLayout },
  { path: "/test", component: Test, layout: DefaultLayout },
  
];
