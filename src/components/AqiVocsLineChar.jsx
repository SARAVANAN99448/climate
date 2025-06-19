import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from 'recharts';

// Sample AQI & VOCs data
const fullData = [
  { time: '00:00', aqi: 50, vocs: 120 },
  { time: '01:00', aqi: 60, vocs: 115 },
  { time: '02:00', aqi: 55, vocs: 130 },
  { time: '03:00', aqi: 70, vocs: 125 },
  { time: '04:00', aqi: 65, vocs: 140 },
  { time: '05:00', aqi: 80, vocs: 135 },
  { time: '06:00', aqi: 75, vocs: 138 },
  { time: '07:00', aqi: 85, vocs: 142 },
  { time: '08:00', aqi: 72, vocs: 130 },
  { time: '09:00', aqi: 60, vocs: 120 },
  { time: '10:00', aqi: 68, vocs: 125 },
  { time: '11:00', aqi: 55, vocs: 110 },
  { time: '12:00', aqi: 62, vocs: 115 },
];


const AqiVocsLineChart = () => {
  // Start with first 2 points shown
  const [displayData, setDisplayData] = useState(fullData.slice(0, 2));

  useEffect(() => {
    let index = 2; // Start adding from the 3rd point (index 2)
    const interval = setInterval(() => {
      if (index < fullData.length) {
        setDisplayData(prev => [...prev, fullData[index]]);
        index++;
      } else {
        clearInterval(interval); // Stop after last point
      }
    }, 60000); // Add point every second

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
          dataKey="aqi"
          stroke="#28a745"
          name="Air Quality Index (AQI)"
          isAnimationActive={true}
        />
        <Line
          type="monotone"
          dataKey="vocs"
          stroke="#6f42c1"
          name="VOCs (ppb)"
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AqiVocsLineChart;
