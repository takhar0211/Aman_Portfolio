# CODING STANDARDS

## Language

TypeScript. Strict mode is enabled. No `any` types unless absolutely unavoidable and explicitly commented.

---

## File Naming

- React components: PascalCase (`Button.tsx`, `ProjectCard.tsx`)
- Data files: camelCase (`projects.ts`, `social.ts`)
- Utility files: camelCase (`helpers.ts`)
- CSS files: camelCase (`globals.css`)

---

## Folder Structure

```
src/
├── app/              ← Next.js App Router pages and layouts
├── components/
│   ├── layout/       ← Page-level layout components (Navbar, Footer)
│   ├── sections/     ← Full-page section components (Hero, About, Skills, etc.)
│   └── ui/           ← Reusable atomic UI components (Button, Card, Badge, etc.)
└── data/             ← Static data files (TypeScript arrays/objects, no external fetch)
```

---

## Component Rules

- Prefer server components. Only mark `'use client'` when the component needs browser APIs, state, or event handlers.
- Each component must have a single responsibility.
- Props must be typed using interfaces, not inline types.
- Always provide a JSDoc comment at the top of each component.
- Keep components under 150 lines where possible. Extract sub-components if needed.

---

## Data Layer

- All static content (bio, projects, skills, social links) lives in `src/data/`.
- Data files export typed arrays or objects.
- No hardcoded strings inside components — reference data from `src/data/`.

---

## Imports

Order (enforced by ESLint where possible):

1. React / Next.js built-ins
2. Third-party packages (lucide-react, framer-motion)
3. Internal components (`@/components/...`)
4. Internal data (`@/data/...`)
5. Types

Use the `@/` path alias for all internal imports.

---

## Styling

- Tailwind CSS utility classes only. No inline styles except for dynamic CSS custom property values.
- Use design tokens defined in `globals.css`. Never hardcode colors or spacing values.
- Prefer `cn()` or string array joins for conditional class composition over ternary chains.
- Class order follows Tailwind's recommended order (enforced by `prettier-plugin-tailwindcss`).

---

## Accessibility

- All interactive elements must have accessible labels (`aria-label`, `aria-labelledby`).
- Buttons must have visible focus styles.
- Images must have `alt` text.
- Use semantic HTML elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, etc.).
- Section elements must have `aria-labelledby` pointing to their heading.

---

## Responsiveness

- Design mobile-first. Base classes target mobile. Use `sm:`, `md:`, `lg:` breakpoints to scale up.
- No hardcoded pixel widths. Use `max-w-*` and responsive grid utilities.
- Test on 375px (mobile), 768px (tablet), 1280px (desktop).

---

## Comments

- Write comments to explain *why*, not *what*.
- All exported components must have a JSDoc comment describing their purpose.
- TODO comments must be addressed or converted to TASKS.md entries.

---

## Git

- Commits should be short and descriptive.
- Do not commit broken builds.

---

## No-Go Rules

- No `console.log` in production code.
- No unused imports.
- No `any` types.
- No inline event handlers in JSX where a named function is clearer.
- No duplicate code that can be extracted into a reusable component.