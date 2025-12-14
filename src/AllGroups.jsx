import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const AllGroups = () => {
  const groups = ['SEVENTEEN', 'BTS', 'IVE', 'aespa', 'BLACKPINK', 'TWICE'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-pink-500 selection:text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black">全部支援團體</h1>
            <p className="text-slate-400">點擊團體以查看該團體的近期活動（示意頁面）</p>
          </div>
          <Link to="/" className="text-sm text-pink-400 hover:text-pink-300 flex items-center gap-1 font-medium">
            返回首頁 <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {groups.map((g) => (
            <div key={g} className="p-6 rounded-2xl bg-slate-900 border border-white/5">
              <h3 className="font-bold text-lg">{g}</h3>
              <p className="text-slate-400 text-sm mt-2">示意：近期活動整理與倒數</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllGroups;
