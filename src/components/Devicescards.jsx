import React from 'react';

const DevicesCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-4 flex flex-col gap-4 w-1/2 justify-center px-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-gray-700 font-semibold">Devices</h2>
        <div className="flex gap-2">
          <button className="text-sm text-gray-600 hover:underline">View docs</button>
          <button className="bg-blue-700 text-white text-sm px-3 py-1 rounded-md hover:bg-blue-800">
            Add device
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-red-50 p-2 rounded-md text-center">
          <p className="text-sm text-gray-600">Inactive</p>
          <p className="text-lg font-bold">8</p>
        </div>
        <div className="bg-white p-2 border rounded-md text-center">
          <p className="text-sm text-gray-600">Active</p>
          <p className="text-lg font-bold">2</p>
        </div>
        <div className="bg-white p-2 border rounded-md text-center">
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-lg font-bold">10</p>
        </div>
      </div>
    </div>
  );
};

export default DevicesCard;
