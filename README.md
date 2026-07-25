# Vedica Spring

**Premium Himalayan Natural Spring Water — Born in the Himalayas**

Official marketing website for [Vedica Spring](https://vedicaspring.com), a premium Himalayan natural spring water brand by Vedica Spring Waters Pvt. Ltd., Dehradun, Uttarakhand, India.

## Features

- **Cinematic Scroll Canvas** — 51-frame image sequence with progress-based scrubbing
- **Custom SPA Router** — History API-based routing with page transitions
- **Scroll Reveal Animations** — IntersectionObserver-driven fade, slide, and parallax effects
- **Responsive Design** — Mobile-first with hamburger menu and full-screen overlay
- **Glassmorphism UI** — Branded glass design system with custom color palette
- **Animated Loading Screen** — Branded water drop SVG with progress bar

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Scroll canvas, brand story, products, testimonials, CTA |
| `/our-water` | Our Water | Five Chapters narrative + mineral composition |
| `/wellness` | Wellness | Health benefits, Ayurveda connection |
| `/sustainability` | Sustainability | CSR initiatives, recycling, social feeds |
| `/about` | Our Story | Founding story, values, animated stats |
| `/gallery` | Gallery | Masonry grid with category filters |
| `/contact` | Contact | Contact form, wholesale info, city availability |

## Products

| Expression | pH | TDS (mg/L) | Sizes |
|------------|-----|------------|-------|
| Snow (Chapter I) | 7.2 | 85 | 200ml, 500ml, 1L |
| Spring (Chapter II) | 7.4 | 142 | 330ml, 750ml, 1.5L |
| Source (Chapter III) | 7.6 | 210 | 500ml, 1L |

## Tech Stack

- **Build Tool:** Vite 6
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 3 + PostCSS + Autoprefixer
- **Animation:** Motion (Framer Motion successor)
- **Utilities:** clsx, tailwind-merge

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement. The app is accessible on your local network (`host: true`).

### Build

```bash
npm run build
```

Runs TypeScript type-checking and builds production assets to `dist/`.

### Preview

```bash
npm run preview
```

Serves the production build locally for testing.

## Project Structure

```
├── index.html                  # SPA entry point (SEO-optimized)
├── public/
│   ├── vedica-logo.svg         # Brand logo
│   ├── gallery/                # Ambient and bottle videos
│   └── vedica/                 # Scroll canvas frames (51 JPEGs)
├── src/
│   ├── main.ts                 # App entry: route registration, loader init
│   ├── router.ts               # Custom SPA router (History API)
│   ├── canvas.ts               # Scroll-driven image sequence canvas
│   ├── style.css               # Global CSS, Tailwind directives, animations
│   ├── components/
│   │   ├── navbar.ts           # Responsive navbar with mobile menu
│   │   ├── footer.ts           # Footer with newsletter, social links
│   │   ├── loader.ts           # Full-screen loading animation
│   │   └── modal.ts            # Generic modal (motion library)
│   ├── pages/
│   │   ├── home.ts             # Homepage
│   │   ├── about.ts            # Our Story
│   │   ├── our-water.ts        # Five Chapters + minerals
│   │   ├── wellness.ts         # Wellness benefits
│   │   ├── sustainability.ts   # Sustainability / CSR
│   │   ├── gallery.ts          # Masonry gallery
│   │   ├── contact.ts          # Contact form + wholesale
│   │   └── 404.ts              # Not found page
│   ├── data/
│   │   ├── products.ts         # Product definitions + chapters
│   │   ├── features.ts         # Wellness/quality features
│   │   ├── team.ts             # Leadership team data
│   │   └── testimonials.ts     # Customer testimonials
│   └── utils/
│       ├── animations.ts       # ScrollReveal, counters, parallax, magnetic
│       ├── form-validator.ts   # Form validation utilities
│       └── storage.ts          # localStorage wrapper
├── tailwind.config.js          # Tailwind theme with Vedica brand palette
├── vite.config.ts              # Vite configuration
└── tsconfig.json               # TypeScript configuration
```

## Brand Design System

| Token | Hex | Description |
|-------|-----|-------------|
| `vedica-deep` | `#0A1A2A` | Deepest ocean dark |
| `vedica-navy` | `#0D2540` | Dark navy |
| `vedica-blue` | `#005CAB` | Primary brand blue |
| `vedica-blue-soft` | `#3A8AD1` | Soft sky blue |
| `vedica-teal` | `#3A7AAF` | Mid-range teal |
| `vedica-glacial` | `#A8C8DE` | Glacial light blue |
| `vedica-yellow` | `#FCDC00` | Primary accent gold |
| `vedica-yellow-soft` | `#FFE85C` | Soft warm gold |
| `vedica-white` | `#F7F8FB` | Soft white |
| `vedica-pearl` | `#EAF2F8` | Pearl off-white |

## Copyright

&copy; 2026 Vedica Spring Waters Pvt. Ltd. All rights reserved.
