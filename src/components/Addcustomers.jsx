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

  const [formErrors, setFormErrors] = useState({});

  const majorIndianCities = [
    "Agra", "Ahmedabad", "Aligarh", "Allahabad", "Amravati", "Amritsar",
    "Aurangabad", "Bangalore", "Bareilly", "Bhavnagar", "Bhilai", "Bhiwandi",
    "Bhopal", "Bhubaneswar", "Bikaner", "Chandigarh", "Chennai", "Coimbatore",
    "Cuttack", "Dehradun", "Delhi", "Dhanbad", "Durgapur", "Faridabad",
    "Firozabad", "Ghaziabad", "Gorakhpur", "Guntur", "Gurgaon", "Guwahati",
    "Gwalior", "Howrah", "Hubli-Dharwad", "Hyderabad", "Indore", "Jabalpur",
    "Jaipur", "Jalandhar", "Jamshedpur", "Jodhpur", "Kalyan-Dombivali", "Kanpur",
    "Kochi", "Kolkata", "Kota", "Lucknow", "Ludhiana", "Madurai", "Meerut",
    "Mumbai", "Mysore", "Nagpur", "Nashik", "Navi Mumbai", "Nellore", "Noida",
    "Patna", "Pimpri-Chinchwad", "Pune", "Raipur", "Rajkot", "Ranchi",
    "Saharanpur", "Salem", "Solapur", "Srinagar", "Surat", "Thane",
    "Tiruchirappalli", "Tiruppur", "Vadodara", "Varanasi", "Vasai-Virar",
    "Vijayawada", "Visakhapatnam", "Warangal"
  ];

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir",
    "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset city when country changes
    if (name === "country") {
      setFormData({ ...formData, [name]: value, city: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error on typing
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
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
      {formErrors.title && (
        <p className="text-red-500 text-sm mb-2">{formErrors.title}</p>
      )}

      <input
        name="email"
        type="email"
        placeholder="Email*"
        className="w-full p-3 mb-1 border rounded"
        onChange={handleChange}
        value={formData.email}
      />
      {formErrors.email && (
        <p className="text-red-500 text-sm mb-2">{formErrors.email}</p>
      )}

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
      {formErrors.country && (
        <p className="text-red-500 text-sm mb-2">{formErrors.country}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        <select
          name="city"
          className="p-3 border rounded"
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
        {formErrors.city && (
          <p className="text-red-500 text-sm col-span-3">{formErrors.city}</p>
        )}

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
