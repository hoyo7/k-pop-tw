import React, { useState, useEffect } from 'react';
import { Bell, Calendar, Mail, ChevronRight, CheckCircle, Ticket, Music, Heart, ArrowRight, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // 模擬倒數計時邏輯 (設定為 3 天後的某個時間)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const m = Math.floor((difference / 1000 / 60) % 60);
      const s = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      alert(`感謝訂閱！確認信已發送至 ${email}`);
      setEmail('');
    }
  };

  const groups = [
    { name: 'SEVENTEEN', color: 'from-blue-200 to-pink-200', text: 'text-slate-800' },
    { name: 'BTS', color: 'from-purple-600 to-purple-400', text: 'text-white' },
    { name: 'IVE', color: 'from-red-500 to-pink-500', text: 'text-white' },
    { name: 'aespa', color: 'from-indigo-500 to-purple-500', text: 'text-white' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-pink-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer">
              <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                k-pop.tw
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="hover:text-pink-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">功能介紹</a>
                <a href="#groups" className="hover:text-pink-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">支援團體</a>
                <a href="#subscribe" className="bg-white text-slate-900 hover:bg-pink-50 transition-colors px-4 py-2 rounded-full text-sm font-bold">
                  免費訂閱
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">功能介紹</a>
              <a href="#groups" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">支援團體</a>
              <a href="#subscribe" onClick={() => setIsMenuOpen(false)} className="text-pink-400 font-bold block px-3 py-2 rounded-md text-base">立即訂閱</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            專為台灣追星族設計
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
            不再錯過你愛豆的<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">重要時刻</span>
          </h1>
          
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            我們幫你整理售票、演唱會、簽名會、回歸等重要時間，
            並在活動前寄送提醒，讓你不用每天刷社群、怕錯過。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#subscribe" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-pink-50 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
              <Mail size={20} />
              訂閱活動提醒
            </a>
            <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 backdrop-blur border border-white/10 text-white rounded-full font-medium text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              了解更多
              <ArrowRight size={20} />
            </a>
          </div>

        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-slate-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">我們幫你做的三件事</h2>
            <div className="w-16 h-1 bg-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-pink-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Bell className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">重要時間提醒</h3>
              <p className="text-slate-400 leading-relaxed">
                在售票或活動前 <span className="text-blue-400 font-bold">24 小時</span> 寄送提醒 Email，確保你做好準備，不錯過任何關鍵時刻。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-pink-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                <Calendar className="text-pink-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">活動倒數整理</h3>
              <p className="text-slate-400 leading-relaxed">
                清楚顯示還有多久，不用自己算時間。視覺化的倒數介面，讓你一眼掌握剩餘天數。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-pink-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Mail className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">訂閱制服務</h3>
              <p className="text-slate-400 leading-relaxed">
                只追你關心的團體，<span className="text-purple-400 font-bold">不收垃圾資訊</span>。我們尊重你的信箱，只傳送最有價值的情報。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Groups Section */}
      <div id="groups" className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">目前支援的團體／藝人</h2>
                    <p className="text-slate-400">持續新增中，點選團體即可查看近期活動</p>
                </div>
                <button className="text-sm text-pink-400 hover:text-pink-300 flex items-center gap-1 font-medium transition-colors">
                    查看全部 <ChevronRight size={16} />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {groups.map((group, index) => (
                    <div key={index} className={`group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer transition-transform hover:-translate-y-2`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                        {/* Decorative pattern */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <Music className={`w-6 h-6 ${group.text} opacity-70`} />
                                <Heart className={`w-6 h-6 ${group.text} opacity-0 group-hover:opacity-100 transition-opacity scale-0 group-hover:scale-100 duration-300`} fill="currentColor" />
                            </div>
                            <div>
                                <h3 className={`text-2xl font-black ${group.text} tracking-tighter`}>{group.name}</h3>
                                <p className={`text-sm ${group.text} opacity-80 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300`}>
                                    查看倒數 →
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="py-24 bg-slate-900 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-16">使用方式很簡單</h2>
            
            <div className="space-y-4">
                {[
                    { step: '1', title: '選擇你追的團體', desc: '在首頁找到你的本命，點擊進入專屬頁面。' },
                    { step: '2', title: '查看活動倒數', desc: '確認接下來即將發生的演唱會、售票或回歸日期。' },
                    { step: '3', title: '留下 Email 訂閱提醒', desc: '輸入信箱，我們會在活動開始前主動通知你。' }
                ].map((item, index) => (
                    <div key={index} className="flex items-center gap-6 bg-slate-950 p-6 rounded-2xl border border-white/5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-pink-500 border border-slate-700">
                            {item.step}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Subscription CTA Section */}
      <div id="subscribe" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/20"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            準備好追星了嗎？
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            現在就訂閱，不錯過任何一場演唱會與回歸舞台。
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-slate-800/50 p-2 rounded-2xl border border-white/10 backdrop-blur-sm">
            <input
              type="email"
              required
              placeholder="輸入你的 Email"
              className="flex-1 bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 px-4 py-3 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-pink-500/25 whitespace-nowrap"
            >
              訂閱提醒
            </button>
          </form>
          <p className="text-xs text-slate-500 mt-4">
            我們承諾保護你的隱私，絕不發送垃圾郵件。
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <span className="text-xl font-black tracking-tighter text-white mb-4 block">k-pop.tw</span>
                    <p className="text-slate-500 text-sm max-w-xs">
                        韓星活動提醒服務。本站僅提供時間整理與提醒服務，不轉載新聞、不提供八卦內容。
                    </p>
                </div>
                <div className="flex flex-col md:items-end gap-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                         <CheckCircle size={14} className="text-green-500"/> 資料來源：官方公告或售票平台
                    </div>
                    <a href="mailto:hello@k-pop.tw" className="hover:text-pink-400 transition-colors">
                        聯絡我們：hello@k-pop.tw
                    </a>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
                &copy; 2024 k-pop.tw All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;