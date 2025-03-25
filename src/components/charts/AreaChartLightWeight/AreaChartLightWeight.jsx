import React, { useEffect, useRef } from "react";
import { AreaSeries, createChart } from "lightweight-charts";

const AreaChartLightWeight = ({ data, width = 600, height = 300 }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width,
      height,
      layout: {
        background: { color: "#ffffff" },
        textColor: "#000000",
      },
      grid: {
        vertLines: { color: "rgba(70, 130, 180, 0.5)" },
        horzLines: { color: "rgba(70, 130, 180, 0.5)" },
      },
    });

    const areaSeries = chart.addSeries(AreaSeries,{
      topColor: "rgba(38, 166, 154, 0.5)",
      bottomColor: "rgba(38, 166, 154, 0.1)",
      lineColor: "#26a69a",
      lineWidth: 2,
    });

    areaSeries.setData(data);
    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [data, width, height]);

  return <div ref={chartContainerRef} />;
};

export default AreaChartLightWeight;
