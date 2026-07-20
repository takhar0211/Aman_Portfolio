# TECH STACK

## Framework

Next.js 16 (App Router)

Version: 16.2.10

Rationale: Chosen per project requirements. App Router provides server components, built-in image optimization, metadata API, and file-based routing. Enables fast static generation and future server-side features.

---

## Language

TypeScript

Strict mode enabled.

---

## Styling

Tailwind CSS v4

Configured via `@import "tailwindcss"` and `@theme inline` blocks in `globals.css`.

Design tokens are defined as CSS custom properties and mapped to Tailwind using `@theme inline`.

---

## Animations

Framer Motion

Installed. Used only for meaningful transitions (fade in, slide up, card hover). Not yet wired to components — will be added per section as needed.

---

## Icons

Lucide React v1.25.0

Note: Lucide v1.x dropped all brand icons (GitHub, LinkedIn, Instagram, etc.). Custom SVG components are used for brand icons in `src/components/ui/BrandIcons.tsx`.

---

## Fonts

Geist Sans (primary)

Geist Mono (monospace, for code-like text)

Loaded via `next/font/google` in the root layout.

---

## Package Manager

npm

---

## Linting

ESLint

Config: `eslint.config.mjs` (Next.js default flat config with `eslint-config-next`).

---

## Formatting

Prettier

Config: `prettier.config.js`

Plugin: `prettier-plugin-tailwindcss` for automatic Tailwind class sorting.

Settings: single quotes, trailing commas, 100-char print width.

---

## Deployment

Vercel

---

## Repository

GitHub