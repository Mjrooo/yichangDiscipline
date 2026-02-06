
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-[#cc0000] pt-10 pb-16 overflow-hidden">
      {/* Traditional Cloud/Auspicious Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png'), radial-gradient(circle at 50% -20%, #ffffff 0%, transparent 70%)`,
          backgroundRepeat: 'repeat',
        }}
      ></div>
      
      {/* Decorative Cloud SVG Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 300" preserveAspectRatio="none">
          <path d="M0,150 C200,200 400,100 600,150 C800,200 1000,100 1200,150 L1200,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 p-2 text-white/60 text-[10px] select-none z-10">非密网站禁止发布涉密信息</div>
      
      <div className="max-w-[1200px] mx-auto relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
            {/* Logo Part 1: CPC Committee */}
            <div className="flex items-center space-x-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Hammer_and_sickle.svg/100px-Hammer_and_sickle.svg.png" className="w-14 h-14 invert drop-shadow-md" alt="CPC Emblem" />
              <img 
                src="https://placehold.co/450x60/cc0000/ffffff?text=中共宜昌市纪律检查委员会&font=serif" 
                alt="中共宜昌市纪律检查委员会" 
                className="h-12 object-contain brightness-110 drop-shadow-lg"
              />
            </div>

            {/* Vertical Decorative Divider */}
            <div className="h-10 w-px bg-white/30 hidden lg:block"></div>

            {/* Logo Part 2: Supervision Commission */}
            <div className="flex items-center space-x-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/National_Emblem_of_the_People%27s_Republic_of_China.svg/100px-National_Emblem_of_the_People%27s_Republic_of_China.svg.png" className="w-14 h-14 drop-shadow-md" alt="National Emblem" />
              <img 
                src="https://placehold.co/320x60/cc0000/ffffff?text=宜昌市监察委员会&font=serif" 
                alt="宜昌市监察委员会" 
                className="h-12 object-contain brightness-110 drop-shadow-lg"
              />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
