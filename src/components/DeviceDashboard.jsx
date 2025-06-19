import { useParams } from "react-router-dom";

const deviceData = {
  IAQ_10001: {
    temperature: "25°C",
    humidity: "60%",
    co2: "400 ppm",
    aqi: "Good",
    voc: "0.2 ppm",
    pm1: "10 µg/m³",
    pm25: "15 µg/m³",
    pm10: "20 µg/m³",
  },
  IAQ_10002: {
    temperature: "28°C",
    humidity: "45%",
    co2: "500 ppm",
    aqi: "Moderate",
    voc: "0.3 ppm",
    pm1: "12 µg/m³",
    pm25: "18 µg/m³",
    pm10: "25 µg/m³",
  },
  IAQ_10003: {
    temperature: "22°C",
    humidity: "70%",
    co2: "420 ppm",
    aqi: "Good",
    voc: "0.15 ppm",
    pm1: "9 µg/m³",
    pm25: "13 µg/m³",
    pm10: "19 µg/m³",
  },
  IAQ_10004: {
    temperature: "26°C",
    humidity: "50%",
    co2: "430 ppm",
    aqi: "Moderate",
    voc: "0.25 ppm",
    pm1: "11 µg/m³",
    pm25: "17 µg/m³",
    pm10: "23 µg/m³",
  },
  IAQ_10005: {
    temperature: "29°C",
    humidity: "55%",
    co2: "450 ppm",
    aqi: "Poor",
    voc: "0.4 ppm",
    pm1: "14 µg/m³",
    pm25: "22 µg/m³",
    pm10: "30 µg/m³",
  },
  IAQ_10006: {
    temperature: "23°C",
    humidity: "65%",
    co2: "410 ppm",
    aqi: "Good",
    voc: "0.18 ppm",
    pm1: "10 µg/m³",
    pm25: "16 µg/m³",
    pm10: "21 µg/m³",
  },
  IAQ_10007: {
    temperature: "27°C",
    humidity: "48%",
    co2: "490 ppm",
    aqi: "Moderate",
    voc: "0.35 ppm",
    pm1: "13 µg/m³",
    pm25: "20 µg/m³",
    pm10: "26 µg/m³",
  },
  IAQ_10008: {
    temperature: "24°C",
    humidity: "62%",
    co2: "460 ppm",
    aqi: "Good",
    voc: "0.22 ppm",
    pm1: "10 µg/m³",
    pm25: "14 µg/m³",
    pm10: "18 µg/m³",
  },
  IAQ_10009: {
    temperature: "30°C",
    humidity: "40%",
    co2: "520 ppm",
    aqi: "Poor",
    voc: "0.5 ppm",
    pm1: "16 µg/m³",
    pm25: "25 µg/m³",
    pm10: "35 µg/m³",
  },
  IAQ_10010: {
    temperature: "21°C",
    humidity: "68%",
    co2: "390 ppm",
    aqi: "Good",
    voc: "0.12 ppm",
    pm1: "8 µg/m³",
    pm25: "12 µg/m³",
    pm10: "16 µg/m³",
  },
};

const DeviceDashboard = () => {
  const { deviceName } = useParams();
  const data = deviceData[deviceName];

  if (!data) {
    return <div className="p-6 text-red-600">Device data not found for {deviceName}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{deviceName} Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Temperature</h3>
          <p>{data.temperature}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Humidity</h3>
          <p>{data.humidity}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">CO₂</h3>
          <p>{data.co2}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Air Quality Index</h3>
          <p>{data.aqi}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">VOCs</h3>
          <p>{data.voc}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">PM1</h3>
          <p>{data.pm1}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">PM2.5</h3>
          <p>{data.pm25}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">PM10</h3>
          <p>{data.pm10}</p>
        </div>
      </div>
    </div>
  );
};

export default DeviceDashboard;
