import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Clock, 
  BookOpen, 
  Heart, 
  ListTodo, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Eye, 
  TrendingUp, 
  Award,
  Lock,
  Leaf
} from 'lucide-react';
import LanguageSwitcher from '../../components/layout/LanguageSwitcher';
import Footer from '../../components/Footer';
import logo from '../../assets/logo.jpg';

export default function SourcingAbout() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('heritage');

  const historyMilestones = [
    { year: "1980s", title: "Industrial Roots", desc: "Founding of machinery manufacturing trade relationships in Bursa and Izmir, Turkey, supplying custom forged parts." },
    { year: "2010s", title: "African Expansion", desc: "Identifying supply chain bottlenecks in the Sub-Saharan mining markets, initiating direct trade routes with Angola." },
    { year: "2020", title: "AnaMine Sourcing Launch", desc: "Establishing a physical headquarters at Condominio Belas Business Park in Luanda, consolidating MRO operations." },
    { year: "2026", title: "Smart Sourcing & Digital", desc: "Integrating blockchain shipment tracking and real-time custom REST API dashboard syncing between hubs." }
  ];

  const dmaicSteps = [
    { code: "D", phase: "Define", desc: "Identify supply chain lag factors and critical port bottlenecks in Luanda." },
    { code: "M", phase: "Measure", desc: "Log manufacturing timestamps, warehouse inventory volumes, and clearing durations." },
    { code: "A", phase: "Analyze", desc: "Examine lead-time variability to discover root causes of stock depletion." },
    { code: "I", phase: "Improve", desc: "Optimize shipping schedules and establish buffer stocks in our Talatona depot." },
    { code: "C", phase: "Control", desc: "Deploy real-time dashboard notifications to track stock reorder parameters." }
  ];

  return (
    <div className="text-gray-800 min-h-screen flex flex-col bg-slate-50 transition-colors duration-300">
      
      {/* HEADER */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold text-orange-600 hover:text-orange-700 transition flex items-center gap-2">
            <img src={logo} alt="AnaMine Logo" className="h-8 rounded" />
            <span className="text-xl tracking-tight">AnaMine Sourcing</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      {/* NAV */}
      <nav className="max-w-7xl mx-auto w-full px-6 py-6 mt-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
          <ul className="flex flex-wrap gap-4 md:gap-8 text-sm font-bold">
            <li><Link to="/sourcing" className="text-gray-500 hover:text-black px-4 py-2 transition">{t('nav.home')}</Link></li>
            <li><Link to="/sourcing/about" className="text-orange-600 bg-orange-50 px-4 py-2 rounded-xl transition">{t('nav.about')}</Link></li>
            <li><Link to="/sourcing/products" className="text-gray-500 hover:text-black px-4 py-2 transition">{t('nav.products')}</Link></li>
            <li><Link to="/sourcing/news" className="text-gray-500 hover:text-black px-4 py-2 transition">{t('nav.news')}</Link></li>
            <li><Link to="/sourcing/contact" className="text-gray-500 hover:text-black px-4 py-2 transition">{t('nav.contact')}</Link></li>
          </ul>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 space-y-20 animate-fadeInUp">
        
        {/* HEADER BLOCK */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 border border-orange-200 text-xs font-bold rounded-full uppercase tracking-wider">
            Enterprise Profile & Governance
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t('sourcing.about.title')}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('sourcing.about.intro')}
          </p>
        </div>

        {/* CORE PILLARS CARD GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm space-y-4 hover:border-orange-500/20 hover:shadow-md transition duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 text-xl font-bold">🇹🇷</div>
            <h3 className="text-lg font-bold text-gray-900">{t('sourcing.about.pillar1')}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {t('sourcing.about.pillar1_desc')}
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm space-y-4 hover:border-orange-500/20 hover:shadow-md transition duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 text-xl font-bold">📈</div>
            <h3 className="text-lg font-bold text-gray-900">{t('sourcing.about.pillar2')}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {t('sourcing.about.pillar2_desc')}
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm space-y-4 hover:border-orange-500/20 hover:shadow-md transition duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 text-xl font-bold">🛡️</div>
            <h3 className="text-lg font-bold text-gray-900">{t('sourcing.about.pillar3')}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {t('sourcing.about.pillar3_desc')}
            </p>
          </div>
        </div>

        {/* DETAILED CONTENT SELECTOR MATRIX TABS */}
        <section className="bg-white rounded-3xl border shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-4 gap-0">
          
          {/* Tab Sidebar */}
          <div className="bg-slate-50 border-r border-gray-200/80 p-6 flex flex-col gap-2">
            <button 
              onClick={() => setActiveTab('heritage')}
              className={`p-4 rounded-xl text-left font-bold text-sm flex items-center gap-3 transition ${
                activeTab === 'heritage' ? 'bg-orange-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Clock size={16} />
              <span>Heritage & Roots</span>
            </button>
            <button 
              onClick={() => setActiveTab('sixsigma')}
              className={`p-4 rounded-xl text-left font-bold text-sm flex items-center gap-3 transition ${
                activeTab === 'sixsigma' ? 'bg-orange-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <TrendingUp size={16} />
              <span>Lean Six Sigma</span>
            </button>
            <button 
              onClick={() => setActiveTab('conduct')}
              className={`p-4 rounded-xl text-left font-bold text-sm flex items-center gap-3 transition ${
                activeTab === 'conduct' ? 'bg-orange-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Award size={16} />
              <span>Code of Conduct</span>
            </button>
            <button 
              onClick={() => setActiveTab('approach')}
              className={`p-4 rounded-xl text-left font-bold text-sm flex items-center gap-3 transition ${
                activeTab === 'approach' ? 'bg-orange-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Eye size={16} />
              <span>Our Approach</span>
            </button>
          </div>

          {/* Tab Panel Content Area */}
          <div className="lg:col-span-3 p-8 md:p-12 space-y-6">
            
            {activeTab === 'heritage' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-black text-gray-900">{t('sourcing.about.heritage_title')}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t('sourcing.about.heritage_desc')}</p>
                
                {/* Horizontal Milestones Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 border-t border-gray-150">
                  {historyMilestones.map((m, idx) => (
                    <div key={idx} className="space-y-2">
                      <span className="text-lg font-black text-orange-600">{m.year}</span>
                      <h5 className="font-bold text-xs text-gray-900">{m.title}</h5>
                      <p className="text-[10px] text-gray-400 leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'sixsigma' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-black text-gray-900">{t('sourcing.about.sixsigma_title')}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t('sourcing.about.sixsigma_desc')}</p>

                {/* DMAIC Circle Cards */}
                <div className="grid grid-cols-5 gap-2 pt-6 border-t border-gray-150">
                  {dmaicSteps.map((step, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-gray-200 text-center hover:border-orange-500/20 transition duration-300">
                      <div className="w-10 h-10 bg-orange-600 text-white font-black text-lg rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                        {step.code}
                      </div>
                      <h6 className="font-bold text-xs text-gray-900">{step.phase}</h6>
                      <p className="text-[9px] text-gray-400 mt-1 leading-tight hidden sm:block">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'conduct' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-black text-gray-900">{t('sourcing.about.conduct_title')}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t('sourcing.about.conduct_desc')}</p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl border border-gray-150 flex gap-3">
                    <Leaf className="text-emerald-500 shrink-0" size={20} />
                    <div className="space-y-1">
                      <h5 className="font-bold text-xs text-gray-900">Environmental Safeguarding</h5>
                      <p className="text-[10px] text-gray-400 leading-relaxed">Continuous reviews of mineral loading practices to reduce ground contamination and conserve resources.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-150 flex gap-3">
                    <Lock className="text-cyan-500 shrink-0" size={20} />
                    <div className="space-y-1">
                      <h5 className="font-bold text-xs text-gray-900">Compliant Data Protection</h5>
                      <p className="text-[10px] text-gray-400 leading-relaxed">Securing sensitive logistics ledgers, parts codes specifications, and custom billing indexes.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'approach' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-black text-gray-900">Structured Quality Assurance Protocol</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We verify the engineering specifications at the plant before shipping to Angola. We manage comprehensive logistics expediting, freight negotiation, and structured customs clearance pipelines, mitigating administrative overhead and guaranteeing delivery security.
                </p>

                <div className="pt-2 flex gap-4">
                  <Link to="/sourcing/contact" className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition">
                    <span>Contact Sourcing Team</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* OPERATIONS BANNER */}
        <section className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-sm grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden h-72 relative border">
            <img 
              src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=800"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Operational Team"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Our Operational Approach</h2>
            <p className="text-gray-500 text-xs leading-relaxed">
              We believe in transforming vision into concrete business success. Through meticulous supply chain audits, supplier validation, quality assurance protocols at the manufacturer plants in Turkey, and structured customs clearance pipelines in Angola, we deliver unparalleled sourcing reliability.
            </p>
            <div className="pt-2">
              <Link to="/sourcing/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-orange-600 hover:bg-orange-700 transition shadow-sm">
                Partner with Us
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
