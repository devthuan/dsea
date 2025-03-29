import React from "react";
import useSmartContractData from "../../hooks/useSmartContractData ";

const SmartContractDataComponent = () => {
  const { data, loading } = useSmartContractData(
    "getAllSymbols"
    // 180100000,
    // 18120000,
    // "USDT",
    // "Binance"
  );

  console.log(data)
  // const cleanData = cleanEventDataFormSMC(data);
  // console.log(cleanData);
  return (
    <div>
      <h2>Smart Contract Data</h2>
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="">
          <pre>{JSON.stringify(cleanData, null, 2)}</pre>
        </div>
      )} */}
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <strong>balance:</strong> {item.balance}
            <strong>incoming:</strong> {item.incoming}
            <strong>outgoing:</strong> {item.__length__} <br />
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default SmartContractDataComponent;
