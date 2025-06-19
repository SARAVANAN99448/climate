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
  { time: '00:00', aqi: 45 },
  { time: '01:00', aqi: 48 },
  { time: '02:00', aqi: 46 },
  { time: '03:00', aqi: 50 },
  { time: '04:00', aqi: 52 },
  { time: '05:00', aqi: 55 },
  { time: '06:00', aqi: 58 },
  { time: '07:00', aqi: 60 },
  { time: '08:00', aqi: 65 },
  { time: '09:00', aqi: 70 },
  { time: '10:00', aqi: 75 },
  { time: '11:00', aqi: 80 },
  { time: '12:00', aqi: 78 },
  { time: '13:00', aqi: 76 },
  { time: '14:00', aqi: 74 },
  { time: '15:00', aqi: 72 },
  { time: '16:00', aqi: 70 },
  { time: '17:00', aqi: 68 },
  { time: '18:00', aqi: 65 },
  { time: '19:00', aqi: 63 },
  { time: '20:00', aqi: 60 },
  { time: '21:00', aqi: 58 },
  { time: '22:00', aqi: 55 },
  { time: '23:00', aqi: 52 },
  { time: 'Day 2 00:00', aqi: 50 },
  { time: 'Day 2 01:00', aqi: 48 },
  { time: 'Day 2 02:00', aqi: 45 },
  { time: 'Day 2 03:00', aqi: 43 },
  { time: 'Day 2 04:00', aqi: 40 },
  { time: 'Day 2 05:00', aqi: 38 },
];

const AirQualityLineChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl w-1/2 mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
        Your AQI status: <span className='text-green-500'>good</span>
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
            dataKey="aqi"
            stroke="#00C49F"
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={false}  // Disable path animation
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AirQualityLineChart;
