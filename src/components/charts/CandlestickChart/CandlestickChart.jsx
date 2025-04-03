import { useEffect, useRef, useState } from "react";
import { CandlestickSeries, createChart } from "lightweight-charts";
import axios from "axios";

const CandlestickChart = ({ data, width = "100%", height = "300" }) => {
  const chartContainerRef = useRef(null);
  const seriesRef = useRef(null);
  const [dataCandle, setDataCandle] = useState([]);

  // Khởi tạo biểu đồ
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

    const series = chart.addSeries(CandlestickSeries,{
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

  // Fetch data từ API & props
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=100"
        );

        const candles = response.data.map((item) => ({
          time: Math.floor(item[0] / 1000),
          open: parseFloat(item[1]),
          high: parseFloat(item[2]),
          low: parseFloat(item[3]),
          close: parseFloat(item[4]),
        }));
        
        // Kết hợp dữ liệu API và `props.data`
        const mergedData = [...candles, ...data];

        // Lọc dữ liệu hợp lệ và loại bỏ trùng lặp `time`
        const uniqueData = Array.from(
          mergedData
            .reduce((map, candle) => map.set(candle.time, candle), new Map())
            .values()
        ).sort((a, b) => a.time - b.time);

        setDataCandle(uniqueData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]); // Theo dõi `data`

  // Cập nhật dữ liệu real-time cho biểu đồ
  useEffect(() => {
    if (seriesRef.current && dataCandle.length > 0) {
      seriesRef.current.setData(dataCandle);
    }
  }, [dataCandle]); // Chỉ chạy khi `dataCandle` thay đổi

  return <div ref={chartContainerRef} style={{ width, height }} />;
};

export default CandlestickChart;
