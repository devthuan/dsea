import CandlestickChart from "../../components/CandlestickChart/CandlestickChart";
import useBinanceSocket from "../../hooks/useBinanceSocket";

const CandlestickPage = () => {
  const btcData = useBinanceSocket("btcusdt", 1);
  console.log(btcData);
  return (
    <div className={"w-full h-full "}>
      <CandlestickChart data={btcData} height={600} />
    </div>
  );
};

export default CandlestickPage;
