import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const fullData = [
  { time: '00:00', pm25: 22 },
  { time: '01:00', pm25: 21 },
  { time: '02:00', pm25: 20 },
  { time: '03:00', pm25: 18 },
  { time: '04:00', pm25: 17 },
  { time: '05:00', pm25: 16 },
  { time: '06:00', pm25: 15 },
  { time: '07:00', pm25: 16 },
  { time: '08:00', pm25: 17 },
  { time: '09:00', pm25: 18 },
  { time: '10:00', pm25: 19 },
  { time: '11:00', pm25: 20 },
  { time: '12:00', pm25: 21 },
  { time: '13:00', pm25: 23 },
  { time: '14:00', pm25: 24 },
  { time: '15:00', pm25: 26 },
  { time: '16:00', pm25: 27 },
  { time: '17:00', pm25: 26 },
  { time: '18:00', pm25: 25 },
  { time: '19:00', pm25: 24 },
  { time: '20:00', pm25: 23 },
  { time: '21:00', pm25: 22 },
  { time: '22:00', pm25: 21 },
  { time: '23:00', pm25: 20 },
  { time: 'Day 2 00:00', pm25: 19 },
  { time: 'Day 2 01:00', pm25: 20 },
  { time: 'Day 2 02:00', pm25: 21 },
  { time: 'Day 2 03:00', pm25: 22 },
  { time: 'Day 2 04:00', pm25: 23 },
  { time: 'Day 2 05:00', pm25: 24 },
];

const PM25LineChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl w-1/2 max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
        Your PM2.5 average: <span className='text-green-500'>good</span>
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
            dataKey="pm25"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={false} // disable animation
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PM25LineChart;
