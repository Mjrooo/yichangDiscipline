
import React, { useState } from 'react';

const BannerSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="grid grid-cols-12 gap-10 h-[500px]">
      {/* 轮播图 */}
      <div className="col-span-7 relative rounded-none overflow-hidden shadow-md border border-gray-100 group">
        <img 
          src={`https://picsum.photos/seed/yichang-${activeSlide}/1200/500`} 
          alt="焦点图" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white flex justify-between items-end">
            <span className="text-2xl font-bold tracking-wide">摄影摄像记者聚焦全省纪检监察系统先进表彰大会现场</span>
            <div className="flex space-x-3 pb-2">
                {[0, 1, 2, 3, 4].map(i => (
                  <button 
                    key={i} 
                    onClick={() => setActiveSlide(i)}
                    className={`w-3 h-3 rounded-none transition-all ${activeSlide === i ? 'bg-white scale-150 shadow-white' : 'bg-white/40 hover:bg-white/60'}`}
                  />
                ))}
            </div>
        </div>
      </div>

      {/* 头条新闻 */}
      <div className="col-span-5 flex flex-col bg-white p-2">
        <div className="flex border-b-2 border-gray-100 mb-6">
            <button className="px-10 py-3 border-b-4 border-[#cc0000] text-[#cc0000] font-black text-2xl tracking-tighter">重要新闻</button>
            <button className="px-10 py-3 text-gray-500 hover:text-red-600 text-2xl">工作动态</button>
            <div className="ml-auto flex items-center pr-4">
                <a href="#" className="text-gray-400 text-sm hover:text-red-700 font-medium">更多 &raquo;</a>
            </div>
        </div>
        <div className="space-y-10 px-4">
            <div>
                <h2 className="text-3xl font-black text-gray-900 cursor-pointer hover:text-red-700 leading-[1.3] transition-colors">
                    宜昌市纪委监委全会强调：坚定不移推进全面从严治党，为高质量发展护航
                </h2>
                <p className="mt-5 text-gray-600 text-lg leading-relaxed line-clamp-3">
                    全会深入学习贯彻党的二十届三中全会精神，总结2024年工作，部署2025年任务。会议指出，要始终保持正风肃纪反腐的战略定力，持续深化不敢腐、不能腐、不想腐一体推进。
                </p>
            </div>
            <ul className="space-y-6">
                {[
                  "市纪委监委深入开展群众身边不正之风和腐败问题集中整治",
                  "在省委巡视组指导下精准开展市级巡察工作动态",
                  "清廉宜昌建设：擦亮清廉底色，构筑廉洁高地"
                ].map((text, i) => (
                    <li key={i} className="flex items-center space-x-4 group cursor-pointer border-b border-gray-50 pb-4 last:border-0">
                        <span className="w-2 h-2 bg-red-600 rounded-none shrink-0"></span>
                        <span className="text-gray-800 text-xl group-hover:text-red-700 truncate font-semibold">{text}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="mt-auto text-right pr-4 pb-4">
            <a href="#" className="text-red-600 text-base font-bold hover:underline">查看详情 &raquo;</a>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
