import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  MapPin, 
  Mail, 
  Globe, 
  ArrowUp, 
  Send, 
  CheckCircle, 
  Loader2, 
  ChevronRight,
  ShieldCheck,
  Cpu,
  Truck
} from "lucide-react";
import logo from '../assets/logo.jpg';

// Custom SVG Brand Components for Social Icons (since modern Lucide excludes brand logos)
const LinkedInIcon = ({ size = 18, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 18, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GitHubIcon = ({ size = 18, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Helper to format clocks
const getHubTime = (timeZone) => {
  const options = {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  return new Intl.DateTimeFormat([], options).format(new Date());
};

const getHubHour = (timeZone) => {
  const options = {
    timeZone,
    hour: 'numeric',
    hour12: false
  };
  return parseInt(new Intl.DateTimeFormat([], options).format(new Date()), 10);
};

export default function Footer() {
  const { t } = useTranslation();
  
  // Real-time Clock State
  const [luandaTime, setLuandaTime] = useState("");
  const [istanbulTime, setIstanbulTime] = useState("");
  const [luandaOpen, setLuandaOpen] = useState(true);
  const [istanbulOpen, setIstanbulOpen] = useState(true);

  // Newsletter State
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [subError, setSubError] = useState("");

  // Floating Scroll-to-Top State
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Clock Update Effect
  useEffect(() => {
    const updateClocks = () => {
      try {
        setLuandaTime(getHubTime("Africa/Luanda"));
        setIstanbulTime(getHubTime("Europe/Istanbul"));

        const lHour = getHubHour("Africa/Luanda");
        const iHour = getHubHour("Europe/Istanbul");
        
        // Dynamic business hours check (08:00 to 18:00 local time)
        setLuandaOpen(lHour >= 8 && lHour < 18);
        setIstanbulOpen(iHour >= 8 && iHour < 18);
      } catch (err) {
        // Fallback to local system time if timezone fails
        const fallback = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        setLuandaTime(fallback);
        setIstanbulTime(fallback);
      }
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to Top Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Newsletter Submission Handler
  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubError("");

    // Simple robust email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubError(t("footer.newsletter_invalid_email"));
      return;
    }

    setSubStatus("loading");

    // Simulate API request to register subscriber
    setTimeout(() => {
      try {
        // Save in localStorage for demonstration / mock persistence
        const currentSubs = JSON.parse(localStorage.getItem("anamine_subscribers") || "[]");
        if (!currentSubs.includes(email)) {
          currentSubs.push(email);
          localStorage.setItem("anamine_subscribers", JSON.stringify(currentSubs));
        }
        setSubStatus("success");
      } catch (err) {
        setSubStatus("error");
        setSubError("An unexpected error occurred. Please try again.");
      }
    }, 1500);
  };

  return (
    <footer className="relative border-t border-gray-800/40 bg-gradient-to-b from-[#0A0D12] via-[#070A0F] to-[#04060A] text-gray-300 overflow-hidden">
      
      {/* Visual Accent Glow Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-500 z-10" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500/0 via-cyan-400/50 to-orange-500/0 blur-[3px] z-10" />

      {/* Background Decorative Ambient Light Orbs */}
      <div className="absolute bottom-[-150px] right-[-100px] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[100px] left-[-150px] w-[350px] h-[350px] rounded-full bg-orange-500/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-20">
        
        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Clocks (spans 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/40 transition-colors duration-300">
                <img src={logo} alt="AnaMine" className="h-9 w-auto object-contain rounded" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
                AnaMine
              </span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Anamine bridges international supply chain logistics and digital intelligence. Under Lean Six Sigma and Kaizen principles, we connect industrial sourcing hubs with custom automated SaaS dashboards and enterprise AI integrations.
            </p>

            {/* Dynamic Local Clocks Widget */}
            <div className="space-y-3 pt-2">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {t("footer.clocks_title")}
              </h5>
              
              <div className="grid grid-cols-2 gap-4 max-w-sm">
                
                {/* Luanda Clock Card */}
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 backdrop-blur-sm flex flex-col justify-between hover:border-white/10 transition-colors duration-300">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs text-gray-400 font-medium truncate">🇦🇴 Luanda</span>
                    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      luandaOpen 
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${luandaOpen ? "bg-emerald-400 animate-pulse" : "bg-emerald-400"}`} />
                      {luandaOpen ? t("footer.clock_open") : t("footer.clock_closed")}
                    </span>
                  </div>
                  <span className="text-sm font-mono text-cyan-300 font-semibold tracking-wide">
                    {luandaTime || "00:00:00"}
                  </span>
                  <span className="text-[10px] text-gray-500 mt-0.5 font-medium truncate">{t("footer.clock_luanda")}</span>
                </div>

                {/* Istanbul Clock Card */}
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 backdrop-blur-sm flex flex-col justify-between hover:border-white/10 transition-colors duration-300">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs text-gray-400 font-medium truncate">🇹🇷 Istanbul</span>
                    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      istanbulOpen 
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${istanbulOpen ? "bg-emerald-400 animate-pulse" : "bg-emerald-400"}`} />
                      {istanbulOpen ? t("footer.clock_open") : t("footer.clock_closed")}
                    </span>
                  </div>
                  <span className="text-sm font-mono text-cyan-300 font-semibold tracking-wide">
                    {istanbulTime || "00:00:00"}
                  </span>
                  <span className="text-[10px] text-gray-500 mt-0.5 font-medium truncate">{t("footer.clock_istanbul")}</span>
                </div>

              </div>
            </div>

            {/* Social Icons with custom micro-animations */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a 
                href="https://anamine.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Sourcing Division Links */}
          <div className="lg:col-span-1 space-y-5">
            <h4 className="font-bold text-white tracking-wide text-sm flex items-center gap-2">
              <span className="w-1.5 h-3 bg-cyan-400 rounded-sm" />
              {t("footer.sourcing_title")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/sourcing" className="group text-gray-400 hover:text-cyan-400 text-sm flex items-center gap-1 transition-colors duration-300">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span>{t("nav.home")}</span>
                </Link>
              </li>
              <li>
                <Link to="/sourcing/products" className="group text-gray-400 hover:text-cyan-400 text-sm flex items-center gap-1 transition-colors duration-300">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span>{t("nav.products")}</span>
                </Link>
              </li>
              <li>
                <Link to="/sourcing/about" className="group text-gray-400 hover:text-cyan-400 text-sm flex items-center gap-1 transition-colors duration-300">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span>{t("nav.about")}</span>
                </Link>
              </li>
              <li>
                <Link to="/sourcing/news" className="group text-gray-400 hover:text-cyan-400 text-sm flex items-center gap-1 transition-colors duration-300">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span>{t("nav.news")}</span>
                </Link>
              </li>
              <li>
                <Link to="/sourcing/contact" className="group text-gray-400 hover:text-cyan-400 text-sm flex items-center gap-1 transition-colors duration-300">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span>{t("nav.contact")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: AI & Digital Links */}
          <div className="lg:col-span-1 space-y-5">
            <h4 className="font-bold text-white tracking-wide text-sm flex items-center gap-2">
              <span className="w-1.5 h-3 bg-orange-400 rounded-sm" />
              {t("footer.digital_title")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/digital" className="group text-gray-400 hover:text-cyan-400 text-sm flex items-center gap-1 transition-colors duration-300">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span>{t("nav.home")}</span>
                </Link>
              </li>
              <li>
                <Link to="/digital/services" className="group text-gray-400 hover:text-cyan-400 text-sm flex items-center gap-1 transition-colors duration-300">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span>{t("nav.services")}</span>
                </Link>
              </li>
              <li>
                <Link to="/digital/about" className="group text-gray-400 hover:text-cyan-400 text-sm flex items-center gap-1 transition-colors duration-300">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span>{t("nav.about")}</span>
                </Link>
              </li>
              <li>
                <Link to="/digital/news" className="group text-gray-400 hover:text-cyan-400 text-sm flex items-center gap-1 transition-colors duration-300">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span>{t("nav.news")}</span>
                </Link>
              </li>
              <li>
                <Link to="/digital/contact" className="group text-gray-400 hover:text-cyan-400 text-sm flex items-center gap-1 transition-colors duration-300">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  <span>{t("nav.contact")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Verification Widget (spans 2) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-bold text-white tracking-wide text-sm flex items-center gap-2">
              <span className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-sm" />
              {t("footer.newsletter_title")}
            </h4>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("footer.newsletter_desc")}
            </p>

            <div className="pt-2">
              {subStatus === "success" ? (
                /* Newsletter Success State */
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-md flex gap-3 text-emerald-400 animate-fadeIn">
                  <CheckCircle size={22} className="shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-sm text-white mb-0.5">
                      {t("footer.newsletter_success")}
                    </h5>
                    <p className="text-xs text-emerald-400/90 leading-relaxed">
                      {t("footer.newsletter_success_desc", { email })}
                    </p>
                  </div>
                </div>
              ) : (
                /* Newsletter Form Input */
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex gap-2">
                    <div className="relative flex-grow">
                      <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("footer.newsletter_placeholder")}
                        disabled={subStatus === "loading"}
                        className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 disabled:opacity-50"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={subStatus === "loading"}
                      className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 hover:opacity-95 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-70 group"
                    >
                      {subStatus === "loading" ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <>
                          <span>{t("footer.newsletter_btn")}</span>
                          <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>

                  {subError && (
                    <p className="text-xs text-rose-400 pl-1 font-medium animate-shake">
                      {subError}
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Compliance Certificates Badges */}
            <div className="pt-4 border-t border-gray-800/30 flex flex-wrap gap-2.5 items-center">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.02] border border-white/5 text-[10px] font-semibold text-gray-400 uppercase hover:border-cyan-400/20 transition-all duration-300">
                <Cpu size={11} className="text-cyan-400" />
                {t("footer.badge_kaizen")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.02] border border-white/5 text-[10px] font-semibold text-gray-400 uppercase hover:border-cyan-400/20 transition-all duration-300">
                <ShieldCheck size={11} className="text-emerald-400" />
                {t("footer.badge_sixsigma")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.02] border border-white/5 text-[10px] font-semibold text-gray-400 uppercase hover:border-cyan-400/20 transition-all duration-300">
                <Truck size={11} className="text-orange-400" />
                {t("footer.badge_iso")}
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Bar Segment */}
        <div className="border-t border-gray-800/40 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1.5">
            <p className="text-xs text-gray-500 font-medium">
              {t("footer.copy")}
            </p>
            <p className="text-[11px] text-gray-600 font-medium">
              {t("footer.sub")}
            </p>
          </div>

          {/* Legal / Policy routing links & dynamic scrollToTop trigger */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-medium">
            <a href="#privacy" className="hover:text-cyan-400 transition-colors duration-300">
              {t("footer.privacy_policy")}
            </a>
            <span className="w-1 h-1 rounded-full bg-gray-700 hidden sm:inline" />
            <a href="#terms" className="hover:text-cyan-400 transition-colors duration-300">
              {t("footer.terms_of_service")}
            </a>
            <span className="w-1 h-1 rounded-full bg-gray-700 hidden sm:inline" />
            <a href="#ethics" className="hover:text-cyan-400 transition-colors duration-300">
              {t("footer.ethics_compliance")}
            </a>
            
            <button 
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 py-1 px-3 bg-white/5 rounded-full border border-white/10 hover:border-cyan-400/40 text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
            >
              <span>{t("footer.scroll_top")}</span>
              <ArrowUp size={12} className="group-hover:animate-bounce" />
            </button>
          </div>
        </div>

      </div>

      {/* Floating Action Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 group focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} className="group-hover:animate-bounce" />
        </button>
      )}

    </footer>
  );
}