# CHANGELOG

All notable changes to this project are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### In Progress

- Real personal content (bio, projects, resume PDF, profile photo)
- Responsive layout testing

---

## [0.1.0] — 2026-07-20

### Added

**Project Bootstrap — Full Foundation**

- Initialized Next.js 16 project with TypeScript, Tailwind CSS v4, and ESLint via `create-next-app`
- Installed Framer Motion, Lucide React, Prettier, and `prettier-plugin-tailwindcss`
- Created complete folder structure: `app/`, `components/layout`, `components/sections`, `components/ui`, `data/`

**Design System**

- `globals.css` — full design token system (backgrounds, accent colors, text, borders) as CSS custom properties exposed via Tailwind `@theme inline`
- Custom scrollbar, focus ring, and text selection styles

**Root Layout**

- `layout.tsx` — Geist Sans + Geist Mono fonts, full SEO metadata (title, description, Open Graph, Twitter card), dark body background

**Data Layer**

- `portfolio.ts` — personal info (name, title, tagline, bio, education, location, email, phone, resume URL)
- `projects.ts` — projects array with typed `Project` interface and `getFeaturedProjects()` helper
- `skills.ts` — skills grouped by category with typed `SkillCategory` interface
- `social.ts` — social links with typed `SocialLink` interface

**UI Components**

- `Button.tsx` — primary, secondary, ghost variants; accessible focus ring
- `SectionHeading.tsx` — consistent section title, subtitle, and accent underline
- `SkillBadge.tsx` — pill badge with hover effect
- `SocialIcon.tsx` — clickable icon link using brand SVGs
- `BrandIcons.tsx` — custom SVG brand icons (GitHub, LinkedIn, Instagram, LeetCode)
- `ProjectCard.tsx` — project card with tech stack, feature list, GitHub + Live Demo links, hover animation

**Layout Components**

- `Navbar.tsx` — fixed nav; transparent → frosted glass on scroll; active section via IntersectionObserver; mobile hamburger menu
- `Footer.tsx` — copyright, social links, "Built with Next.js"

**Section Components**

- `Hero.tsx` — name, title, tagline, availability badge, primary + secondary CTAs, social icons, scroll indicator
- `About.tsx` — bio paragraphs, education / location / status info cards
- `Skills.tsx` — category grid with skill badges
- `Projects.tsx` — featured project cards grid + GitHub profile CTA
- `Contact.tsx` — email, phone, location, and all social profile links

**Pages**

- `page.tsx` — home page assembling all sections in correct order

**SEO**

- `sitemap.ts` — generates `/sitemap.xml`
- `public/robots.txt` — allows all crawlers

**Documentation**

- `TECH_STACK.md` — stack, versions, rationale
- `CODING_STANDARDS.md` — naming, imports, components, accessibility, responsiveness
- `ARCHITECTURE.md` — folder structure, component hierarchy, data flow, routing, extensibility
- `DECISIONS.md` — 6 technical decisions documented (D-001 through D-006)
- `TASKS.md` — Foundation and all initial tasks marked complete; progress updated to 15%

### Fixed

- Replaced Lucide brand icon exports (`Github`, `Linkedin`, `Instagram`) — unavailable in Lucide v1.x — with custom SVG components in `BrandIcons.tsx`

### Build

- `npm run build` passes with zero TypeScript errors and zero ESLint errors
- Output: `/` and `/sitemap.xml` generated as static pages