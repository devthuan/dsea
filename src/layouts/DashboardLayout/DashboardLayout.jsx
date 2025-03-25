import classNames from "classnames/bind";
import styles from "./DashboardLayout.module.scss";
import Sidebar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";
import { useState } from "react";

const cx = classNames.bind(styles);
const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="flex w-full h-screen relative">
        {/* Sidebar */}
        <div
          className={cx(
            " group h-full fixed z-10 transition-all duration-300 ",
            `
            ${isOpen ? "w-64" : "w-16"}
            `
          )}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Sidebar />
        </div>

        {/* Content */}
        <div
          className={cx(
            "flex flex-col flex-1 transition-all duration-300 h-screen  z-1",
            "ml-[4rem] w-[calc(100%-4rem)]"
          )}
        >
          {/* Header */}
          <div className="  h-[80px] max-h-[80px] fixed z-1 w-[calc(100%-4rem)]  ">
            <Header />
          </div>

          {/* Main Content */}
          <div className="w-full flex-1 p-[30px] mt-[80px] overflow-y-auto">
            <div className="w-full max-w-[1980px] mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
