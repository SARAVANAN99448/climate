import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from 'recharts';

// Sample CO2 & PM1 data
const fullData = [
  { time: '00:00', co2: 400, pm1: 12 },
  { time: '01:00', co2: 450, pm1: 18 },
  { time: '02:00', co2: 420, pm1: 15 },
  { time: '03:00', co2: 460, pm1: 20 },
  { time: '04:00', co2: 430, pm1: 18 },
  { time: '05:00', co2: 480, pm1: 22 },
  { time: '06:00', co2: 440, pm1: 16 },
  { time: '07:00', co2: 490, pm1: 25 },
  { time: '08:00', co2: 460, pm1: 20 },
  { time: '09:00', co2: 510, pm1: 27 },
  { time: '10:00', co2: 480, pm1: 22 },
  { time: '11:00', co2: 520, pm1: 30 },
  { time: '12:00', co2: 500, pm1: 25 },
];


const Co2Pm1LineChart = () => {
  // Start by showing first 2 points immediately
  const [displayData, setDisplayData] = useState(fullData.slice(0, 2));

  useEffect(() => {
    let index = 2; // Start adding from the 3rd point (index 2)
    const interval = setInterval(() => {
      if (index < fullData.length) {
        setDisplayData(prev => [...prev, fullData[index]]);
        index++;
      } else {
        clearInterval(interval); // Stop after all points are added
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
          dataKey="co2"
          stroke="#dc3545"
          name="CO2 (ppm)"
          isAnimationActive={true}
        />
        <Line
          type="monotone"
          dataKey="pm1"
          stroke="#17a2b8"
          name="PM1 (µg/m³)"
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Co2Pm1LineChart;
