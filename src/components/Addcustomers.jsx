import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCustomers = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    address1: "",
    address2: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({}); // ✅ for showing inline errors

  const majorIndianCities = [ /* ... same list */ ];
  const indianStates = [ /* ... same list */ ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset city when country changes
    if (name === "country") {
      setFormData({ ...formData, [name]: value, city: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Remove field error when user starts typing
    setFormErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleAdd = () => {
    const errors = {};

    if (!formData.title.trim()) errors.title = "Title is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.country.trim()) errors.country = "Country is required";
    if (!formData.city.trim()) errors.city = "City is required";

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    const existingCustomers = JSON.parse(localStorage.getItem("customers") || "[]");

    const newCustomer = {
      ...formData,
      createdTime: new Date().toLocaleString(),
      id: Date.now(),
    };

    const updatedCustomers = [...existingCustomers, newCustomer];
    localStorage.setItem("customers", JSON.stringify(updatedCustomers));

    navigate("/customers");
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      country: "",
      city: "",
      state: "",
      zip: "",
      address1: "",
      address2: "",
      phone: "",
      email: "",
    });
    setFormErrors({});
  };

  return (
    <div className="w-full p-6 bg-white shadow-sm rounded">
      <h2 className="text-xl font-semibold mb-4">Add customer</h2>

      <input
        name="title"
        placeholder="Title*"
        className="w-full p-3 mb-1 border rounded"
        onChange={handleChange}
        value={formData.title}
      />
      {formErrors.title && <p className="text-red-600 text-sm mb-3">{formErrors.title}</p>}

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full p-3 mb-1 border rounded"
        onChange={handleChange}
        value={formData.email}
      />
      {formErrors.email && <p className="text-red-600 text-sm mb-3">{formErrors.email}</p>}

      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-3 mb-3 border rounded"
        onChange={handleChange}
        value={formData.description}
      />

      <select
        name="country"
        className="w-full p-3 mb-1 border rounded"
        onChange={handleChange}
        value={formData.country}
      >
        <option value="">Country</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
      </select>
      {formErrors.country && <p className="text-red-600 text-sm mb-3">{formErrors.country}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        <div>
          <select
            name="city"
            className="w-full p-3 mb-1 border rounded"
            onChange={handleChange}
            value={formData.city}
          >
            <option value="">City</option>
            {majorIndianCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {formErrors.city && <p className="text-red-600 text-sm">{formErrors.city}</p>}
        </div>

        <select
          name="state"
          className="p-3 border rounded"
          onChange={handleChange}
          value={formData.state}
        >
          <option value="">State / Province</option>
          {indianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <select
          name="zip"
          className="p-3 border rounded"
          onChange={handleChange}
          value={formData.zip}
        >
          <option value="">Zip / Postal Code</option>
        </select>
      </div>

      <input
        name="address1"
        placeholder="Address"
        className="w-full p-3 mb-3 border rounded"
        onChange={handleChange}
        value={formData.address1}
      />
      <input
        name="address2"
        placeholder="Address 2"
        className="w-full p-3 mb-3 border rounded"
        onChange={handleChange}
        value={formData.address2}
      />

      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">🇺🇸</span>
        <input
          name="phone"
          placeholder="Phone"
          className="flex-1 p-3 border rounded"
          onChange={handleChange}
          value={formData.phone}
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          onClick={handleCancel}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddCustomers;
