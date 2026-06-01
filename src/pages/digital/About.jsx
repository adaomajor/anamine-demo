import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Terminal, 
  Cpu, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Server, 
  Database,
  ArrowRight,
  Code,
  Network
} from 'lucide-react';
import LanguageSwitcher from '../../components/layout/LanguageSwitcher';
import Footer from '../../components/Footer';
import logo from '../../assets/logo.jpg';

export default function DigitalAbout() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('dna');

  const maturityLevels = [
    { level: "Level 1: Basic", desc: "Manual records, spreadsheet-based tracking, high stockout risks, and lack of system synchronization." },
    { level: "Level 2: Standard", desc: "Local ERP databases, manual supplier bidding portals, and basic telemetry monitoring." },
    { level: "Level 3: Proactive", desc: "Automated inventory restocking points, cloud dashboards, and unified vendor contracts." },
    { level: "Level 4: Optimized", desc: "AI predictive stockout modeling, edge IoT conveyor health telemetry, and blockchain ethical traceability." }
  ];

  return (
    <div className="text-gray-100 min-h-screen flex flex-col bg-[#0A0D12] transition-colors duration-300">
      
      {/* HEADER */}
      <header className="w-full bg-[#0A0D12]/75 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold text-white flex items-center gap-2">
            <img src={logo} alt="AnaMine Logo" className="h-8 rounded" />
            <span className="text-xl tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-300 bg-clip-text text-transparent">
              AnaMine Digital
            </span>
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      {/* NAV */}
      <nav className="max-w-7xl mx-auto w-full px-6 py-6 mt-4">
        <div className="bg-[#0F141D]/60 rounded-2xl border border-gray-800 p-4 backdrop-blur-sm">
          <ul className="flex flex-wrap gap-4 md:gap-8 text-sm font-semibold">
            <li><Link to="/digital" className="text-gray-400 hover:text-white px-4 py-2 transition">{t('nav.home')}</Link></li>
            <li><Link to="/digital/about" className="px-4 py-2 bg-cyan-950 text-cyan-300 rounded-xl transition">{t('nav.about')}</Link></li>
            <li><Link to="/digital/services" className="text-gray-400 hover:text-white px-4 py-2 transition">{t('nav.services')}</Link></li>
            <li><Link to="/digital/news" className="text-gray-400 hover:text-white px-4 py-2 transition">{t('nav.news')}</Link></li>
            <li><Link to="/digital/contact" className="text-gray-400 hover:text-white px-4 py-2 transition">{t('nav.contact')}</Link></li>
          </ul>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 space-y-20 animate-fadeInUp">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold rounded-full uppercase tracking-wider">
            Enterprise Digital Architectures
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {t('digital.about.title')}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            {t('digital.about.intro')}
          </p>
        </div>

        {/* Pillars Card Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#0F141D]/40 rounded-3xl border border-gray-800 p-8 shadow-sm space-y-4 hover:border-cyan-500/20 hover:shadow-2xl transition duration-300">
            <div className="w-12 h-12 bg-cyan-950 text-cyan-400 rounded-xl flex items-center justify-center font-bold">📊</div>
            <h3 className="text-lg font-bold text-white">{t('digital.about.pillar1')}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t('digital.about.pillar1_desc')}
            </p>
          </div>

          <div className="bg-[#0F141D]/40 rounded-3xl border border-gray-800 p-8 shadow-sm space-y-4 hover:border-cyan-500/20 hover:shadow-2xl transition duration-300">
            <div className="w-12 h-12 bg-cyan-950 text-cyan-400 rounded-xl flex items-center justify-center font-bold">🤖</div>
            <h3 className="text-lg font-bold text-white">{t('digital.about.pillar2')}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t('digital.about.pillar2_desc')}
            </p>
          </div>

          <div className="bg-[#0F141D]/40 rounded-3xl border border-gray-800 p-8 shadow-sm space-y-4 hover:border-cyan-500/20 hover:shadow-2xl transition duration-300">
            <div className="w-12 h-12 bg-cyan-950 text-cyan-400 rounded-xl flex items-center justify-center font-bold">🔗</div>
            <h3 className="text-lg font-bold text-white">{t('digital.about.pillar3')}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t('digital.about.pillar3_desc')}
            </p>
          </div>
        </div>

        {/* Tab Matrix Panel */}
        <section className="bg-[#0F141D]/80 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-4 gap-0">
          
          {/* Tab Sidebar */}
          <div className="bg-[#0A0D12]/50 border-r border-gray-800/80 p-6 flex flex-col gap-2">
            <button 
              onClick={() => setActiveTab('dna')}
              className={`p-4 rounded-xl text-left font-bold text-sm flex items-center gap-3 transition ${
                activeTab === 'dna' ? 'bg-cyan-650 text-cyan-300 border border-cyan-800/60 shadow-md bg-cyan-950/40' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <Code size={16} />
              <span>Software DNA</span>
            </button>
            <button 
              onClick={() => setActiveTab('model')}
              className={`p-4 rounded-xl text-left font-bold text-sm flex items-center gap-3 transition ${
                activeTab === 'model' ? 'bg-cyan-650 text-cyan-300 border border-cyan-800/60 shadow-md bg-cyan-950/40' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <Terminal size={16} />
              <span>Predictive Models</span>
            </button>
            <button 
              onClick={() => setActiveTab('maturity')}
              className={`p-4 rounded-xl text-left font-bold text-sm flex items-center gap-3 transition ${
                activeTab === 'maturity' ? 'bg-cyan-650 text-cyan-300 border border-cyan-800/60 shadow-md bg-cyan-950/40' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <Layers size={16} />
              <span>Maturity Audits</span>
            </button>
            <button 
              onClick={() => setActiveTab('sustainability')}
              className={`p-4 rounded-xl text-left font-bold text-sm flex items-center gap-3 transition ${
                activeTab === 'sustainability' ? 'bg-cyan-650 text-cyan-300 border border-cyan-800/60 shadow-md bg-cyan-950/40' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <ShieldCheck size={16} />
              <span>Safety & Security</span>
            </button>
          </div>

          {/* Panel Content Area */}
          <div className="lg:col-span-3 p-8 md:p-12 space-y-6">
            
            {activeTab === 'dna' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-black text-white">{t('digital.about.tech_dna_title')}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t('digital.about.tech_dna_desc')}</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-800/60">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-gray-500">Frameworks</span>
                    <h5 className="font-mono text-xs text-white">React, Node, Vite</h5>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-gray-500">Integrations</span>
                    <h5 className="font-mono text-xs text-white">REST APIs, RPC</h5>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-gray-500">Databases</span>
                    <h5 className="font-mono text-xs text-white">PostgreSQL, Redis</h5>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-gray-500">Pipelines</span>
                    <h5 className="font-mono text-xs text-white">Docker, Kubernetes</h5>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'model' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-black text-white">{t('digital.about.agile_title')}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t('digital.about.agile_desc')}</p>

                <div className="p-4 rounded-xl bg-cyan-950/10 border border-cyan-800/30 flex gap-3">
                  <Cpu className="text-cyan-400 shrink-0 mt-0.5" size={20} />
                  <div className="space-y-1">
                    <h5 className="font-bold text-xs text-white">Recurrent Neural Network (RNN) Modeling</h5>
                    <p className="text-[10px] text-gray-400 leading-relaxed">We leverage advanced sequence models built in PyTorch, scanning historical parts logs to predict depletion profiles up to 30 days in advance.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'maturity' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-black text-white">IT Maturity Evaluation Index</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We benchmark IT systems across four defined evolutionary maturity phases:
                </p>

                {/* Vertical Maturity Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-800/60">
                  {maturityLevels.map((lvl, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-gray-800/80 space-y-2">
                      <h5 className="font-bold text-xs text-cyan-400">{lvl.level}</h5>
                      <p className="text-[10px] text-gray-400 leading-relaxed">{lvl.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'sustainability' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-black text-white">Compliant Security Framework</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Every software module we deploy complies strictly with data privacy laws and cybersecurity best practices. Our blockchain certificate verification channels guarantee that critical metal transactions logs are untampered, ethical, and secure.
                </p>

                <div className="pt-2 flex gap-4">
                  <Link to="/digital/contact" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition">
                    <span>Inquire System Audits</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* OPERATIONS BANNER */}
        <section className="bg-[#0F141D]/40 p-8 md:p-12 rounded-3xl border border-gray-800 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden h-72 border border-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=800"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Systems Integration"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Enterprise IT Integrity</h2>
            <p className="text-gray-400 text-xs leading-relaxed">
              With a deep understanding of both the mining industry and enterprise software development, AnaMine Comercio e Servico LDA is your trusted partner. Our engineers work in secure labs to craft predictive databases, edge middlewares, and secure ledgers matching your operational roadmap.
            </p>
            <div className="pt-2">
              <Link to="/digital/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-xl text-white bg-cyan-600 hover:bg-cyan-500 transition shadow-lg shadow-cyan-600/15">
                Request Technology Consulting
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
