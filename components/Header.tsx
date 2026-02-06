
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-b from-red-600 to-red-700 pt-6 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 text-white/40 text-xs select-none">非密网站禁止发布涉密信息</div>
      
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center space-y-4">
        <div className="flex items-center space-x-12">
            {/* CPC Emblem */}
            <div className="flex items-center space-x-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Hammer_and_sickle.svg/100px-Hammer_and_sickle.svg.png" className="w-16 h-16 invert" alt="CPC" />
              <h1 className="text-white text-4xl font-bold tracking-widest drop-shadow-md" style={{ fontFamily: 'SimSun, serif' }}>
                中共宜昌市纪律检查委员会
              </h1>
            </div>

            {/* National Emblem */}
            <div className="flex items-center space-x-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/National_Emblem_of_the_People%27s_Republic_of_China.svg/100px-National_Emblem_of_the_People%27s_Republic_of_China.svg.png" className="w-16 h-16" alt="National Emblem" />
              <h1 className="text-white text-4xl font-bold tracking-widest drop-shadow-md" style={{ fontFamily: 'SimSun, serif' }}>
                宜昌市监察委员会
              </h1>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
