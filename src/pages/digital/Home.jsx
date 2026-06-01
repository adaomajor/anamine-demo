import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Database, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  Activity, 
  TrendingUp, 
  Boxes, 
  AlertTriangle,
  RefreshCw,
  Server
} from 'lucide-react';
import LanguageSwitcher from '../../components/layout/LanguageSwitcher';
import Footer from '../../components/Footer';
import logo from '../../assets/logo.jpg';

export default function DigitalHome() {
  const { t } = useTranslation();
  const [dashboardTab, setDashboardTab] = useState('inventory');
  const [loadingDemo, setLoadingDemo] = useState(false);

  // MOCK TELEMETRY METRICS
  const inventoryMetrics = [
    { label: "Conveyor Spindle Reserves", status: "Optimal", count: "142 units", color: "text-emerald-400" },
    { label: "Carbide Drill Core Spares", status: "Restock Warning", count: "14 units", color: "text-amber-400" },
    { label: "Flotation Reagent Agent-G", status: "Critical Shortage", count: "2 barrels", color: "text-rose-400" }
  ];

  const fleetMetrics = [
    { label: "CAT Haul Trucks (Talatona)", status: "Active", efficiency: "94.2% Uptime", color: "text-emerald-400" },
    { label: "Komatsu Excavator Spindle", status: "Undergoing MRO", efficiency: "Maturity Review", color: "text-amber-400" },
    { label: "Underground Duct Fan A", status: "System Standby", efficiency: "99.8% Capacity", color: "text-emerald-400" }
  ];

  const shipmentMetrics = [
    { label: "MSC Ankara/Luanda", status: "In Transit", eta: "4 Days (Port Clearance)", color: "text-cyan-400" },
    { label: "Manganese Ore Smelting (Bursa)", status: "Verified Ledger", eta: "Completed", color: "text-emerald-400" },
    { label: "Lubricants Expedite Hub (Izmir)", status: "Customs Pending", eta: "Reviewing Code", color: "text-amber-400" }
  ];

  const handleRefreshDemo = () => {
    setLoadingDemo(true);
    setTimeout(() => {
      setLoadingDemo(false);
    }, 1000);
  };

  return (
    <div className="text-gray-100 min-h-screen flex flex-col bg-[#0A0D12] transition-colors duration-300">

      {/* HEADER */}
      <header className="w-full bg-[#0A0D12]/75 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 font-extrabold text-white">
            <img src={logo} alt="AnaMine" className="h-8 rounded" />
            <span className="text-xl tracking-tight bg-gradient-to-r from-blue-400 via-cyan-350 to-cyan-300 bg-clip-text text-transparent">
              AnaMine Digital
            </span>
          </Link>

          <LanguageSwitcher />
        </div>
      </header>

      {/* NAV */}
      <nav className="max-w-7xl mx-auto w-full px-6 py-6">
        <div className="bg-[#0F141D]/60 rounded-2xl border border-gray-800 p-4 backdrop-blur-sm">
          <ul className="flex flex-wrap gap-3 text-sm font-semibold">
            <li><Link className="px-4 py-2 bg-cyan-950 text-cyan-300 rounded-xl" to="/digital">Home</Link></li>
            <li><Link className="px-4 py-2 text-gray-400 hover:text-white" to="/digital/about">About</Link></li>
            <li><Link className="px-4 py-2 text-gray-400 hover:text-white" to="/digital/services">Services</Link></li>
            <li><Link className="px-4 py-2 text-gray-400 hover:text-white" to="/digital/news">News</Link></li>
            <li><Link className="px-4 py-2 text-gray-400 hover:text-white" to="/digital/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 space-y-24 relative z-10">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0C1524] to-[#122A44] p-10 md:p-16 rounded-3xl border border-cyan-800/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded-full text-xs font-bold uppercase tracking-wider">{t('digital.home.hero_tag')}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">{t('digital.home.hero_title')}</h1>
            <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">{t('digital.home.hero_desc')}</p>
            <div className="pt-4 flex gap-4">
              <Link to="/digital/services" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-600/15 transition duration-300">{t('digital.home.hero_explore')}</Link>
              <Link to="/digital/contact" className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition">{t('digital.home.hero_consult')}</Link>
            </div>
          </div>
        </section>

        {/* MOCK DYNAMIC INTERACTIVE OPERATIONS DASHBOARD */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-white">{t('digital.home.dashboard_title')}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">{t('digital.home.dashboard_desc')}</p>
          </div>

          <div className="bg-[#0F141D]/80 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto relative group">
            
            {/* Dashboard Mock Header */}
            <div className="bg-[#151D2A] px-6 py-4 border-b border-gray-800/80 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <Terminal className="text-cyan-400" size={18} />
                <span className="text-xs font-mono text-cyan-300 font-semibold uppercase tracking-wider">AnaMine SaaS System: Talatona V1.2</span>
              </div>
              
              {/* Dashboard Tabs */}
              <div className="flex gap-2">
                <button 
                  onClick={() => setDashboardTab('inventory')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    dashboardTab === 'inventory' ? 'bg-cyan-600 text-white shadow-sm' : 'text-gray-400 hover:bg-white/5'
                  }`}
                >
                  {t('digital.home.tab_inventory')}
                </button>
                <button 
                  onClick={() => setDashboardTab('fleet')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    dashboardTab === 'fleet' ? 'bg-cyan-600 text-white shadow-sm' : 'text-gray-400 hover:bg-white/5'
                  }`}
                >
                  {t('digital.home.tab_fleet')}
                </button>
                <button 
                  onClick={() => setDashboardTab('shipment')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    dashboardTab === 'shipment' ? 'bg-cyan-600 text-white shadow-sm' : 'text-gray-400 hover:bg-white/5'
                  }`}
                >
                  Logistics Tracking
                </button>
              </div>
            </div>

            {/* Dashboard Mock Panel content */}
            <div className="p-6 md:p-8 min-h-[220px] flex flex-col justify-between relative bg-gradient-to-b from-[#0F141D] to-[#0A0D12]">
              {loadingDemo && (
                <div className="absolute inset-0 bg-[#0A0D12]/90 backdrop-blur-sm z-30 flex items-center justify-center gap-2">
                  <RefreshCw className="animate-spin text-cyan-400" size={24} />
                  <span className="text-xs font-mono text-cyan-300">{t('digital.home.dash_refreshing')}</span>
                </div>
              )}

              {/* Inventory Tab Panel */}
              {dashboardTab === 'inventory' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {inventoryMetrics.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-gray-800/80 flex flex-col justify-between gap-3">
                        <span className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">{m.label}</span>
                        <div className="space-y-1">
                          <div className="text-lg font-mono font-bold text-white tracking-wide">{m.count}</div>
                          <span className={`text-[10px] font-bold ${m.color}`}>● {m.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Fleet Diagnostics Panel */}
              {dashboardTab === 'fleet' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {fleetMetrics.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-gray-800/80 flex flex-col justify-between gap-3">
                        <span className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">{m.label}</span>
                        <div className="space-y-1">
                          <div className="text-lg font-mono font-bold text-white tracking-wide">{m.efficiency}</div>
                          <span className={`text-[10px] font-bold ${m.color}`}>● {m.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Logistics Tracking Panel */}
              {dashboardTab === 'shipment' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {shipmentMetrics.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-gray-800/80 flex flex-col justify-between gap-3">
                        <span className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">{m.label}</span>
                        <div className="space-y-1">
                          <div className="text-lg font-mono font-bold text-white tracking-wide">{m.eta}</div>
                          <span className={`text-[10px] font-bold ${m.color}`}>● {m.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Control bar */}
              <div className="mt-8 pt-4 border-t border-gray-800/60 flex justify-between items-center text-xs">
                <span className="text-gray-500 flex items-center gap-1.5 font-medium">
                  <Activity className="text-cyan-400 animate-pulse" size={14} />
                  {t('digital.home.dash_status')}
                </span>
                <button 
                  onClick={handleRefreshDemo}
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold transition"
                >
                  <RefreshCw size={12} className={loadingDemo ? "animate-spin" : ""} />
                  <span>{t('digital.home.dash_sync')}</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* SYSTEM INTEGRATION PIPELINE */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-white">{t('digital.home.arch_title')}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">{t('digital.home.arch_desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="bg-[#0F141D]/40 p-8 rounded-2xl border border-gray-800 shadow-sm space-y-4 hover:border-cyan-500/20 transition duration-300">
              <div className="w-12 h-12 bg-cyan-950 text-cyan-400 rounded-xl flex items-center justify-center font-bold">
                <Cpu size={22} />
              </div>
              <h3 className="text-lg font-bold text-white pt-2">{t('digital.home.arch1_title')}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{t('digital.home.arch1_desc')}</p>
            </div>
            
            <div className="bg-[#0F141D]/40 p-8 rounded-2xl border border-gray-800 shadow-sm space-y-4 hover:border-cyan-500/20 transition duration-300">
              <div className="w-12 h-12 bg-cyan-950 text-cyan-400 rounded-xl flex items-center justify-center font-bold">
                <Server size={22} />
              </div>
              <h3 className="text-lg font-bold text-white pt-2">{t('digital.home.arch2_title')}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{t('digital.home.arch2_desc')}</p>
            </div>

            <div className="bg-[#0F141D]/40 p-8 rounded-2xl border border-gray-800 shadow-sm space-y-4 hover:border-cyan-500/20 transition duration-300">
              <div className="w-12 h-12 bg-cyan-950 text-cyan-400 rounded-xl flex items-center justify-center font-bold">
                <Database size={22} />
              </div>
              <h3 className="text-lg font-bold text-white pt-2">{t('digital.home.arch3_title')}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{t('digital.home.arch3_desc')}</p>
            </div>
          </div>
        </section>

        {/* CORE SERVICES WITH IMAGES */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center tracking-tight text-white">{t('digital.home.core_title')}</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* ERP */}
            <div className="rounded-3xl overflow-hidden border border-gray-800 bg-[#0F141D]/40 flex flex-col group hover:shadow-2xl hover:border-cyan-500/20 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                className="h-48 w-full object-cover group-hover:scale-102 transition duration-500"
                alt="ERP Implementation"
              />
              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">{t('digital.home.core1_title')}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{t('digital.home.core1_desc')}</p>
                </div>
              </div>
            </div>

            {/* Supply Chain */}
            <div className="rounded-3xl overflow-hidden border border-gray-800 bg-[#0F141D]/40 flex flex-col group hover:shadow-2xl hover:border-cyan-500/20 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
                className="h-48 w-full object-cover group-hover:scale-102 transition duration-500"
                alt="Supply Chain SaaS"
              />
              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">{t('digital.home.core2_title')}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{t('digital.home.core2_desc')}</p>
                </div>
              </div>
            </div>

            {/* Automation */}
            <div className="rounded-3xl overflow-hidden border border-gray-800 bg-[#0F141D]/40 flex flex-col group hover:shadow-2xl hover:border-cyan-500/20 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800"
                className="h-48 w-full object-cover group-hover:scale-102 transition duration-500"
                alt="E-Sourcing"
              />
              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">{t('digital.home.core3_title')}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{t('digital.home.core3_desc')}</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* GLOBAL OPS BANNER */}
        <section className="bg-[#0F141D]/40 p-10 rounded-3xl border border-gray-800 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tight">{t('digital.home.global_title')}</h2>
            <p className="text-gray-400 text-xs leading-relaxed">{t('digital.home.global_desc')}</p>
            <div className="space-y-4 text-xs text-gray-400 border-t border-gray-800 pt-6">
              <p><span className="text-white font-bold">{t('digital.home.global_luanda')}</span> — {t('digital.home.global_luanda_desc')}</p>
              <p><span className="text-white font-bold">{t('digital.home.global_istanbul')}</span> — {t('digital.home.global_istanbul_desc')}</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-64 border border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1000"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Global Operations"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-[#0F141D]/80 p-12 rounded-3xl border border-cyan-800/30 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-3xl font-bold text-white tracking-tight">{t('digital.home.cta_title')}</h2>
          <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto leading-relaxed">{t('digital.home.cta_desc')}</p>

          <Link
            to="/digital/contact"
            className="inline-block mt-6 px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-600/15 transition duration-300"
          >
            {t('digital.home.cta_btn')}
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}