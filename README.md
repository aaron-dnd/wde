<div align="center">
  
  <img src="./public/wde-logo-2.png" alt="WDE Logo" width="280" style="margin-bottom: 20px;" />

  # Wedding Documentary Events
  
  *Real moments. Honest frames. Cinematic wedding storytelling from first look to last dance.*

  [![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-v12.0-FF007F?style=for-the-badge&logo=framer-motion)](https://www.framer.com/motion/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-v5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

</div>

---

## 📖 Overview

**Wedding Documentary Events (WDE)** is a premium, cinematic, editorial-style portfolio and booking site designed for high-end wedding films and fine-art documentary photography. 

The site fuses minimalist editorial design with modern front-end physics to create a tactile, luxury user experience that guides couples seamlessly from philosophy to pricing packages, galleries, and custom live inquiry pipelines.

---

## ✨ Features & Interactivity

The platform is packed with state-of-the-art interactive and technical features:

- **Local Rankings:** Embedded JSON-LD structured data (`LocalBusiness` Schema) targets search engines to rank WDE for local searches, matching top wedding agencies.
- **Image optimization:** Configured custom responsive `sizes` values across all Next.js `<Image>` tags to prevent mobile layouts from loading massive desktop assets.

---

## 🛠️ Tech Stack & Setup

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss` plugin)
- **Animation:** Framer Motion
- **Scroll Engine:** Lenis Smooth Scroll
- **Typography:** Playfair Display (Headings) & Inter (Body)

### Getting Started

Install dependencies:
```bash
npm install
```

Run the local development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Key Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Spins up local dev hot-reloading server |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Serves production build |
| `npm run lint` | Runs ESLint check across all routes |

---

## 📂 Codebase Highlights

*   `app/template.tsx`: Orchestrates the conditional 3D flip / full cinematic loading transition.
*   `components/WhatsAppWidget.tsx`: Renders the customized interactive chat drawer with Framer Motion triggers.
*   `components/Magnetic.tsx`: Houses the mouse coordinates spring physics engine.
