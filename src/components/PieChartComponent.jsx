import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Air Quality Index", value: 10 },
  { name: "VOCs", value: 20 },
  { name: "Humidity", value: 20 },
  { name: "CO2", value: 10 },
  { name: "PM1", value: 10 },
  { name: "PM2.5", value: 10 },
  { name: "PM10", value: 10 },
  { name: "Temperature", value: 10 },
];

const COLORS = ["#9810FA", "#F0B100", "#0088FE", "#00C49F"];

const PieChartComponent = () => {
  return (
    <div className="w-full md:w-1/2 h-96 bg-white shadow-2xl py-5 px-4">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            height={80}
            wrapperStyle={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              paddingTop: 10,
              rowGap: "10px",
            }}
            iconSize={10}
            layout="horizontal"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
