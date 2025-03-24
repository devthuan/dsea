import { useEffect, useState, useRef } from "react";

const useInflowOutFlow = (symbol, timeframe) => {
  const [dataBids, setDataBids] = useEffect(symbol)
  const [dataAsks, setDataAsks] = useState([]); // Lưu trữ mảng đầu vào của tín hiệu đầu vào
  const [candlesticks, setCandlesticks] = useState([]); // Lưu trữ mảng nến
  const socketRef = useRef(null);

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.close();
    }

    const socket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@depth`
    );
    socketRef.current = socket;

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const time = Math.floor(data.E / 1000);
      const roundedTime = Math.floor(time / timeframe) * timeframe;
      const bids = data.b;
      const ask = data.a

      setDataBids((prev) => [...prev, bids]);
      setDataAsks((prev) => [...prev, ask]);

    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [symbol, timeframe]);

  return candlesticks;
};

export default useInflowOutFlow;
