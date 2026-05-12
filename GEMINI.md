# Senior Unity Developer Portfolio — GEMINI.md

## Project Overview
A premium, dark-themed portfolio website for a **Senior Unity Developer** with 12+ years of experience. The project uses a **"Technical Glassmorphism"** aesthetic, inspired by IDE interfaces, game engine tooling, and debug consoles.

### Core Stack
- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS 4 (`@tailwindcss/postcss`)
- **Animations**: Framer Motion
- **Icons**: Lucide React (mapped via `getIcon` helper)
- **Fonts**: Inter (Body), JetBrains Mono (Technical/Display)
- **Language**: TypeScript

## Architecture & Data Flow
The project is designed to be **data-driven**. Most of the professional content (profile, projects, skills, timeline) is stored in a central JSON file.

- **Data Source**: `src/data/portfolio.json`
- **Data Helper**: `src/data/portfolio.ts` provides a `getPortfolioData()` function that reads the JSON from disk (server-side) or uses the bundled version (client-side).
- **Page Components**: Located in `src/app/`, these components use the data helper to fetch content and pass it to specialized client components in `src/components/`.

## Key Commands
- `npm run dev`: Starts the development server at `http://localhost:3000`.
- `npm run build`: Compiles the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Design System: "Technical Engine System"
The visual identity follows a strict set of tokens defined in `DOCUMENTATION.md` and originally exported from the Stitch design tool.

### Design Tokens
- **Primary Accent**: Electric Cyan (`#00f2ff`)
- **Background**: Deep Navy-Charcoal (`#0b1326`)
- **Surfaces**: Material Design 3 inspired containers (`#171f33`, `#222a3d`, etc.)
- **Borders**: Tight corners (`rounded-xl` for panels, `rounded-lg` for cards, `rounded-sm` for details).

### Visual Treatments
- **Glassmorphism**: Panels with backdrop blur (`backdrop-blur-xl`), semi-transparent backgrounds, and subtle edge highlights.
- **Technical Aesthetics**: Monospaced labels, status indicators (e.g., pulsing dots), and terminal-style identifiers.
- **Glow Effects**: Subtle outer glows and text glows using the primary accent color.

## Development Guidelines

### Content Management
- **DO NOT** hardcode professional content in components.
- **ALWAYS** update `src/data/portfolio.json` to change profile info, projects, skills, or career history.
- Use the `getPortfolioData` helper in Server Components to ensure fresh data.

### Styling & Icons
- Use **Tailwind CSS 4** classes for styling.
- Use **Framer Motion** for animations and interactive states (hover, entrance).
- Icons should be managed via the `getIcon` helper in `src/data/portfolio.ts`. It maps Lucide icon names (strings in JSON) to components.

### Next.js 16 Awareness
- This project uses **Next.js 16**. Be aware of potential API differences from previous versions. Refer to `node_modules/next/dist/docs/` if necessary (as noted in `AGENTS.md`).

## Directory Structure
- `src/app/`: Next.js App Router pages and API routes.
- `src/components/`: Reusable React components (mostly Client Components).
- `src/data/`: Centralized data (`portfolio.json`) and data access logic (`portfolio.ts`).
- `public/`: Static assets, including the resume PDF.
- `Desing/`: Original design source files and specifications (Source of Truth).
- `legacy_html/`: Previous versions of the site in static HTML format.

## Documentation Reference
- `DOCUMENTATION.md`: Detailed design specification, color palettes, and typography.
- `README.md`: Basic setup and deployment instructions.
- `AGENTS.md`: Specific rules for AI agents.
