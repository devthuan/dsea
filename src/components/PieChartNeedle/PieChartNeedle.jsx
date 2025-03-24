import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
];

const totalValue = data02.reduce((sum, entry) => sum + entry.value, 0);
const getRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const CustomPieChart2 = ({ data, dataKey }) => {
  const [animatedTotal, setAnimatedTotal] = useState(0);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setColors(data02.map(() => getRandomColor()));
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
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
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
          dataKey={dataKey}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          label
          animationDuration={1000}
          animationEasing="ease-out"
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart2;
