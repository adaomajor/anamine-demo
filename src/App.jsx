import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './locales/i18n'

// Pages
import LandingPage from './pages/shared/LandingPage'
import SourcingHome from './pages/sourcing/Home'
import SourcingAbout from './pages/sourcing/About'
import SourcingProducts from './pages/sourcing/Products'
import SourcingNews from './pages/sourcing/News'
import SourcingContact from './pages/sourcing/Contact'
import DigitalHome from './pages/digital/Home'
import DigitalAbout from './pages/digital/About'
import DigitalServices from './pages/digital/Services'
import DigitalNews from './pages/digital/News'
import DigitalContact from './pages/digital/Contact'

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* AnaMine Sourcing Routes */}
          <Route path="/sourcing" element={<SourcingHome />} />
          <Route path="/sourcing/about" element={<SourcingAbout />} />
          <Route path="/sourcing/products" element={<SourcingProducts />} />
          <Route path="/sourcing/news" element={<SourcingNews />} />
          <Route path="/sourcing/contact" element={<SourcingContact />} />

          {/* AnaMine AI & Digital Routes */}
          <Route path="/digital" element={<DigitalHome />} />
          <Route path="/digital/about" element={<DigitalAbout />} />
          <Route path="/digital/services" element={<DigitalServices />} />
          <Route path="/digital/news" element={<DigitalNews />} />
          <Route path="/digital/contact" element={<DigitalContact />} />
        </Routes>
      </Router>
    </I18nextProvider>
  )
}