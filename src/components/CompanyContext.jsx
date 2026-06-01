import { useTranslation } from 'react-i18next'

export default function CompanyContext() {
  const { t } = useTranslation()

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800/60 animate-fadeInUp">
      <div className="grid md:grid-cols-3 gap-8">

        <div className="group p-8 rounded-2xl bg-[#0F141D]/50 border border-gray-800/80 hover:border-cyan-500/50 hover:bg-cyan-950/10 transition-all duration-500 shadow-lg">
          <div className="w-14 h-14 bg-cyan-950/50 border border-cyan-800/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-cyan-900/40 transition">
            <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{t('company.who_title')}</h3>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            {t('company.who_desc')}
          </p>
        </div>

        <div className="group p-8 rounded-2xl bg-[#0F141D]/50 border border-gray-800/80 hover:border-orange-500/50 hover:bg-orange-950/10 transition-all duration-500 shadow-lg">
          <div className="w-14 h-14 bg-orange-950/50 border border-orange-800/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-900/40 transition">
            <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">{t('company.what_title')}</h3>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            {t('company.what_desc')}
          </p>
        </div>

        <div className="group p-8 rounded-2xl bg-[#0F141D]/50 border border-gray-800/80 hover:border-cyan-500/50 hover:bg-cyan-950/10 transition-all duration-500 shadow-lg">
          <div className="w-14 h-14 bg-cyan-950/50 border border-cyan-800/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-cyan-900/40 transition">
            <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H7m6 0v-2a2 2 0 10-4 0v2m4 0h.5A2.5 2.5 0 0021 17.5V5" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{t('company.where_title')}</h3>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            {t('company.where_desc')}
          </p>
        </div>

      </div>
    </section>
  )
}