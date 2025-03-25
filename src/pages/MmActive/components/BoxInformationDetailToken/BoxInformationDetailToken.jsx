
const BoxInformationDetailToken = () => {
  return (
    <div className="w-full h-full bg-white rounded-[32px] p-[24px] flex flex-col gap-y-[16px]">
      <div className="grid grid-cols-4 gap-3">
        <div className="border-r-[1px] border-black">
          <div className="inline-flex justify-start items-center gap-6">
            <div className="w-20 h-20 bg-[#d9d9d9] rounded-full flex justify-center items-center">
              icon
            </div>
            <div className="w-[118px] inline-flex flex-col justify-start items-start gap-1">
              <h1 className="self-stretch justify-center text-black text-4xl font-semibold font-['Inter']">
                Solana
              </h1>
              <p className="w-full self-stretch justify-center text-black text-2xl font-light font-['Inter']">
                (SOL)
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center text-black text-[42px] font-semibold font-['Inter']">
            $215.88
          </div>
        </div>

        <div className="w-full h-full border-r-[1px] border-black grid grid-cols-3 grid-rows-3 gap-4">
          <div className="">
            <div className="justify-center text-black text-sm font-semibold font-['Inter']">
              24h
            </div>
            <div className="justify-center text-black text-sm font-semibold font-['Inter']">
              $58.3B
            </div>
          </div>
          <div className="">
            <div className="justify-center text-black text-sm font-semibold font-['Inter']">
              24h
            </div>
            <div className="justify-center text-black text-sm font-semibold font-['Inter']">
              $58.3B
            </div>
          </div>
        </div>
        <div className="w-full h-full border-r-[1px] border-black grid grid-cols-1 grid-rows-3 gap-4 px-[20px]">
          <div className="w-full flex justify-between">
            <div className="justify-start text-black text-xs font-semibold font-['Poppins']">
              Percentage of total supply
              <br />
              being held by whales
            </div>
            <div className="justify-start text-[#52fc96] text-base font-normal font-['Poppins']">
              +43.02%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxInformationDetailToken;
