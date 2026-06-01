import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, BookOpen, Calendar, Tag } from 'lucide-react'
import LanguageSwitcher from '../../components/layout/LanguageSwitcher'
import Footer from '../../components/Footer'
import logo from '../../assets/logo.jpg'

const newsItems = [
  {
    id: 1,
    titleKey: 'digital.news.n1_title',
    descKey: 'digital.news.n1_desc',
    date: '14 Feb 2026',
    tag: 'AI Launch',
    tagColor: 'bg-cyan-950 border-cyan-800/40 text-cyan-300',
    accentColor: 'group-hover:border-cyan-500/40',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
    readTime: '6 min read',
    featured: true,
    body: `AnaMine Digital's proprietary cloud inventory platform went live across Talatona, Luanda in February 2026, marking a landmark deployment for the Angolan industrial sector. The system leverages Recurrent Neural Networks (RNN) trained on 18 months of historical MRO (Maintenance, Repair, and Operations) parts consumption data across five active mining sites.

The platform dynamically recalculates reorder points every 24 hours, factoring in delivery lead times from Turkey, seasonal demand spikes, and fleet utilization rates. In early piloting across Diamond drilling and conveyor belt operations, the system reduced unexpected stockouts by 28% and cut emergency procurement costs by approximately 31%.

Integration with existing SAP modules was achieved through a custom REST API bridge built by the Istanbul engineering lab, allowing seamless synchronization of purchase orders without replacing legacy infrastructure. The rollout is a testament to AnaMine's philosophy of digital augmentation over replacement — meeting our clients where their operations are today, and guiding them toward tomorrow.`,
    keyFacts: ['28% fewer stockout events', 'SAP REST API integration', 'RNN trained on 18+ months data', '31% cost reduction in emergency procurement']
  },
  {
    id: 2,
    titleKey: 'digital.news.n2_title',
    descKey: 'digital.news.n2_desc',
    date: '27 Jan 2026',
    tag: 'Blockchain',
    tagColor: 'bg-violet-950 border-violet-800/40 text-violet-300',
    accentColor: 'group-hover:border-violet-500/40',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop',
    readTime: '7 min read',
    featured: false,
    body: `The AnaMine Istanbul technology lab successfully deployed a production Hyperledger Fabric permissioned blockchain to log manganese trade routes across the Angola–Turkey mineral supply corridor. The ledger creates an immutable record of each shipment — from GPS-anchored extraction coordinates in Angola's mineral-rich interior, to sea freight manifests at Luanda Port, through arrival at smelting partners in Bursa and Istanbul.

Each transaction block contains cryptographically signed certificates, weight and grade assay documents, Customs authority stamps, and third-party laboratory test results. Smart contracts automatically flag non-conformance events — for example, unexpected transit route deviations or document timestamp anomalies — triggering immediate notifications to compliance officers.

The system ensures full conformity with EU's CBAM (Carbon Border Adjustment Mechanism) documentation requirements and supports ESG reporting frameworks by providing end-to-end lifecycle carbon accounting for every shipment.`,
    keyFacts: ['Full Hyperledger Fabric permissioned network', 'CBAM-ready documentation', 'Smart contract anomaly detection', 'GPS-anchored origin certificates']
  },
  {
    id: 3,
    titleKey: 'digital.news.n3_title',
    descKey: 'digital.news.n3_desc',
    date: '08 Dec 2025',
    tag: 'ERP Case Study',
    tagColor: 'bg-blue-950 border-blue-800/40 text-blue-300',
    accentColor: 'group-hover:border-blue-500/40',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    readTime: '5 min read',
    featured: false,
    body: `A comprehensive operational case study covering the 2025 ERP dashboard integration delivered to a Luanda-based mining operations conglomerate. Prior to implementation, warehouse managers relied on weekly Excel exports and phone-call-based stock verification — a process that introduced 3–5 days of decision lag in critical procurement cycles.

AnaMine Digital's custom Power BI + PostgreSQL real-time dashboard stack was deployed over a 14-week agile build cycle. The final system provides visual KPI panels covering: active fleet availability rates (by vehicle class), conveyor belt wear cycle tracking (with predictive replacement alerts), drill rig spare parts consumption velocity, and international container shipment ETAs with Luanda Port customs status.

Within 90 days of go-live, warehouse coordination speed doubled — managers now make restocking decisions in real time, reducing order-to-delivery cycles from 11.4 days to 5.9 days on average. The solution directly contributed to a 16% increase in operational uptime across the client's diamond and iron extraction divisions.`,
    keyFacts: ['2× coordination speed improvement', '11.4 → 5.9 day order-to-delivery cycle', '16% uptime improvement', 'PostgreSQL + Power BI architecture']
  },
  {
    id: 4,
    titleKey: 'digital.news.n4_title',
    descKey: 'digital.news.n4_desc',
    date: '22 Oct 2025',
    tag: 'Engineering',
    tagColor: 'bg-emerald-950 border-emerald-800/40 text-emerald-300',
    accentColor: 'group-hover:border-emerald-500/40',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    readTime: '9 min read',
    featured: false,
    body: `An internal engineering paper from the AnaMine Digital R&D lab in Istanbul, documenting the development and validation of a Recurrent Neural Network (RNN) model for predicting diamond mine spare part depletion patterns across Talatona-area mining operations.

The model architecture uses a stacked LSTM (Long Short-Term Memory) with 3 hidden layers, trained on 72 months of historical spare parts transactions, fleet maintenance records, and operational event logs. Input features include: equipment age index, monthly operational hours, ambient temperature cycles, and historical stockout frequency patterns.

Validation metrics show a Mean Absolute Percentage Error (MAPE) of 8.3% for 7-day forecasts and 14.1% for 30-day forecasts — significantly outperforming the baseline moving average and exponential smoothing models by 34% and 41% respectively. The model was tested against held-out data from Q4 2024 and correctly identified 89% of actual stockout events at least 12 days before occurrence.

The model is now deployed in production as the forecasting core of AnaMine's Inventory Optimization SaaS platform.`,
    keyFacts: ['LSTM RNN — 3-layer stacked architecture', '8.3% MAPE at 7-day horizon', '89% stockout prediction accuracy', 'Live in production Inventory SaaS']
  },
  {
    id: 5,
    titleKey: 'digital.news.n5_title',
    descKey: 'digital.news.n5_desc',
    date: '03 Sep 2025',
    tag: 'Blockchain',
    tagColor: 'bg-amber-950 border-amber-800/40 text-amber-300',
    accentColor: 'group-hover:border-amber-500/40',
    image: 'https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?w=800&h=500&fit=crop',
    readTime: '8 min read',
    featured: false,
    body: `With global pressure mounting on ethical mineral sourcing — driven by EU Conflict Minerals Regulation, US Dodd-Frank compliance, and growing ESG investor mandates — AnaMine Digital deployed a specialized Hyperledger Fabric implementation to trace cobalt and coltan sourcing pipelines from artisanal extraction communities in DRC/Angola border zones to industrial processing partners in Turkey.

The AnaMine Cobalt Chain uses a private permissioned ledger with four node categories: Extraction Partner nodes (with GPS-verified site credentials), Logistics Operator nodes (freight forwarder digital manifests), Quality Laboratory nodes (spectroscopic grade certificates), and End-Buyer nodes (smelters and electronics-grade material refiners in Istanbul and Bursa).

Each ledger transaction is anchored to a SHA-256 hash of the corresponding physical document bundle — preventing retroactive falsification. Smart contracts automatically reject shipments where assay-to-manifest weight discrepancies exceed 0.5%, flagging potential mineral substitution fraud. The solution won recognition from the Turkey Minerals Export Council as a model for traceability infrastructure in emerging-market mineral supply chains.`,
    keyFacts: ['4-node permissioned Hyperledger architecture', 'SHA-256 document hash anchoring', 'EU Conflict Minerals Regulation compliant', '0.5% fraud detection threshold']
  }
]

const allTags = ['All', 'AI Launch', 'Blockchain', 'ERP Case Study', 'Engineering']

export default function DigitalNews() {
  const { t } = useTranslation()
  const [activeTag, setActiveTag] = useState('All')
  const [expandedId, setExpandedId] = useState(null)

  const filtered = activeTag === 'All' ? newsItems : newsItems.filter(n => n.tag === activeTag)
  const featured = newsItems.find(n => n.featured)
  const restItems = filtered.filter(n => !n.featured || activeTag !== 'All')

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
            <li><Link to="/digital/services" className="text-gray-400 hover:text-white px-4 py-2 rounded-xl transition">{t('nav.services')}</Link></li>
            <li><Link to="/digital/news" className="text-cyan-400 bg-cyan-950/60 border border-cyan-800/30 px-4 py-2 rounded-xl transition">{t('nav.news')}</Link></li>
            <li><Link to="/digital/contact" className="text-gray-400 hover:text-white px-4 py-2 rounded-xl transition">{t('nav.contact')}</Link></li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 space-y-16 animate-fadeInUp">

        {/* ── HEADER ── */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-cyan-950/70 border border-cyan-800/40 text-cyan-300 text-xs font-bold rounded-full uppercase tracking-widest">
            Technology Intelligence
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            {t('digital.news.title')}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            {t('digital.news.intro')} Deep-dive engineering papers, blockchain deployment logs, and AI case studies from our Istanbul R&D lab.
          </p>
        </section>

        {/* ── TAG FILTER ── */}
        <section className="flex flex-wrap gap-3 justify-center">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-xs font-bold border transition ${
                activeTag === tag
                  ? 'bg-cyan-600 border-cyan-500 text-white'
                  : 'bg-white/5 border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </section>

        {/* ── FEATURED ARTICLE (only when 'All' filter) ── */}
        {activeTag === 'All' && featured && (
          <section className="group relative overflow-hidden bg-[#0F141D]/60 border border-gray-800/60 rounded-3xl hover:border-cyan-500/40 transition shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={t(featured.titleKey)}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F141D]/60 md:block hidden" />
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${featured.tagColor}`}>
                    ⭐ Featured — {featured.tag}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-10 md:p-12 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                  <span className="flex items-center gap-1"><BookOpen size={12} /> {featured.readTime}</span>
                </div>
                <h2 className="text-3xl font-black text-white leading-snug group-hover:text-cyan-300 transition">
                  {t(featured.titleKey)}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {featured.body.split('\n\n')[0]}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {featured.keyFacts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="text-cyan-400 mt-0.5">✓</span> {fact}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setExpandedId(expandedId === featured.id ? null : featured.id)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition self-start"
                >
                  {expandedId === featured.id ? 'Collapse Article' : 'Read Full Article'} <ArrowRight size={16} />
                </button>
              </div>
            </div>
            {expandedId === featured.id && (
              <div className="px-10 md:px-12 pb-12 animate-fadeIn border-t border-gray-800/60 pt-8 space-y-4">
                {featured.body.split('\n\n').slice(1).map((para, i) => (
                  <p key={i} className="text-sm text-gray-400 leading-relaxed">{para}</p>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ── NEWS CARD GRID ── */}
        <section className="grid md:grid-cols-2 gap-8">
          {restItems.map((item) => (
            <article
              key={item.id}
              className={`group bg-[#0F141D]/45 backdrop-blur-sm rounded-3xl border border-gray-800/60 ${item.accentColor} transition shadow-xl overflow-hidden flex flex-col`}
            >
              {/* Image */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F141D]/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${item.tagColor}`}>
                    <Tag size={9} className="inline mr-1" />{item.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-[10px] text-gray-400">
                  <span className="flex items-center gap-1"><Calendar size={10} /> {item.date}</span>
                  <span className="flex items-center gap-1"><BookOpen size={10} /> {item.readTime}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex-grow flex flex-col space-y-4">
                <h3 className="text-xl font-extrabold text-white leading-snug group-hover:text-cyan-300 transition">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                  {expandedId === item.id
                    ? item.body
                    : item.body.split('\n\n')[0]
                  }
                </p>

                {/* Key Facts */}
                {expandedId === item.id && (
                  <div className="pt-4 border-t border-gray-800/50 grid grid-cols-2 gap-2 animate-fadeIn">
                    {item.keyFacts.map((fact, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <span className="text-cyan-400 mt-0.5">✓</span> {fact}
                      </div>
                    ))}
                  </div>
                )}

                {/* Expand Button */}
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="pt-4 border-t border-gray-800/50 flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition self-start"
                >
                  {expandedId === item.id ? 'Collapse' : 'Read Full Article'}
                  <ArrowRight size={14} className={`transition-transform duration-300 ${expandedId === item.id ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* ── RESEARCH CATEGORIES ── */}
        <section className="bg-[#0F141D]/50 border border-gray-800/60 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-white">Research & Publication Areas</h2>
            <p className="text-gray-500 text-sm">Our engineering team publishes across the following technical domains:</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: '🤖', title: 'AI & Machine Learning', topics: ['Stockout prediction (LSTM)', 'Demand forecasting', 'Anomaly detection', 'NLP for procurement'] },
              { emoji: '🔗', title: 'Blockchain & DLT', topics: ['Hyperledger Fabric', 'Ethical sourcing ledgers', 'Smart contract design', 'ESG tokenization'] },
              { emoji: '📡', title: 'IoT & Edge Computing', topics: ['MQTT protocol design', 'Vibration telemetry', 'Edge aggregation', 'OPC-UA systems'] },
              { emoji: '🏗️', title: 'ERP & Enterprise Systems', topics: ['SAP extension layers', 'BI dashboard design', 'API gateway patterns', 'Data warehouse migration'] }
            ].map((cat, i) => (
              <div key={i} className="space-y-4">
                <div className="text-3xl">{cat.emoji}</div>
                <h4 className="font-bold text-white text-sm">{cat.title}</h4>
                <ul className="space-y-1">
                  {cat.topics.map((topic, j) => (
                    <li key={j} className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="text-cyan-800">›</span> {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── SUBSCRIBE BANNER ── */}
        <section className="bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-[#0A0D12] border border-cyan-800/30 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center shadow-2xl">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Stay Informed</span>
            <h2 className="text-3xl font-black text-white tracking-tight">Get Our Engineering Papers Direct to Your Inbox</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe to the AnaMine Digital Intelligence Brief — monthly technical dispatches covering AI, blockchain, and industrial IoT developments from our Istanbul R&D lab.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your business email address..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-800 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-600 transition"
            />
            <Link to="/digital/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition text-sm shadow-lg">
              Subscribe to Tech Intelligence <ArrowRight size={16} />
            </Link>
            <p className="text-[11px] text-gray-600">No spam. Unsubscribe at any time. Published monthly from Istanbul.</p>
          </div>
        </section>

      </main>

      <Footer isDark={true} />
    </div>
  )
}
