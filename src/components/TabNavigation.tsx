'use  client'

import React from 'react';

interface TabNavigationProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-4 w-full bg-gray-200 px-16 max-md:px-5 py-6 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-4 max-md:py-2 max-md:px-4 max-md:text-nowrap rounded-full w-full text-lg border-2 border-gray-400 font-medium transition-all duration-300 ${
            activeTab === tab ? 'bg-blue-600 text-lg max-md:text-sm max-md:py-2 max-md:px-2 text-white' : 'bg-white text-black text-lg  max-md:text-sm max-md:py-2 max-md:px-2'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;