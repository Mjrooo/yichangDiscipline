
import React from 'react';

const LinkFooter: React.FC = () => {
  const categories = [
    { name: "中央纪委国家监委", active: false },
    { name: "湖北省纪委监委", active: false },
    { name: "县市区纪委监委", active: false },
    { name: "委机关部室", active: true },
    { name: "派驻(出)机构", active: false },
    { name: "重点国有企业", active: false },
  ];

  const subLinks = ["办公室", "信访室", "第一监督检查室", "第二监督检查室", "第三监督检查室", "第四监督检查室", "第五监督检查室", "案件审理室", "驻廉办", "廉政教育中心"];

  return (
    <div className="space-y-10 pt-10 border-t-4 border-[#cc0000]">
      <div className="flex items-center border-b border-gray-200 pb-6">
        <div className="text-red-800 font-black mr-12 text-2xl tracking-tighter">友情链接导航</div>
        <div className="flex bg-gray-100 p-1 rounded-none space-x-2 border border-gray-200">
           {categories.map((cat, i) => (
             <button 
                key={i} 
                className={`px-8 py-3 rounded-none text-base font-bold transition-all ${cat.active ? 'bg-red-700 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
             >
               {cat.name}
             </button>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-12 px-4">
        {[0, 1, 2, 3, 4].map(col => (
          <ul key={col} className="space-y-4">
            {subLinks.map((link, i) => (
              <li key={i} className="text-gray-700 text-lg cursor-pointer hover:text-red-700 transition-all flex items-center group">
                <span className="text-red-300 mr-3 font-bold group-hover:text-red-700">|</span>
                <span className="group-hover:translate-x-1 transition-transform">{link}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default LinkFooter;
