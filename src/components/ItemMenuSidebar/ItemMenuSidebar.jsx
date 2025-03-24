import classNames from "classnames/bind";
import styles from "./ItemMenuSidebar.module.scss";
import { images } from "../../assets";
import { Link, NavLink } from "react-router";

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);
const ItemMenuSidebar = ({ item }) => {
  return (
    <li key={item.id} className="mt-[32px] ">
      <div
        className="flex gap-[12px] text-[28px] justify-start items-center cursor-pointer"
        onClick={() => item.isDropdown && item.setIsOpen(!item.isOpen)}
      >
        <div className="w-[36px] h-[36px] bg-[var(--primary)] rounded-[50%] flex justify-center items-center">
          <img src={item.icon} alt="" />
        </div>

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
      </div>

      {item.isDropdown && item.isOpen && (
        <ul className="pl-[10px] mt-[12px] space-y-[8px]">
          {item.children.map((child, index) => (
            <NavLink
              key={index}
              to={child.url}
              className={({ isActive }) =>
                `text-[24px] transition-all cursor-pointer ${
                  isActive
                    ? "text-[var(--primary)] font-bold"
                    : "hover:text-[var(--primary)]"
                }`
              }
            >
              <li>{child.label}</li>
            </NavLink>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ItemMenuSidebar;
