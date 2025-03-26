import { images } from "../../assets";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

const ShakeAI = () => {
  return (
    <div className="w-full h-full ">
      <div className="justify-start text-black text-2xl font-semibold font-['Inter']">
        Crypto Market Insights and Analytics
      </div>
      <div className="justify-center text-[#8a8a8a] text-sm font-normal font-['Inter'] mt-[10px]">
        TOP Cryptocurrencies Price List by Market Capitalization.
      </div>

      <div className="mt-[30px] w-full h-full bg-white">
        <div className=" w-full h-full grid grid-cols-3  flex-col items-center">
          <div className="w-full h-full  px-[32px] gap-y-[20px] py[45px] col-span-1 border-r-[1px] border-black flex flex-col ">
            <ButtonCustom
              text={"+ NEW CHAT"}
              className={"bg-[#76E1DB]  mt-[30px]"}
            />
            <ButtonCustom text={"NEW CHAT"} />
            <ButtonCustom text={"NEW CHAT"} />
          </div>
          <div className="w-full col-span-2 min-h-[72vh] relative  ">
            <div className="max-w-[400px] absolute bottom-[5rem] right-[2.7rem]">
              <div className=" mb-[30px] p-6 bg-[#eaeaea] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl inline-flex flex-col justify-end items-end gap-3">
                <div className="opacity-60 justify-center text-black text-base font-normal font-['Inter']">
                  What are the $SOL shark activities?
                </div>
                <div className="w-full h-0 opacity-60 outline outline-1 outline-offset-[-0.50px] outline-black" />
                <div className="opacity-60 justify-center text-black text-base font-normal font-['Inter']">
                  How has the memecoins' performance been over the past 30 days?
                </div>
                <div className="w-full h-0 opacity-60 outline outline-1 outline-offset-[-0.50px] outline-black" />
                <div className="opacity-60 justify-center text-black text-base font-normal font-['Inter']">
                  What are the top 10 shark wallets on $ETH?
                </div>
              </div>
            </div>

            <div className="w-full absolute bottom-0 p-[40px]  ">
              <div className="relative">
                <input
                  placeholder="Search for blockchain information..."
                  className=" px-[32px] w-full h-[60px] rounded-[32px] bg-[#D9D9D9]"
                  type="text"
                />
                <div className="absolute rounded-[32px] right-[4rem] top-[50%] translate-x-[50%] translate-y-[-50%] w-[104px] h-[50px] bg-[#8A8A8A]"></div>
                <img
                  className="absolute right-[3.4rem] top-[50%] translate-x-[50%] translate-y-[-50%]"
                  src={images.sendIcon}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShakeAI;
