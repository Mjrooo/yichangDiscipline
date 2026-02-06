
import React from 'react';
import { RANKINGS, MOCK_COUNTY_LIST } from '../constants';

const RankingSection: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Small News Lists */}
      <div className="col-span-5 space-y-8">
        <SmallListSection title="干部任免" tabbed={["机关党建"]} items={MOCK_COUNTY_LIST.slice(0, 5)} />
      </div>

      {/* Rankings List */}
      <div className="col-span-7">
        <div className="flex items-center border-b border-gray-200 pb-2 mb-4">
            <div className="w-1.5 h-5 bg-red-600 mr-2 rounded-none"></div>
            <div className="flex items-center space-x-4">
               <span className="text-red-700 font-bold">一月排行榜</span>
               <div className="flex bg-gray-100 rounded-none text-xs overflow-hidden border border-gray-200">
                   <button className="bg-red-600 text-white px-3 py-1 font-medium">县市区纪委监委</button>
                   <button className="text-gray-600 px-3 py-1 hover:bg-gray-200">机关部室</button>
                   <button className="text-gray-600 px-3 py-1 hover:bg-gray-200">派驻(出)机构</button>
               </div>
            </div>
            <a href="#" className="ml-auto text-gray-400 text-xs hover:text-red-600">更多 &raquo;</a>
        </div>
        
        <div className="grid grid-cols-3 gap-y-4">
            <div className="flex flex-col justify-center items-center border-r border-gray-100 space-y-2">
                <span className="text-red-600 font-bold text-sm">发布量</span>
                <span className="text-gray-400 text-xs">访问量</span>
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-x-4 gap-y-3 pl-4">
                {RANKINGS.map((rank) => (
                    <div key={rank.id} className="flex items-center space-x-2">
                        <span className={`flex items-center justify-center w-5 h-5 rounded-none text-[10px] font-bold ${rank.id <= 3 ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                            {rank.id}
                        </span>
                        <span className="text-[13px] text-gray-700 truncate">{rank.name}</span>
                        <span className="text-[13px] text-red-600 font-mono font-bold ml-auto">{rank.score}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const SmallListSection: React.FC<{ title: string; items: any[]; tabbed?: string[] }> = ({ title, items, tabbed }) => (
    <div>
      <div className="flex items-center justify-between border-b border-gray-200 pb-1">
        <div className="flex items-center">
          <div className="w-1.5 h-5 bg-red-600 mr-2 rounded-none"></div>
          <h3 className="text-red-700 font-bold text-sm">{title}</h3>
          {tabbed && tabbed.map(tab => (
            <span key={tab} className="ml-6 text-gray-400 hover:text-red-600 cursor-pointer text-xs">{tab}</span>
          ))}
        </div>
        <a href="#" className="text-gray-400 text-[10px] hover:text-red-600">更多 &raquo;</a>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center group cursor-pointer text-[12px]">
            <div className="flex items-center space-x-2">
              <span className="w-1 h-1 bg-gray-300 rounded-none group-hover:bg-red-600 transition-colors"></span>
              <span className="text-gray-400">{item.category}:</span>
              <span className="text-gray-700 truncate group-hover:text-red-600 font-medium">{item.title}</span>
            </div>
            <span className="text-gray-400 ml-4">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
);

export default RankingSection;
