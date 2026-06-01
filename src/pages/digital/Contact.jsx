import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../components/layout/LanguageSwitcher'
import Footer from '../../components/Footer'
import logo from '../../assets/logo.jpg'
export default function DigitalContact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    }, 4000)
  }

  return (
    <div className="text-gray-100 min-h-screen flex flex-col bg-[#0A0D12] transition-colors duration-300">
      <header className="w-full bg-[#0A0D12]/75 backdrop-blur-md border-b border-gray-800/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-90 transition flex items-center gap-2">
            <img src={logo} alt="AnaMine Logo" className="h-8" />
            AnaMine Digital
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <nav className="max-w-7xl mx-auto w-full px-6 py-6 mt-4">
        <div className="bg-[#0F141D]/60 backdrop-blur-sm rounded-2xl border border-gray-800/60 p-4">
          <ul className="flex flex-wrap gap-4 md:gap-8 text-sm font-bold">
            <li><Link to="/digital" className="text-gray-400 hover:text-white px-4 py-2 rounded-xl transition">{t('nav.home')}</Link></li>
            <li><Link to="/digital/about" className="text-gray-400 hover:text-white px-4 py-2 rounded-xl transition">{t('nav.about')}</Link></li>
            <li><Link to="/digital/services" className="text-gray-400 hover:text-white px-4 py-2 rounded-xl transition">{t('nav.services')}</Link></li>
            <li><Link to="/digital/news" className="text-gray-400 hover:text-white px-4 py-2 rounded-xl transition">{t('nav.news')}</Link></li>
            <li><Link to="/digital/contact" className="text-cyan-400 bg-cyan-950/60 border border-cyan-800/30 px-4 py-2 rounded-xl transition">{t('nav.contact')}</Link></li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start animate-fadeInUp">
          {/* Info Card */}
          <div className="bg-[#0F141D]/45 backdrop-blur-sm rounded-3xl border border-gray-800/60 p-8 md:p-12 shadow-2xl space-y-8">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-cyan-950/60 border border-cyan-800/30 text-cyan-400 text-xs font-bold rounded-full tracking-wider uppercase">
                {t('nav.contact')}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                {t('digital.contact.title')}
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('digital.contact.intro')}
              </p>
            </div>

            {/* Direct Info */}
            <div className="space-y-6 pt-4 border-t border-gray-800/50">
              <div className="flex gap-4 items-start">
                <span className="w-10 h-10 bg-cyan-950/50 border border-cyan-800/30 rounded-xl flex items-center justify-center text-cyan-400">📍</span>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Istanbul Tech Lab</p>
                  <p className="text-sm font-semibold text-white mt-1">AnaMine Engineering Hub</p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Bahçeşehir District, Istanbul, Turkey
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-10 h-10 bg-cyan-950/50 border border-cyan-800/30 rounded-xl flex items-center justify-center text-cyan-400">📧</span>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Address</p>
                  <p className="text-sm font-bold text-cyan-400 mt-1">info@anamine.com.tr</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-10 h-10 bg-cyan-950/50 border border-cyan-800/30 rounded-xl flex items-center justify-center text-cyan-400">📞</span>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Business Development Phone</p>
                  <p className="text-sm font-bold text-cyan-400 mt-1">+244 927 359 000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-[#0F141D]/45 backdrop-blur-sm rounded-3xl border border-gray-800/60 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {submitted && (
              <div className="absolute inset-0 bg-[#0F141D]/98 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 animate-fadeInUp">
                <span className="text-5xl mb-4">🚀</span>
                <h3 className="text-2xl font-black text-white">Consultation Scheduled!</h3>
                <p className="text-gray-400 text-sm mt-2 max-w-sm">
                  Thank you for contacting AnaMine Digital. Our software engineering desk in Istanbul will review your specifications and contact you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('sourcing.contact.name')}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#080B10] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:bg-[#0E131C] transition text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('sourcing.contact.email')}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#080B10] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:bg-[#0E131C] transition text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('sourcing.contact.phone')}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#080B10] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:bg-[#0E131C] transition text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('sourcing.contact.company')}</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#080B10] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:bg-[#0E131C] transition text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('digital.contact.services')}</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#080B10] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:bg-[#0E131C] transition text-white"
                >
                  <option value="">{t('digital.contact.select_service')}</option>
                  <option value="erp">{t('digital.contact.erp')}</option>
                  <option value="saas">{t('digital.contact.saas')}</option>
                  <option value="dashboard">{t('digital.contact.dashboard')}</option>
                  <option value="consulting">{t('digital.contact.consulting')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('sourcing.contact.message')}</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('sourcing.contact.placeholder_msg')}
                  className="w-full bg-[#080B10] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:bg-[#0E131C] transition text-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-700 transition shadow-lg border border-cyan-500/30"
              >
                {t('digital.contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer isDark={true} />
    </div>
  )
}
