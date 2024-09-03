import React from 'react';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import Tabs from './Tabs';
import ProfileSettings from './ProfileSettings';

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <TopNavBar />
        <div className="p-8">
          <Tabs />
          <ProfileSettings />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
