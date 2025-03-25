import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// data example
// const data = [
//   { name: "Page A", uv: 4000 },
//   { name: "Page B", uv: 3000 },
//   { name: "Page C", uv: 2000 },
//   { name: "Page D", uv: 2780 },
//   { name: "Page E", uv: 1890 },
//   { name: "Page F", uv: 2390 },
//   { name: "Page G", uv: 3490 },
// ];

const BarChartRechart = ({
  data,
  dataKey,
  barColor = "#82ca9d",
  height = 300,
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey={dataKey}
          fill={barColor}
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartRechart;
