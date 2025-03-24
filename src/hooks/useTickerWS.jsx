import { useEffect, useState, useRef } from "react";

const useTickerWS = () => {
  const [dataTop10, setDataTop10] = useState([]); // Store top 10 data
  const socketRef = useRef(null);

  const wsUrl = `wss://stream.binance.com:9443/ws/!miniTicker@arr`;

  useEffect(() => {
    // Ensure to clean up previous socket if it exists
    if (socketRef.current) {
      socketRef.current.close();
    }

    const socket = new WebSocket(wsUrl);
    socketRef.current = socket;

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      const top10 = data
        .map((item) => ({
          ...item,
          priceChangePercent: ((item.h - item.l) / item.l) * 100 || 0,
        }))
        .sort((a, b) => b.priceChangePercent - a.priceChangePercent)
        .slice(0, 10); // Take the top 10

      const formatData = top10.map((data, i) => {
        const priceChangePercent = parseFloat(
          (((data.h - data.l) / data.l) * 100).toFixed(2)
        );

        return {
          name: data.s,
          size: priceChangePercent,
          currentPrice: data.o,
        };
      });
      console.log(formatData);
      setDataTop10(formatData);
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return dataTop10;
};

export default useTickerWS;
