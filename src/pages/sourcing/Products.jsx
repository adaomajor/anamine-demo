import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Gem, 
  FlaskConical, 
  Boxes, 
  Hammer, 
  Wrench, 
  Wind,
  FileText
} from 'lucide-react';
import LanguageSwitcher from '../../components/layout/LanguageSwitcher';
import Footer from '../../components/Footer';
import logo from '../../assets/logo.jpg';

export default function SourcingProducts() {
  const { t } = useTranslation();

  const productCatalog = [
    {
      category: "Minerals",
      titleKey: "sourcing.products.cat_minerals",
      descKey: "sourcing.products.cat_minerals_desc",
      tagColor: "bg-amber-600",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop",
      icon: <Gem size={22} />,
      bullets: [
        "Ferro Alloys (FeMn, FeSi, SiMn)",
        "Manganese Ores (High Grade)",
        "Metallurgical Industrial Compounds",
        "Strategic Ore Sourcing Pipelines"
      ]
    },
    {
      category: "Chemicals",
      titleKey: "sourcing.products.cat_chemicals",
      descKey: "sourcing.products.cat_chemicals_desc",
      tagColor: "bg-orange-600",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=600&h=400&fit=crop",
      icon: <FlaskConical size={22} />,
      bullets: [
        "Extraction Reagents & Frothers",
        "Active Flotation Chemicals",
        "Refining Laboratory Compounds",
        "Ethical Compliance Certified Supplies"
      ]
    },
    {
      category: "Consumables",
      titleKey: "sourcing.products.cat_consumables",
      descKey: "sourcing.products.cat_consumables_desc",
      tagColor: "bg-red-600",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
      icon: <Boxes size={22} />,
      bullets: [
        "Steel-Reinforced Conveyor Belts",
        "High-Performance Wear Plates",
        "Conveyor Idlers & Tension Pulley Spares",
        "Extreme Durability Mining Consumables"
      ]
    },
    {
      category: "Rock Drilling",
      titleKey: "sourcing.products.cat_drilling",
      descKey: "sourcing.products.cat_drilling_desc",
      tagColor: "bg-orange-700",
      image: "https://images.unsplash.com/photo-1627660079998-72a047f092a0?w=600&h=400&fit=crop",
      icon: <Hammer size={22} />,
      bullets: [
        "High-Hardness Carbide Drill Rods",
        "Rotary Tricone Bits & Core Barrels",
        "Down-the-Hole (DTH) Hammers",
        "Pneumatic Excavation Spares"
      ]
    },
    {
      category: "MRO Maintenance",
      titleKey: "sourcing.products.cat_mro",
      descKey: "sourcing.products.cat_mro_desc",
      tagColor: "bg-amber-700",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop",
      icon: <Wrench size={22} />,
      bullets: [
        "Heavy-Duty Industrial Lubricants",
        "High-Pressure Seals & Hydraulic Hoses",
        "Planetary Gearboxes & Shaft Couplings",
        "OEM Equipment MRO Fleet Spares"
      ]
    },
    {
      category: "Mine Ventilation",
      titleKey: "sourcing.products.cat_ventilation",
      descKey: "sourcing.products.cat_ventilation_desc",
      tagColor: "bg-rose-700",
      image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=600&h=400&fit=crop",
      icon: <Wind size={22} />,
      bullets: [
        "Flame-Retardant Underground Ducts",
        "High-Capacity Centrifugal Fans",
        "Dynamic Exhaust Air Systems",
        "Explosion-Proof Ventilation Safety"
      ]
    }
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
            <li><Link to="/sourcing/about" className="text-gray-500 hover:text-black px-4 py-2 transition">{t('nav.about')}</Link></li>
            <li><Link to="/sourcing/products" className="text-orange-600 bg-orange-50 px-4 py-2 rounded-xl transition">{t('nav.products')}</Link></li>
            <li><Link to="/sourcing/news" className="text-gray-500 hover:text-black px-4 py-2 transition">{t('nav.news')}</Link></li>
            <li><Link to="/sourcing/contact" className="text-gray-500 hover:text-black px-4 py-2 transition">{t('nav.contact')}</Link></li>
          </ul>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 space-y-16 animate-fadeInUp">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 border border-orange-200 text-xs font-bold rounded-full uppercase tracking-wider">
            Industrial Sourcing Catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t('sourcing.products.title')}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('sourcing.products.intro')}
          </p>
        </div>

        {/* 6-Category Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCatalog.map((prod, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col group hover:shadow-md hover:border-orange-500/20 transition duration-300">
              
              {/* Product Card Image Wrapper */}
              <div className="h-48 overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${prod.image}')` }}
                />
                <div className={`absolute top-4 left-4 ${prod.tagColor} text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider`}>
                  {prod.category}
                </div>
              </div>

              {/* Product Card Content Area */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-orange-600">
                    {prod.icon}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {t(prod.titleKey)}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {t(prod.descKey)}
                  </p>
                </div>

                {/* Technical Bullet Spec List */}
                <ul className="text-[11px] text-gray-600 font-semibold space-y-2 pt-4 border-t border-gray-100">
                  {prod.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic CTA Banner */}
        <div className="bg-orange-600 rounded-3xl p-8 md:p-12 text-white shadow-lg text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Need a custom industrial part or bulk pricing?</h2>
          <p className="text-orange-100 text-sm max-w-2xl mx-auto leading-relaxed">
            We leverage direct manufacturing channels in Istanbul, Izmir, and Ankara to custom manufacture wear parts, heavy conveyor belts, and chemical compounds to your precise operational specifications.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link to="/sourcing/contact" className="px-6 py-3 bg-white text-orange-700 text-sm font-bold rounded-xl hover:bg-orange-50 transition shadow-md">
              Inquire Now
            </Link>
            <a href="mailto:info@anamine.com.tr" className="px-6 py-3 bg-orange-700 hover:bg-orange-700/80 border border-white/20 text-sm font-bold rounded-xl transition flex items-center gap-2">
              <FileText size={16} />
              <span>Email Specifications</span>
            </a>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
