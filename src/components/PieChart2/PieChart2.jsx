import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const getRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const CustomPieChart2 = ({
  data,
  width = "100%",
  height = 400,
  innerRadius = 70,
  outerRadius = 90,
}) => {
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);
  const [animatedTotal, setAnimatedTotal] = useState(0);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setColors(data.map(() => getRandomColor()));
    let start = 0;
    const duration = 1000;
    const increment = totalValue / (duration / 16);

    const animate = () => {
      start += increment;
      if (start >= totalValue) {
        setAnimatedTotal(totalValue);
      } else {
        setAnimatedTotal(Math.floor(start));
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [data]);

  return (
    <ResponsiveContainer width={width} height={height}>
      <PieChart>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={24}
          fontWeight="bold"
        >
          {animatedTotal}
        </text>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          label
          animationDuration={1000}
          animationEasing="ease-out"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart2;
