import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Settings, 
  ShieldCheck, 
  Anchor, 
  Truck, 
  Layers, 
  Activity, 
  CheckCircle2, 
  Cpu, 
  Globe 
} from 'lucide-react';
import LanguageSwitcher from '../../components/layout/LanguageSwitcher';
import Footer from '../../components/Footer';
import logo from '../../assets/logo.jpg';

export default function SourcingHome() {
  const { t } = useTranslation();

  const oemBrands = [
    { name: "Caterpillar", type: "Heavy Excavation Spares" },
    { name: "Komatsu", type: "Haul Fleet Consumables" },
    { name: "Sandvik", type: "Drilling Core Spares" },
    { name: "Metso Outotec", type: "Crusher Wear Liners" },
    { name: "Volvo Construction", type: "MRO Spares & Spindle Links" },
    { name: "Atlas Copco", type: "Compressor Spares & Air Ducts" }
  ];

  const logisticsSteps = [
    {
      phase: "01",
      title: "Istanbul Sourcing Hub",
      desc: "Direct procurement of wear parts and heavy consumables from Turkey's high-tech manufacturing corridors (Istanbul & Izmir)."
    },
    {
      phase: "02",
      title: "Kaizen Quality Audit",
      desc: "Systematic pre-shipment quality audits at factories to verify OEM compliance and material structural durability."
    },
    {
      phase: "03",
      title: "Lean Maritime Expediting",
      desc: "Streamlined logistics booking via major routes (MSC, Kuehne+Nagel) ensuring continuous transit tracking and compliance."
    },
    {
      phase: "04",
      title: "Talatona Depot Delivery",
      desc: "Prompt customs clearing in Luanda, followed by Kaizen inventory distribution from our Talatona logistics hub."
    }
  ];

  return (
    <div className="text-gray-800 min-h-screen flex flex-col bg-slate-50 transition-colors duration-300">

      {/* HEADER */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 font-extrabold text-orange-600 hover:text-orange-700 transition">
            <img src={logo} className="h-8 rounded" alt="AnaMine Logo" />
            <span className="text-xl tracking-tight">AnaMine Sourcing</span>
          </Link>

          <LanguageSwitcher />
        </div>
      </header>

      {/* NAV */}
      <nav className="max-w-7xl mx-auto w-full px-6 py-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <ul className="flex flex-wrap gap-4 text-sm font-bold">
            <li><Link className="text-orange-600 px-4 py-2 bg-orange-50 rounded-xl" to="/sourcing">Home</Link></li>
            <li><Link className="text-gray-500 hover:text-black px-4 py-2" to="/sourcing/about">About</Link></li>
            <li><Link className="text-gray-500 hover:text-black px-4 py-2" to="/sourcing/products">Products</Link></li>
            <li><Link className="text-gray-500 hover:text-black px-4 py-2" to="/sourcing/news">News</Link></li>
            <li><Link className="text-gray-500 hover:text-black px-4 py-2" to="/sourcing/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 space-y-24">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-orange-600 to-amber-500 p-10 md:p-16 rounded-3xl text-white shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider">
              Angola-Turkey Heavy Trade Corridor
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Global Industrial Sourcing & Supply Chain Solutions
            </h1>
            <p className="text-orange-50 max-w-2xl text-lg leading-relaxed">
              AnaMine Comercio e Serviços LDA secures raw minerals, chemical agents, steel-reinforced conveyor networks, and specialized heavy MRO spares for mining operators across Africa.
            </p>
            <div className="pt-4 flex gap-4">
              <Link to="/sourcing/products" className="px-6 py-3 bg-white text-orange-700 font-bold rounded-xl shadow-md hover:bg-orange-50 transition">
                Explore Catalog
              </Link>
              <Link to="/sourcing/contact" className="px-6 py-3 bg-orange-700/50 hover:bg-orange-700/70 border border-white/20 font-bold rounded-xl transition">
                Request Bulk Quote
              </Link>
            </div>
          </div>
        </section>

        {/* INTEGRATED MARITIME PIPELINE TIMELINE */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Direct Sourcing & Logistics Pipeline</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We eliminate intermediaries by auditing manufacturers on-site in Turkey and executing rapid, customs-cleared maritime routes straight to mining depots in Angola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {logisticsSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-orange-500/20 hover:shadow-md transition duration-300 relative group">
                <div className="text-5xl font-black text-orange-100 group-hover:text-orange-200 transition-colors absolute right-6 top-6">
                  {step.phase}
                </div>
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center font-bold relative z-10">
                  {idx === 0 && <Globe size={22} />}
                  {idx === 1 && <ShieldCheck size={22} />}
                  {idx === 2 && <Anchor size={22} />}
                  {idx === 3 && <Truck size={22} />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 pt-2 relative z-10">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OEM COMPATIBILITY FLEET SUPPORT */}
        <section className="bg-white border rounded-3xl p-10 shadow-sm space-y-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-gray-100">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Settings className="text-orange-500 animate-spin-slow" size={26} />
                OEM Machinery Fleet Compatibility
              </h2>
              <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
                We supply technical MRO consumables fully compatible with international mining fleets. Every item arrives with certified material warranties and serial catalog tracking.
              </p>
            </div>
            <Link to="/sourcing/contact" className="px-5 py-2.5 bg-orange-50 text-orange-700 hover:bg-orange-100 font-bold rounded-xl text-sm transition">
              Verify Part Code
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {oemBrands.map((brand, idx) => (
              <div key={idx} className="p-5 bg-slate-50 border rounded-xl hover:border-orange-400/40 text-center space-y-2 transition duration-300">
                <div className="text-xs font-black text-gray-900 tracking-tight">{brand.name}</div>
                <div className="text-[10px] text-gray-400 font-medium leading-none">{brand.type}</div>
              </div>
            ))}
          </div>
        </section>

        {/* INDUSTRIAL SERVICES SECTOR MATRIX */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center tracking-tight">Key Sourcing Capabilities</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* MINING EXTRACTION */}
            <div className="bg-white border rounded-3xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                className="h-48 w-full object-cover group-hover:scale-102 transition-transform duration-500"
                alt="Mining Extraction"
              />
              <div className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition-colors">Mining & Excavation</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Direct supply of wear-resistant crusher plates, steel-reinforced conveyor rubbers, grinding media, flotation frothers, and specialized chemical extractors for diamond and ore extraction.
                </p>
              </div>
            </div>

            {/* AUTOMOTIVE & MRO */}
            <div className="bg-white border rounded-3xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
                className="h-48 w-full object-cover group-hover:scale-102 transition-transform duration-500"
                alt="MRO Spares"
              />
              <div className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition-colors">MRO & Machinery Spares</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Automotive components, engine parts, high-pressure seals, planetary gears, and heavy hydraulic valves sourced directly from Turkey's leading manufacturers for Angolan machinery fleets.
                </p>
              </div>
            </div>

            {/* OIL & GAS PROCUREMENT */}
            <div className="bg-white border rounded-3xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition">
              <img
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800"
                className="h-48 w-full object-cover group-hover:scale-102 transition-transform duration-500"
                alt="Oil and Gas"
              />
              <div className="p-8 space-y-4">
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition-colors">Oil & Gas Infrastructure</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Bulk mechanical procurement, pipe fittings, heavy-duty industrial valves, pressure vessels, and refinery maintenance compounds built under ISO 9001 quality compliance.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CONSULTING BLOCK */}
        <section className="bg-white rounded-3xl border shadow-sm grid md:grid-cols-2 gap-12 p-10 md:p-12 items-center">

          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold rounded-full">
              <Activity size={12} className="animate-pulse" />
              Operational Efficiency Driven by Lean
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              MRO Procurement & Supply Chain Strategy
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed">
              We optimize logistics networks using Lean Six Sigma principles. By auditing database levels, automating warehouse restocking points, and aligning transport lead times, we significantly mitigate production stockouts.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div className="border-l-4 border-orange-500 pl-4 space-y-1">
                <p className="text-3xl font-black text-gray-900">35k+</p>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Spares Delivered</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 space-y-1">
                <p className="text-3xl font-black text-gray-900">15+</p>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Years Active Trade</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-80 border shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1587149185211-28a2ef4c9a10?q=80&w=1170&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Supply Chain Sourcing"
            />
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}