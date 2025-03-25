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
//    { name: "2024-01-01", inflow: 32000, outflow: 28000, price: 42000 },
//    { name: "2024-02-01", inflow: 35000, outflow: 37000, price: 45000 },
//    { name: "2024-03-01", inflow: 40000, outflow: 39000, price: 47000 },
//    { name: "2024-04-01", inflow: 42000, outflow: 45000, price: 48000 },
//    { name: "2024-05-01", inflow: 46000, outflow: 43000, price: 50000 },
//    { name: "2024-06-01", inflow: 50000, outflow: 52000, price: 91000 },
//    { name: "2024-07-01", inflow: 54000, outflow: 51000, price: 83000 },
//    { name: "2024-08-01", inflow: 58000, outflow: 60000, price: 55000 },
//    { name: "2024-09-01", inflow: 62000, outflow: 59000, price: 77000 },
//    { name: "2024-10-01", inflow: 66000, outflow: 68000, price: 59000 },
//    { name: "2024-11-01", inflow: 70000, outflow: 72000, price: 61000 },
//    { name: "2024-12-01", inflow: 75000, outflow: 73000, price: 63000 },
//    { name: "2025-01-01", inflow: 32000, outflow: 28000, price: 42000 },
//    { name: "2025-02-01", inflow: 35000, outflow: 37000, price: 45000 },
//    { name: "2025-03-01", inflow: 40000, outflow: 39000, price: 47000 },
//    { name: "2025-04-01", inflow: 42000, outflow: 45000, price: 48000 },
//    { name: "2025-05-01", inflow: 46000, outflow: 43000, price: 50000 },
//    { name: "2025-06-01", inflow: 50000, outflow: 52000, price: 91000 },
//    { name: "2025-07-01", inflow: 54000, outflow: 51000, price: 83000 },
//    { name: "2025-08-01", inflow: 58000, outflow: 60000, price: 55000 },
//    { name: "2025-09-01", inflow: 62000, outflow: 59000, price: 77000 },
//    { name: "2025-10-01", inflow: 66000, outflow: 68000, price: 59000 },
//    { name: "2025-11-01", inflow: 70000, outflow: 72000, price: 61000 },
//    { name: "2025-12-01", inflow: 75000, outflow: 73000, price: 63000 },
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
        // margin={{ top: 20, right: 50, left: 20, bottom: 20 }}
        barCategoryGap="0%" // Giảm khoảng cách giữa các nhóm cột
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />

        {/* Trục Y bên trái */}
        <YAxis
          yAxisId="left" // Thêm yAxisId để khớp với các thành phần sử dụng nó
          label={{
            angle: -90,
            position: "insideLeft",
          }}
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(214, 221, 224, 0.8)",
            borderRadius: "5px",
            color: "black",
          }}
          itemStyle={{ color: "black" }}
          labelFormatter={(label, payload) => {
            if (!payload || payload.length === 0) return `Tháng: ${label}`;

            // Ánh xạ dataKey sang tên hiển thị
            const nameMap = {
              inflow: "Dòng Tiền Vào",
              outflow: "Dòng Tiền Ra",
              price: "Giá BTC",
              netAssets: "Tài Sản Ròng",
            };

            // Danh sách các trường cần hiển thị
            const allowedFields = ["inflow", "outflow", "price"];

            // Lọc dữ liệu hiển thị
            const filteredData = payload.filter((item) =>
              allowedFields.includes(item.dataKey)
            );

            // Tính Net Assets
            const inflow =
              filteredData.find((item) => item.dataKey === "inflow")?.value ||
              0;
            const outflow =
              filteredData.find((item) => item.dataKey === "outflow")?.value ||
              0;
            const netAssets = inflow - outflow;

            return (
              <div>
                <div>{`${label}`}</div>
                <div>{`Net assets: ${netAssets}`}</div>
              </div>
            );
          }}
        />

        <Legend
          formatter={(value) => {
            const nameMap = {
              InFlow: "Inflow",
              OutFlow: "Outflow",
              price: "BTC Price",
              netAssets: "Tài Sản Ròng",
            };
            return nameMap[value] || value;
          }}
        />

        {/* Cột xanh lá cho dòng tiền vào */}
        <Bar yAxisId="left" dataKey="inflow" fill="#4CAF50" name="InFlow" />

        {/* Cột đỏ cho dòng tiền ra */}
        <Bar yAxisId="left" dataKey="outflow" fill="#F44336" name="OutFlow" />

        {/* Đường cam cho BTC Price */}
        <Line
          yAxisId="left" // Chuyển từ "right" về "left"
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
