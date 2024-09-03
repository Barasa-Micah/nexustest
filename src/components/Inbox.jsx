import React from 'react';

const Inbox = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between border-b p-4">
        <div className="flex space-x-4">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-2">Message</button>
          <button className="text-gray-600">Friends</button>
          <button className="text-gray-600">Blocked</button>
          <button className="text-gray-600">Thread</button>
        </div>
      </div>
      <div className="p-4 flex-grow overflow-y-scroll">
        <div className="mb-4">
          <div className="flex justify-between">
            <div>8:45 AM</div>
            <div>Message Content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
