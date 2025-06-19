import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDevice = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        createdTime: "",
        name: "",
        deviceProfile: "",
        customer: "",
        city: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleAdd = () => {
        const { name, deviceProfile, customer, city } = formData;

        if (!name || !deviceProfile || !customer || !city) {
            setError("⚠️ All fields are required before adding a device.");
            return;
        }

        const newDevice = {
            ...formData,
            createdTime: new Date().toLocaleString(),
        };

        const existing = JSON.parse(localStorage.getItem("devices") || "[]");
        localStorage.setItem("devices", JSON.stringify([...existing, newDevice]));
        navigate("/devices");
    };


    const handleCancel = () => {
        navigate("/devices")
    };

    return (
        <div className="w-full p-6 bg-white shadow-sm rounded">
            <h2 className="text-xl font-semibold mb-4">Add Device</h2>

            <input
                name="name"
                placeholder="Device Name*"
                className="w-full p-3 mb-3 border rounded"
                onChange={handleChange}
                value={formData.name}
                required
            />

            <input
                name="deviceProfile"
                placeholder="Device Profile"
                className="w-full p-3 mb-3 border rounded"
                onChange={handleChange}
                value={formData.deviceProfile}
            />


            <input
                name="customer"
                placeholder="Customer"
                className="w-full p-3 mb-3 border rounded"
                onChange={handleChange}
                value={formData.customer}
            />

            <input
                name="city"
                placeholder="City"
                className="w-full p-3 mb-3 border rounded"
                onChange={handleChange}
                value={formData.city}
            />

            {error && (
                <div className="text-red-600 text-sm mb-3 font-medium">{error}</div>
            )}

            <div className="flex justify-end gap-3">
                <button
                    onClick={handleCancel}
                    className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                    Cancel
                </button>
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:scale-95 transition transform duration-150"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default AddDevice;
