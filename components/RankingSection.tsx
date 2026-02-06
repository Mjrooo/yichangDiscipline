
import React, { useState } from 'react';
import { RANKINGS, MOCK_COUNTY_LIST } from '../constants';

const RankingSection: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'release' | 'visit'>('release');
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["县市区纪委监委", "委机关部室", "派驻机构"];

  return (
    <div className="grid grid-cols-12 gap-16">
      {/* 左侧：干部任免与监督举报 (col-span-6 实现 1:1) */}
      <div className="col-span-6 space-y-12">
        <SmallListSection title="干部任免" tabbed={["机关党建"]} items={MOCK_COUNTY_LIST.slice(0, 7)} />
        
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

      {/* 右侧：信息发布排行榜 (col-span-6 实现 1:1) */}
      <div className="col-span-6 flex flex-col">
        {/* 排行榜头部 - 包含 3 个指定的 Tab */}
        <div className="flex items-center border-b-2 border-gray-100 pb-3 mb-8">
            <div className="w-2 h-7 bg-red-700 mr-4"></div>
            <div className="flex items-center flex-1 min-w-0">
               <span className="text-red-800 font-black text-2xl tracking-tighter whitespace-nowrap mr-6">信息发布排行榜</span>
               <div className="flex bg-gray-50 p-1 border border-gray-200 overflow-hidden">
                   {tabs.map((tab, index) => (
                     <button 
                       key={index}
                       onClick={() => setActiveTab(index)}
                       className={`px-4 py-1.5 text-sm font-bold transition-colors whitespace-nowrap ${activeTab === index ? 'bg-red-700 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-200'}`}
                     >
                       {tab}
                     </button>
                   ))}
               </div>
            </div>
            <a href="#" className="ml-4 text-gray-400 text-sm hover:text-red-700 font-medium whitespace-nowrap">更多 &raquo;</a>
        </div>

        {/* 排行榜主体 */}
        <div className="flex bg-white flex-1">
          {/* 左侧纵向切换轴 (还原设计图) */}
          <div className="relative w-28 flex flex-col items-center py-2 shrink-0">
            {/* 垂直虚线 */}
            <div className="absolute top-0 bottom-0 left-[76px] w-px border-l border-dashed border-gray-300"></div>
            
            <button 
              onClick={() => setActiveMetric('release')}
              className="relative z-10 flex items-center justify-end w-full pr-4 py-8 transition-all group"
            >
              <span className={`text-xl font-bold mr-4 transition-colors ${activeMetric === 'release' ? 'text-red-600' : 'text-gray-400 group-hover:text-gray-600'}`}>发布量</span>
              <div className={`w-2.5 h-2.5 rounded-full border-2 bg-white transition-all ${activeMetric === 'release' ? 'border-red-600 bg-red-600 ring-4 ring-red-50 scale-125' : 'border-gray-300'}`}></div>
            </button>

            <button 
              onClick={() => setActiveMetric('visit')}
              className="relative z-10 flex items-center justify-end w-full pr-4 py-8 transition-all group"
            >
              <span className={`text-xl font-bold mr-4 transition-colors ${activeMetric === 'visit' ? 'text-red-600' : 'text-gray-400 group-hover:text-gray-600'}`}>访问量</span>
              <div className={`w-2.5 h-2.5 rounded-full border-2 bg-white transition-all ${activeMetric === 'visit' ? 'border-red-600 bg-red-600 ring-4 ring-red-50 scale-125' : 'border-gray-300'}`}></div>
            </button>
          </div>

          {/* 右侧内容：保持 2 列布局适配 1:1 宽度 */}
          <div className="flex-1 pl-6 grid grid-cols-2 gap-x-8 gap-y-1 self-start">
            {RANKINGS.slice(0, 14).map((rank) => (
              <div key={rank.id} className="flex items-center py-2.5 border-b border-transparent hover:bg-gray-50 transition-all group cursor-default overflow-hidden">
                {/* 排名索引 */}
                <div className="w-7 flex justify-center shrink-0">
                  <span className={`w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full border transition-colors ${rank.id <= 3 ? 'bg-gray-100 border-gray-200 text-gray-500' : 'bg-white border-gray-100 text-gray-300'}`}>
                    {rank.id}
                  </span>
                </div>
                
                {/* 单位名称 */}
                <div className="flex-1 min-w-0 mx-4">
                  <span className="text-lg text-gray-700 font-medium truncate block group-hover:text-red-700">
                    {rank.name}
                  </span>
                </div>

                {/* 数据值 */}
                <div className="shrink-0 min-w-[20px] text-right pr-2">
                  <span className="text-xl font-medium text-gray-600 group-hover:text-red-600 font-mono">
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
          <li key={idx} className="flex justify-between items-center group cursor-pointer border-b border-transparent hover:border-gray-50 pb-2 last:border-0 overflow-hidden">
            <div className="flex items-center space-x-3 flex-1 min-w-0 mr-6">
              <span className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-red-600 transition-colors shrink-0"></span>
              {item.category && <span className="text-gray-400 font-bold whitespace-nowrap">[{item.category}]</span>}
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
