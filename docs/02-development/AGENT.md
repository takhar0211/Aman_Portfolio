# AGENT

## Purpose

This document is the primary operating manual for any AI assistant or developer contributing to this project.

Before making any changes, read the project documentation in the following order.

1. PROJECT.md
2. REQUIREMENTS.md
3. DESIGN.md
4. TECH_STACK.md
5. CODING_STANDARDS.md
6. ARCHITECTURE.md
7. TASKS.md

Do not begin implementation until you understand the project.

---

# Mission

Your goal is not simply to write code.

Your goal is to build and maintain a high-quality software project.

Every decision should improve

- Maintainability
- Readability
- Performance
- Consistency

---

# General Rules

Always prefer

- Simple solutions
- Clean architecture
- Reusable components
- Type safety
- Responsive layouts

Avoid unnecessary complexity.

---

# Development Workflow

For every request follow this process.

Step 1

Understand the request.

Step 2

Check whether an existing component can be modified.

Step 3

Only create a new component if necessary.

Step 4

Implement the feature.

Step 5

Verify the implementation.

Step 6

Update documentation.

---

# Before Writing Code

Always ask yourself

- Does this already exist?
- Can this be reused?
- Is there a simpler solution?
- Does this follow the architecture?

---

# File Creation Policy

Never create duplicate files.

Avoid files like

NavbarNew.tsx

NavbarFinal.tsx

Navbar2.tsx

HeroUpdated.tsx

Instead,

modify the existing implementation whenever possible.

---

# Component Rules

Each component should have one responsibility.

If a component becomes too large,

split it into reusable pieces.

Avoid deeply nested components.

---

# Data Rules

Never hardcode

- Email
- Phone Number
- Social Links
- Resume URL
- Skills
- Projects

All personal information must come from the appropriate file in the `data/` directory.

Never hardcode personal information inside UI components.
---

# Dependency Policy

Before installing a package,

ask

1. Is it really necessary?
2. Can React solve this?
3. Can Next.js solve this?
4. Is there already a package in the project?

Prefer fewer dependencies.

---

# Styling Rules

Use Tailwind CSS.

Maintain consistent spacing.

Maintain consistent typography.

Maintain consistent colors.

Do not introduce new design patterns without approval.

---

# Performance Rules

Prefer Server Components.

Use Client Components only when required.

Optimize images.

Avoid unnecessary JavaScript.

Avoid unnecessary rendering.

---

# Accessibility

Every feature should be keyboard accessible.

Use semantic HTML.

Provide alt text for images.

Maintain good color contrast.

---

# Documentation Rules

Documentation is mandatory.

Whenever work is completed,

update

- TASKS.md
- CHANGELOG.md

If a bug is fixed,

update

- BUGS.md

If an important technical decision is made,

update

- DECISIONS.md

Documentation should always reflect the current project state.

---

# Scope Control

Do only what has been requested.

Do not redesign unrelated sections.

Do not refactor unrelated code.

Do not introduce new features without approval.

---

# Communication

When responding,

briefly explain

- What changed
- Which files changed
- Why the change was made

If there are trade-offs,

mention them.

---

# Error Handling

If something is unclear,

ask instead of guessing.

Do not invent requirements.

Do not silently ignore problems.

---

# Quality Checklist

Before considering a task complete,

verify

- No TypeScript errors
- No ESLint errors
- Responsive layout
- Accessible UI
- Consistent design
- Reusable code
- No duplicated logic
- Documentation updated

---

# Definition of Done

A task is complete only when

- Implementation is correct.
- Code follows project standards.
- Design matches the design document.
- Documentation has been updated.
- No known issues remain.

---

# Project Philosophy

Build software that your future self will enjoy maintaining.

Every change should leave the project in a better state than before.