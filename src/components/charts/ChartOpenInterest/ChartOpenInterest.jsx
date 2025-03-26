import React, { useEffect, useRef } from "react";
import { AreaSeries, createChart, LineSeries } from "lightweight-charts";

const ChartOpenInterest = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Tạo biểu đồ
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 300,
      layout: {
        background: { color: "white" },
        textColor: "black",
      },
      grid: {
        vertLines: { color: "rgba(200, 200, 200, 0.2)" },
        horzLines: { color: "rgba(200, 200, 200, 0.2)" },
      },
      rightPriceScale: {
        borderColor: "#D1D4DC",
      },
      timeScale: {
        borderColor: "#D1D4DC",
      },
    });

    // Thêm dữ liệu đường line đỏ
    const lineSeries = chart.addSeries(LineSeries, {
      color: "red",
      lineWidth: 2,
    });

    lineSeries.setData([
      { time: "2023-10-01", value: 10 },
      { time: "2023-10-02", value: 50 },
      { time: "2023-10-03", value: 30 },
      { time: "2023-10-04", value: 60 },
      { time: "2023-10-05", value: 40 },
      { time: "2023-10-06", value: 80 },
      { time: "2023-10-07", value: 50 },
    ]);

    // Thêm dữ liệu vùng bóng mờ màu xám
    const areaSeries1 = chart.addSeries(AreaSeries, {
      topColor: "rgba(128, 128, 128, 0.5)",
      bottomColor: "rgba(128, 128, 128, 0.1)",
      lineColor: "gray",
      lineWidth: 1,
    });

    areaSeries1.setData([
      { time: "2023-10-01", value: 5 },
      { time: "2023-10-02", value: 30 },
      { time: "2023-10-03", value: 20 },
      { time: "2023-10-04", value: 50 },
      { time: "2023-10-05", value: 30 },
      { time: "2023-10-06", value: 60 },
      { time: "2023-10-07", value: 40 },
    ]);

    // Thêm vùng area thứ 2 (Màu xám nhạt)
    const areaSeries2 = chart.addSeries(AreaSeries,{
      topColor: "rgba(180, 180, 180, 0.5)", // Xám nhạt hơn
      bottomColor: "rgba(180, 180, 180, 0.1)",
      lineColor: "darkgray",
      lineWidth: 1,
    });

    areaSeries2.setData([
      { time: "2023-10-01", value: 2 },
      { time: "2023-10-02", value: 20 },
      { time: "2023-10-03", value: 15 },
      { time: "2023-10-04", value: 40 },
      { time: "2023-10-05", value: 25 },
      { time: "2023-10-06", value: 50 },
      { time: "2023-10-07", value: 30 },
    ]);

    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "300px" }} />
  );
};

export default ChartOpenInterest;
