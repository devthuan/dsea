import BoxInformationDetailToken from "../../components/assetDetail/BoxInformationDetailToken/BoxInformationDetailToken";
import BoxEntites from "../../components/assetDetail/BoxEntites/BoxEntites";
import BoxTokenNetFlow from "../../components/assetDetail/BoxTokenNetFlow/BoxTokenNetFlow";
import BoxFOT from "../../components/assetDetail/BoxFOT/BoxFOT";
import BoxSharkWallet from "../../components/assetDetail/BoxSharkWallet/BoxSharkWallet";
import BoxRealTimeTXS from "../../components/assetDetail/BoxRealTimeTXS/BoxRealTimeTXS";
const AssetDetail = () => {
  return (
    <div className={"w-full h-full "}>
      <div className="justify-start text-black text-2xl font-semibold font-['Inter']">
        Crypto Market Insights and Analytics
      </div>
      <div className="justify-center text-[#8a8a8a] text-sm font-normal font-['Inter'] mt-[10px]">
        TOP Cryptocurrencies Price List by Market Capitalization.
      </div>

      <div className="my-[30px] flex gap-2 ">
        <BoxInformationDetailToken />
      </div>
      
      <div className="mt-[30px] w-full h-full max-h-[584px] grid grid-cols-2 gap-4">
        <div className="w-full h-full ">
          <BoxEntites />
        </div>
        <div className="w-full h-full ">
          <BoxSharkWallet />
        </div>
      </div>

      <div className="mt-[30px] ">
        <BoxTokenNetFlow />
      </div>
      <div className="mt-[30px] ">
        <BoxRealTimeTXS />
      </div>
      <div className="mt-[30px] ">
        <BoxFOT />
      </div>
    </div>
  );
};

export default AssetDetail;
