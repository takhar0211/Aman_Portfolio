# DECISIONS

## Decision Log

All significant technical decisions made during development are recorded here.

---

## D-001 — Use Next.js App Router (not Pages Router)

Date: 2026-07-20

Decision: Use the App Router introduced in Next.js 13+.

Reason:
- App Router is the current recommended approach by the Next.js team.
- Enables React Server Components by default, reducing client-side JavaScript.
- Built-in metadata API simplifies SEO setup.
- Future-proof for adding server actions or API routes if needed.

---

## D-002 — Use Tailwind CSS v4

Date: 2026-07-20

Decision: Use Tailwind CSS v4 (installed via `create-next-app` default).

Reason:
- v4 uses a CSS-first configuration approach (`@theme inline` in `globals.css`).
- No separate `tailwind.config.js` needed.
- Design tokens are defined once as CSS custom properties and referenced both in CSS and Tailwind utilities.

Impact:
- All design tokens are in `globals.css`, not a JS config file.

---

## D-003 — Custom SVG brand icons instead of Lucide brand icons

Date: 2026-07-20

Decision: Use custom SVG components in `BrandIcons.tsx` for GitHub, LinkedIn, Instagram, and LeetCode icons.

Reason:
- Lucide React v1.x dropped all brand icons from the library.
- `Github`, `Linkedin`, `Instagram` no longer exist as named exports.
- Writing minimal inline SVGs gives full control over the icon shapes without adding a separate icon library (e.g., `react-icons`).

Alternative considered: Install `react-icons` (includes all brand icons).
Rejected because: Adding a new dependency for a small set of icons is unnecessary complexity. Custom SVGs are lightweight and always stable.

---

## D-004 — Static data in TypeScript files (no CMS)

Date: 2026-07-20

Decision: Store all portfolio content (bio, projects, skills, social links) in typed TypeScript files under `src/data/`.

Reason:
- V1 scope explicitly excludes a CMS or backend.
- TypeScript provides type safety for all content.
- Simple to update — edit one file.
- No additional services, API keys, or latency.

---

## D-005 — Geist font via next/font

Date: 2026-07-20

Decision: Use Geist Sans and Geist Mono, loaded via `next/font/google`.

Reason:
- Geist is the first choice listed in DESIGN.md.
- `next/font` handles font optimization (self-hosting, no layout shift, preloading) automatically.

---

## D-006 — prettier-plugin-tailwindcss for class ordering

Date: 2026-07-20

Decision: Install `prettier-plugin-tailwindcss` to automatically sort Tailwind classes.

Reason:
- Consistent class order reduces diff noise in code reviews.
- Prevents styling bugs caused by class ordering in Tailwind v4.

Note: `prettier-plugin-tailwindcss` v0.8.1 shows an engine warning on Node v20.11.0 (requires >=20.19), but works correctly in practice.