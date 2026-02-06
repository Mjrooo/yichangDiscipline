
import React from 'react';
import { MOCK_NEWS_LIST, MOCK_COUNTY_LIST, SPECIAL_TOPICS } from '../constants';

const NewsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-16">
      {/* 左侧列表 */}
      <div className="col-span-6 space-y-12">
        <Section title="委机关" items={MOCK_NEWS_LIST} />
        <Section title="派驻(出)机构" items={MOCK_NEWS_LIST.slice(0, 5)} />
        <Section title="县市区动态" items={MOCK_COUNTY_LIST} />
        <Section title="纪检监察信息" items={MOCK_COUNTY_LIST.slice(0, 7)} tabbed={["政策法规", "理论研究"]} />
      </div>

      {/* 右侧列表 */}
      <div className="col-span-6 space-y-12">
        <Section title="通知公告" items={MOCK_NEWS_LIST.slice(0, 6)} />
        
        <div>
           <Header title="专题专栏" />
           <div className="grid grid-cols-2 gap-4 mt-6">
             {SPECIAL_TOPICS.slice(0, 6).map(topic => (
               <div 
                 key={topic.id} 
                 className="h-24 bg-[#cc0000] flex items-center justify-center rounded-none cursor-pointer hover:bg-red-700 transition-all px-4 border border-red-500 shadow-md group relative overflow-hidden"
               >
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors"></div>
                  <span className="text-white text-xl font-black text-center leading-tight tracking-widest relative z-10">学习贯彻党的二十大精神专题</span>
               </div>
             ))}
           </div>
        </div>

        <Section title="党风廉政" items={MOCK_NEWS_LIST.slice(0, 5)} />
        <Section title="巡视巡察" items={MOCK_NEWS_LIST.slice(0, 4)} />
        <Section title="案例通报" items={MOCK_NEWS_LIST.slice(0, 4)} />
      </div>
    </div>
  );
};

const Header: React.FC<{ title: string; tabbed?: string[] }> = ({ title, tabbed }) => (
  <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
    <div className="flex items-center">
      <div className="w-2 h-7 bg-red-700 mr-4"></div>
      <h3 className="text-red-800 font-black text-2xl tracking-tight">{title}</h3>
      {tabbed && tabbed.map(tab => (
        <span key={tab} className="ml-10 text-gray-500 hover:text-red-700 cursor-pointer text-lg font-medium">{tab}</span>
      ))}
    </div>
    <a href="#" className="text-gray-400 text-sm hover:text-red-700 font-medium">更多 &raquo;</a>
  </div>
);

const Section: React.FC<{ title: string; items: any[]; tabbed?: string[] }> = ({ title, items, tabbed }) => (
  <div>
    <Header title={title} tabbed={tabbed} />
    <ul className="mt-5 space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex justify-between items-center group cursor-pointer border-b border-gray-50 pb-3 last:border-0">
          {/* 左侧文字容器：使用 flex-1 和 min-w-0 确保内层 truncate 生效 */}
          <div className="flex items-center space-x-4 overflow-hidden flex-1 min-w-0 mr-6">
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-none group-hover:bg-red-600 transition-colors shrink-0"></span>
            {item.category && <span className="text-red-800/60 font-bold whitespace-nowrap">[{item.category}]</span>}
            <span className="text-gray-800 truncate group-hover:text-red-700 font-medium text-xl leading-none">{item.title}</span>
          </div>
          {/* 日期字体放大至 text-lg 与 标题 text-xl 更匹配 */}
          <span className="text-gray-400 text-lg font-mono whitespace-nowrap">{item.date}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default NewsGrid;
