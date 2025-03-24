import classNames from "classnames/bind";
import styles from "./DashboardLayout.module.scss";
import Sidebar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";

const cx = classNames.bind(styles);
const DashboardLayout = ({ children }) => {
  return (
    <div className={cx("w-full h-full ")}>
      <div className={cx("flex w-full h-screen ")}>
        {/* Sidebar */}
        <div className="w-full max-w-[320px] h-full fixed bg-white z-10  overflow-y-auto border-r-[1px] border-black">
          <Sidebar />
        </div>

        <div className="flex flex-col flex-1 ml-[320px] h-screen">
          {/* Header */}
          <div className="h-[108px] bg-white fixed w-[calc(100%-320px)] z-10 border-b-[1px] border-black">
            <Header />
          </div>
          {/* Content */}
          <div className="w-full   flex-1 p-[30px] mt-[108px] overflow-y-auto">
            <div className="w-full max-w-[1980px] mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
