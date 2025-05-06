
import React from 'react';
import { Award, Search, Settings } from 'lucide-react';

const TopNav = ({ points = 0 }) => {
  return (
    <div className="md:hidden flex items-center justify-between bg-rewardly-primary text-white p-4">
      <div className="flex items-center space-x-2">
        <Award className="h-6 w-6" />
        <h1 className="font-bold text-xl">Rewardly</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full flex items-center">
          <span className="font-bold">{points.toLocaleString()}</span>
          <span className="ml-1 text-sm">pts</span>
        </div>
        <button className="p-1">
          <Search size={20} />
        </button>
        <button className="p-1">
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
};

export default TopNav;
