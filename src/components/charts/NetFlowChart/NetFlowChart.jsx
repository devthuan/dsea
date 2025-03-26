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

const NetFlowChart = ({ data = [] }) => {
  // Tính toán Net Flow
  const processedData = data?.map((item) => ({
    ...item,
    netFlow: item.inflow - item.outflow,
    outflow: -item.outflow, // Hiển thị OutFlow dưới trục âm nếu cần
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={processedData} barCategoryGap="0%">
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />

        {/* Trục Y bên trái (Inflow, Outflow) */}
        <YAxis
          yAxisId="left"
          label={{
            angle: -90,
            position: "insideLeft",
            // value: "Inflow / Outflow",
          }}
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />

        {/* Trục Y bên phải (BTC Price) */}
        <YAxis
          yAxisId="right"
          orientation="right"
          label={{
            angle: -90,
            position: "insideRight",
            // value: "BTC Price ($)",
          }}
          domain={[0, "auto"]} // giá tối thiểu là 0
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(214, 221, 224, 0.8)",
            borderRadius: "5px",
            color: "black",
          }}
          itemStyle={{ color: "black" }}
        />

        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="left"
          wrapperStyle={{
            position: "relative",
            top: -410, // Dịch xuống dưới
          }}
        />

        {/* Cột xanh lá cho dòng tiền vào */}
        <Bar yAxisId="left" dataKey="inflow" fill="#4CAF50" name="InFlow" />

        {/* Cột đỏ cho dòng tiền ra */}
        <Bar yAxisId="left" dataKey="outflow" fill="#F44336" name="OutFlow" />

        {/* Đường cam cho BTC Price (Sử dụng yAxisId="right") */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="price"
          stroke="#FF9800"
          strokeWidth={2}
          dot={false}
          name="BTC Price"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default NetFlowChart;
