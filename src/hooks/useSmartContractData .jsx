import { useState, useEffect, useMemo } from "react";
import useWeb3 from "./useWeb3";

const useSmartContractData = (methodName, ...params) => {
  const { contract } = useWeb3();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const stableParams = useMemo(() => params, [JSON.stringify(params)]);
  useEffect(() => {
    const fetchData = async () => {
      if (contract) {
        try {
          const result = await contract.methods[methodName](...params).call();

          //   //   Loại bỏ __length__ cuối array
          //   const formattedData = Object.values(result).filter(
          //     (item) => typeof item === "object"
          //   );

          // console.log(result);

          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [contract, methodName, stableParams]);

  return { data, loading };
};

export default useSmartContractData;
