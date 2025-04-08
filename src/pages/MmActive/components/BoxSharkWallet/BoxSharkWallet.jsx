import { images } from "../../../../assets";

const data = [
  {
    name: "Bitcoin : BTC (0x9877) ",
    price: "$100,86B",
    change: 3.96,
    netInflow: "+3.96%",
    icon: images.arrowDownIcon,
  },
  {
    name: "Ethereum : ETH (0x9877) ",
    price: "$50,42B",
    change: 2.51,
    netInflow: "+2.51%",
    icon: images.arrowUpIcon,
  },
];

const coloums = ["% ví shark đang có lời", "value", "profit", "USD"];

const BoxSharkWallet = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full bg-white rounded-[32px] p-[24px] flex flex-col gap-y-[16px]">
        <div className="w-full h-full">
          <h1 className="mb-[26px] justify-start text-black text-2xl font-semibold font-['Inter']">
            Shark's wallet
          </h1>
          <table className="w-full h-auto border-none">
            <thead>
              <tr className="border-b-[1px] border-black">
                {coloums?.map((col, index) => {
                  return (
                    <th key={index} className="p-2 text-left">
                      {col}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((coin, index) => (
                <tr key={index}>
                  <td className="p-2 flex gap-3 items-center h-full">
                    <div className="w-[24px] h-[24px] bg-black/20 rounded-lg"></div>
                    <div>{coin.name}</div>
                  </td>
                  <td className="p-2">{coin.price}</td>
                  <td className="p-2 flex gap-2">
                    <img src={coin.icon} alt="icon" />
                    <span>{coin.change}%</span>
                  </td>
                  <td className="p-2">{coin.netInflow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BoxSharkWallet;
