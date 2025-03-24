import { useEffect, useState, useRef } from "react";

const useBinanceSocket = (symbol, timeframe) => {
  const [candlesticks, setCandlesticks] = useState([]); // Lưu trữ mảng nến
  const socketRef = useRef(null);
  const lastCandleRef = useRef(null);

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.close();
    }

    const socket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@trade`
    );
    socketRef.current = socket;

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const time = Math.floor(data.T / 1000);
      const roundedTime = Math.floor(time / timeframe) * timeframe;
      const price = parseFloat(data.p);

      if (
        !lastCandleRef.current ||
        lastCandleRef.current.time !== roundedTime
      ) {
        if (lastCandleRef.current) {
          setCandlesticks((prev) => [...prev, lastCandleRef.current]);
        }
        lastCandleRef.current = {
          time: roundedTime,
          open: price,
          high: price,
          low: price,
          close: price,
        };
      } else {
        lastCandleRef.current.high = Math.max(
          lastCandleRef.current.high,
          price
        );
        lastCandleRef.current.low = Math.min(lastCandleRef.current.low, price);
        lastCandleRef.current.close = price;
      }
      setCandlesticks((prev) => {
        // check double time
        if (prev.some((candle) => candle.time === roundedTime)) {
          return prev; // Không thêm nến trùng `time`
        }

        const updated = prev.slice();
        updated[updated.length - 1] = lastCandleRef.current;
        return updated;
      });
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [symbol, timeframe]);

  return candlesticks;
};

export default useBinanceSocket;
