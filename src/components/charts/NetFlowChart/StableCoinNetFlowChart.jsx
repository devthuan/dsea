import React, { useEffect, useState } from "react";
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
  ReferenceLine,
  Brush,
  Cell,
} from "recharts";

const StableCoinNetFlowChart = ({ data = [] }) => {
  // Tính toán Net Flow
  const processedData = data?.map((item) => ({
    ...item,
    netFlow: item.inflow - item.outflow,
    inFlow: item.inflow,
    outFlow: -item.outflow, // Hiển thị OutFlow dư��i trục ��m nếu cần
  }));

  const [zoomRange, setZoomRange] = useState([0, data.length - 1]);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const formatNumber = (num) => {
    if (num === 0) return "0"; // Trường hợp đặc biệt cho số 0
    const absNum = Math.abs(num);
    let formatted = num.toString();

    if (absNum >= 1e9) formatted = "$" + (absNum / 1e9).toFixed(1) + "B";
    else if (absNum >= 1e6) formatted = "$" + (absNum / 1e6).toFixed(1) + "M";
    else if (absNum >= 1e3) formatted = "$" + (absNum / 1e3).toFixed(1) + "K";
    else formatted = absNum.toString(); // Giữ nguyên số nhỏ hơn 1000

    return num < 0 ? `-${formatted}` : formatted; // Giữ dấu âm chính xác
  };

  useEffect(() => {
    const disableScroll = (e) => {
      if (isMouseOver) e.preventDefault();
    };

    document.addEventListener("wheel", disableScroll, { passive: false });
    return () => document.removeEventListener("wheel", disableScroll);
  }, [isMouseOver]);

  // Xử lý cuộn chuột để zoom
  const handleWheel = (event) => {
    if (!isMouseOver) return; // Chỉ zoom khi chuột ở trong biểu đồ
    event.preventDefault();
    const step = Math.ceil(data.length * 0.01);
    if (event.deltaY < 0) {
      setZoomRange(([start, end]) => [
        Math.min(start + step, data.length - 2),
        Math.max(end - step, 1),
      ]);
    } else {
      setZoomRange(([start, end]) => [
        Math.max(start - step, 0),
        Math.min(end + step, data.length - 1),
      ]);
    }
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "rgba(214, 221, 224, 0.8)",
            padding: 10,
            borderRadius: "5px",

            border: "1px solid #ccc",
          }}
        >
          <p>{`Time: ${payload[0].payload.time}`}</p>
          <p>{`inFlow: ${payload[0].payload.inFlow}`}</p>
          <p>{`outFlow: ${payload[0].payload.outFlow}`}</p>
          <p>{`netFlow: ${payload[0].payload.netFlow}`}</p>
          <p>{`Balance: ${payload[0].payload.balance}`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          gap: "15px",
          fontSize: "14px",
          fontWeight: "bold",
          paddingBottom: "10px",
        }}
      >
        {/* Inflow - Cột Xanh */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#0ECB81",
              display: "inline-block",
            }}
          ></span>
          <span>Inflow</span>
        </div>

        {/* Outflow - Cột Đỏ */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#F6465D",
              display: "inline-block",
            }}
          ></span>
          <span>Outflow</span>
        </div>

        {/* Balance - line */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#EBBB4F",
              display: "inline-block",
            }}
          ></span>
          <span>Balance</span>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ width: "100%", height: 400 }}
      onWheel={handleWheel}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <ResponsiveContainer width="100%" height={400}>
        <CustomLegend />
        <ComposedChart
          data={processedData}
          onWheel={handleWheel}
          barCategoryGap="0%"
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 14, fontWeight: 500, fill: "#32383e" }}
            tickFormatter={(value) => {
              const date = new Date(value);
              const day = date.getDate().toString().padStart(2, "0");
              const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng trong JS bắt đầu từ 0
              return `${day}-${month}`;
            }}
          />

          {/* Trục Y bên trái (Inflow, Outflow) */}
          <YAxis
            yAxisId="left"
            label={{
              angle: -90,
              position: "insideLeft",
              // value: "inFlow",
            }}
            tick={{ fontSize: 14, fontWeight: 500, fill: "#333" }}
            tickFormatter={formatNumber}
            domain={["auto", "auto"]}
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
            tick={{ fontSize: 14, fontWeight: 500, fill: "#333" }}
            domain={[0, "auto"]} // giá tối thiểu là 0
            // tickFormatter={(value) => `$${value.toLocaleString()}`}
            tickFormatter={formatNumber}
          />

          {/* <Tooltip
            contentStyle={{
              backgroundColor: "rgba(214, 221, 224, 0.8)",
              borderRadius: "5px",
              color: "black",
            }}
            itemStyle={{ color: "black" }}
            cursor={{ strokeDasharray: "3 3" }}
          /> */}
          <Tooltip content={<CustomTooltip />} />

          {/* Cột hiển thị Net Flow */}
          <Bar yAxisId="left" dataKey="netFlow" name="Net Flow" barSize={10}>
            {processedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.netFlow >= 0 ? "#0ECB81" : "#F6465D"} // Xanh nếu dương, đỏ nếu âm
              />
            ))}
          </Bar>

          {/* Đường cam cho BTC Price (Sử dụng yAxisId="right") */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="balance"
            stroke="#EBBB4F"
            strokeWidth={2}
            dot={false}
            name="Balance"
          />

          <Brush
            startIndex={zoomRange[0]}
            endIndex={zoomRange[1]}
            onChange={({ startIndex, endIndex }) =>
              setZoomRange([startIndex, endIndex])
            }
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StableCoinNetFlowChart;
