import { listenToEventSmartContract } from "../smartContractService";
import candleChartContract from "../../contracts/candleChartContract.json";
export const candleChartByDayService = async () => {
    const dataContract = candleChartContract["candleByDaySMC"];
    try {
        await listenToEventSmartContract(dataContract, "Recorded", (event) => {
            if (event) {
                console.log("Data listening Recorded: ", event);
            // const result = event.returnValues;
            // const timeStamp = Number(result.timestamp);
            // const dataFormat = {
            //     ...result,
            //     timestamp: new Date(timeStamp * 1000).toLocaleString("vi-VN"),
            // };
            // console.log("Formatted Data: ", dataFormat);
            // return dataFormat;
          }
        });
    } catch (error) {
        console.error("Error calling the function:", error);
        return null;
    }
}