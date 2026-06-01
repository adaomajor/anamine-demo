import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'tr', label: 'TR', flag: '🇹🇷' },
    { code: 'pt', label: 'PT', flag: '🇵🇹' }
  ]

  return (
    <div className="flex items-center gap-1 bg-[#0F141D] border border-gray-800 rounded-xl p-1">

      {languages.map((lang) => {
        const active = i18n.language === lang.code

        return (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition
              ${active
                ? 'bg-cyan-950 text-cyan-300 shadow-md'
                : 'text-gray-400 hover:text-white'
              }
            `}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        )
      })}

    </div>
  )
}