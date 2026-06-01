import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../components/layout/LanguageSwitcher'
import Footer from '../../components/Footer'
import logo from '../../assets/logo.jpg'

export default function SourcingContact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', sector: '', message: '' })
    }, 4000)
  }

  return (
    <div className="text-gray-800 min-h-screen flex flex-col bg-slate-50 transition-colors duration-300">
      <header className="w-full bg-white border-b border-gray-200/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold text-orange-600 hover:text-orange-700 transition flex items-center gap-2">
            {/* <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-lg flex items-center justify-center text-base">A</span> */}
           <img src={logo} alt="AnaMine Logo" className="h-8" /> AnaMine Sourcing
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <nav className="max-w-7xl mx-auto w-full px-6 py-6 mt-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-4">
          <ul className="flex flex-wrap gap-4 md:gap-8 text-sm font-bold">
            <li><Link to="/sourcing" className="text-gray-500 hover:text-gray-900 px-4 py-2 rounded-xl transition">{t('nav.home')}</Link></li>
            <li><Link to="/sourcing/about" className="text-gray-500 hover:text-gray-900 px-4 py-2 rounded-xl transition">{t('nav.about')}</Link></li>
            <li><Link to="/sourcing/products" className="text-gray-500 hover:text-gray-900 px-4 py-2 rounded-xl transition">{t('nav.products')}</Link></li>
            <li><Link to="/sourcing/news" className="text-gray-500 hover:text-gray-900 px-4 py-2 rounded-xl transition">{t('nav.news')}</Link></li>
            <li><Link to="/sourcing/contact" className="text-orange-600 bg-orange-50 px-4 py-2 rounded-xl transition">{t('nav.contact')}</Link></li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start animate-fadeInUp">
          {/* Info Card */}
          <div className="bg-white rounded-3xl border border-gray-200/60 p-8 md:p-12 shadow-sm space-y-8">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold rounded-full tracking-wider uppercase">
                {t('nav.contact')}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                {t('sourcing.contact.title')}
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('sourcing.contact.intro')}
              </p>
            </div>

            {/* Direct Info */}
            <div className="space-y-6 pt-4 border-t border-gray-150">
              <div className="flex gap-4 items-start">
                <span className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">📍</span>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Luanda Headquarters</p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">AnaMine Comercio e Servico LDA</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Condominio Belas Business Park - Etapa V, Edificio Cuanza Sul, 6° Piso, Talatona, Luanda, ANGOLA
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">📧</span>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email Address</p>
                  <p className="text-sm font-bold text-orange-600 mt-1">info@anamine.com.tr</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">📞</span>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Business Development Phone</p>
                  <p className="text-sm font-bold text-orange-600 mt-1">+244 927 359 000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white rounded-3xl border border-gray-200/60 p-8 md:p-12 shadow-sm relative overflow-hidden">
            {submitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 animate-fadeInUp">
                <span className="text-5xl mb-4">🎉</span>
                <h3 className="text-2xl font-black text-gray-900">Request Sent Successfully!</h3>
                <p className="text-gray-500 text-sm mt-2 max-w-sm">
                  Thank you for contacting AnaMine Sourcing. Our procurement desk in Luanda will review your specifications and contact you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('sourcing.contact.name')}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('sourcing.contact.email')}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('sourcing.contact.phone')}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('sourcing.contact.company')}</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('sourcing.contact.sector')}</label>
                <select
                  required
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition"
                >
                  <option value="">{t('sourcing.contact.sector_select')}</option>
                  <option value="mining">{t('sourcing.contact.mining')}</option>
                  <option value="automotive">{t('sourcing.contact.automotive')}</option>
                  <option value="oil">{t('sourcing.contact.oil')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('sourcing.contact.message')}</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('sourcing.contact.placeholder_msg')}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition shadow-sm"
              >
                {t('sourcing.contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer isDark={false} />
    </div>
  )
}
