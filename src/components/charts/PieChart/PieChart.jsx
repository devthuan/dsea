import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const RADIAN = Math.PI / 180;


// const sampleData = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
// ];


const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  value,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const xInner = cx + radius * Math.cos(-midAngle * RADIAN);
  const yInner = cy + radius * Math.sin(-midAngle * RADIAN);

  const xOuter = cx + (outerRadius + 20) * Math.cos(-midAngle * RADIAN);
  const yOuter = cy + (outerRadius + 20) * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text
        x={xInner}
        y={yInner}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text
        x={xOuter}
        y={yOuter}
        fill="black"
        textAnchor={xOuter > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
      >
        {name}: {value}
      </text>
    </>
  );
};

const CustomPieChart = ({
  data,
  width = "100%",
  height = 400,
  outerRadius = 80,
  colors = ["#8884d8", "#82ca9d", "#ffc658"],
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={outerRadius}
          fill={colors[0]}
          label={renderCustomLabel}
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
