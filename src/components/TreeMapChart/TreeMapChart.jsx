import React from "react";
import { Treemap, Tooltip, LabelList } from "recharts";

// const data = [
//   { name: "axis", size: 1302 },
//   { name: "axis", size: 123 },
//   { name: "axis", size: 56 },
//   { name: "axis", size: 45899064 },
//   { name: "axis", size: 886 },

// ];
// const data = [
//   { name: "axis", children: [{ name: "Axes", size: 1302 }] },
//   { name: "controls", children: [{ name: "AnchorControl", size: 2138 }] },
//   { name: "data", children: [{ name: "Data", size: 20544 }] },
//   { name: "events", children: [{ name: "DataEvent", size: 7313 }] },
//   { name: "legend", children: [{ name: "Legend", size: 20859 }] },
//   {
//     name: "operator",
//     children: [
//       {
//         name: "distortion",
//         children: [{ name: "BifocalDistortion", size: 4461 }],
//       },
//     ],
//   },
// ];

const COLORS = ["#FF0000", "#0000FF"];



const CustomizedContent = ({
  root,
  depth,
  x,
  y,
  width,
  height,
  index,
  name,
  value,
}) => {
  // const fillColor = depth < 2 ? COLORS[index % COLORS.length] : "none";
  // const fillColor = value > 2000 ? "#0000FF" : "#FF0000";
  let fillColor = "none"; // Default fill color

  if (depth === 1) {
    fillColor = value > 0 ? "green" : "#FF0000";
  }
  const strokeWidth = 2 / (depth + 1e-10);
  const strokeOpacity = 1 / (depth + 1e-10);

  // Tính toán kích thước phông chữ dựa trên width, height của box
  const fontSize = Math.min(width / 5, height / 3, 20);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{ fill: fillColor, stroke: "#fff", strokeWidth, strokeOpacity }}
      />
      {depth === 1 && (
        <>
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={fontSize}
          >
            {name}, {value}
          </text>
          <text
            x={x + 4}
            y={y + 18}
            fill="#fff"
            fontSize={fontSize}
            fillOpacity={0.9}
          ></text>
        </>
      )}
    </g>
  );
};

// Custom Tooltip Component
const CustomTooltipContent = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg border border-gray-300 rounded-md">
        <p className="font-bold">Name: {payload[0].payload.name}</p>
        <p>Volume: {payload[0].payload.size}</p>
      </div>
    );
  }
  return null;
};

const TreeMapChart = ({ data }) => {
  return (
    <Treemap
      width={900}
      height={400}
      data={data}
      dataKey="size"
      stroke="#fff"
      fill="#8884d8"
      content={<CustomizedContent />}
      isAnimationActive={false}
    >
      <Tooltip content={CustomTooltipContent} />
    </Treemap>
  );
};

export default TreeMapChart;
