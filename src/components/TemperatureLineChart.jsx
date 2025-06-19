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
  { time: '00:00', temp: 21 },
  { time: '01:00', temp: 20 },
  { time: '02:00', temp: 19 },
  { time: '03:00', temp: 19 },
  { time: '04:00', temp: 18 },
  { time: '05:00', temp: 18 },
  { time: '06:00', temp: 19 },
  { time: '07:00', temp: 21 },
  { time: '08:00', temp: 23 },
  { time: '09:00', temp: 25 },
  { time: '10:00', temp: 27 },
  { time: '11:00', temp: 28 },
  { time: '12:00', temp: 29 },
  { time: '13:00', temp: 30 },
  { time: '14:00', temp: 31 },
  { time: '15:00', temp: 32 },
  { time: '16:00', temp: 31 },
  { time: '17:00', temp: 30 },
  { time: '18:00', temp: 28 },
  { time: '19:00', temp: 27 },
  { time: '20:00', temp: 26 },
  { time: '21:00', temp: 25 },
  { time: '22:00', temp: 24 },
  { time: '23:00', temp: 23 },
  { time: 'Day 2 00:00', temp: 22 },
  { time: 'Day 2 01:00', temp: 21 },
  { time: 'Day 2 02:00', temp: 20 },
  { time: 'Day 2 03:00', temp: 19 },
  { time: 'Day 2 04:00', temp: 19 },
  { time: 'Day 2 05:00', temp: 18 },
];

const TemperatureLineChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl w-1/2 mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
        Your Temperature average: <span className='text-green-500'>good</span>
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
          <YAxis unit="°C" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={false}  // animation disabled
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureLineChart;
