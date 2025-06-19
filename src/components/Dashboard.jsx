import { useParams } from "react-router-dom";
import DashboardCard from "../components/Dashboardcard";
import LineChartComponent from "../components/LineChartComponent";
import { motion } from "framer-motion";
import { MdCo2, MdGrain } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { Wind, Thermometer } from "lucide-react";
import { FaVirus, FaBroom } from "react-icons/fa";
import { useEffect, useState } from "react";
import AqiVocsLineChart from "./AqiVocsLineChar";
import Co2Pm1LineChart from "./Co2Pm1LineChart";
import PmChart from "./PmChart";

const initialDeviceData = {
  IAQ_10001: { aqi: 100, vocs: 300, humidity: 40, co2: 420, pm1: 20, pm2_5: 35, pm10: 40, temperature: 25 },
  IAQ_10002: { aqi: 150, vocs: 400, humidity: 55, co2: 450, pm1: 25, pm2_5: 45, pm10: 50, temperature: 27 },
  IAQ_10003: { aqi: 80, vocs: 250, humidity: 50, co2: 400, pm1: 15, pm2_5: 30, pm10: 35, temperature: 22 },
  IAQ_10004: { aqi: 200, vocs: 600, humidity: 60, co2: 480, pm1: 30, pm2_5: 55, pm10: 70, temperature: 29 },
  IAQ_10005: { aqi: 120, vocs: 350, humidity: 45, co2: 430, pm1: 22, pm2_5: 40, pm10: 45, temperature: 26 },
  IAQ_10006: { aqi: 95, vocs: 280, humidity: 42, co2: 410, pm1: 18, pm2_5: 32, pm10: 38, temperature: 24 },
  IAQ_10007: { aqi: 170, vocs: 520, humidity: 58, co2: 470, pm1: 27, pm2_5: 50, pm10: 60, temperature: 28 },
  IAQ_10008: { aqi: 130, vocs: 380, humidity: 53, co2: 440, pm1: 24, pm2_5: 42, pm10: 48, temperature: 26 },
  IAQ_10009: { aqi: 110, vocs: 320, humidity: 47, co2: 425, pm1: 21, pm2_5: 37, pm10: 43, temperature: 25 },
  IAQ_10010: { aqi: 140, vocs: 450, humidity: 55, co2: 460, pm1: 26, pm2_5: 48, pm10: 53, temperature: 27 },
};

const Dashboard = () => {
  const { deviceName } = useParams();

  // Start with initial data for the device or fallback to a default device's data if not found
  const startingData = initialDeviceData[deviceName] || initialDeviceData.IAQ_10001;

  const [data, setData] = useState(startingData);

  useEffect(() => {
    // Reset data whenever deviceName changes
    setData(initialDeviceData[deviceName] || initialDeviceData.IAQ_10001);

    // Update device data randomly every 3 seconds
    const interval = setInterval(() => {
      setData((prev) => ({
        aqi: (Math.min(500, Math.max(0, parseFloat(prev.aqi) + (Math.random() * 20 - 10)))).toFixed(1),
        vocs: Math.min(1000, Math.max(0, prev.vocs + Math.floor(Math.random() * 40 - 20))),
        humidity: Math.min(100, Math.max(0, prev.humidity + Math.floor(Math.random() * 10 - 5))),
        co2: Math.min(2000, Math.max(0, prev.co2 + Math.floor(Math.random() * 50 - 25))),
        pm1: Math.min(150, Math.max(0, prev.pm1 + Math.floor(Math.random() * 10 - 5))),
        pm2_5: Math.min(200, Math.max(0, prev.pm2_5 + Math.floor(Math.random() * 15 - 7))),
        pm10: Math.min(300, Math.max(0, prev.pm10 + Math.floor(Math.random() * 20 - 10))),
        temperature: (Math.min(50, Math.max(0, parseFloat(prev.temperature) + (Math.random() * 2 - 1)))).toFixed(1),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [deviceName]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 space-y-4"
    >
      <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold mb-2">
        {deviceName ? `Dashboard for ${deviceName}` : "Admin Dashboard"}
      </h1>
      <button className="shadow-2xl bg-black text-white px-2 py-2 rounded-xl cursor-pointer">Download Report</button>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 pb-5 px-10">
        <DashboardCard
          title="Air Quality Index"
          value={data.aqi}
          unit="AQI"
          color="text-purple-600"
          icon={<Wind size={24} />}
        />
        <DashboardCard
          title="VOCs"
          value={data.vocs}
          unit="ppb"
          color="text-yellow-500"
          icon={<FaVirus size={24} />}
        />
        <DashboardCard
          title="Humidity"
          value={data.humidity}
          unit="%"
          color="text-black"
          icon={<WiHumidity size={30} />}
        />
        <DashboardCard
          title="CO2"
          value={data.co2}
          unit="ppm"
          color="text-black"
          icon={<MdCo2 size={30} />}
        />
        <DashboardCard
          title="PM1"
          value={data.pm1}
          unit="µg/m³"
          color="text-black"
          icon={<MdGrain size={24} />}
        />
        <DashboardCard
          title="PM2.5"
          value={data.pm2_5}
          unit="µg/m³"
          color="text-black"
          icon={<FaBroom size={24} />}
        />
        <DashboardCard
          title="PM10"
          value={data.pm10}
          unit="µg/m³"
          color="text-black"
          icon={<MdGrain size={24} />}
        />
        <DashboardCard
          title="Temperature"
          value={data.temperature}
          unit="°C"
          color="text-green-500"
          icon={<Thermometer size={24} />}
        />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-all">
        <h2 className="text-xl font-semibold mb-2">Temperature & Humidity History</h2>
        <LineChartComponent deviceName={deviceName} />
        <h2 className="text-xl font-semibold mb-2">Air Quality Index & VOCs History</h2>
        <AqiVocsLineChart/>
        <h2 className="text-xl font-semibold mb-2">C02 & PM1 History</h2>
        <Co2Pm1LineChart/>
        <h2 className="text-xl font-semibold mb-2">PM2.5 & PM10 History</h2>
         <PmChart/>
      </div>
    </motion.div>
  );
};

export default Dashboard;
