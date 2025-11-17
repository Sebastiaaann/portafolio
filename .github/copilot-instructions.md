# Portfolio Project - AI Coding Assistant Instructions

## Project Overview
React 19 + Vite 7 + Tailwind CSS 4 portfolio website with custom typography and animations. Single-page application showcasing services, projects, and contact information with an emphasis on visual design and typography.

## Tech Stack & Architecture
- **Frontend**: React 19.1.1 with React DOM, no routing library
- **Build Tool**: Vite 7.1.7 with HMR and React plugin
- **Styling**: Tailwind CSS 4.1.16 (v4) with `@tailwindcss/vite` plugin
- **Code Quality**: ESLint 9 with React hooks and refresh plugins
- **Structure**: Component-based with sections pattern (no pages or routing yet)

## Critical Development Workflows

### Run Development Server
```bash
npm run dev
```
Starts Vite dev server with HMR on default port (usually 5173).

### Build for Production
```bash
npm run build
```
Outputs to `dist/` directory (ignored by git and ESLint).

### Lint Code
```bash
npm run lint
```
Runs ESLint with React-specific rules. Note: `no-unused-vars` allows uppercase patterns (e.g., component names).

## Project-Specific Conventions

### File Organization Pattern
- **`src/sections/`**: Page section components (e.g., `Navbar.jsx`) - use this for all major UI sections
- **`src/constants/index.js`**: Centralized data exports for services, projects, socials
- **`public/assets/`**: Static assets organized by type (`logos/`, `projects/`, `socials/`)

### Component Patterns
1. **Section Components**: Full-width, self-contained sections with refs for animations
   ```jsx
   // Example from Navbar.jsx
   const navRef = useRef(null);
   const linksRef = useRef([]);
   ```
2. **Data-Driven UI**: Map over constants for rendering (see `Navbar.jsx` social links and nav items)
3. **No TypeScript**: Project uses plain JavaScript with JSX

### Styling Conventions
- **Custom CSS Variables**: Defined in `@theme` block in `index.css`
  - Colors: `--color-primary`, `--color-DarkLava`, `--color-SageGray`, `--color-gold`
  - Fonts: `--font-amiamie`, `--font-amiamie-round`
  - Animations: `--animate-marquee` for 40s linear marquee
- **Custom Utilities**: Use `@utility` for responsive text patterns
  - `banner-text-responsive`, `value-text-responsive`, `marquee-text-responsive`, `contact-text-responsive`
  - `clip-path` for polygon animations
- **Tailwind v4 Syntax**: Import via `@import "tailwindcss"` in CSS (not traditional config file)

### Typography System
Custom "Amiamie" font family with complete weight/style variants loaded via `@font-face` in `index.css`:
- Regular (400), Light (300), Black (900) with italic variants
- Separate "Amiamie-Round" family with Regular and Black variants
- Fonts referenced from `/fonts/otf/` and `/fonts/ttf/` (fallback)

### Data Structure Pattern
Constants in `src/constants/index.js` follow specific shapes:
- **Projects**: `{ id, name, description, href, image, bgImage, frameworks: [{id, name}] }`
- **Services**: `{ title, description, items: [{title, description}] }`
- **Socials**: `{ name, href }` - rendered with curly brace syntax `{name}`

## Key Files to Reference
- **`src/index.css`**: Custom utilities, theme variables, font declarations, keyframes
- **`src/constants/index.js`**: All site content data structures
- **`eslint.config.js`**: ESLint 9 flat config with React plugins and custom rules
- **`vite.config.js`**: Minimal Vite setup with React and Tailwind plugins

## Important Notes
- This is a **portfolio in early development** - only Navbar section exists so far
- No routing library installed yet (might add React Router later)
- Refs are prepared for animations but not yet implemented
- Asset paths use `/public` root (e.g., `/assets/logos/react.svg`)
- Spanish content present (e.g., email, some naming like "portafolio")
