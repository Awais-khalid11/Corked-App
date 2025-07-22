import React, { useState } from 'react';

const Notification = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleNotification = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 md:p-5 rounded-[12px] bg-white w-full max-w-full overflow-hidden">
      {/* Left Side: Title and Description */}
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold text-black">Show Notifications</h1>
        <p className="text-gray-600 text-sm leading-snug max-w-sm">
          Allow to receive push notifications for user activities and logs count
        </p>
      </div>

      {/* Right Side: Responsive Toggle */}
      <div
        onClick={toggleNotification}
        className={`w-12 h-6 flex-shrink-0 flex items-center rounded-full p-[2px] cursor-pointer transition-colors duration-300 ${
          isEnabled ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
            isEnabled ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </div>
    </div>
  );
};

export default Notification;
