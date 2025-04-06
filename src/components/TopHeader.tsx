
import React from 'react';
import { Bell, ChevronDown, User } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative text-slate-500 hover:text-slate-700">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
            <User size={16} />
          </div>
          <span className="text-sm font-medium">Admin User</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
