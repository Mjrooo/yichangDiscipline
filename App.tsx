
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import BannerSection from './components/BannerSection';
import NewsGrid from './components/NewsGrid';
import RankingSection from './components/RankingSection';
import LinkFooter from './components/LinkFooter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      
      {/* 主要显示区域固定 1920px 宽度 */}
      <main className="max-w-[1920px] mx-auto py-10 space-y-12 px-10">
        {/* 顶部焦点区 */}
        <BannerSection />

        {/* 业务系统入口 */}
        <div className="grid grid-cols-4 gap-10">
          <PlatformButton 
            title="协同办公系统" 
            icon={<DocumentIcon />} 
            gradient="from-[#cc0000] to-[#b30000]" 
          />
          <PlatformButton 
            title="监督执纪执法一体化平台" 
            icon={<EyeIcon />} 
            gradient="from-[#b30000] to-[#990000]" 
          />
          <PlatformButton 
            title="内部政务管理系统" 
            icon={<DocumentIcon />} 
            gradient="from-[#cc0000] to-[#b30000]" 
          />
          <PlatformButton 
            title="纪检监察综合业务平台" 
            icon={<EyeIcon />} 
            gradient="from-[#b30000] to-[#990000]" 
          />
        </div>

        {/* 多栏目新闻列表 */}
        <NewsGrid />

        {/* 廉政标语横幅 */}
        <div className="w-full bg-[#fdf5f5] py-12 px-20 flex justify-around items-center border border-red-100 shadow-inner">
            <div className="text-[#8b0000] text-5xl font-serif italic font-bold tracking-[0.2em] drop-shadow-sm">廉以修身, 洁以养性</div>
            <div className="h-16 w-px bg-red-200"></div>
            <div className="text-[#8b0000] text-5xl font-serif italic font-bold tracking-[0.2em] drop-shadow-sm">廉洁在志, 清正在德</div>
        </div>

        {/* 排行榜与子列表 */}
        <RankingSection />

        {/* 友情链接 */}
        <LinkFooter />
      </main>

      <Footer />
    </div>
  );
};

const PlatformButton: React.FC<{ title: string; icon: React.ReactNode; gradient: string }> = ({ title, icon, gradient }) => (
  <button className={`flex items-center justify-center space-x-6 p-8 rounded-none shadow-md bg-gradient-to-r ${gradient} text-white transition-all hover:scale-[1.01] hover:shadow-lg active:scale-[0.99]`}>
    <div className="bg-white/10 p-4 border border-white/20">{icon}</div>
    <span className="font-bold text-2xl leading-tight text-left tracking-wider">{title}</span>
  </button>
);

const DocumentIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

export default App;
