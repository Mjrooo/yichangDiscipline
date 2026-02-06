
import React, { useState } from 'react';

const BannerSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="grid grid-cols-12 gap-6 h-[340px]">
      {/* Carousel */}
      <div className="col-span-6 relative rounded-none overflow-hidden shadow-sm border border-gray-100 group">
        <img 
          src={`https://picsum.photos/seed/yichang-${activeSlide}/600/340`} 
          alt="Main banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white flex justify-between items-center">
            <span className="text-sm font-medium">摄影摄像记者聚焦会议中心新闻发布会现场</span>
            <div className="flex space-x-2">
                {[0, 1, 2, 3, 4].map(i => (
                  <button 
                    key={i} 
                    onClick={() => setActiveSlide(i)}
                    className={`w-2 h-2 rounded-none transition-all ${activeSlide === i ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'}`}
                  />
                ))}
            </div>
        </div>
      </div>

      {/* Headlines */}
      <div className="col-span-6 flex flex-col bg-white">
        <div className="flex border-b border-gray-200 mb-4">
            <button className="px-6 py-2 border-b-2 border-red-600 text-red-700 font-bold text-base">重要新闻</button>
            <button className="px-6 py-2 text-gray-500 hover:text-red-600 text-base">工作动态</button>
            <div className="ml-auto flex items-center pr-2">
                <a href="#" className="text-gray-400 text-xs hover:text-red-600">更多 >></a>
            </div>
        </div>
        <div className="space-y-6 px-2">
            <div>
                <h2 className="text-xl font-bold text-gray-800 cursor-pointer hover:text-red-600 leading-tight">
                    电动自行车禁行路段是否会调整? 政协委员与政府部门现场交流沟通讨论
                </h2>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed line-clamp-2">
                    在省委十二届五次全会上强调 深入学习贯彻习近平总书记重要讲话精神 以更高标准更实举措推进全面从严治党，为加快建设全国构建新发展格局先行区提供坚强保障。
                </p>
            </div>
            <ul className="space-y-4">
                {["用浩荡清风护航支点建设取得决定性进展 — 记全市纪检监察工作会议", "在省委十二届五次全会上强调 深入学习贯彻习近平总书记重要讲话精神"].map((text, i) => (
                    <li key={i} className="flex items-center space-x-2 group cursor-pointer">
                        <span className="w-1 h-1 bg-red-600 rounded-none"></span>
                        <span className="text-gray-700 text-sm group-hover:text-red-600 truncate font-medium">{text}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="mt-auto text-right pr-2 pb-2">
            <a href="#" className="text-gray-400 text-xs hover:text-red-600">查看详情 >></a>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
