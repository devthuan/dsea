import React, { useEffect, useRef, useState } from "react";
import {
  createChart,
  CandlestickSeries,
  HistogramSeries,
  createSeriesMarkers,
} from "lightweight-charts";

const CandlestickVolume = ({
  dataPrice = [],
  dataVolume = [],
  tradePoints = [],
}) => {
  const chartContainerRef = useRef(null);
  const [volume, setVolume] = useState(null);
  const [price, setPrice] = useState(null);

  const formatVolume = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: "black",
        background: { type: "solid", color: "white" },
      },
      rightPriceScale: {
        borderVisible: false,
      },
    };

    const container = document.getElementById("container");
    const chart = createChart(container, chartOptions);

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    candlestickSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.1,
        bottom: 0.4,
      },
    });

    const volumeSeries = chart.addSeries(HistogramSeries, {
      color: "#26a69a",
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "",
      scaleMargins: {
        top: 0.7,
        bottom: 0,
      },
    });

    volumeSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.7,
        bottom: 0,
      },
    });

    candlestickSeries.setData(dataPrice);
    volumeSeries.setData(dataVolume);

    // // Thêm đường giá tại điểm mua
    // const buyPriceLine = candlestickSeries.createPriceLine({
    //   price: 60, // Giá mua
    //   color: "green",
    //   lineWidth: 2,
    //   lineStyle: 2, // Dotted line (đường nét đứt)
    //   axisLabelVisible: true,
    //   title: "BUY",
    // });

    // // Thêm đường giá tại điểm bán
    // const sellPriceLine = candlestickSeries.createPriceLine({
    //   price: 50, // Giá bán
    //   color: "red",
    //   lineWidth: 2,
    //   lineStyle: 2,
    //   axisLabelVisible: true,
    //   title: "SELL",
    // });

    const markers = [
      {
        time: "2018-10-25", // Thời gian của marker (phải trùng với dữ liệu nến)
        position: "aboveBar", // Vị trí marker: 'aboveBar', 'belowBar', 'inBar'
        color: "red",
        shape: "arrowDown", // Hình dạng: 'circle', 'square', 'arrowUp', 'arrowDown'
        text: "Sell Signal",
      },
      {
        time: "2018-10-26",
        position: "belowBar",
        color: "green",
        shape: "arrowUp",
        text: "Buy Signal",
      },
    ];

    /** @type {import('lightweight-charts').createSeriesMarkers} */
    createSeriesMarkers(candlestickSeries, markers);

    chart.subscribeCrosshairMove((param) => {
      if (!param || !param.time) {
        setVolume(null);
        setPrice(null);
        return;
      }

      const volumeDataPoint = param.seriesData.get(volumeSeries);
      const priceDataPoint = param.seriesData.get(candlestickSeries);
      if (priceDataPoint) {
        setPrice({
          open: priceDataPoint.open,
          high: priceDataPoint.high,
          low: priceDataPoint.low,
          close: priceDataPoint.close,
        });
      }
      if (volumeDataPoint) {
        setVolume(formatVolume(volumeDataPoint.value));
      }
    });

    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div
      id="container"
      style={{ width: "100%", height: "400px", position: "relative" }}
    >
      {console.log(price)}
      {volume !== null && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0", // Đặt ở góc trái trên
            background: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "14px",
            zIndex: "10",
          }}
        >
          Vol | : {volume} | O : {price.open} | H : {price.high} | L :
          {price.low}
        </div>
      )}
    </div>
  );
};

export default CandlestickVolume;
