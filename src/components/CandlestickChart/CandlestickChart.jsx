import { useEffect, useRef } from "react";
import { CandlestickSeries, createChart } from "lightweight-charts";

const CandlestickChart = ({ data, width = "100%", height = "300" }) => {
  const chartContainerRef = useRef(null);
  const seriesRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        textColor: "black",
        background: { type: "solid", color: "white" },
      },
      height,
      timeScale: {
        timeVisible: true,
      },
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    seriesRef.current = series;
    chart.timeScale().fitContent();

    return () => chart.remove();
  }, [height]);

  useEffect(() => {
    if (!seriesRef.current || !Array.isArray(data) || data.length === 0) return;

    const invalidEntries = data.filter((candle) => {
      return (
        isNaN(Number(candle.time)) ||
        isNaN(Number(candle.open)) ||
        isNaN(Number(candle.high)) ||
        isNaN(Number(candle.low)) ||
        isNaN(Number(candle.close)) ||
        Number(candle.high) < Number(candle.low) ||
        Number(candle.open) <= 0 ||
        Number(candle.high) <= 0 ||
        Number(candle.low) <= 0 ||
        Number(candle.close) <= 0
      );
    });

    if (invalidEntries.length > 0) {
      console.error(
        `Dữ liệu không hợp lệ. Chỉ chấp nhận dữ liệu dạng:
            {
              time: timestamp,
              open: number,
              high: number,
              low: number,
              close: number
            }
            Các mục bị lỗi:`,
        invalidEntries
      );
    }

    // ✅ Lọc & validate dữ liệu trước khi cập nhật
    const validData = data
      .filter((candle) => {
        return (
          typeof candle.time === "number" &&
          typeof candle.open === "number" &&
          typeof candle.high === "number" &&
          typeof candle.low === "number" &&
          typeof candle.close === "number" &&
          candle.high >= candle.low && // Giá cao phải >= giá thấp
          candle.open > 0 &&
          candle.high > 0 &&
          candle.low > 0 &&
          candle.close > 0
        );
      })
      .sort((a, b) => a.time - b.time);

    if (validData.length > 0) {
      seriesRef.current.setData(validData);
    }
  }, [data]);

  return <div ref={chartContainerRef} style={{ width, height }} />;
};

export default CandlestickChart;
