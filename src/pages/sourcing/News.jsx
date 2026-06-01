import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, User, ArrowRight, ShieldCheck } from 'lucide-react';
import LanguageSwitcher from '../../components/layout/LanguageSwitcher';
import Footer from '../../components/Footer';
import logo from '../../assets/logo.jpg';

export default function SourcingNews() {
  const { t } = useTranslation();

  const articles = [
    {
      titleKey: "sourcing.news.n1_title",
      descKey: "sourcing.news.n1_desc",
      date: "2026-05-18",
      author: "AnaMine Logistics Group",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
      tag: "Conveyor Belts"
    },
    {
      titleKey: "sourcing.news.n2_title",
      descKey: "sourcing.news.n2_desc",
      date: "2026-04-30",
      author: "Metallurgical Trade Hub",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
      tag: "Ferro Alloys"
    },
    {
      titleKey: "sourcing.news.n3_title",
      descKey: "sourcing.news.n3_desc",
      date: "2026-04-12",
      author: "Kaizen Quality Operations",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800",
      tag: "Port Clearing"
    },
    {
      titleKey: "sourcing.news.n4_title",
      descKey: "sourcing.news.n4_desc",
      date: "2026-03-24",
      author: "Global Trade Analysis",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800",
      tag: "Smelting Network"
    },
    {
      titleKey: "sourcing.news.n5_title",
      descKey: "sourcing.news.n5_desc",
      date: "2026-02-08",
      author: "Diamond Excavation Audits",
      image: "https://images.unsplash.com/photo-1627660079998-72a047f092a0?w=800",
      tag: "Case Study"
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
            <li><Link to="/sourcing/products" className="text-gray-500 hover:text-black px-4 py-2 transition">{t('nav.products')}</Link></li>
            <li><Link to="/sourcing/news" className="text-orange-600 bg-orange-50 px-4 py-2 rounded-xl transition">{t('nav.news')}</Link></li>
            <li><Link to="/sourcing/contact" className="text-gray-500 hover:text-black px-4 py-2 transition">{t('nav.contact')}</Link></li>
          </ul>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 space-y-16 animate-fadeInUp">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 border border-orange-200 text-xs font-bold rounded-full uppercase tracking-wider">
            Sourcing Industry Intelligence
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t('sourcing.news.title')}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('sourcing.news.intro')}
          </p>
        </div>

        {/* Highlight Article Block (Article 1 spans wide) */}
        {articles.length > 0 && (
          <section className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-0 group hover:shadow-md hover:border-orange-500/20 transition duration-300">
            <div className="h-64 lg:h-full relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-101 transition-transform duration-500"
                style={{ backgroundImage: `url('${articles[0].image}')` }}
              />
              <div className="absolute top-6 left-6 bg-orange-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Feature Report
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-semibold">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {articles[0].date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {articles[0].author}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-orange-600 transition-colors leading-tight">
                  {t(articles[0].titleKey)}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t(articles[0].descKey)}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs font-bold text-orange-600 px-2.5 py-1 bg-orange-50 rounded">{articles[0].tag}</span>
                <span className="text-sm font-bold text-orange-600 group-hover:text-orange-700 flex items-center gap-1 transition-colors">
                  <span>Read Full Report</span>
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </section>
        )}

        {/* 4-Grid News catalog */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.slice(1).map((art, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md hover:border-orange-500/20 transition duration-300">
              
              <div className="h-56 overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-103 transition-transform duration-500"
                  style={{ backgroundImage: `url('${art.image}')` }}
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {art.tag}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] text-gray-400 font-semibold">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {art.date}</span>
                    <span className="flex items-center gap-1"><User size={12} /> {art.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-tight">
                    {t(art.titleKey)}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {t(art.descKey)}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-orange-600 group-hover:text-orange-700 transition-colors">
                  <span>Explore Insights</span>
                  <ArrowRight size={14} />
                </div>
              </div>

            </div>
          ))}
        </section>

        {/* Industry Advisory Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-md flex flex-col md:flex-row justify-between items-center gap-8 max-w-4xl mx-auto">
          <div className="space-y-2 max-w-md text-center md:text-left">
            <h4 className="text-lg font-bold flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="text-orange-500" size={20} />
              Verified Sourcing Intelligence
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              We coordinate with leading raw alloy smelters and rubber developers, delivering highly technical compliance and market logistics updates.
            </p>
          </div>
          <Link to="/sourcing/contact" className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl transition shadow-lg shadow-orange-600/20 whitespace-nowrap">
            Schedule Market Call
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
