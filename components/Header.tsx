
import React from 'react';

const Header: React.FC = () => {
  // 缩小字号至 30，调整 viewBox 确保文字完整显示
  const CommitteeLogo = () => (
    <svg width="420" height="50" viewBox="0 0 420 50" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="38" font-family="'SimSun', 'STSong', serif" font-size="30" font-weight="900" fill="white" letter-spacing="1">中共宜昌市纪律检查委员会</text>
    </svg>
  );

  const CommissionLogo = () => (
    <svg width="340" height="50" viewBox="0 0 340 50" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="38" font-family="'SimSun', 'STSong', serif" font-size="30" font-weight="900" fill="white" letter-spacing="2">宜昌市监察委员会</text>
    </svg>
  );

  return (
    <header className="relative bg-[#cc0000] pt-10 pb-16 overflow-hidden border-b border-red-800/20">
      {/* 祥云底纹背景 */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png'), radial-gradient(circle at 50% -20%, #ffffff 20%, transparent 80%)`,
          backgroundRepeat: 'repeat',
        }}
      ></div>
      
      {/* 装饰性波纹 SVG */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1920 400" preserveAspectRatio="none">
          <path d="M0,150 C400,250 800,50 1200,150 C1600,250 1920,100 1920,150 L1920,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 p-3 text-white/50 text-xs select-none z-10 font-medium">非密网站禁止发布涉密信息</div>
      
      <div className="max-w-[1920px] mx-auto relative z-10 px-10">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
            {/* 党委部分 */}
            <div className="flex items-center space-x-5">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Hammer_and_sickle.svg/100px-Hammer_and_sickle.svg.png" className="w-14 h-14 invert drop-shadow-md" alt="党徽" />
              <div className="drop-shadow-lg origin-left">
                <CommitteeLogo />
              </div>
            </div>

            {/* 垂直装饰线 */}
            <div className="h-10 w-px bg-white/40 hidden lg:block shadow-sm"></div>

            {/* 监委部分 */}
            <div className="flex items-center space-x-5">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/National_Emblem_of_the_People%27s_Republic_of_China.svg/100px-National_Emblem_of_the_People%27s_Republic_of_China.svg.png" className="w-14 h-14 drop-shadow-md" alt="国徽" />
              <div className="drop-shadow-lg origin-left">
                <CommissionLogo />
              </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
