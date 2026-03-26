# Chef Lidia y Familia - Official Website

[![Astro](https://img.shields.io/badge/Astro-6.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)](https://vercel.com)

Official website for **Chef Lidia y Familia**, a family-run restaurant in Parque Patricios, Buenos Aires, specializing in authentic Peruvian and Argentine home-cooked meals.

## 🍴 About

Chef Lidia y Familia offers:
- **Peruvian Cuisine**: Lomo saltado, ceviche, ají de gallina, causa limeña, and more
- **Argentine Cuisine**: Milanesas, empanadas, choripán, locro, and traditional dishes
- **B2B Corporate Catering**: Viandas for tech companies in Distrito Tecnológico
- **Factura C Invoicing**: Full tax compliance for business clients

**Location**: Av Colonia 95, Parque Patricios, CABA
**Hours**: Mon-Fri 11:00-15:30 | Fri-Sat 19:00-00:00

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) 6.x (SSG)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.x
- **Deployment**: [Vercel](https://vercel.com)
- **Language**: TypeScript
- **Fonts**: Inter (UI), Merriweather (Headings)

## 📁 Project Structure

```
chef-lidia-web/
├── src/
│   ├── assets/               # Images and static assets
│   │   ├── cheflidia-logo.png
│   │   └── dishes/          # Dish photos (placeholders)
│   ├── components/          # Reusable UI components
│   │   ├── Badge.astro
│   │   ├── Button.astro
│   │   ├── DailySpecial.astro
│   │   ├── Footer.astro
│   │   ├── MenuCard.astro
│   │   ├── Navbar.astro
│   │   ├── ReviewCard.astro
│   │   └── WhatsAppButton.astro
│   ├── data/                # JSON data files
│   │   └── menu.json        # 16 dishes (8 Peruvian + 8 Argentine)
│   ├── layouts/             # Page layouts
│   │   └── Layout.astro     # Base layout with SEO
│   ├── pages/               # Routes (file-based routing)
│   │   ├── index.astro      # Home page
│   │   ├── menu.astro       # Full menu
│   │   ├── empresas.astro   # B2B landing (corporate)
│   │   ├── nosotros.astro   # About us
│   │   └── contacto.astro   # Contact
│   ├── styles/              # Global styles
│   │   └── global.css       # Tailwind + custom theme
│   ├── types/               # TypeScript definitions
│   │   └── menu.ts
│   └── utils/               # Helper functions
│       └── whatsapp.ts      # WhatsApp link generator
├── public/                  # Static assets
│   └── favicon.svg
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind configuration (v4 CSS)
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies
├── DEPLOYMENT.md            # Deployment instructions
└── README.md                # This file
```

## 🧞 Commands

Run from project root:

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run astro check` | Type-check TypeScript |

## 🎨 Design System

### Colors

```css
/* Tailwind v4 theme variables */
--color-primary: #556B2F;        /* Olive Green */
--color-primary-dark: #3d4f21;
--color-primary-light: #6b8f3a;
--color-cream: #FDF5E6;          /* Cream */
--color-cream-dark: #f5ebd3;
```

**WCAG Compliance**: 6.8:1 contrast ratio (AA standard ✓)

### Typography

- **UI Text**: Inter (Google Fonts)
- **Headings**: Merriweather (Google Fonts)

### Components

All components follow mobile-first responsive design:
- Touch targets: ≥44px (WCAG 2.5.5)
- Breakpoints: 375px (mobile), 768px (tablet), 1440px (desktop)

## 📋 Features

### Pages

1. **Home** (`/`)
   - Hero section with CTA buttons
   - Daily specials showcase (2 items)
   - Location info

2. **Menu** (`/menu`)
   - 8 Peruvian dishes
   - 8 Argentine dishes
   - Category filtering
   - Price formatting ($XX.XX)
   - Allergen labels

3. **Empresas** (`/empresas`) - **B2B Priority**
   - Factura C badge (prominent)
   - SEO optimized for "viandas corporativas Parque Patricios"
   - Pricing tiers (10%-15% volume discounts)
   - LocalBusiness structured data
   - B2B testimonials
   - FAQ accordion

4. **Nosotros** (`/nosotros`)
   - Family story
   - Core values
   - Location context

5. **Contacto** (`/contacto`)
   - Address, phone, email
   - Opening hours
   - Google Maps embed
   - Social media links

### Integrations

- **WhatsApp**: B2C and B2B message templates
- **Social Media**: Instagram (@chef.lidia), TikTok (@chef.lidia)
- **SEO**: Meta tags, Open Graph, Twitter Cards
- **Analytics Ready**: Structured data for local business

## 🔧 Configuration

### Menu Data

Edit `src/data/menu.json` to update dishes:

```json
{
  "id": "dish-id",
  "name": "Dish Name",
  "description": "Description (10-150 chars)",
  "price": 4500,  // in cents ($45.00)
  "allergens": ["gluten", "dairy"],
  "isDailySpecial": true,  // marks as daily special
  "image": "/assets/dishes/photo.jpg"
}
```

### Daily Specials

Set `isDailySpecial: true` for exactly **2 items** in `menu.json`.
The `DailySpecial` component automatically filters and displays them.

### WhatsApp Messages

Edit templates in `src/utils/whatsapp.ts`:
- **B2C**: Individual customer orders
- **B2B**: Corporate catering inquiries

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions.

**Quick Start**:

```bash
# Build
npm run build

# Deploy to Vercel (auto-deploys on git push)
git push origin main
```

## 🧪 Testing

### Build Verification

```bash
npm run build
# Expected output: 5 page(s) built successfully
```

### Lighthouse Audit

Target scores:
- Performance: >90
- Accessibility: >90
- SEO: >90
- Best Practices: >90

### Responsive Testing

Test at breakpoints:
- 375px (mobile)
- 768px (tablet)
- 1440px (desktop)

## 📝 License

Proprietary - © 2026 Chef Lidia y Familia. All rights reserved.

## 📧 Contact

- **Email**: cheflidiayfamilia@gmail.com
- **Phone**: +54 9 11 2824-0324
- **Instagram**: [@chef.lidia](https://instagram.com/chef.lidia)
- **TikTok**: [@chef.lidia](https://tiktok.com/@chef.lidia)

---

Built with ❤️ using Astro and Tailwind CSS
🤖 Generated with [Claude Code](https://claude.com/claude-code)
