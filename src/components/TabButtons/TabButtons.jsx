import { useEffect, useRef, useState } from "react";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

const TabButtons = ({ tabs, activeTab, onTabClick, tabType = "type1" }) => {
  // Tạo một đối tượng chứa các kiểu tab khác nhau

  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeButton = container.querySelector(".active-tab");

    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setIndicatorStyle({
        left: offsetLeft - 4,
        width: offsetWidth + 9,
      });
    }
  }, [activeTab, tabs]);


  const tabTypes = {
    type1: (
      <div
        ref={containerRef}
        className="relative h-[26px] w-fit py-4 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-start items-center px-1"
      >
        {/* Nền chuyển động */}
        <div
          className="absolute h-8 bg-black/80 rounded-[20px] transition-all duration-300"
          style={{
            ...indicatorStyle,
          }}
        />

        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative z-10 rounded-[20px] text-xs w-14 h-8 font-['Inter'] transition-all ${
              activeTab === tab.id
                ? "text-white font-semibold active-tab "
                : "hover:text-black"
            }`}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    ),
    type1_1: (
      <div
        ref={containerRef}
        className="relative h-[26px] w-fit py-4 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-start items-center px-1"
      >
        {/* Nền chuyển động */}
        <div
          className="absolute h-8 bg-black/80 rounded-[20px] transition-all duration-300"
          style={{
            ...indicatorStyle,
          }}
        />

        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative z-10 rounded-[20px] text-xs w-12 h-8 font-['Inter'] transition-all ${
              activeTab === tab.id
                ? "text-white font-semibold active-tab "
                : "hover:text-black"
            }`}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    ),

    type2: (
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <ButtonCustom
            key={tab.id}
            text={tab.label}
            onClick={() => onTabClick(tab.id)}
            size="small"
            className={`  font-['Inter'] transition-all  ${
              activeTab === tab.id
                ? "text-[#76E1DB]  font-bold"
                : "hover:text-black"
            }`}
            variant={`${activeTab === tab.id ? "primary" : "default"}`}
          />
        ))}
      </div>
    ),

    type3: (
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <ButtonCustom
            key={tab.id}
            text={tab.label}
            size="small"
            onClick={() => onTabClick(tab.id)}
            className={`${
              activeTab === tab.id
                ? "text-[#76e1db] font-bold"
                : "hover:text-black"
            }`}
            variant={`${activeTab === tab.id ? "primary" : ""}`}
          />
        ))}
      </div>
    ),
    type4: (
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <ButtonCustom
            key={tab.id}
            text={tab.label}
            size="medium"
            onClick={() => onTabClick(tab.id)}
            variant={`${activeTab === tab.id ? "primary" : "default"}`}
          />
        ))}
      </div>
    ),
    type5: (
      <div
        ref={containerRef}
        className="relative h-auto w-auto rounded-[40px] outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-start items-center px-1"
      >
        {/* Nền chuyển động */}
        <div
          className="absolute h-full bg-black/80 rounded-[20px] transition-all duration-300"
          style={{
            ...indicatorStyle,
          }}
        />

        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative z-10 rounded-[20px] text-md px-4 py-2 w-auto h-auto font-['Inter'] transition-all ${
              activeTab === tab.id
                ? "text-white font-semibold active-tab "
                : "hover:text-black"
            }`}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    ),
  };

  return tabTypes[tabType];
};

export default TabButtons;
