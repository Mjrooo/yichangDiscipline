
import React, { useState } from 'react';
import { RANKINGS, MOCK_COUNTY_LIST } from '../constants';

const RankingSection: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'release' | 'visit'>('release');

  return (
    <div className="grid grid-cols-12 gap-16">
      {/* 左侧：干部任免与监督举报 */}
      <div className="col-span-4 space-y-12">
        <SmallListSection title="干部任免" tabbed={["机关党建"]} items={MOCK_COUNTY_LIST.slice(0, 6)} />
        
        {/* 监督举报专区 */}
        <div className="p-8 bg-gradient-to-br from-[#fdf5f5] to-white border border-red-100 relative overflow-hidden group shadow-sm">
           <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
           <h4 className="text-red-800 font-black text-2xl mb-6 flex items-center">
             <span className="w-1.5 h-6 bg-red-700 mr-3"></span>
             监督举报专区
           </h4>
           <div className="flex space-x-4 relative z-10">
              <button className="flex-1 bg-red-700 text-white py-4 font-bold text-lg hover:bg-red-800 transition-all shadow-md active:scale-95">网上举报</button>
              <button className="flex-1 bg-white border-2 border-red-700 text-red-700 py-4 font-bold text-lg hover:bg-red-50 transition-all shadow-sm active:scale-95">流程查询</button>
           </div>
        </div>
      </div>

      {/* 右侧：信息发布排行榜 (高度还原设计图布局) */}
      <div className="col-span-8 flex flex-col">
        {/* 排行榜头部 */}
        <div className="flex items-center border-b-2 border-gray-100 pb-3 mb-8">
            <div className="w-2 h-7 bg-red-700 mr-4"></div>
            <div className="flex items-center space-x-10">
               <span className="text-red-800 font-black text-2xl tracking-tighter">信息发布排行榜</span>
               <div className="flex bg-gray-50 p-1 border border-gray-200">
                   <button className="bg-red-700 text-white px-8 py-2 text-base font-bold transition-colors">县市区纪委监委</button>
                   <button className="text-gray-500 px-8 py-2 text-base font-bold hover:bg-gray-200 transition-colors">委机关部室</button>
                   <button className="text-gray-500 px-8 py-2 text-base font-bold hover:bg-gray-200 transition-colors">派驻机构</button>
               </div>
            </div>
            <a href="#" className="ml-auto text-gray-400 text-sm hover:text-red-700 font-medium">更多 &raquo;</a>
        </div>

        {/* 还原设计图：左侧纵向切换 + 右侧多列数据 */}
        <div className="flex bg-white">
          {/* 纵向导航切换栏 */}
          <div className="relative w-32 flex flex-col items-center py-4 shrink-0">
            {/* 垂直连接线 */}
            <div className="absolute top-0 bottom-0 left-[84px] w-px bg-gray-200 border-l border-dashed border-gray-300"></div>
            
            <button 
              onClick={() => setActiveMetric('release')}
              className="relative z-10 flex items-center justify-end w-full pr-6 py-10 transition-all group"
            >
              <span className={`text-2xl font-bold mr-6 ${activeMetric === 'release' ? 'text-red-600' : 'text-gray-400 group-hover:text-gray-600'}`}>发布量</span>
              <div className={`w-3 h-3 rounded-full border-2 bg-white transition-colors ${activeMetric === 'release' ? 'border-red-600 bg-red-600 ring-4 ring-red-50' : 'border-gray-300'}`}></div>
            </button>

            <button 
              onClick={() => setActiveMetric('visit')}
              className="relative z-10 flex items-center justify-end w-full pr-6 py-10 transition-all group"
            >
              <span className={`text-2xl font-bold mr-6 ${activeMetric === 'visit' ? 'text-red-600' : 'text-gray-400 group-hover:text-gray-600'}`}>访问量</span>
              <div className={`w-3 h-3 rounded-full border-2 bg-white transition-colors ${activeMetric === 'visit' ? 'border-red-600 bg-red-600 ring-4 ring-red-50' : 'border-gray-300'}`}></div>
            </button>
          </div>

          {/* 右侧排名内容：三列布局 */}
          <div className="flex-1 pl-10 grid grid-cols-3 gap-x-12 gap-y-4">
            {RANKINGS.map((rank) => (
              <div key={rank.id} className="flex items-center py-3 border-b border-transparent hover:bg-gray-50/80 transition-all group cursor-default">
                {/* 排名圆圈 */}
                <div className="w-8 flex justify-center shrink-0">
                  <span className={`w-7 h-7 flex items-center justify-center text-sm font-bold rounded-full border ${rank.id <= 3 ? 'bg-white border-gray-200 text-gray-400' : 'bg-white border-gray-200 text-gray-400'}`}>
                    {rank.id}
                  </span>
                </div>
                
                {/* 名称 */}
                <div className="flex-1 min-w-0 mx-6">
                  <span className="text-xl text-gray-700 font-medium truncate block group-hover:text-red-700">
                    {rank.name}
                  </span>
                </div>

                {/* 数值 */}
                <div className="shrink-0 min-w-[30px] text-right pr-2">
                  <span className="text-2xl font-medium text-gray-600 group-hover:text-red-600 font-mono">
                    {activeMetric === 'release' ? (rank.releaseCount % 10) : (rank.visitCount % 1000)}
                  </span>
                </div>
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
          <h3 className="text-red-800 font-black text-2xl">{title}</h3>
          {tabbed && tabbed.map(tab => (
            <span key={tab} className="ml-8 text-gray-400 hover:text-red-700 cursor-pointer text-lg font-medium">{tab}</span>
          ))}
        </div>
        <a href="#" className="text-gray-400 text-sm hover:text-red-700 font-medium">更多 &raquo;</a>
      </div>
      <ul className="mt-5 space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center group cursor-pointer border-b border-transparent hover:border-gray-50 pb-2 last:border-0">
            <div className="flex items-center space-x-3 flex-1 min-w-0 mr-6">
              <span className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-red-600 transition-colors shrink-0"></span>
              {item.category && <span className="text-gray-400 font-bold whitespace-nowrap min-w-[80px]">[{item.category}]</span>}
              <span className="text-gray-800 truncate group-hover:text-red-700 font-medium text-xl leading-none">
                {item.title}
              </span>
            </div>
            <span className="text-gray-400 text-lg font-mono whitespace-nowrap">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
);

export default RankingSection;
