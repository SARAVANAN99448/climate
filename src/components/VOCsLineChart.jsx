import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const fullData = [
  { time: '00:00', vocs: 120 },
  { time: '01:00', vocs: 122 },
  { time: '02:00', vocs: 125 },
  { time: '03:00', vocs: 127 },
  { time: '04:00', vocs: 130 },
  { time: '05:00', vocs: 128 },
  { time: '06:00', vocs: 126 },
  { time: '07:00', vocs: 124 },
  { time: '08:00', vocs: 123 },
  { time: '09:00', vocs: 125 },
  { time: '10:00', vocs: 128 },
  { time: '11:00', vocs: 132 },
  { time: '12:00', vocs: 134 },
  { time: '13:00', vocs: 136 },
  { time: '14:00', vocs: 138 },
  { time: '15:00', vocs: 139 },
  { time: '16:00', vocs: 140 },
  { time: '17:00', vocs: 138 },
  { time: '18:00', vocs: 135 },
  { time: '19:00', vocs: 132 },
  { time: '20:00', vocs: 129 },
  { time: '21:00', vocs: 127 },
  { time: '22:00', vocs: 124 },
  { time: '23:00', vocs: 122 },
  { time: 'Day 2 00:00', vocs: 120 },
  { time: 'Day 2 01:00', vocs: 118 },
  { time: 'Day 2 02:00', vocs: 116 },
  { time: 'Day 2 03:00', vocs: 115 },
  { time: 'Day 2 04:00', vocs: 114 },
  { time: 'Day 2 05:00', vocs: 113 },
];

const VOCsLineChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl w-1/2 max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
        Your VOCs average: <span className='text-amber-500'>average</span>
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={fullData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            interval={2}
            angle={-45}
            textAnchor="end"
            height={70}
          />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="vocs"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={false} // Disable animation
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VOCsLineChart;
