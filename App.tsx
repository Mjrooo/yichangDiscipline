
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
      
      <main className="max-w-[1200px] mx-auto py-6 space-y-8 px-4">
        {/* Top Feature Section */}
        <BannerSection />

        {/* Integration Buttons */}
        <div className="grid grid-cols-4 gap-6">
          <PlatformButton 
            title="协同办公系统" 
            icon={<DocumentIcon />} 
            gradient="from-red-600 to-red-700" 
          />
          <PlatformButton 
            title="监督执纪执法一体化平台" 
            icon={<EyeIcon />} 
            gradient="from-red-700 to-red-800" 
          />
          <PlatformButton 
            title="协同办公系统" 
            icon={<DocumentIcon />} 
            gradient="from-red-600 to-red-700" 
          />
          <PlatformButton 
            title="监督执纪执法一体化平台" 
            icon={<EyeIcon />} 
            gradient="from-red-700 to-red-800" 
          />
        </div>

        {/* Multi-column News Lists */}
        <NewsGrid />

        {/* Calligraphy Banner */}
        <div className="w-full bg-[#fcebeb] py-6 px-12 flex justify-between items-center border border-red-200">
            <div className="text-[#a16207] text-3xl font-serif italic font-bold tracking-wider">廉以修身, 洁以养性</div>
            <div className="text-[#a16207] text-3xl font-serif italic font-bold tracking-wider">廉洁在志, 清正在德</div>
        </div>

        {/* Rankings and Sub-lists */}
        <RankingSection />

        {/* Bottom Tab Links */}
        <LinkFooter />
      </main>

      <Footer />
    </div>
  );
};

// Helper Components - Using rounded-sm for a more formal government feel
const PlatformButton: React.FC<{ title: string; icon: React.ReactNode; gradient: string }> = ({ title, icon, gradient }) => (
  <button className={`flex items-center justify-center space-x-3 p-4 rounded-sm shadow-sm bg-gradient-to-r ${gradient} text-white transition-all hover:brightness-110 active:scale-[0.98]`}>
    <div className="bg-white/10 p-2 rounded-none border border-white/20">{icon}</div>
    <span className="font-bold text-lg leading-tight text-left">{title}</span>
  </button>
);

const DocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

export default App;
