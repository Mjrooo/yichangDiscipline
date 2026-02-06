
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-800 text-white py-12 mt-12">
      <div className="max-w-[1200px] mx-auto text-center space-y-2">
        <p className="text-sm font-medium tracking-wide">版权所有：中共宜昌市纪律检查委员会 宜昌市监察委员会</p>
        <p className="text-xs text-white/60">ICP备案号：鄂ICP备XXXXXX号-X | 鄂公网安备XXXXXXXXXXXXXX号</p>
      </div>
    </footer>
  );
};

export default Footer;
