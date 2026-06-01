import { useTranslation } from 'react-i18next'

export default function GlobalPresence() {
  const { t } = useTranslation()

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800/60 animate-fadeInUp">

      <h3 className="text-3xl font-bold mb-12 text-white tracking-tight">{t('global.title')}</h3>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="group relative overflow-hidden p-10 border border-gray-800/85 rounded-3xl bg-[#0F141D]/40 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/20 transition-all duration-500">
          <div 
            className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1526628653108-fb7ae9143d91?w=600&h=400&fit=crop')`
            }}
          ></div>
          <div className="relative z-10">
            <p className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{t('global.luanda_title')}</p>
            <p className="text-cyan-400 text-xs mt-3 font-bold tracking-widest uppercase bg-cyan-950/60 border border-cyan-800/30 px-3 py-1 rounded-full inline-block">
              {t('global.luanda_type')}
            </p>
            <p className="text-gray-400 text-sm mt-5 leading-relaxed">{t('global.luanda_desc')}</p>
            <div className="mt-6 pt-6 border-t border-gray-800/80 text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-400">Condominio Belas Business Park</p>
              <p>Etapa V, Edifício Cuanza Sul, 6° Piso</p>
              <p>Talatona, Luanda, Angola</p>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden p-10 border border-gray-800/85 rounded-3xl bg-[#0F141D]/40 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-950/20 transition-all duration-500">
          <div 
            className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop')`
            }}
          ></div>
          <div className="relative z-10">
            <p className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{t('global.istanbul_title')}</p>
            <p className="text-orange-400 text-xs mt-3 font-bold tracking-widest uppercase bg-orange-950/60 border border-orange-800/30 px-3 py-1 rounded-full inline-block">
              {t('global.istanbul_type')}
            </p>
            <p className="text-gray-400 text-sm mt-5 leading-relaxed">{t('global.istanbul_desc')}</p>
            <div className="mt-6 pt-6 border-t border-gray-800/80 text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-400">Bahçeşehir District</p>
              <p>Istanbul, Turkey</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}