import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Hero from '../../components/Hero'
import DualSelector from '../../components/DualSelector'
import CompanyContext from '../../components/CompanyContext'
import GlobalPresence from '../../components/GlobalPresence'
import Footer from '../../components/Footer'
import LanguageSwitcher from '../../components/layout/LanguageSwitcher'
import logo from '../../assets/logo.jpg'

export default function LandingPage() {
  const { t } = useTranslation()

  return (
    <div className="text-gray-100 overflow-hidden bg-gradient-to-b from-[#0A0D12] via-[#0E131B] to-[#0A0D12] min-h-screen flex flex-col">
      <header className="w-full sticky top-0 z-50 bg-[#0A0D12]/70 backdrop-blur-md border-b border-gray-800/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent hover:opacity-90 transition cursor-pointer">
            <img src={logo} alt="Anamine" className="h-10" /> AnaMine
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <DualSelector />
        <CompanyContext />
        <GlobalPresence />
      </main>

      <Footer isDark={true} />
    </div>
  )
}
