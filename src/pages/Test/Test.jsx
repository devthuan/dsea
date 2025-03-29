import { useEffect } from "react";
import InFlowOutFlow from "../../components/charts/InFlowOutFlow/InFlowOutFlow";
import SmartContractDataComponent from "../../components/web3/SmartContractDataComponent";
import SmartContractEventsComponent from "../../components/web3/SmartContractEventsComponent";
import useWeb3Contract from "../../hooks/useWeb3Contract";
import {
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
  PROVIDER_URL,
  PRIVATE_KEY,
} from "../../config/smartContract";

const Test = () => {
  const {
    web3,
    contract,
    account,
    events,
    isLoading,
    error,
    listenToEvent,
    fetchData,
  } = useWeb3Contract({
    providerUrl: PROVIDER_URL,
    contractAddress: CONTRACT_ADDRESS,
    contractAbi: CONTRACT_ABI,
    privateKey: PRIVATE_KEY,
  });

  useEffect(() => {
    if (contract) {
      listenToEvent("FlowTotalRecorded", (event) => {
        console.log("event listening:", event);
      });
    }
  }, [contract]);

  useEffect(() => {
    const getBalance = async () => {
      const result = await fetchData("getAllSymbols"); // Gọi hàm getBalance từ smart contract
      console.log(result);
    };

    if (contract) {
      getBalance();
    }
  }, [contract, fetchData]);

  return (
    <div
      className={"w-full h-full  bg-white/60 rounded-[32px] p-[32px] shadow-lg"}
    >
      {/* <SmartContractDataComponent/>
      <SmartContractEventsComponent /> */}
    </div>
  );
};

export default Test;
