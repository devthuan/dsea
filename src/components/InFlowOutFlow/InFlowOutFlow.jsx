import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { createChart, HistogramSeries, LineSeries } from "lightweight-charts";

const InFlowOutFlowChart = ({ btcPriceData, inflowOutflowData }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (!Array.isArray(btcPriceData) || !Array.isArray(inflowOutflowData)) {
      console.error(
        "Invalid data format. Both btcPriceData and inflowOutflowData must be arrays."
      );
      return;
    }

    const chart = createChart(chartContainerRef.current, {
      rightPriceScale: {
        visible: true,
      },
      leftPriceScale: {
        visible: true,
      },
      width: 700,
      height: 400,
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

    // ✅ Thêm trục Y bên trái cho Netflow
    chart.priceScale("left").applyOptions({
      position: "left",
      borderColor: "#26a69a",
    });

    // ✅ Thêm trục Y bên phải cho BTC Price
    chart.priceScale("right").applyOptions({
      position: "right",
      borderColor: "#f39c12",
    });

    // ✅ Thêm LineSeries cho BTC Price trên trục Y bên phải
    const btcPriceSeries = chart.addSeries(LineSeries,{
      color: "#f39c12",
      lineWidth: 2,
      priceScaleId: "right", // Giá BTC trên trục Y bên phải
    });

    // ✅ Thêm HistogramSeries cho Inflow/Outflow trên trục Y bên trái
    const inflowOutflowSeries = chart.addSeries(HistogramSeries,{
      priceFormat: { type: "volume" },
      priceScaleId: "left", // Netflow trên trục Y bên trái
    });

    // Chuyển dữ liệu về timestamp (giây)
    const formattedBtcPriceData = btcPriceData.map((data) => ({
      time: Math.floor(new Date(data.time).getTime() / 1000),
      value: data.value,
    }));

    const formattedInflowOutflowData = inflowOutflowData.map((data) => ({
      time: Math.floor(new Date(data.time).getTime() / 1000),
      value: data.value,
      color: data.value >= 0 ? "#26a69a" : "#ff5252", // Màu xanh inflow, đỏ outflow
    }));

    btcPriceSeries.setData(formattedBtcPriceData);
    inflowOutflowSeries.setData(formattedInflowOutflowData);

    return () => {
      chart.remove();
    };
  }, [btcPriceData, inflowOutflowData]);

  return <div ref={chartContainerRef} />;
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
};

export default InFlowOutFlowChart;
