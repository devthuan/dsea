import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { images } from "../../../assets";
import ItemMenuSidebar from "../../../components/ItemMenuSidebar/ItemMenuSidebar";

const cx = classNames.bind(styles);

const Sidebar = () => {
  const [isAssetsOpen, setIsAssetsOpen] = useState(false);
  const [isDeepseaOpen, setIsDeepseaOpen] = useState(false);

  // Dữ liệu menu
  const menuItems = [
    // {
    //   url: "/dashboard",
    //   label: "Dashboard",
    //   icon: images.homeIcon,
    //   isDropdown: false,
    // },
    {
      url: "/assets",
      label: "Chart",
      icon: images.homeIcon,
      isDropdown: true,
      isOpen: isAssetsOpen,
      setIsOpen: setIsAssetsOpen,
      children: [
        {
          id: "bar chart",
          label: "barChart rechart",
          url: "/barChart-rechart",
        },
        {
          id: "bar chart",
          label: "barChart lightweight",
          url: "/barChart-lightweight",
        },
        { id: "bar chart", label: "netFlow rechart", url: "/netFlow-rechart" },
        {
          id: "bar chart",
          label: "netFlow lightWeight",
          url: "/netFlow-lightWeight",
        },
        {
          id: "bar chart",
          label: "pieChart rechart-1",
          url: "/pieChart-rechart-1",
        },
        {
          id: "bar chart",
          label: "pieChart rechart-2",
          url: "/pieChart-rechart-2",
        },
        {
          id: "bar chart",
          label: "pieChart rechart-needle",
          url: "/pieChart-rechart-needle",
        },
        {
          id: "bar chart",
          label: "treeMapChart rechart",
          url: "/treeMapChart-rechart",
        },
        { id: "bar chart", label: "candleStrick ", url: "/candleStrick" },
        {
          id: "bar chart",
          label: "candleStrick realTime",
          url: "/candle-lightWeight-realTime",
        },
        {
          id: "bar chart",
          label: "lineChart lightWeight",
          url: "/lineChart-lightWeight",
        },
        {
          id: "bar chart",
          label: "lineChart rechart",
          url: "/lineChart-rechart",
        },
        {
          id: "bar chart",
          label: "areaChart lightWeight",
          url: "/areaChart-lightWeight",
        },
      ],
    },
    // {
    //   url: "/deepsea",
    //   label: "Deepsea",
    //   icon: images.homeIcon,
    //   isDropdown: true,
    //   isOpen: isDeepseaOpen,
    //   setIsOpen: setIsDeepseaOpen,
    //   children: [
    //     { id: "crypto", label: "Crypto" },
    //     { id: "stocks", label: "Stocks" },
    //     { id: "forex", label: "Forex" },
    //   ],
    // },
  ];

  const menuItemSetting = [
    {
      url: "/socket",
      label: "Socket",
      icon: images.settingIcon,
      isDropdown: false,
    },
    {
      url: "/support",
      label: "Support",
      icon: images.toolIcon,
      isDropdown: false,
    },
    {
      url: "/logout",
      label: "Logout",
      icon: images.logoutIcon,
      isDropdown: false,
    },
  ];

  return (
    <div className={cx("w-full h-full pl-[40px] relative")}>
      <div className="h-[108px] w-full flex justify-start items-center">
        <h1 className="text-[40px] font-bold">DeepSea</h1>
      </div>

      <div className="mt-[39px]">
        <ul>
          {menuItems.map((item, index) => (
            <ItemMenuSidebar key={index} item={item} />
          ))}
        </ul>
      </div>

      {/* group setting */}
      <div className=" mt-[240px]">
        <ul>
          {menuItemSetting.map((item, index) => (
            <ItemMenuSidebar key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
