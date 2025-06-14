import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import { useState } from "react";
import Sidebar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
  return(
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
          "flex flex-col  transition-all duration-300 ",
          "ml-[4rem] w-[calc(100%-4rem)]"
        )}
      >
        {/* Header */}
        <div className="  h-[80px] max-h-[80px]   w-[calc(100%)]  ">
          <Header />
        </div>

        {/* Main Content */}
        <div className="w-full flex-1 p-[20px] ">
          <div className="w-full max-w-[1980px] mx-auto">{children}</div>
        </div>
      </div>
    </div>
  </div>)
};

export default DefaultLayout;
