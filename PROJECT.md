# Wedding Documentary Events

A cinematic, editorial-style marketing website for a fictional wedding film & photography studio, **Wedding Documentary Events**. The site showcases the studio's philosophy, services, packages, portfolio, process, and an enquiry form — built as a single-page-style experience with dedicated sub-pages.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** TypeScript (strict mode)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`) with a custom `@theme` palette
- **Animation & Transitions:** Framer Motion (`framer-motion`) and Lenis (`lenis` for buttery inertia smooth scrolling)
- **Icons:** `lucide-react`
- **Utility:** `clsx` for conditional classnames
- **Fonts:** Google Fonts via `next/font` — `Playfair Display` (headings) and `Inter` (body)
- **Lint:** ESLint 9 with `eslint-config-next`
- **Package Manager:** npm (lockfile committed as `package-lock.json`)

## Project Structure

```
wde/
├── app/                     # App Router routes & layout
│   ├── about/page.tsx       # Studio story + pillars
│   ├── contact/page.tsx     # Enquiry form page
│   ├── packages/page.tsx    # Pricing/investment page
│   ├── portfolio/page.tsx   # Films/portfolio page
│   ├── process/page.tsx     # How-it-works page
│   ├── services/page.tsx    # Services overview page
│   ├── layout.tsx           # Root layout: fonts, Navbar, Footer, grain overlay, JSON-LD Schema
│   ├── template.tsx         # Framer Motion global page transition loader (logo flips/reveals)
│   ├── page.tsx             # Home page (composes all sections)
│   └── globals.css          # Tailwind import + custom theme tokens & helpers
├── components/              # Reusable UI sections
│   ├── Navbar.tsx           # Top navigation + mobile menu trigger (frosted glass + magnetic elements)
│   ├── MobileMenu.tsx       # Animated mobile navigation
│   ├── Hero.tsx             # Full-screen video hero (framer-motion)
│   ├── Pillars.tsx          # Studio values (Truth/Presence/Patience/Craft)
│   ├── Services.tsx         # Services grid
│   ├── Packages.tsx         # Pricing tiers (Bronze → Diamond)
│   ├── Portfolio.tsx        # Featured wedding films
│   ├── Process.tsx          # 6-step working process
│   ├── Testimonials.tsx     # Client quotes
│   ├── CTASection.tsx       # Call-to-action band
│   ├── Footer.tsx           # Site footer
│   ├── ContactForm.tsx      # Enquiry form (client component)
│   ├── SmoothScroll.tsx     # Lenis smooth scrolling initialization
│   ├── Magnetic.tsx         # Reusable spring-based cursor attraction component
│   └── WhatsAppWidget.tsx   # Floating interactive chat card widget for WhatsApp
├── lib/
│   └── data.ts              # All site content as typed data (single source of truth)
├── public/                  # Static assets (images, portfolio media, optimized logos)
├── next.config.ts           # Next.js config (default)
├── postcss.config.mjs       # Tailwind v4 PostCSS plugin
├── tsconfig.json            # TypeScript config (path alias @/*)
├── eslint.config.mjs        # ESLint flat config
└── package.json
```

## How It Works

- **Content-driven:** All copy (pillars, packages, services, process, portfolio, testimonials, nav links) lives in `lib/data.ts` and is rendered by components — edit content there, not in components.
- **Design system:** `app/globals.css` defines a dark editorial palette (`ink`, `cream`, `rose`, `gold`, `stone`), the font variables, a fixed grain overlay, and helper classes (`section-label`, `eyebrow-line`, `container-wide`).
- **Routing:** The home page at `app/page.tsx` stacks the main sections; dedicated routes (`/about`, `/services`, `/packages`, `/portfolio`, `/process`, `/contact`) reuse the same components.
- **Animations & Interaction:** Smooth scrolling is enabled globally via Lenis. Framer Motion is utilized for exit/entry animations, route transition templates, and custom cursor magnetic pulls on major interactives (navigation links, buttons, floating widgets).
- **SEO Optimization:** The layout injected JSON-LD `LocalBusiness` structured data to target search engine local ranking protocols. All images employ responsive `sizes` properties to optimize client bandwidth.

## Prerequisites

- **Node.js** 18.18+ (or 20+ recommended)
- **npm** (or yarn/pnpm/bun)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site hot-reloads as you edit files.

### Other Package Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build (requires `build` first) |
| `npm run lint` | Lint the codebase with ESLint |

## Production Build & Deploy

```bash
npm run build
```

The app is a standard Next.js App Router project and can be deployed to **Vercel**, or any Node.js host, with zero config changes. Static assets in `public/` are served at the web root.

