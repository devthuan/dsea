import { useState, useEffect } from "react";
import Web3 from "web3";
import {
  CONTRACT_ABI as DEFAULT_ABI,
  CONTRACT_ADDRESS as DEFAULT_ADDRESS,
  PROVIDER_URL as DEFAULT_PROVIDER_URL,
  PRIVATE_KEY as DEFAULT_PRIVATE_KEY,
} from "../config/smartContract";

const useWeb3 = ({
  providerUrl = DEFAULT_PROVIDER_URL,
  contractAddress = DEFAULT_ADDRESS,
  contractAbi = DEFAULT_ABI,
  privateKey = DEFAULT_PRIVATE_KEY,
} = {}) => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        setIsLoading(true);
        let web3Instance;

      

          web3Instance = new Web3(
            new Web3.providers.WebsocketProvider(providerUrl)
          );

        const contractInstance = new web3Instance.eth.Contract(
          contractAbi,
          contractAddress
        );

        let accountInstance = null;
        if (privateKey) {
          accountInstance =
            web3Instance.eth.accounts.privateKeyToAccount(privateKey);
          web3Instance.eth.accounts.wallet.add(accountInstance);
        }

        setWeb3(web3Instance);
        setContract(contractInstance);
        setAccount(accountInstance);
      } catch (err) {
        setError(err.message);
        console.error("Lỗi khi khởi tạo Web3:", err);
      } finally {
        setIsLoading(false);
      }
    };

    initWeb3();
  }, [providerUrl, contractAddress, contractAbi, privateKey]);

  return { web3, contract, account, isLoading, error };
};

export default useWeb3;
