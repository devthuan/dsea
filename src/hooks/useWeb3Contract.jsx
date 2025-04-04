import { useState, useEffect, useCallback } from "react";
import Web3 from "web3";
import {
  CONTRACT_ABI_DAY,
  CONTRACT_ADDRESS_DAY,
  PROVIDER_URL,
  PRIVATE_KEY,
} from "../config/smartContract";

const useWeb3Contract = ({
  providerUrl = PROVIDER_URL,
  contractAddress = CONTRACT_ADDRESS_DAY,
  contractAbi = CONTRACT_ABI_DAY,
  privateKey = PRIVATE_KEY,
}) => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [events, setEvents] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        setIsLoading(true);
        const web3Instance = new Web3(
          new Web3.providers.WebsocketProvider(providerUrl)
        );
        setWeb3(web3Instance);
        const contractInstance = new web3Instance.eth.Contract(
          contractAbi,
          contractAddress
        );
        setContract(contractInstance);

        // Kết nối đến ví bằng privateKey (nếu có)
        let accountInstance = null;
        if (privateKey) {
          accountInstance =
            web3Instance.eth.accounts.privateKeyToAccount(privateKey);
          web3Instance.eth.accounts.wallet.add(accountInstance);
          web3Instance.eth.defaultAccount = accountInstance.address;
          setAccount(accountInstance);
        }
      } catch (err) {
        setError(err.message);
        console.error("Lỗi khi khởi tạo Web3:", err);
      } finally {
        setIsLoading(false);
      }
    };

    initWeb3();
  }, [providerUrl, contractAddress, contractAbi, privateKey]); // Thay đổi contract khi props thay đổi

  // Hàm lấy data từ smart contract
  const fetchData = useCallback(
    async (methodName, ...args) => {
      if (!contract) return;
      try {
        setIsLoading(true);
        const result = await contract.methods[methodName](...args).call();
        setData(result);
        return result;
      } catch (err) {
        console.error(`Lỗi khi gọi ${methodName}:`, err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    },
    [contract]
  );

  const listenToEvent = useCallback(
    (eventName, callback) => {
      if (!contract) {
        console.warn("Contract chưa khởi tạo, không thể lắng nghe sự kiện.");
        return;
      }

      if (!contract.events || !contract.events[eventName]) {
        console.warn(
          `Sự kiện ${eventName} không tồn tại trong smart contract.`
        );
        return;
      }

      try {
        const eventListener = contract.events[eventName]()
          .on("data", (event) => {
            setEvents((prev) => ({
              ...prev,
              [eventName]: [...(prev[eventName] || []), event],
            }));
            if (callback) callback(event);
          })
          .on("error", (error) => console.error("Lỗi sự kiện:", error));

        return () => eventListener.unsubscribe();
      } catch (error) {
        console.error(`Lỗi khi đăng ký sự kiện ${eventName}:`, error);
      }
    },
    [contract]
  );

  return {
    web3,
    contract,
    account,
    events,
    isLoading,
    error,
    listenToEvent,
    fetchData,
  };
};

export default useWeb3Contract;
