import { useState, useEffect } from 'react';
import { FaUser, FaTrash } from 'react-icons/fa';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { IoReloadCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  // Load customers from localStorage on component mount
  useEffect(() => {
    const loadCustomers = () => {
      const storedCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
      setCustomers(storedCustomers);
    };
    
    loadCustomers();
  }, []);

  // Reload customers function
  const handleReload = () => {
    const storedCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
    setCustomers(storedCustomers);
  };

  // Delete customer function
  const handleDelete = (customerId) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      const updatedCustomers = customers.filter(customer => customer.id !== customerId);
      setCustomers(updatedCustomers);
      localStorage.setItem('customers', JSON.stringify(updatedCustomers));
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4">Customers</h2>
        <div>
          <ul className='flex gap-3'>
            <Link to={"./addcustomers"}>
              <FaPlus size={20} color="grey" className='cursor-pointer rounded-lg' />
            </Link>
            <IoReloadCircleSharp 
              size={20} 
              color="grey" 
              className='cursor-pointer rounded-lg' 
              onClick={handleReload}
              title="Reload customers"
            />
            <FaUser size={20} color="grey" className='cursor-pointer rounded-lg' />
          </ul>
        </div>
      </div>
      
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="px-4 py-2">Created Time</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                  No customers found. Click the + button to add your first customer.
                </td>
              </tr>
            ) : (
              customers.map((customer, idx) => (
                <tr key={customer.id || idx} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{customer.createdTime}</td>
                  <td className="px-4 py-2 font-medium">{customer.title}</td>
                  <td className="px-4 py-2">{customer.email || "-"}</td>
                  <td className="px-4 py-2">{customer.country || "-"}</td>
                  <td className="px-4 py-2">{customer.city || "-"}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(customer.id)}
                      className="text-black-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors"
                      title="Delete customer"
                    >
                      <FaTrash size={14} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {customers.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Total customers: {customers.length}
        </div>
      )}
    </div>
  );
};

export default Customers;