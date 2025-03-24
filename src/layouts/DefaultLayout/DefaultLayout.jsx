import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
  return <div className={cx("w-full h-full")}>{children}</div>;
};

export default DefaultLayout;
