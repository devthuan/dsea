import { images } from "../../assets";
import InFlowOutFlow from "../../components/charts/InFlowOutFlow/InFlowOutFlow";
import TreeMapChart from "../../components/charts/TreeMapChart/TreeMapChart";
import BoxNotification from "../Home/components/BoxNotification/BoxNotification";
import BoxBtcNetFlow from "../Home/components/BoxBtcNetFlow/BoxBtcNetFlow";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import BoxNarrativePerformance from "../Home/components/BoxNarrativePerformance/BoxNarrativePerformance";
import BoxHeapMap from "../Home/components/BoxHeapMap/BoxHeapMap";
import BoxPerform from "../Home/components/BoxPerform/BoxPerform";
const Home = () => {
  return (
    <div className={"w-full h-full "}>
      {/* <div className="px-6 py-2 bg-[#76e1db] rounded-[60px] inline-flex justify-center items-center gap-1">
        <div className="justify-start text-[#0c2c40] text-lg font-bold font-['Inter']">
          My Dashboard
        </div>
      </div>

      <div className="w-full mt-[30px] flex justify-between items-center ">
        <div className="inline-flex justify-start items-center gap-6">
          <div className="justify-start text-black text-2xl font-semibold font-['Inter']">
            Signal
          </div>
          <div className="px-4 py-2 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-1">
            <div className="justify-start text-black text-xs font-normal font-['Inter']">
              Create Aleart
            </div>
            <div className="w-4 h-4 bg-[#d9d9d9] rounded-full" />
          </div>
        </div>

        <div className="w-[268px] flex justify-center gap-4">
          <ButtonCustom text={"Create Alert"} size="medium" />
          <ButtonCustom
            text={"Create Alert"}
            size="medium"
            iconRight={images.backArrowIcon}
          />
        </div>
      </div> */}

      {/* <div className="my-[30px] gap-2 ">
        <BoxNotification
          type={"PEPE"}
          time={"6h ago"}
          user={"Lorem Ipsum"}
          content={
            "is simply dummy text of the printing and typesetting industry"
          }
        />
      </div> */}

      <div className="mt-[30px] w-full h-full max-h-[660px] grid grid-cols-2 gap-4">
        <div className="">
          <BoxBtcNetFlow />
        </div>
        <div className="">
          <BoxBtcNetFlow />
        </div>
      </div>

      <div className="mt-[30px] w-full h-full rounded-[32px] p-[24px] bg-white/50 shadow-lg gap-4">
        <BoxNarrativePerformance />
      </div>

      <div className="mt-[30px] grid grid-cols-2 gap-4">
        <div className="">
          <BoxHeapMap />
        </div>
        <div className="">
          <BoxPerform />
        </div>
      </div>
    </div>
  );
};

export default Home;
