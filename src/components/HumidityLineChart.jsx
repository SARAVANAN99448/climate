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
  { time: '00:00', humidity: 65 },
  { time: '01:00', humidity: 64 },
  { time: '02:00', humidity: 63 },
  { time: '03:00', humidity: 62 },
  { time: '04:00', humidity: 61 },
  { time: '05:00', humidity: 60 },
  { time: '06:00', humidity: 59 },
  { time: '07:00', humidity: 58 },
  { time: '08:00', humidity: 57 },
  { time: '09:00', humidity: 56 },
  { time: '10:00', humidity: 55 },
  { time: '11:00', humidity: 54 },
  { time: '12:00', humidity: 53 },
  { time: '13:00', humidity: 52 },
  { time: '14:00', humidity: 51 },
  { time: '15:00', humidity: 50 },
  { time: '16:00', humidity: 51 },
  { time: '17:00', humidity: 52 },
  { time: '18:00', humidity: 53 },
  { time: '19:00', humidity: 54 },
  { time: '20:00', humidity: 55 },
  { time: '21:00', humidity: 56 },
  { time: '22:00', humidity: 57 },
  { time: '23:00', humidity: 58 },
  { time: 'Day 2 00:00', humidity: 59 },
  { time: 'Day 2 01:00', humidity: 60 },
  { time: 'Day 2 02:00', humidity: 61 },
  { time: 'Day 2 03:00', humidity: 62 },
  { time: 'Day 2 04:00', humidity: 63 },
  { time: 'Day 2 05:00', humidity: 64 },
];

const HumidityLineChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl w-1/2 max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
        Your Humidity average: <span className='text-green-500'>good</span>
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={fullData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" interval={2} angle={-45} textAnchor="end" height={70} />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={false} // disable animation here
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HumidityLineChart;
