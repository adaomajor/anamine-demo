# AnaMine Multi-Page Website

## Project Structure

A modern, multi-language React + Vite application with dual-sector routing.

### Directory Structure
```
src/
├── pages/
│   ├── shared/
│   │   └── LandingPage.jsx          # Main landing page with dual selector
│   ├── sourcing/
│   │   ├── Home.jsx                 # Sourcing home page
│   │   ├── About.jsx                # About AnaMine Sourcing
│   │   ├── Products.jsx             # Products & Services
│   │   ├── News.jsx                 # News & Updates
│   │   └── Contact.jsx              # Contact Form
│   └── digital/
│       ├── Home.jsx                 # Digital home page
│       ├── About.jsx                # About AI & Digital
│       ├── Services.jsx             # Services
│       ├── News.jsx                 # News & Updates
│       └── Contact.jsx              # Contact Form
├── components/
│   ├── layout/
│   │   └── LanguageSwitcher.jsx     # Multi-language selector
│   ├── Hero.jsx                      # Landing hero section
│   ├── DualSelector.jsx              # Two main sectors selector
│   ├── CompanyContext.jsx            # Company info (Who/What/Where)
│   ├── GlobalPresence.jsx            # Office locations
│   └── Footer.jsx                    # Footer component
├── locales/
│   ├── i18n.js                       # i18next configuration
│   ├── en.json                       # English translations
│   ├── tr.json                       # Turkish translations
│   └── pt.json                       # Portuguese translations
├── App.jsx                           # Main routing app
├── main.jsx                          # React entry point
└── index.css                         # Global styles + animations
```

## Routing Map

### Main Landing Page
- **Route:** `/`
- **Component:** LandingPage
- **Features:** Hero, DualSelector, CompanyContext, GlobalPresence

### AnaMine Sourcing
- `/sourcing` → Home
- `/sourcing/about` → About Page
- `/sourcing/products` → Products & Services
- `/sourcing/news` → News & Updates
- `/sourcing/contact` → Contact Form

### AnaMine AI & Digital
- `/digital` → Home
- `/digital/about` → About Page
- `/digital/services` → Services
- `/digital/news` → News & Updates
- `/digital/contact` → Contact Form

## Multi-Language Support

The app supports three languages via i18next:
- **English** (en) - Default
- **Turkish** (tr) - For Turkey operations
- **Portuguese** (pt) - For Angola (African market)

Language switcher is available in the header of all pages.

## Design System

### Color Scheme
- **Sourcing:** Amber/Orange (#f59e0b, #ea580c)
- **Digital/AI:** Cyan/Blue (#06b6d4, #3b82f6)
- **Background:** Dark gradient (#0a0e14 → #0f1419 → #0a0d12)

### Animations
- `fadeInUp` - Section fade in with upward movement
- `slideInLeft/Right` - Slide in from sides
- `glow` - Subtle glow pulse effect
- `float` - Gentle floating animation

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Development
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### 3. Build for Production
```bash
npm build
```

## Technologies Used
- **React** 18.3.0 - UI Framework
- **Vite** 5.4.0 - Build tool
- **React Router** 6.20.0 - Client-side routing
- **i18next** 23.7.0 - Internationalization
- **Tailwind CSS** 3.4.0 - Styling
- **PostCSS** - CSS processing

## Next Steps

1. **Fill Content Pages** - Add specific content to each page
2. **Add CMS Integration** - Connect to a headless CMS
3. **Implement Contact Forms** - Add form handling
4. **Setup SEO** - Add meta tags and structured data
5. **Analytics** - Integrate tracking
6. **Deploy** - Deploy to production server

## Notes

- All pages maintain consistent branding for each sector
- Language switching persists across page navigation
- Responsive design works on mobile, tablet, and desktop
- Tailwind CSS provides responsive utilities (md:, lg:, etc.)
