
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#8b0000] text-white py-16 mt-20 border-t-8 border-[#6b0000]">
      <div className="max-w-[1920px] mx-auto text-center space-y-6">
        <div className="flex justify-center space-x-12 mb-8">
            <a href="#" className="text-lg hover:underline underline-offset-4">关于我们</a>
            <a href="#" className="text-lg hover:underline underline-offset-4">联系方式</a>
            <a href="#" className="text-lg hover:underline underline-offset-4">法律声明</a>
            <a href="#" className="text-lg hover:underline underline-offset-4">网站地图</a>
        </div>
        <div className="h-px w-64 bg-white/20 mx-auto"></div>
        <p className="text-xl font-black tracking-widest uppercase">版权所有：中共宜昌市纪律检查委员会 宜昌市监察委员会</p>
        <p className="text-sm text-white/50 font-mono">ICP备案号：鄂ICP备2025000001号-1 | 鄂公网安备42050002000001号</p>
        <div className="mt-8 opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Government_of_China_Logo.png" className="h-16 mx-auto" alt="党政机关" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
