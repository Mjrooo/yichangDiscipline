
import React from 'react';

const LinkFooter: React.FC = () => {
  const categories = [
    { name: "中央纪委国家监委", active: false },
    { name: "湖北省纪委监委", active: false },
    { name: "县市区纪委监委", active: false },
    { name: "委机关部室", active: true },
    { name: "派驻(出)机构", active: false },
  ];

  const subLinks = ["办公室", "信访室", "第三监督检查室", "第四监督检查室", "驻廉工作队", "反腐教育中心"];

  return (
    <div className="space-y-6">
      <div className="flex items-center border-b border-gray-200 pb-4">
        <div className="text-red-700 font-bold mr-6 text-lg">友情链接</div>
        <div className="flex bg-gray-100 p-0.5 rounded-none space-x-1 border border-gray-200">
           {categories.map((cat, i) => (
             <button 
                key={i} 
                className={`px-6 py-2 rounded-none text-sm font-medium transition-all ${cat.active ? 'bg-red-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}
             >
               {cat.name}
             </button>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {[0, 1, 2, 3].map(col => (
          <ul key={col} className="space-y-3">
            {subLinks.map((link, i) => (
              <li key={i} className="text-gray-600 text-sm cursor-pointer hover:text-red-600 transition-colors flex items-center space-x-2">
                <span className="text-gray-300">|</span>
                <span>{link}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default LinkFooter;
