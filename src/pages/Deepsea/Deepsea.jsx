import { useState } from "react";
import BoxTableToken from "./components/BoxTableToken/BoxTableToken";
import TabButtons from "../../components/TabButtons/TabButtons";
import BoxChartHolding from "./components/BoxChartHolding/BoxChartHolding";

const Deepsea = () => {
  return (
    <div className={"w-full h-full "}>
      <div className="justify-start text-black text-2xl font-semibold font-['Inter']">
        Crypto Market Insights and Analytics
      </div>
      <div className="justify-center text-[#8a8a8a] text-sm font-normal font-['Inter'] mt-[10px]">
        TOP Cryptocurrencies Price List by Market Capitalization.
      </div>

      <div className="w-full mt-6">
        <div className="w-full grid grid-cols-3 bg-white rounded-[32px] gap-4">
          <div className="col-span-1">
            <BoxTableToken />
          </div>
          <div className="col-span-2 ">
            <BoxChartHolding />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deepsea;
