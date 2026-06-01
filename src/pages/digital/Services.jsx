import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Search, Building2, BarChart3, Package, Link2, Wifi,
  ChevronRight, CheckCircle, ArrowRight, Zap, Shield, TrendingUp, Clock
} from 'lucide-react'
import LanguageSwitcher from '../../components/layout/LanguageSwitcher'
import Footer from '../../components/Footer'
import logo from '../../assets/logo.jpg'

const services = [
  {
    id: 's1',
    icon: Search,
    color: 'from-violet-500/20 to-purple-600/10',
    border: 'hover:border-violet-500/50',
    accent: 'text-violet-400',
    badge: 'bg-violet-950/60 border-violet-800/40 text-violet-300',
    tagLabel: 'Assessment',
    deliverables: [
      'Digital Maturity Scorecard (Levels 1–4)',
      'Gap Analysis Report vs. Industry Benchmarks',
      'Prioritized IT Modernization Roadmap',
      'Cloud Migration Feasibility Assessment',
      'Vendor Lock-in Risk Identification'
    ]
  },
  {
    id: 's2',
    icon: Building2,
    color: 'from-blue-500/20 to-cyan-600/10',
    border: 'hover:border-blue-500/50',
    accent: 'text-blue-400',
    badge: 'bg-blue-950/60 border-blue-800/40 text-blue-300',
    tagLabel: 'ERP & Sourcing',
    deliverables: [
      'Supplier Portal with e-Bid Modules',
      'SAP / Oracle ERP Custom Extension Builds',
      'Multi-currency Procurement Workflows',
      'Document Management & e-Signatures',
      'Vendor Onboarding & KYC Automation'
    ]
  },
  {
    id: 's3',
    icon: BarChart3,
    color: 'from-cyan-500/20 to-teal-600/10',
    border: 'hover:border-cyan-500/50',
    accent: 'text-cyan-400',
    badge: 'bg-cyan-950/60 border-cyan-800/40 text-cyan-300',
    tagLabel: 'Analytics',
    deliverables: [
      'Real-time Fleet & Conveyor KPI Dashboards',
      'Warehouse Level Telemetry Panels',
      'Offshore Drill Site Progress Trackers',
      'Daily Operational Executive Summaries',
      'Predictive Anomaly Alert Systems'
    ]
  },
  {
    id: 's4',
    icon: Package,
    color: 'from-emerald-500/20 to-green-600/10',
    border: 'hover:border-emerald-500/50',
    accent: 'text-emerald-400',
    badge: 'bg-emerald-950/60 border-emerald-800/40 text-emerald-300',
    tagLabel: 'AI SaaS',
    deliverables: [
      'AI-Driven Reorder Point Recalculation (RNN models)',
      'Stockout Probability Forecasting (30-day window)',
      'Dead Stock Liquidation Alerts',
      'Spare Parts Lifecycle Management',
      'Predictive Purchase Order Generation'
    ]
  },
  {
    id: 's5',
    icon: Link2,
    color: 'from-amber-500/20 to-orange-600/10',
    border: 'hover:border-amber-500/50',
    accent: 'text-amber-400',
    badge: 'bg-amber-950/60 border-amber-800/40 text-amber-300',
    tagLabel: 'Blockchain',
    deliverables: [
      'Hyperledger Fabric Private Ledger Setup',
      'Ethical Mineral Certificate Tokenization',
      'Origin-to-Smelter Traceability Chains',
      'Smart Contract Shipment Verification',
      'Immutable Audit Log Publishing'
    ]
  },
  {
    id: 's6',
    icon: Wifi,
    color: 'from-rose-500/20 to-pink-600/10',
    border: 'hover:border-rose-500/50',
    accent: 'text-rose-400',
    badge: 'bg-rose-950/60 border-rose-800/40 text-rose-300',
    tagLabel: 'Edge IoT',
    deliverables: [
      'Thermal & Vibration Sensor Deployment',
      'Edge Middleware Data Aggregation Layer',
      'Real-time Conveyor Health Score Engine',
      'Automated Maintenance Trigger Alerts',
      'OPC-UA / MQTT Protocol Integrations'
    ]
  }
]

const processSteps = [
  { step: '01', label: 'Discovery Call', desc: 'We map your existing infrastructure, pain points, and KPIs in a structured intake session.' },
  { step: '02', label: 'Architecture Design', desc: 'Our Istanbul engineering team crafts a bespoke system architecture and integration blueprint.' },
  { step: '03', label: 'Agile Build Sprints', desc: '2-week sprint cycles with live demos, continuous integration pipelines, and security reviews.' },
  { step: '04', label: 'UAT & Hardening', desc: 'Stress testing, user acceptance testing, and penetration hardening before production deploy.' },
  { step: '05', label: 'Go-Live & Hypercare', desc: '90-day hypercare support period with 24/7 on-call engineering coverage post-deployment.' }
]

const stats = [
  { icon: TrendingUp, value: '30%', label: 'Average stockout reduction in the first 6 months via AI-SaaS engines' },
  { icon: Clock, value: '18%', label: 'Luanda port transit time cut using DMAIC logistics optimization models' },
  { icon: Shield, value: '100%', label: 'Mineral certificates secured with cryptographic proof on blockchain ledgers' },
  { icon: Zap, value: '2×', label: 'Warehouse coordination speed after ERP dashboard deployments' }
]

export default function DigitalServices() {
  const { t } = useTranslation()
  const [activeService, setActiveService] = useState(null)

  return (
    <div className="text-gray-100 min-h-screen flex flex-col bg-[#0A0D12] transition-colors duration-300">
      {/* HEADER */}
      <header className="w-full bg-[#0A0D12]/75 backdrop-blur-md border-b border-gray-800/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-90 transition flex items-center gap-2">
            <img src={logo} alt="AnaMine Logo" className="h-8 rounded" />
            AnaMine Digital
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      {/* NAV */}
      <nav className="max-w-7xl mx-auto w-full px-6 py-6 mt-4">
        <div className="bg-[#0F141D]/60 backdrop-blur-sm rounded-2xl border border-gray-800/60 p-4">
          <ul className="flex flex-wrap gap-4 md:gap-8 text-sm font-bold">
            <li><Link to="/digital" className="text-gray-400 hover:text-white px-4 py-2 rounded-xl transition">{t('nav.home')}</Link></li>
            <li><Link to="/digital/about" className="text-gray-400 hover:text-white px-4 py-2 rounded-xl transition">{t('nav.about')}</Link></li>
            <li><Link to="/digital/services" className="text-cyan-400 bg-cyan-950/60 border border-cyan-800/30 px-4 py-2 rounded-xl transition">{t('nav.services')}</Link></li>
            <li><Link to="/digital/news" className="text-gray-400 hover:text-white px-4 py-2 rounded-xl transition">{t('nav.news')}</Link></li>
            <li><Link to="/digital/contact" className="text-gray-400 hover:text-white px-4 py-2 rounded-xl transition">{t('nav.contact')}</Link></li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 space-y-24 animate-fadeInUp">

        {/* ── HERO HEADER ── */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <span className="inline-block px-3 py-1 bg-cyan-950/70 border border-cyan-800/40 text-cyan-300 text-xs font-bold rounded-full uppercase tracking-widest">
            Enterprise Software Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            {t('digital.services.title')}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {t('digital.services.intro')} Built for the operational complexity of Africa's mining sector and the precision demands of global supply chains.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/digital/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold rounded-xl transition shadow-lg shadow-cyan-600/20">
              Book a Free Architecture Call <ArrowRight size={16} />
            </Link>
            <a href="#services-grid" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-bold rounded-xl border border-gray-800 transition">
              Explore All Services
            </a>
          </div>
        </section>

        {/* ── IMPACT STATS ── */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#0F141D]/50 border border-gray-800/60 rounded-2xl p-6 space-y-3 text-center hover:border-cyan-500/30 transition">
              <s.icon className="mx-auto text-cyan-400" size={24} />
              <div className="text-3xl font-black text-white">{s.value}</div>
              <p className="text-[11px] text-gray-500 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </section>

        {/* ── 6 SERVICE CARDS ── */}
        <section id="services-grid" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white tracking-tight">Our Six Core Service Lines</h2>
            <p className="text-gray-500 text-sm mt-2">Click any service to expand deliverables and scope details.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon
              const isActive = activeService === svc.id
              return (
                <div
                  key={svc.id}
                  onClick={() => setActiveService(isActive ? null : svc.id)}
                  className={`cursor-pointer bg-gradient-to-br ${svc.color} backdrop-blur-sm rounded-3xl border border-gray-800/60 ${svc.border} transition duration-300 shadow-xl overflow-hidden`}
                >
                  <div className="p-8 space-y-4">
                    {/* Icon + Badge */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-white/5 border border-gray-700/50 rounded-xl flex items-center justify-center">
                        <Icon className={svc.accent} size={22} />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-1 rounded-full ${svc.badge}`}>
                        {svc.tagLabel}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-extrabold text-white leading-snug">
                        {t(`digital.services.${svc.id}`)}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {t(`digital.services.${svc.id}_desc`)}
                      </p>
                    </div>

                    {/* Expand Toggle */}
                    <div className={`flex items-center gap-1 text-xs font-bold ${svc.accent}`}>
                      <span>{isActive ? 'Collapse Deliverables' : 'View Deliverables'}</span>
                      <ChevronRight size={14} className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                    </div>
                  </div>

                  {/* Expanded Deliverables */}
                  {isActive && (
                    <div className="px-8 pb-8 animate-fadeIn">
                      <div className="border-t border-gray-800/60 pt-6 space-y-3">
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Key Deliverables</p>
                        <ul className="space-y-2">
                          {svc.deliverables.map((d, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                              <CheckCircle size={12} className={`${svc.accent} mt-0.5 shrink-0`} />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* ── TECH STACK PANEL ── */}
        <section className="bg-[#0F141D]/70 border border-gray-800/60 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Technology Infrastructure</span>
              <h2 className="text-3xl font-black text-white tracking-tight">Built on a Battle-Tested Stack</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our Istanbul engineering lab runs a rigorous DevSecOps pipeline ensuring every system we deploy achieves maximum uptime, compliance, and scale.
                We leverage proven enterprise stacks — no experimental frameworks at production scale.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Frontend', items: 'React, Next.js, Vite, TypeScript' },
                  { label: 'Backend', items: 'Node.js, Python FastAPI, Go Microservices' },
                  { label: 'Databases', items: 'PostgreSQL, Redis, MongoDB, TimescaleDB' },
                  { label: 'Infrastructure', items: 'Docker, Kubernetes, Terraform, AWS/Azure' },
                  { label: 'AI/ML', items: 'PyTorch, TensorFlow, Scikit-learn, ONNX' },
                  { label: 'Blockchain', items: 'Hyperledger Fabric, IPFS, Ethereum L2' },
                  { label: 'IoT/Edge', items: 'MQTT, OPC-UA, InfluxDB, Edge Node.js' },
                  { label: 'Security', items: 'SOC2, OWASP, mTLS, Vault Secrets Mgmt' }
                ].map((tech, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">{tech.label}</span>
                    <p className="font-mono text-xs text-cyan-300">{tech.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="bg-[#0A0D12]/80 border border-gray-800/80 rounded-2xl p-6 space-y-4 font-mono text-xs">
              <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-4">System Architecture — Mining ERP Stack</div>
              {[
                { layer: 'UI Layer', items: ['React Dashboard', 'Mobile PWA', 'Exec Reports'], color: 'border-cyan-800/60 text-cyan-400' },
                { layer: 'API Gateway', items: ['REST Endpoints', 'GraphQL Bus', 'Auth / JWT'], color: 'border-blue-800/60 text-blue-400' },
                { layer: 'Core Services', items: ['ERP Engine', 'AI Forecast', 'Blockchain RPC'], color: 'border-violet-800/60 text-violet-400' },
                { layer: 'Data Layer', items: ['PostgreSQL', 'Redis Cache', 'TimescaleDB'], color: 'border-emerald-800/60 text-emerald-400' },
                { layer: 'Edge / IoT', items: ['MQTT Broker', 'Sensor Nodes', 'Edge Aggregator'], color: 'border-amber-800/60 text-amber-400' }
              ].map((row, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-[10px] text-gray-600 uppercase tracking-widest">{row.layer}</p>
                  <div className={`flex flex-wrap gap-2 p-3 rounded-xl border ${row.color} bg-white/[0.01]`}>
                    {row.items.map((item, j) => (
                      <span key={j} className={`text-[11px] font-semibold ${row.color.split(' ')[1]}`}>{item}</span>
                    ))}
                  </div>
                  {i < 4 && <div className="text-center text-gray-700 text-xs">↓</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DELIVERY PROCESS ── */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Our Delivery Methodology</span>
            <h2 className="text-3xl font-black text-white tracking-tight">From Discovery to Hypercare</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              A repeatable, audited delivery process refined across 40+ enterprise deployments in Africa and MENA.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-[#0F141D]/50 border border-gray-800/60 rounded-2xl p-6 space-y-3 hover:border-cyan-500/30 transition h-full">
                  <div className="text-3xl font-black text-gray-800 group-hover:text-cyan-900 transition">{step.step}</div>
                  <h4 className="text-sm font-extrabold text-white">{step.label}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-700 z-10">→</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── COMPLIANCE BADGES ── */}
        <section className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🔐', title: 'ISO 27001 Security', desc: 'All software systems are designed to comply with ISO 27001 information security management requirements, protecting client data and supply chain records.' },
            { icon: '🌍', title: 'GDPR & Angola Data Law', desc: 'Full compliance with GDPR and Angolan data protection regulations (Lei da Proteção de Dados). All user data stored in encrypted, region-specific buckets.' },
            { icon: '📜', title: 'Hyperledger Certifications', desc: 'Our blockchain implementations are certified Hyperledger Fabric deployments with immutable audit trails verifiable by third-party independent auditors.' }
          ].map((c, i) => (
            <div key={i} className="bg-[#0F141D]/40 border border-gray-800/60 rounded-2xl p-8 space-y-4">
              <div className="text-3xl">{c.icon}</div>
              <h3 className="text-base font-bold text-white">{c.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-950/50 via-blue-950/40 to-[#0A0D12] border border-cyan-800/30 rounded-3xl p-10 md:p-16 text-center space-y-6 shadow-2xl">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400 to-transparent pointer-events-none" />
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Ready to Transform?</span>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Start Your Digital Transformation <br className="hidden md:block" />in Mining Operations Today
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Our Istanbul engineering team is ready to design your bespoke architecture. Whether you need a blockchain mineral ledger, an AI-powered warehouse SaaS, or a full ERP dashboard migration — we deliver it end-to-end.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link to="/digital/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition shadow-lg shadow-cyan-600/25">
              Schedule a Free Demo <ArrowRight size={18} />
            </Link>
            <Link to="/digital/news" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-gray-300 font-bold rounded-xl border border-gray-800 transition">
              Read Our Tech Papers
            </Link>
          </div>
        </section>

      </main>

      <Footer isDark={true} />
    </div>
  )
}
