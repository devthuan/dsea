import classNames from "classnames/bind";
import styles from "./BarChartPage.module.scss";

import BarChart from "../../components/charts/BarChart/BarChart";

const cx = classNames.bind(styles);
const BarChartPage = () => {
  return (
    <div className={cx("w-full h-full ")}>
      <BarChart />
    </div>
  );
};

export default BarChartPage;
