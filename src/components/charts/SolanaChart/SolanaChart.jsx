import React, { useEffect, useRef } from "react";
import { createChart, HistogramSeries, LineSeries } from "lightweight-charts";

const SolanaChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 500,
      layout: {
        background: { color: "white" },
        textColor: "black",
      },
      grid: {
        vertLines: { color: "#e1ecf2" },
        horzLines: { color: "#e1ecf2" },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    // ✅ 1. Thêm Series giá (Line Chart) trên trục phải
    const priceSeries = chart.addSeries(LineSeries,{
      color: "#38bdf8",
      priceScaleId: "right", // ⚡ Trục Y bên phải
    });

    priceSeries.setData([
      { time: "2024-01-01", value: 250 },
      { time: "2024-02-01", value: 270 },
      { time: "2024-03-01", value: 320 },
      { time: "2024-04-01", value: 290 },
      { time: "2024-05-01", value: 310 },
      { time: "2024-06-01", value: 340 },
      { time: "2024-07-01", value: 390 },
      { time: "2024-08-01", value: 410 },
      { time: "2024-09-01", value: 370 },
      { time: "2024-10-01", value: 400 },
    ]);

    // ✅ 2. Thêm Volume trên trục trái (Histogram)
    const volumeSeries = chart.addSeries(HistogramSeries,{
      color: "#22c55e",
      priceFormat: { type: "volume" },
      priceScaleId: "left", // ⚡ Trục Y bên trái
    });

    volumeSeries.setData([
      { time: "2024-01-01", value: 5000, color: "#22c55e" },
      { time: "2024-02-01", value: 3000, color: "#ef4444" },
      { time: "2024-03-01", value: 8000, color: "#22c55e" },
      { time: "2024-04-01", value: 4000, color: "#ef4444" },
      { time: "2024-05-01", value: 9000, color: "#22c55e" },
      { time: "2024-06-01", value: 5000, color: "#ef4444" },
      { time: "2024-07-01", value: 12000, color: "#22c55e" },
      { time: "2024-08-01", value: 6000, color: "#ef4444" },
      { time: "2024-09-01", value: 7000, color: "#22c55e" },
      { time: "2024-10-01", value: 3000, color: "#ef4444" },
    ]);

    // ✅ 3. Cấu hình trục Y
    chart.priceScale("left").applyOptions({
      autoScale: true,
      borderColor: "#cccccc",
    });

    chart.priceScale("right").applyOptions({
      autoScale: true,
      borderColor: "#cccccc",
    });

    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "500px" }} />
  );
};

export default SolanaChart;
