import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// data example
//  const btcData = [
//    { name: "Jan", inflow: 32000, outflow: 28000, price: 42000 },
//    { name: "Feb", inflow: 35000, outflow: 37000, price: 45000 },
//    { name: "Mar", inflow: 40000, outflow: 39000, price: 47000 },
//    { name: "Apr", inflow: 42000, outflow: 45000, price: 48000 },
//    { name: "May", inflow: 46000, outflow: 43000, price: 50000 },
//    { name: "Jun", inflow: 50000, outflow: 52000, price: 51000 },
//    { name: "Jul", inflow: 54000, outflow: 51000, price: 53000 },
//    { name: "Aug", inflow: 58000, outflow: 60000, price: 55000 },
//    { name: "Sep", inflow: 62000, outflow: 59000, price: 57000 },
//    { name: "Oct", inflow: 66000, outflow: 68000, price: 59000 },
//    { name: "Nov", inflow: 70000, outflow: 72000, price: 61000 },
//    { name: "Dec", inflow: 75000, outflow: 73000, price: 63000 },
//  ];

const NetFlowChart = ({ data = [] }) => {
  // Tính toán Net Flow
  const processedData = data?.map((item) => ({
    ...item,
    netFlow: item.inflow - item.outflow,
    outflow: -item.outflow, // Hiển thị OutFlow dưới trục âm nếu cần
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={processedData}
        margin={{ top: 20, right: 50, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />

        {/* Trục Y bên trái cho InFlow và OutFlow */}
        <YAxis
          yAxisId="left"
          label={{ value: "Flow", angle: -90, position: "insideLeft" }}
        />

        {/* Trục Y bên phải cho BTC Price */}
        <YAxis
          yAxisId="right"
          orientation="right"
          label={{ value: "BTC Price", angle: -90, position: "insideRight" }}
          tickFormatter={(value) => `$${value.toLocaleString()}`}
        />

        <Tooltip />
        <Legend />

        {/* Cột xanh lá cho dòng tiền vào */}
        <Bar yAxisId="left" dataKey="inflow" fill="#4CAF50" name="InFlow" />

        {/* Cột đỏ cho dòng tiền ra */}
        <Bar yAxisId="left" dataKey="outflow" fill="#F44336" name="OutFlow" />

        {/* Đường cam cho BTC Price */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="price"
          stroke="#FF9800"
          strokeWidth={3}
          name="BTC Price"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default NetFlowChart;
