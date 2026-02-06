
import React from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#a10000] border-t border-red-400/20 shadow-lg sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto flex justify-between items-center h-16 px-10">
        <ul className="flex items-center space-x-12 text-white font-bold text-lg">
          {NAV_LINKS.map((link, idx) => (
            <li key={idx} className="cursor-pointer hover:text-yellow-200 transition-all h-full flex items-center border-b-4 border-transparent hover:border-yellow-200 px-2 group">
              <span className="group-hover:translate-y-[-1px]">{link}</span>
            </li>
          ))}
        </ul>
        <div className="relative">
          <input 
            type="text" 
            placeholder="请输入关键词检索..." 
            className="h-10 px-5 pr-12 rounded-none text-base w-80 outline-none border-none shadow-inner bg-white/90 focus:bg-white transition-colors"
          />
          <button className="absolute right-3 top-2.5 text-gray-400 hover:text-red-700">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
