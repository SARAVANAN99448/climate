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
  { time: '00:00', co2: 400 },
  { time: '01:00', co2: 410 },
  { time: '02:00', co2: 420 },
  { time: '03:00', co2: 430 },
  { time: '04:00', co2: 440 },
  { time: '05:00', co2: 460 },
  { time: '06:00', co2: 470 },
  { time: '07:00', co2: 490 },
  { time: '08:00', co2: 500 },
  { time: '09:00', co2: 520 },
  { time: '10:00', co2: 530 },
  { time: '11:00', co2: 550 },
  { time: '12:00', co2: 540 },
  { time: '13:00', co2: 530 },
  { time: '14:00', co2: 520 },
  { time: '15:00', co2: 510 },
  { time: '16:00', co2: 500 },
  { time: '17:00', co2: 490 },
  { time: '18:00', co2: 480 },
  { time: '19:00', co2: 470 },
  { time: '20:00', co2: 460 },
  { time: '21:00', co2: 450 },
  { time: '22:00', co2: 440 },
  { time: '23:00', co2: 430 },
  { time: 'Day 2 00:00', co2: 420 },
  { time: 'Day 2 01:00', co2: 410 },
  { time: 'Day 2 02:00', co2: 400 },
  { time: 'Day 2 03:00', co2: 395 },
  { time: 'Day 2 04:00', co2: 390 },
  { time: 'Day 2 05:00', co2: 385 },
];

const CO2LineChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl w-1/2 max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
        Your CO2 average: <span className='text-amber-500'>average</span>
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={fullData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" interval={2} angle={-45} textAnchor="end" height={60} />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="co2"
            stroke="#FF8042"
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={false} // animation disabled
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CO2LineChart;
