import ButtonCustom from "../ButtonCustom/ButtonCustom";

const TabButtons = ({ tabs, activeTab, onTabClick, tabType = "type1" }) => {
  // Tạo một đối tượng chứa các kiểu tab khác nhau

  const tabTypes = {
    type1: (
      <div className="h-[26px] w-fit px-4 py-4  rounded-[40px] outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-start items-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`rounded-[20px] text-sm  font-['Inter'] transition-all ${
              activeTab === tab.id
                ? "text-white bg-black/90 px-3 py-1 font-semibold"
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
            variant={`${activeTab === tab.id ? "secondary" : ""}`}
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
            size="large"
            onClick={() => onTabClick(tab.id)}
            className={`${
              activeTab === tab.id ? "text-[#76E1DB] font-semibold" : "hover:text-black"
            }`}
            variant={`${activeTab === tab.id ? "primary" : "default"}`}
          />
        ))}
      </div>
    ),
  };

  return tabTypes[tabType];
};

export default TabButtons;
