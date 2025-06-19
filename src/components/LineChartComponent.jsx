import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from 'recharts';

const fullData = [
  { time: '00:00', temperature: 20, humidity: 40 },
  { time: '01:00', temperature: 23, humidity: 38 },
  { time: '02:00', temperature: 26, humidity: 42 },
  { time: '03:00', temperature: 22, humidity: 45 },
  { time: '04:00', temperature: 18, humidity: 50 },
  { time: '05:00', temperature: 15, humidity: 55 },
  { time: '06:00', temperature: 25, humidity: 53 },
  { time: '07:00', temperature: 30, humidity: 48 },
  { time: '08:00', temperature: 35, humidity: 47 },
  { time: '09:00', temperature: 28, humidity: 44 },
  { time: '10:00', temperature: 21, humidity: 42 },
  { time: '11:00', temperature: 17, humidity: 40 },
  { time: '12:00', temperature: 20, humidity: 39 },
  { time: '13:00', temperature: 27, humidity: 43 },
  { time: '14:00', temperature: 33, humidity: 45 },
  { time: '15:00', temperature: 38, humidity: 50 },
  { time: '16:00', temperature: 36, humidity: 52 },
  { time: '17:00', temperature: 31, humidity: 48 },
  { time: '18:00', temperature: 24, humidity: 44 },
  { time: '19:00', temperature: 18, humidity: 42 },
  { time: '20:00', temperature: 22, humidity: 41 },
  { time: '21:00', temperature: 28, humidity: 40 },
  { time: '22:00', temperature: 34, humidity: 43 },
  { time: '23:00', temperature: 29, humidity: 45 },
];


const LineChartComponent = () => {
  // Show first two points initially
  const [displayData, setDisplayData] = useState(fullData.slice(0, 2));

  useEffect(() => {
    let index = 2; // Start adding from the 3rd point
    const interval = setInterval(() => {
      if (index < fullData.length) {
        setDisplayData(prev => [...prev, fullData[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={displayData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#ff7300"
          name="Temperature (°C)"
          isAnimationActive={true}
        />
        <Line
          type="monotone"
          dataKey="humidity"
          stroke="#007bff"
          name="Humidity (%)"
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
