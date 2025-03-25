import { useEffect, useState, useRef } from "react";

const useBinanceSocket = (symbol, timeframe = "1m") => {
  const [candlesticks, setCandlesticks] = useState([]); // Lưu trữ mảng nến
  const socketRef = useRef(null);
  const lastCandleRef = useRef(null);

  useEffect(() => {
    // Đóng socket cũ nếu tồn tại
    if (socketRef.current) {
      socketRef.current.close();
    }

    // Tạo kết nối WebSocket với Binance
    const socket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${timeframe}`
    );
    socketRef.current = socket;

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data).k; // Lấy dữ liệu nến từ "k"
      const candleStartTime = Math.floor(data.t / 1000); // Thời gian bắt đầu nến (giây)
      const isCandleClosed = data.x; // Kiểm tra nến đã đóng chưa

      const newCandle = {
        time: candleStartTime,
        open: parseFloat(data.o),
        high: parseFloat(data.h),
        low: parseFloat(data.l),
        close: parseFloat(data.c),
      };

      if (
        !lastCandleRef.current ||
        lastCandleRef.current.time !== candleStartTime
      ) {
        // Nến mới bắt đầu
        if (lastCandleRef.current && isCandleClosed) {
          // Chỉ thêm nến cũ vào danh sách khi nó đã đóng
          setCandlesticks((prev) => [...prev, lastCandleRef.current]);
        }
        lastCandleRef.current = newCandle;
      } else {
        // Cập nhật nến hiện tại
        lastCandleRef.current = newCandle;
      }

      // Cập nhật danh sách nến hiển thị (bao gồm nến hiện tại đang mở)
      setCandlesticks((prev) => {
        const updated = prev.filter(
          (candle) => candle.time !== candleStartTime
        ); // Loại bỏ nến trùng nếu có
        return [...updated, lastCandleRef.current];
      });
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
    };

    // Cleanup khi component unmount hoặc symbol/timeframe thay đổi
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [symbol, timeframe]);

  return candlesticks;
};

export default useBinanceSocket;
