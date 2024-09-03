import React from 'react';
import { FaUserFriends, FaMobileAlt, FaLaptopCode, FaUsers, FaCalendarAlt, FaVideo, FaInbox, FaFileAlt, FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <ul className="space-y-6">
        <li className="font-semibold text-gray-600">General</li>
        <ul className="space-y-2 pl-4 text-gray-500">
          <li className="hover:text-black flex items-center space-x-2">
            <FaInbox className="text-blue-500" /> <span>Inbox</span>
          </li>
          <li className="hover:text-black flex items-center space-x-2">
            <FaFileAlt className="text-gray-500" /> <span>Draft</span>
          </li>
        </ul>
        <li className="font-semibold text-gray-600">Teams</li>
        <ul className="space-y-2 pl-4 text-gray-500">
          <li className="hover:text-black flex items-center space-x-2">
            <FaUserFriends className="text-blue-500" /> <span>UI/UX Teams</span>
          </li>
          <li className="hover:text-black flex items-center space-x-2">
            <FaUserFriends className="text-green-500" /> <span>Research Gang</span>
          </li>
          <li className="hover:text-black flex items-center space-x-2">
            <FaUserFriends className="text-purple-500" /> <span>Talks Project</span>
          </li>
        </ul>
        <li className="pl-4 text-blue-600 hover:text-blue-800 cursor-pointer flex items-center space-x-2">
          <FaPlus className="text-blue-600" /> <span>Create New Team</span>
        </li>
        <li className="font-semibold text-gray-600">Channel</li>
        <ul className="space-y-2 pl-4 text-gray-500">
          <li className="hover:text-black flex items-center space-x-2">
            <FaMobileAlt className="text-red-500" /> <span>Mobile Designer</span>
          </li>
          <li className="hover:text-black flex items-center space-x-2">
            <FaLaptopCode className="text-yellow-500" /> <span>Front-End Community</span>
          </li>
          <li className="hover:text-black flex items-center space-x-2">
            <FaUsers className="text-pink-500" /> <span>UI/UX Community</span>
          </li>
          <li className="hover:text-black flex items-center space-x-2">
            <FaLaptopCode className="text-blue-500" /> <span>Web Designer</span>
          </li>
        </ul>
        <li className="pl-4 text-blue-600 hover:text-blue-800 cursor-pointer flex items-center space-x-2">
          <FaPlus className="text-blue-600" /> <span>Make a Channel</span>
        </li>
        <li className="font-semibold text-gray-600">Integrations</li>
        <ul className="space-y-2 pl-4 text-gray-500">
          <li className="hover:text-black flex items-center space-x-2">
            <FaCalendarAlt className="inline mr-2" /> <span>Google Calendar</span>
          </li>
          <li className="hover:text-black flex items-center space-x-2">
            <FaVideo className="inline mr-2" /> <span>Zoom Meetings</span>
          </li>
        </ul>
        <li className="pl-4 text-blue-600 hover:text-blue-800 cursor-pointer flex items-center space-x-2">
          <FaPlus className="text-blue-600" /> <span>Add another Integration</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
