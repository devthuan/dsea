import React from "react";
import { Treemap, Tooltip, LabelList, ResponsiveContainer } from "recharts";

// const dataExample = [
//   {
//     name: "axis",
//     children: [
//       { name: "Axes", size: 1302 },
//       { name: "Axis", size: 24593 },
//       { name: "AxisGridLine", size: 652 },
//       { name: "AxisLabel", size: 636 },
//       { name: "CartesianAxes", size: 6703 },
//     ],
//   },
//   {
//     name: "controls",
//     children: [
//       { name: "AnchorControl", size: 2138 },
//       { name: "ClickControl", size: 3824 },
//       { name: "Control", size: 1353 },
//       { name: "ControlList", size: 4665 },
//       { name: "DragControl", size: 2649 },
//       { name: "ExpandControl", size: 2832 },
//       { name: "HoverControl", size: 4896 },
//       { name: "IControl", size: 763 },
//       { name: "PanZoomControl", size: 5222 },
//       { name: "SelectionControl", size: 7862 },
//       { name: "TooltipControl", size: 8435 },
//     ],
//   },
//   {
//     name: "data",
//     children: [
//       { name: "Data", size: 20544 },
//       { name: "DataList", size: 19788 },
//       { name: "DataSprite", size: 10349 },
//       { name: "EdgeSprite", size: 3301 },
//       { name: "NodeSprite", size: 19382 },
//       {
//         name: "render",
//         children: [
//           { name: "ArrowType", size: 698 },
//           { name: "EdgeRenderer", size: 5569 },
//           { name: "IRenderer", size: 353 },
//           { name: "ShapeRenderer", size: 2247 },
//         ],
//       },
//       { name: "ScaleBinding", size: 11275 },
//       { name: "Tree", size: 7147 },
//       { name: "TreeBuilder", size: 9930 },
//     ],
//   },
//   {
//     name: "events",
//     children: [
//       { name: "DataEvent", size: 7313 },
//       { name: "SelectionEvent", size: 6880 },
//       { name: "TooltipEvent", size: 3701 },
//       { name: "VisualizationEvent", size: 2117 },
//     ],
//   },
//   {
//     name: "legend",
//     children: [
//       { name: "Legend", size: 20859 },
//       { name: "LegendItem", size: 4614 },
//       { name: "LegendRange", size: 10530 },
//     ],
//   },
//   {
//     name: "operator",
//     children: [
//       {
//         name: "distortion",
//         children: [
//           { name: "BifocalDistortion", size: 4461 },
//           { name: "Distortion", size: 6314 },
//           { name: "FisheyeDistortion", size: 3444 },
//         ],
//       },
//       {
//         name: "encoder",
//         children: [
//           { name: "ColorEncoder", size: 3179 },
//           { name: "Encoder", size: 4060 },
//           { name: "PropertyEncoder", size: 4138 },
//           { name: "ShapeEncoder", size: 1690 },
//           { name: "SizeEncoder", size: 1830 },
//         ],
//       },
//       {
//         name: "filter",
//         children: [
//           { name: "FisheyeTreeFilter", size: 5219 },
//           { name: "GraphDistanceFilter", size: 3165 },
//           { name: "VisibilityFilter", size: 3509 },
//         ],
//       },
//       { name: "IOperator", size: 1286 },
//       {
//         name: "label",
//         children: [
//           { name: "Labeler", size: 9956 },
//           { name: "RadialLabeler", size: 3899 },
//           { name: "StackedAreaLabeler", size: 3202 },
//         ],
//       },
//       {
//         name: "layout",
//         children: [
//           { name: "AxisLayout", size: 6725 },
//           { name: "BundledEdgeRouter", size: 3727 },
//           { name: "CircleLayout", size: 9317 },
//           { name: "CirclePackingLayout", size: 12003 },
//           { name: "DendrogramLayout", size: 4853 },
//           { name: "ForceDirectedLayout", size: 8411 },
//           { name: "IcicleTreeLayout", size: 4864 },
//           { name: "IndentedTreeLayout", size: 3174 },
//           { name: "Layout", size: 7881 },
//           { name: "NodeLinkTreeLayout", size: 12870 },
//           { name: "PieLayout", size: 2728 },
//           { name: "RadialTreeLayout", size: 12348 },
//           { name: "RandomLayout", size: 870 },
//           { name: "StackedAreaLayout", size: 9121 },
//           { name: "TreeMapLayout", size: 9191 },
//         ],
//       },
//       { name: "Operator", size: 2490 },
//       { name: "OperatorList", size: 5248 },
//       { name: "OperatorSequence", size: 4190 },
//       { name: "OperatorSwitch", size: 2581 },
//       { name: "SortOperator", size: 2023 },
//     ],
//   },
// ];

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

// const dataExample = [
//   {
//     timestamp: "2025-04-01T10:00:00Z",
//     symbol: "PEPE",
//     narrative_group: "Memecoin",
//     price: 0.00025,
//     price_change_percentage: 25,
//     market_cap: 1000000000,
//     market_cap_change_percentage: 30,
//     volume: 50000000,
//     volume_change_percentage: 20,
//   },
// ];

const dataTest = [
  {
    name: "BTC",
    price: 33058.73,
    volume_24h: 1125808000,
    market_cap: 1670000000000,
    change_percent: 2.5,
    category: "POW",
    last_updated: "1743575040000",
    high_24h: 33500.0,
    low_24h: 32800.0,
  },
  {
    name: "ETH",
    price: 33058.73,
    volume_24h: 1125808000,
    market_cap: 1570000000000,
    change_percent: -2.5,
    category: "POW",
    last_updated: "1743575040000",
    high_24h: 33500.0,
    low_24h: 32800.0,
  },
];

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
  data,
  change_percent,
}) => {
  // const fillColor = depth < 2 ? COLORS[index % COLORS.length] : "none";
  // const fillColor = value > 2000 ? "#0000FF" : "#FF0000";
  let fillColor = "black"; // Default fill color

  if (depth === 1) {
    fillColor = change_percent > 0 ? "green" : "#FF0000";
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
            <tspan x={x + width / 2} dy={-fontSize * 0.5}>
              {name}
            </tspan>
            <tspan x={x + width / 2} dy={fontSize}>
              {change_percent}%
            </tspan>
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
  const data = payload[0]?.payload;
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg border border-gray-300 rounded-md">
        <p className="font-bold">Name: {data.name}</p>
        <p>
          Price: {data.price}  +{data.change_percent}
        </p>
        <p>volume 24h: {data.volume_24h}</p>
        <p>market cap: {data.market_cap}</p>
      </div>
    );
  }
  return null;
};

const TreeMapChart = ({ data, width = "100%", height = 417 }) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <Treemap
        data={dataTest}
        dataKey="market_cap"
        fill="#8884d8"
        content={<CustomizedContent data={dataTest} />}
        isAnimationActive={false}
      >
        <Tooltip content={CustomTooltipContent} />
      </Treemap>
    </ResponsiveContainer>
  );
};

export default TreeMapChart;
