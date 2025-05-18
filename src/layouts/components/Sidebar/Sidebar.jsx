import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { images } from "../../../assets";
import { NavLink } from "react-router";

const cx = classNames.bind(styles);

const Sidebar = () => {
  const [isAssetsOpen, setIsAssetsOpen] = useState(false);
  const [isDeepseaOpen, setIsDeepseaOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Dữ liệu menu
  const menuItems = [
    {
      url: "/",
      label: "Dashboard",
      icon: images.homeIcon,  
      isDropdown: false,
    },
    {
      url: "#",
      label: "Asset",
      icon: images.homeIcon,
      isDropdown: true,
      isOpen: isAssetsOpen,
      setIsOpen: setIsAssetsOpen,
      children: [
        {
          id: "Asset",
          label: "Asset",
          url: "/asset",
        },
      ],
    },
    {
      url: "#",
      label: "Deepsea",
      icon: images.homeIcon,
      isDropdown: true,
      isOpen: isDeepseaOpen,
      setIsOpen: setIsDeepseaOpen,
      children: [
        { id: "Deepsea", label: "Deepsea", url: "/deep-sea" },
        { id: "OrderHistory", label: "Order history", url: "/order-history" },
      ],
    },
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
    <div
      className={cx(
        "w-full h-full  relative flex flex-col  justify-start ",
        `h-screen  text-black transition-all duration-300 ${
          isOpen
            ? "w-52 items-start pl-[10px] bg-white"
            : "w-16 items-center bg-white/20"
        }`
      )}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="h-[108px] w-full flex justify-center items-center">
        <h1 className="text-[40px] font-bold">{isOpen ? "DeepSea" : "D"}</h1>
      </div>

      {/* group assets */}
      <div className="mt-[-20px]">
        <ul>
          {menuItems.map((item, index) => (
            <div key={index} >
              <SidebarItem item={item} isOpen={isOpen} />
             </div>
          ))}
        </ul>
      </div>

      {/* group setting */}
      <div className=" mt-[240px]">
        <ul>
          {menuItemSetting.map((item, index) => (
            <SidebarItem key={index} item={item} isOpen={isOpen} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const SidebarItem = ({ item, isOpen }) => {
  return (
    <li
      key={item.id}
      className="mt-[20px]"
      onMouseLeave={() => item.isDropdown && item.setIsOpen(false)}
    >
      {!item.isDropdown ? (
        <NavLink
          to={item.url}
          className={({ isActive }) =>
            cx(
              "flex gap-[12px] text-[20px] justify-start items-center cursor-pointer",
              {
                "text-[var(--primary)] font-bold": isActive,
              }
            )
          }
          // end
        >
          <div className="w-[36px] h-[36px] bg-white rounded-[50%] flex justify-center items-center">
            <img src={item.icon} alt="" />
          </div>
          {isOpen && <span>{item.label}</span>}
        </NavLink>
      ) : (
        <div
          className={cx(
            "flex gap-[12px] text-[20px] justify-start items-center cursor-pointer",
            {
              "text-[var(--primary)] font-bold": item.children.some(
                (child) => window.location.pathname === child.url
              ),
            }
          )}
          onClick={() => item.isDropdown && item.setIsOpen(!item.isOpen)}
        >
          <div className="w-[36px] h-[36px] bg-white rounded-[50%] flex justify-center items-center">
            <img src={item.icon} alt="" />
          </div>
          {isOpen && (
            <div className="flex items-center gap-[12px]">
              <span>{item.label}</span>
              {item.isDropdown && (
                <span>
                  <img
                    className={`w-[22px] h-auto transition-transform duration-300 ${
                      item.isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    src={images.downArrowIcon}
                    alt=""
                  />
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {item.isDropdown && item.isOpen && (
        <ul className="pl-[30px] mt-[12px] space-y-[8px]">
          {item.children.map((child, index) => (
            <NavLink
              key={index}
              to={child.url}
              className={({ isActive }) =>
                cx("text-[18px] transition-all cursor-pointer block", {
                  "text-[var(--primary)] font-bold": isActive,
                  "hover:text-[var(--primary)]": !isActive,
                })
              }
              end
            >
              <li>{child.label}</li>
            </NavLink>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
