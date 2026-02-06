
import React from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#a10000] border-t border-red-400/30">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-12 px-4">
        <ul className="flex items-center space-x-8 text-white font-medium">
          {NAV_LINKS.map((link, idx) => (
            <li key={idx} className="cursor-pointer hover:text-yellow-200 transition-colors h-full flex items-center border-b-2 border-transparent hover:border-yellow-200 px-1">
              {link}
            </li>
          ))}
        </ul>
        <div className="relative">
          <input 
            type="text" 
            placeholder="请输入关键词" 
            className="h-8 px-4 pr-10 rounded-none text-sm w-64 outline-none border-none shadow-inner"
          />
          <button className="absolute right-2 top-1.5 text-gray-400 hover:text-red-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
