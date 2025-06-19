import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaPlus } from "react-icons/fa";
import { IoReloadCircleSharp } from "react-icons/io5";

const Devices = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("devices")) || [];
    setDevices(stored);
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4">Devices</h2>
        <ul className="flex gap-3">
          <Link to="/add-device">
            <FaPlus size={20} color="grey" className="cursor-pointer rounded-lg" />
          </Link>
          <IoReloadCircleSharp size={20} color="grey" className="cursor-pointer rounded-lg" />
          <FaUser size={20} color="grey" className="cursor-pointer rounded-lg" />
        </ul>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="px-4 py-2">Created Time</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Device Profile</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">City</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{new Date(device.createdTime).toLocaleString()}</td>
                <td className="px-4 py-2">{device.name}</td>
                <td className="px-4 py-2">{device.deviceProfile}</td>
                <td className="px-4 py-2">{device.customer}</td>
                <td className="px-4 py-2">{device.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Devices;
