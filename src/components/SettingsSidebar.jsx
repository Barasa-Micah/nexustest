import React from 'react';
import { FaUser, FaCog, FaComments, FaPalette, FaBell } from 'react-icons/fa';

const SettingsSidebar = () => {
  const menuItems = [
    { icon: <FaUser />, label: 'Profile' },
    { icon: <FaCog />, label: 'Account' },
    { icon: <FaComments />, label: 'Chat' },
    { icon: <FaPalette />, label: 'Appearance' },
    { icon: <FaBell />, label: 'Notification' },
  ];

  return (
    <div className="bg-gray-100 w-64 p-4">
      <h2 className="text-xl font-medium text-gray-800 mb-6">Settings</h2> {/* Settings Title */}
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center space-x-3 cursor-pointer hover:text-blue-500">
            <span className="text-gray-600">{item.icon}</span>
            <span className="text-gray-700 font-medium">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsSidebar;
