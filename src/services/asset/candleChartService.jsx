import { fetchDataSmartContract, listenToEventSmartContract } from "../smartContractService";
import candleChartContract from "../../contracts/candleChartContract.json";



let dataContract = candleChartContract["candleContract"];
export const candleServices =  {
  
  fetchData: async () => {
   let nowDate = new Date();
    let nowTimestamp = Math.floor(nowDate.getTime() / 1000); // convert to seconds
    let day30Ago = nowTimestamp - 30 * 24 * 60 * 60; // 30 days ago in seconds
    let week30Ago = nowTimestamp - 30 * 24 * 60 * 60 * 7;
    let month30Ago = nowTimestamp - 30 * 24 * 60 * 60 * 30;

    let result = await fetchDataSmartContract(
      dataContract,
      "getLatest100Candles",
      "BTCUSDT",
      nowTimestamp
    );
    
    console.log(result)

    const formatData = result?.map((item) => {
      const timeStamp = Number(item.timestamp);
      return {
        ...item,
        time: new Date(timeStamp * 1000).toLocaleDateString(),
        inflow: parseFloat(item.inflow),
        outflow: parseFloat(item.outflow),
        netflow: parseFloat(item.netflow),
        balance: parseFloat(item.balance),
      };
    });

    return formatData;
  },

    

  listeningEvent : async ({type ="day" , callback}) => {
    let dataContract = candleChartContract["candleContract"]; 

    await listenToEventSmartContract(dataContract, "Recorded", (event) => {
      if (event) {
        const result = event.returnValues.formData;

        console.log("check event: ", result);
        const dataFormat = {
          ...result,
          openTime: Date(Number(result.openTime) * 1000),
          closeTime: Date(Number(result.closeTime) * 1000),
          symbol: result.symbol,
          interval: result.interval,
          open: result.open,
          close: result.close,
          high: result.high,
          low: result.low,
          volume: result.volume,
          numberOfTrades: result.numberOfTrades,
          takerBuyBaseVol: result.takerBuyBaseVol,
          takerBuyQuoteVol: result.takerBuyQuoteVol,
          x: result.x,
        };

        callback(dataFormat);
      }
    });
  }
    
};
