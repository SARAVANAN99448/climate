import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from 'recharts';

// Sample PM2.5 & PM10 data
const fullData = [
  { time: '00:00', pm25: 35, pm10: 50 },
  { time: '01:00', pm25: 40, pm10: 55 },
  { time: '02:00', pm25: 38, pm10: 53 },
  { time: '03:00', pm25: 42, pm10: 60 },
  { time: '04:00', pm25: 39, pm10: 58 },
  { time: '05:00', pm25: 45, pm10: 63 },
  { time: '06:00', pm25: 43, pm10: 61 },
  { time: '07:00', pm25: 47, pm10: 67 },
  { time: '08:00', pm25: 44, pm10: 64 },
  { time: '09:00', pm25: 50, pm10: 70 },
  { time: '10:00', pm25: 48, pm10: 68 },
  { time: '11:00', pm25: 53, pm10: 73 },
  { time: '12:00', pm25: 50, pm10: 75 },
];


const PmChart = () => {
  const [displayData, setDisplayData] = useState(fullData.slice(0, 3)); // Start with first 3 points

  useEffect(() => {
    let index = 3; // Start adding from the 4th point (index 3)
    const interval = setInterval(() => {
      if (index < fullData.length) {
        setDisplayData(prev => [...prev, fullData[index]]);
        index++;
      } else {
        clearInterval(interval); // Stop when all data is added
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
          dataKey="pm25"
          stroke="#ffc107"
          name="PM2.5 (µg/m³)"
          isAnimationActive={true}
        />
        <Line
          type="monotone"
          dataKey="pm10"
          stroke="#20c997"
          name="PM10 (µg/m³)"
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PmChart;
