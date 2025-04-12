import { listenToEventSmartContract } from "../smartContractService";
import dashboardContract from "../../contracts/dashboardContract.json";

export const bitcoinNetFlowServices = async () => {
   const dataContract = dashboardContract["ContractNetFLowDay"];
   
  try {
    await listenToEventSmartContract(
      dataContract,
      "FlowTotalRecorded",
      (event) => {
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
      } 
    );
  } catch (error) {
    console.error("Error calling the function:", error);
    return null;
  }
};
