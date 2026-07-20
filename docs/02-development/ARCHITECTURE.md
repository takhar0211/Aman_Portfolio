# ARCHITECTURE

## Overview

This is a single-page portfolio website built with Next.js App Router (static generation). It has no backend, no database, and no authentication. All content is stored in static TypeScript data files.

---

## Project Root

```
Aman_resume/
├── docs/                   ← Project documentation
│   ├── 01-planning/        ← PROJECT.md, REQUIREMENTS.md, DESIGN.md
│   ├── 02-development/     ← AGENT.md, TECH_STACK.md, CODING_STANDARDS.md, ARCHITECTURE.md
│   └── 03-management/      ← TASKS.md, DECISIONS.md, CHANGELOG.md
└── frontend/               ← Next.js application
```

---

## Frontend Structure

```
frontend/
├── public/
│   ├── resume.pdf          ← Resume file (to be replaced with real PDF)
│   ├── robots.txt          ← SEO crawl rules
│   └── favicon.ico         ← Favicon (from Next.js default)
├── src/
│   ├── app/
│   │   ├── layout.tsx      ← Root layout (fonts, metadata, body)
│   │   ├── page.tsx        ← Home page (assembles all sections)
│   │   ├── globals.css     ← Design tokens + base styles
│   │   ├── sitemap.ts      ← Generates /sitemap.xml at build time
│   │   └── favicon.ico     ← Favicon
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx  ← Fixed navigation bar
│   │   │   └── Footer.tsx  ← Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx    ← First screen (name, title, CTAs)
│   │   │   ├── About.tsx   ← Bio, education, status
│   │   │   ├── Skills.tsx  ← Skills grouped by category
│   │   │   ├── Projects.tsx← Featured projects grid
│   │   │   └── Contact.tsx ← Contact methods + social profiles
│   │   └── ui/
│   │       ├── Button.tsx        ← Reusable button (primary/secondary/ghost)
│   │       ├── BrandIcons.tsx    ← Custom SVG brand icons
│   │       ├── ProjectCard.tsx   ← Project card with links
│   │       ├── SkillBadge.tsx    ← Pill badge for skills
│   │       ├── SocialIcon.tsx    ← Icon + link for social profiles
│   │       └── SectionHeading.tsx← Consistent section title + subtitle
│   └── data/
│       ├── portfolio.ts    ← Personal info (name, bio, email, location)
│       ├── projects.ts     ← Projects array with typed Project interface
│       ├── skills.ts       ← Skills grouped by category
│       └── social.ts       ← Social links with typed SocialLink interface
├── prettier.config.js      ← Prettier configuration
├── eslint.config.mjs       ← ESLint configuration
├── next.config.ts          ← Next.js configuration
├── tsconfig.json           ← TypeScript configuration
└── package.json
```

---

## Component Hierarchy

```
RootLayout (layout.tsx)
└── HomePage (page.tsx)
    ├── Navbar
    ├── main
    │   ├── Hero          ← uses: Button, SocialIcon, portfolio, socialLinks
    │   ├── About         ← uses: SectionHeading, portfolio
    │   ├── Skills        ← uses: SectionHeading, SkillBadge, skillCategories
    │   ├── Projects      ← uses: SectionHeading, ProjectCard, projects
    │   └── Contact       ← uses: SectionHeading, BrandIcons, portfolio, socialLinks
    └── Footer            ← uses: SocialIcon, portfolio, socialLinks
```

---

## Data Flow

All data originates from `src/data/`. Components import directly from data files. There are no API calls, no server actions, and no external data sources in V1.

To update content, edit the relevant file in `src/data/`.

---

## Routing

Single-page application with anchor-based navigation (`#home`, `#about`, etc.).

Next.js App Router is used for:
- Static page generation (`/`)
- Sitemap generation (`/sitemap.xml`)
- 404 page (`/_not-found`)

---

## Rendering Strategy

All pages are statically generated at build time (`○` static in `next build` output).

No server-side rendering (SSR) is needed for V1.

---

## Styling Architecture

Design tokens are defined in `globals.css` as CSS custom properties and exposed to Tailwind via `@theme inline`.

All Tailwind utility classes reference these tokens (e.g., `bg-bg-primary`, `text-accent-blue`).

No component-level CSS modules are used.

---

## SEO

- Metadata: defined in `src/app/layout.tsx` using Next.js `Metadata` API
- Open Graph: included in layout metadata
- Sitemap: `src/app/sitemap.ts` (generates `/sitemap.xml`)
- robots.txt: `public/robots.txt`

---

## Extensibility

To add a new section:

1. Create `src/components/sections/NewSection.tsx`
2. Add data to `src/data/` if needed
3. Import and add the section to `src/app/page.tsx`
4. Add the nav link to `Navbar.tsx`

To add a new page (e.g., blog):

1. Create `src/app/blog/page.tsx`
2. Add to sitemap
3. Add nav link