# El-Omda (العمدة) - Riyadh Used Furniture Buying Service

**El-Omda** is a premium, SEO-optimized website for a used furniture buying service in Riyadh, Saudi Arabia. The platform connects sellers with buyers through a fast, transparent, and localized experience.

## 🎯 Project Overview

El-Omda specializes in buying used furniture and items from homes, offices, and commercial spaces across Riyadh. The website is designed to:

- Dominate local search results for Riyadh furniture buying keywords
- Provide hyper-local content for each district in Riyadh
- Build trust through transparency in pricing and process
- Optimize for both traditional SEO and AI-driven search (GEO - Generative Engine Optimization)
- Deliver a premium Arabic-first user experience

## 🏗️ Tech Stack

- **Framework:** [Astro v5](https://astro.build) - Static Site Generation
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components:** React (islands architecture)
- **Content:** MDX for blog posts
- **Icons:** Lucide React
- **Fonts:** Tajawal (Arabic web font)
- **OG Images:** Dynamic generation with Satori + Resvg
- **Performance:** Partytown (off-main-thread scripts)
- **Deployment:** Cloudflare Pages
- **Adapter:** @astrojs/cloudflare

## 📁 Project Structure

```text
/
├── public/
│   ├── images/           # Static images (hero, services, blog)
│   │   ├── branding/     # Logos and brand assets
│   │   └── services/     # Service-specific images
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── home/         # Homepage sections
│   │   ├── services/     # Service page components
│   │   ├── seo/          # SEO components (SeoHead)
│   │   └── ui/           # Reusable UI components
│   ├── content/
│   │   ├── blog/         # MDX blog posts
│   │   └── config.ts     # Content collections config
│   ├── data/
│   │   ├── districts.ts  # Riyadh districts data
│   │   ├── service-content.ts  # Service templates
│   │   ├── seo-data.ts   # SEO metadata
│   │   ├── content-dictionaries.ts  # Vibe-based content
│   │   └── site-config.ts  # Global site configuration
│   ├── layouts/
│   │   └── Layout.astro  # Base layout with SEO
│   ├── pages/
│   │   ├── [region]/[district].astro  # District pages
│   │   ├── services/[slug].astro      # Service pages
│   │   ├── blog/         # Blog listing and posts
│   │   ├── og/           # Dynamic OG image generation
│   │   └── index.astro   # Homepage
│   └── styles/
│       └── global.css    # Global styles
└── package.json
```

## ✨ Key Features

### 1. **Programmatic SEO (pSEO)**

- **50+ District Pages:** Each of Riyadh's major districts has a dedicated landing page
- **Dynamic Content:** Vibe-based content engine adapts messaging based on district characteristics (luxury, family, industrial)
- **Internal Linking:** Strategic cross-linking between districts, services, and blog content
- **Schema.org JSON-LD:** Rich structured data for organizations, services, local businesses, and FAQs
- **Performance:** Partytown integration for off-thread analytics and aggressive Cloudflare caching policies

### 2. **Hyper-Local Optimization**

- District-specific hero images and content
- Neighborhood context and local proof sections
- Service priorities reordered by district vibe
- Google Maps embeds with highlighted service areas

### 3. **Service Pages**

- Detailed service templates for ACs, Kitchens, Bedrooms, Appliances, etc.
- Keyword clouds for entity injection
- Transparent acceptance criteria grids
- Pricing tables with conditional logic
- Coverage maps showing service availability

### 4. **Blog & Content Marketing**

- MDX-based blog system with category/tag support
- SEO-optimized blog posts targeting informational keywords
- Featured blog section on homepage
- Automatic sitemap generation

### 5. **Dynamic OG Images**

- Auto-generated Open Graph images for all pages
- Arabic text support using Tajawal font
- Branded design with district/service-specific titles
- Optimized for social media sharing

### 6. **Mobile-First Design**

- Sticky mobile action bar with click-to-call
- Responsive navigation with smooth mobile menu
- Touch-optimized interactive elements
- Fast loading times with optimized images

### 7. **Trust & Conversion**

- Transparent pricing information
- Privacy & safety guarantees
- Customer testimonials
- Clear call-to-action buttons
- WhatsApp and phone integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/gmdgdn/alomda.git
cd alomda

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🌐 Deployment

This project is configured for deployment on **Cloudflare Pages**.

### Build Settings

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 18 or higher

### Deploy to Cloudflare Pages

```bash
# Build the project
npm run build

# Deploy using Wrangler
npx wrangler pages deploy dist --project-name elomda-sa
```

## 📊 SEO Strategy

### Target Keywords

- **Transactional:** "شراء اثاث مستعمل الرياض" (buy used furniture Riyadh)
- **Local:** "شراء اثاث + [district name]" for each of 50+ districts
- **Service-Specific:** "شراء مطابخ مستعملة", "شراء مكيفات سكراب"
- **Informational:** Blog content targeting common questions

### GEO (Generative Engine Optimization)

- Structured FAQ sections with JSON-LD schema
- Comprehensive entity coverage (districts, services, areas)
- Clear, authoritative content that answers queries directly
- Semantic HTML with proper heading hierarchy
- Rich metadata for AI search engines

### Technical SEO

- Static site generation for maximum performance
- Automatic sitemap generation
- Optimized meta tags and Open Graph images
- Canonical URLs (trailing slash optimized)
- Mobile-responsive design
- Fast Core Web Vitals (Partytown + Font Optimization)
- `robots.txt` and `_redirects` configuration

## 🎨 Design Philosophy

- **Arabic-First:** RTL layout, Arabic typography, culturally appropriate imagery
- **Premium Aesthetic:** Modern, clean design with subtle animations
- **Trust-Building:** Transparent pricing, clear processes, professional branding
- **Local Authenticity:** Riyadh-specific imagery and content
- **Conversion-Focused:** Strategic CTAs and streamlined user journeys

## 📝 Content Management

### Adding a New Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: 'Post Title in Arabic'
description: 'Brief description'
pubDate: 2025-11-27
author: 'Author Name'
image: '/images/blog/post-image.png'
tags: ['tag1', 'tag2']
---

Your content here...
```

### Adding a New District

Edit `src/data/districts.ts` and add a new district object with all required fields.

### Adding a New Service

Edit `src/data/service-content.ts` and create a new service template.

## 🔧 Configuration

Key configuration files:

- `src/data/site-config.ts` - Global site settings (phone, WhatsApp, social links)
- `astro.config.mjs` - Astro configuration
- `wrangler.jsonc` - Cloudflare deployment settings

## 📄 License

This project is proprietary. All rights reserved.

## 📞 Contact

- **Website:** [elomda-sa.com](https://elomda-sa.com)
- **Phone:** 056 564 7753
- **Email:** <info@elomda-sa.com>

---

Built with ❤️ using Astro and deployed on Cloudflare Pages.
