import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const CryptoPieChart = ({ data, totalValue }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(1)}%)`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} style={{fontSize: "12px"}} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      {/* Tổng giá trị ở giữa */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontSize: "15px",
          fontWeight: "bold",
          color: "#666",
        }}
      >
        Total Value <br />
        <span style={{ fontSize: "30px", fontWeight: "bold" }}>
          ${totalValue}M
        </span>
      </div>
    </div>
  );
};

export default CryptoPieChart;
