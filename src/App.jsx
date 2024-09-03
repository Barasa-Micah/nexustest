import React from 'react';
import Sidebar from './components/Sidebar';
import TopNavBar from './components/TopNavBar';
import ProfileSettings from './components/ProfileSettings';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <TopNavBar />
        <div className="p-8 flex-grow overflow-y-auto">
          <Tabs />
          <ProfileSettings />
        </div>
      </div>
    </div>
  );
}

export default App;
