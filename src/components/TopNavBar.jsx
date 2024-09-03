import React from 'react';
import { FaSearch, FaBell, FaCog } from 'react-icons/fa';

const TopNavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-semibold text-gray-800">Nexus</div>
      <div className="flex space-x-6 items-center text-gray-600">
        <FaSearch className="hover:text-black" />
        <FaBell className="hover:text-black" />
        <FaCog className="hover:text-black" />
      </div>
    </div>
  );
};

export default TopNavBar;
