import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function DualSelector() {
  const { t } = useTranslation()

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 animate-fadeInUp">

      {/* SOURCING - Mining & Earth */}
      <Link to="/sourcing" className="group relative overflow-hidden rounded-3xl h-96 cursor-pointer border border-gray-800/80 shadow-2xl hover:border-orange-500/40 hover:shadow-orange-950/20 transition-all duration-500">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 -z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1627660079998-72a047f092a0?w=800&h=600&fit=crop')`
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
          <h2 className="text-3xl font-black mb-3 text-orange-400 group-hover:text-orange-300 transition-colors">{t('sourcing.title')}</h2>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed max-w-md">
            {t('sourcing.desc')}
          </p>

          <div className="flex gap-2 flex-wrap mb-8">
            {t('sourcing.tags', { returnObjects: true }).map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-orange-950/60 backdrop-blur-sm border border-orange-850/40 text-orange-300 text-xs font-semibold rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-sm font-bold text-orange-400 group-hover:text-orange-300 transition">
            {t('sourcing.enter')}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>

      {/* DIGITAL - Technology */}
      <Link to="/digital" className="group relative overflow-hidden rounded-3xl h-96 cursor-pointer border border-gray-800/80 shadow-2xl hover:border-cyan-500/40 hover:shadow-cyan-950/20 transition-all duration-500">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 -z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
          <h2 className="text-3xl font-black mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">{t('digital.title')}</h2>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed max-w-md">
            {t('digital.desc')}
          </p>

          <div className="flex gap-2 flex-wrap mb-8">
            {t('digital.tags', { returnObjects: true }).map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-cyan-950/60 backdrop-blur-sm border border-cyan-850/40 text-cyan-300 text-xs font-semibold rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition">
            {t('digital.enter')}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>

    </section>
  )
}