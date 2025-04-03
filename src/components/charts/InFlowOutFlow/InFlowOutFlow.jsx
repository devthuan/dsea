import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { createChart, HistogramSeries, LineSeries } from "lightweight-charts";

const InFlowOutFlowChart = ({
  btcPriceData,
  inflowOutflowData,
  height = 454,
}) => {
  const chartContainerRef = useRef(null);
  const chartInstance = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

  // Handle window resize for responsiveness
  useEffect(() => {
    if (!chartContainerRef.current) return;
    setChartWidth(chartContainerRef.current.clientWidth);

    const resizeObserver = new ResizeObserver(() => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.clientWidth);
      }
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!chartContainerRef.current || chartWidth === 0) return;

    // **Ensure cleanup of the previous chart before creating a new one**
    if (chartInstance.current) {
      chartInstance.current.remove();
      chartInstance.current = null; // Reset to prevent stale references
    }

    const chart = createChart(chartContainerRef.current, {
      width: chartWidth,
      height,
      rightPriceScale: { visible: true },
      leftPriceScale: { visible: true },
      layout: {
        background: { color: "#FFFFFF" },
        textColor: "#000000",
      },
      grid: {
        vertLines: { color: "#E0E0E0" },
        horzLines: { color: "#E0E0E0" },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    chart.priceScale("left").applyOptions({
      position: "left",
      borderColor: "#26a69a",
      autoScale: false, // Tắt tự động co giãn
      minValue: -1000, // Giá trị nhỏ nhất của trục
      maxValue: 1000, // Giá trị lớn nhất của trục
    });
    chart.priceScale("right").applyOptions({
      position: "right",
      borderColor: "#f39c12",
      autoScale: false, // Tắt tự động co giãn
      minValue: -1000, // Giá trị nhỏ nhất của trục
      maxValue: 1000, // Giá trị lớn nhất của trục
    });

    const btcPriceSeries = chart.addSeries(LineSeries, {
      color: "#f39c12",
      lineWidth: 2,
      priceScaleId: "right",
    });

    const inflowOutflowSeries = chart.addSeries(HistogramSeries, {
      priceFormat: { type: "volume" },
      priceScaleId: "left",
      
    });

    btcPriceSeries.priceScale().applyOptions({
      autoScale: false, // Ngăn chặn tự động thay đổi trục y
      minValue: 20000, // Giá trị nhỏ nhất (điều chỉnh theo dữ liệu thực tế)
      maxValue: 70000, // Giá trị lớn nhất (điều chỉnh theo dữ liệu thực tế)
    });


     inflowOutflowSeries.priceScale().applyOptions({
       scaleMargins: {
         top: 0,
         bottom: 0,
       },
     });

    btcPriceSeries.setData(
      btcPriceData.map((data) => ({
        time: Math.floor(new Date(data.time).getTime() / 1000),
        value: data.value,
      }))
    );

    inflowOutflowSeries.setData(
      inflowOutflowData.map((data) => ({
        time: Math.floor(new Date(data.time).getTime() / 1000),
        value: data.value,
        color: data.value >= 0 ? "#26a69a" : "#ff5252",
      }))
    );

    chartInstance.current = chart;

    // **Proper cleanup function**
    return () => {
      if (chartInstance.current) {
        chartInstance.current.remove();
        chartInstance.current = null; // Reset to avoid referencing disposed chart
      }
    };
  }, [btcPriceData, inflowOutflowData, chartWidth, height]);

  return <div ref={chartContainerRef} style={{ width: "100%", height }} />;
};

InFlowOutFlowChart.propTypes = {
  btcPriceData: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  inflowOutflowData: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  height: PropTypes.number,
};

export default InFlowOutFlowChart;
