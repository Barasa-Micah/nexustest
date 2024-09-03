import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Message');

  const tabs = ['Message', 'Friends', 'Blocked', 'Thread'];

  return (
    <div>
      <div className="flex space-x-4 border-b mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
