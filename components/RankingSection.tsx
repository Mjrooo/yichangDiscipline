
import React from 'react';
import { RANKINGS, MOCK_COUNTY_LIST } from '../constants';

const RankingSection: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-16">
      <div className="col-span-5 space-y-12">
        <SmallListSection title="干部任免" tabbed={["机关党建"]} items={MOCK_COUNTY_LIST.slice(0, 6)} />
        <div className="p-10 bg-red-50/50 border border-red-100">
           <h4 className="text-red-800 font-bold text-xl mb-4">监督举报专区</h4>
           <div className="flex space-x-4">
              <button className="flex-1 bg-red-700 text-white py-4 font-bold text-lg hover:bg-red-800 transition-colors">网上举报</button>
              <button className="flex-1 bg-white border-2 border-red-700 text-red-700 py-4 font-bold text-lg hover:bg-red-50 transition-colors">流程查询</button>
           </div>
        </div>
      </div>

      <div className="col-span-7">
        <div className="flex items-center border-b-2 border-gray-100 pb-3 mb-8">
            <div className="w-2 h-7 bg-red-700 mr-4"></div>
            <div className="flex items-center space-x-8">
               <span className="text-red-800 font-black text-2xl">信息发布排行榜</span>
               <div className="flex bg-gray-100 p-1 rounded-none text-sm font-bold border border-gray-200">
                   <button className="bg-red-700 text-white px-6 py-2">县市区纪委监委</button>
                   <button className="text-gray-600 px-6 py-2 hover:bg-gray-200 transition-colors">委机关部室</button>
                   <button className="text-gray-600 px-6 py-2 hover:bg-gray-200 transition-colors">派驻机构</button>
               </div>
            </div>
            <a href="#" className="ml-auto text-gray-400 text-sm hover:text-red-700">更多 &raquo;</a>
        </div>
        
        <div className="grid grid-cols-3 gap-12 bg-gray-50/30 p-8 border border-gray-100">
            <div className="flex flex-col justify-center items-center border-r border-gray-200 space-y-4">
                <span className="text-red-700 font-black text-2xl">月度发布统计</span>
                <span className="text-gray-400 text-sm tracking-widest font-bold">DATA STATISTICS</span>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-x-12 gap-y-6">
                {RANKINGS.slice(0, 10).map((rank) => (
                    <div key={rank.id} className="flex items-center space-x-4 border-b border-gray-100 pb-2 group">
                        <span className={`flex items-center justify-center w-8 h-8 rounded-none text-sm font-black ${rank.id <= 3 ? 'bg-red-700 text-white shadow-sm' : 'bg-gray-200 text-gray-500'}`}>
                            {rank.id}
                        </span>
                        <span className="text-xl text-gray-800 truncate group-hover:text-red-700 transition-colors font-bold">{rank.name}</span>
                        <span className="text-xl text-red-700 font-black font-mono ml-auto tracking-tighter">{rank.score}</span>
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
      <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
        <div className="flex items-center">
          <div className="w-2 h-7 bg-red-700 mr-4"></div>
          <h3 className="text-red-800 font-black text-xl">{title}</h3>
          {tabbed && tabbed.map(tab => (
            <span key={tab} className="ml-8 text-gray-500 hover:text-red-700 cursor-pointer text-base font-medium">{tab}</span>
          ))}
        </div>
        <a href="#" className="text-gray-400 text-xs hover:text-red-700">更多 &raquo;</a>
      </div>
      <ul className="mt-5 space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center group cursor-pointer">
            <div className="flex items-center space-x-3 flex-1 min-w-0 mr-4">
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-none group-hover:bg-red-600 transition-colors shrink-0"></span>
              <span className="text-gray-500 font-bold whitespace-nowrap">[{item.category}]</span>
              <span className="text-gray-800 truncate group-hover:text-red-700 font-medium text-xl leading-none">{item.title}</span>
            </div>
            <span className="text-gray-400 text-lg font-mono whitespace-nowrap">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
);

export default RankingSection;
