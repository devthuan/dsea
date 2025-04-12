import { listenToEventSmartContract } from "./smartContractService";
import testContract from "../contracts/testContract.json";

export const TestSMCService = async () => {
   const dataContract = testContract["TestSMC"];
   
  try {
    await listenToEventSmartContract(dataContract, "RoomCreated", (event) => {
      if (event) {
        console.log("Data listening FlowTotalRecorded: ", event);

        const result = event.returnValues;
        const timeStamp = Number(result.timestamp);

        const dataFormat = {
          ...result,
          timestamp: new Date(timeStamp * 1000).toLocaleString("vi-VN"),
        };

        console.log("Formatted Data: ", dataFormat);
        return dataFormat;
      }
    });
  } catch (error) {
    console.error("Error calling the function:", error);
    return null;
  }
};
