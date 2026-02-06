
import React from 'react';
import { MOCK_NEWS_LIST, MOCK_COUNTY_LIST, SPECIAL_TOPICS } from '../constants';

const NewsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Left Columns */}
      <div className="col-span-6 space-y-8">
        <Section title="委机关" items={MOCK_NEWS_LIST} />
        <Section title="派驻(出)机构" items={MOCK_NEWS_LIST.slice(0, 5)} />
        <Section title="县市区动态" items={MOCK_COUNTY_LIST} />
        <Section title="纪检监察信息" items={MOCK_COUNTY_LIST.slice(0, 7)} tabbed={["政策法规"]} />
      </div>

      {/* Right Columns */}
      <div className="col-span-6 space-y-8">
        <Section title="通知公告" items={MOCK_NEWS_LIST.slice(0, 6)} />
        
        <div>
           <Header title="专题专栏" />
           <div className="grid grid-cols-2 gap-2 mt-4">
             {SPECIAL_TOPICS.map(topic => (
               <div 
                 key={topic.id} 
                 className="h-16 bg-red-600 flex items-center justify-center rounded-none cursor-pointer hover:bg-red-700 transition-colors px-2 border border-red-500 shadow-sm"
               >
                  <span className="text-white text-xs font-bold text-center leading-tight">学习贯彻党的二十大精神</span>
               </div>
             ))}
           </div>
        </div>

        <Section title="党风党政" items={MOCK_NEWS_LIST.slice(0, 5)} />
        <Section title="巡查巡视" items={MOCK_NEWS_LIST.slice(0, 4)} />
        <Section title="通报曝光" items={MOCK_NEWS_LIST.slice(0, 4)} />
      </div>
    </div>
  );
};

const Header: React.FC<{ title: string; tabbed?: string[] }> = ({ title, tabbed }) => (
  <div className="flex items-center justify-between border-b border-gray-200 pb-1">
    <div className="flex items-center">
      <div className="w-1.5 h-5 bg-red-600 mr-2 rounded-none"></div>
      <h3 className="text-red-700 font-bold text-base">{title}</h3>
      {tabbed && tabbed.map(tab => (
        <span key={tab} className="ml-6 text-gray-400 hover:text-red-600 cursor-pointer text-sm">{tab}</span>
      ))}
    </div>
    <a href="#" className="text-gray-400 text-[10px] hover:text-red-600">更多 >></a>
  </div>
);

const Section: React.FC<{ title: string; items: any[]; tabbed?: string[] }> = ({ title, items, tabbed }) => (
  <div>
    <Header title={title} tabbed={tabbed} />
    <ul className="mt-3 space-y-2.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex justify-between items-center group cursor-pointer text-[13px]">
          <div className="flex items-center space-x-2 overflow-hidden">
            <span className="w-1 h-1 bg-gray-300 rounded-none group-hover:bg-red-600 transition-colors"></span>
            {item.category && <span className="text-gray-400 whitespace-nowrap">{item.category}:</span>}
            <span className="text-gray-700 truncate group-hover:text-red-600">{item.title}</span>
          </div>
          <span className="text-gray-400 text-xs ml-4">{item.date}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default NewsGrid;
