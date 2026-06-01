import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0D12]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=900&fit=crop')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D12] via-[#0A0D12]/92 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center animate-fadeInUp relative z-10 w-full">
        <div className="space-y-8">
          <div>
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase bg-cyan-950/50 border border-cyan-800/30 px-3 py-1 rounded-full">
              {t('landing.hero_tag')}
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-white tracking-tight">
              {t('landing.hero_title')}
            </h1>
            <p className="mt-3 text-lg font-medium text-orange-400">
              {t('landing.hero_subtitle')}
            </p>
          </div>

          <p className="text-base text-gray-300 leading-relaxed max-w-lg">
            {t('landing.hero_desc')}
          </p>

          <div className="flex gap-4 pt-4">
            <div className="group cursor-pointer">
              <p className="text-sm text-cyan-400 font-semibold transition group-hover:text-cyan-300">📍 Luanda, Angola</p>
              <p className="text-xs text-gray-500 mt-1">Headquarters</p>
            </div>
            <div className="w-px bg-gray-800"></div>
            <div className="group cursor-pointer">
              <p className="text-sm text-orange-400 font-semibold transition group-hover:text-orange-300">📍 Istanbul, Turkey</p>
              <p className="text-xs text-gray-500 mt-1">Operations Hub</p>
            </div>
          </div>
        </div>

        <div className="animate-slideInRight hidden md:block">
          <div className="relative h-80 rounded-3xl overflow-hidden group border border-gray-800/50 shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/40"></div>
            </div>
            <div className="relative h-full rounded-3xl border-2 border-white/10 flex items-center justify-center backdrop-blur-sm bg-[#080B10]/20">
              <div className="text-center space-y-4">
                <p className="text-white font-bold text-xl tracking-wider">Global Enterprise</p>
                <p className="text-cyan-300 text-sm font-semibold tracking-widest bg-cyan-950/60 px-4 py-1.5 rounded-full border border-cyan-800/50">
                  AI × Industrial Sourcing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}