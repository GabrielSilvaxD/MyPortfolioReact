# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a React portfolio website built with Vite as the build tool. The architecture follows a simple single-page application structure:

### Core Structure
- **Entry Point**: `src/main.jsx` - React app initialization with StrictMode
- **Main Component**: `src/App.jsx` - Root component that renders all sections in sequence
- **Styling**: Uses Tailwind CSS for styling with a dark theme and gradient backgrounds

### Component Architecture
All components are located in `src/components/` and follow a consistent pattern:

- **Navbar.jsx**: Fixed navigation with mobile hamburger menu, includes social media links
- **Hero.jsx**: Landing section with profile image, name, title, and bio using Framer Motion animations
- **Tech.jsx**: Technical skills showcase section
- **Projects.jsx**: Portfolio projects display
- **Contact.jsx**: Contact information and form section

### Key Technical Details

**Animation System**: Uses Framer Motion for smooth animations throughout the site, particularly in Hero component with fade-in effects.

**Responsive Design**: Mobile-first approach with breakpoints:
- Mobile: Base styles
- MD (768px+): Desktop layouts
- Navigation switches to hamburger menu on mobile

**Asset Management**: Static assets stored in `public/` directory with direct imports in components.

**Component Import Pattern**: Components use default exports and are imported with consistent naming (e.g., `import Hero from './components/Hero'`).

## Deployment

The site is deployed on Netlify at: https://gabrielsilvaportfolio.netlify.app/

Configuration includes:
- Build command: `npm run build`
- Publish directory: `dist/`
- Netlify configuration in `public/netlify.toml`

## Development Notes

- The project uses ES modules (`"type": "module"` in package.json)
- React 19 is used with modern features
- ESLint is configured with React-specific rules
- No TypeScript - uses plain JavaScript with JSX
- No test framework is currently set up
- The background uses a fixed radial gradient applied to the entire app