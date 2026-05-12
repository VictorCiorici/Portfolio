# Senior Unity Developer // Technical Portfolio

A premium, data-driven technical portfolio built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Designed for high-performance visual storytelling, communicating 12+ years of expertise in Game Architecture, DOTS/ECS, and Immersive Tech.

## 🚀 Quick Start

### 1. Development
```bash
npm install
npm run dev
```
Navigate to `http://localhost:3000` to view the site.

### 2. Admin Command Center
```bash
# Access the dynamic content manager (Dev Mode only)
http://localhost:3000/admin
```

### 3. Production Build
```bash
npm run build
npm run start
```

## 🏗️ Architecture & Data Flow

The portfolio is built as a **Data-Driven SPA** with Server-Side Rendering (SSR). It follows a strict separation between professional data and UI presentation.

- **Source of Truth**: `src/data/portfolio.json` contains all professional history, projects, and site configuration.
- **Client Data Helper**: `src/data/portfolio.ts` provides bundled JSON and normalization for UI components.
- **Server Data Helper**: `src/data/server-data.ts` uses Node.js `fs` to read the latest JSON directly from disk (SSR/Dev only).
- **Admin Panel**: A development-only GUI at `/admin` for real-time updates to the JSON store.

## ⚠️ Developer & AI Protocols

This project uses a specialized **Next.js 16 + React 19** architecture. Follow these rules to avoid build failures:

1.  **Server/Client Separation**: NEVER import `fs` or `path` in `src/data/portfolio.ts` or any file imported by a Client Component.
2.  **Data Fetching**:
    - **Client Components**: Use `import { getPortfolioData } from "@/data/portfolio"`.
    - **Server Components**: Use `import { getFreshPortfolioData } from "@/data/server-data"`.
3.  **Hooks**: Use React 19's `use()` hook for handling Promises/Params in Client Components.
4.  **Styling**: Use native Tailwind 4 syntax; avoid legacy Tailwind 3 workarounds.

## 🎨 Design System: "Technical Glassmorphism"

The visual identity is inspired by high-end IDEs and game engine tooling.

- **Core Accent**: Electric Cyan (`#00f2ff`) for status indicators and primary actions.
- **Surfaces**: Material 3 inspired container patterns with `backdrop-blur-md`.
- **Typography**: 
  - `JetBrains Mono`: Technical labels, IDs, and code-style metadata.
  - `Inter`: Readable body text and descriptions.
- **Visual Cues**: Pulsing status dots signify "System Optimal" or active states.

## 🛠️ Content Management

### Zero-Code Updates
Use the Admin Panel at `http://localhost:3000/admin` to:
- Edit Hero text and Profile info.
- Manage Career Timeline and Project metrics.
- Update Tech Stack categories and Skills.
- Upload Resume and Avatar assets.

### Manual Updates
Directly edit `src/data/portfolio.json`. The UI will hot-reload automatically in development mode.

## 🗺️ Roadmap
- Mobile Hamburger Menu implementation.
- Client-side Project Filtering.
- Image self-hosting transition.

## 👤 Author

**Victor Ciorici**  
Senior Unity Developer // Chisinau, Moldova  
[LinkedIn](https://www.linkedin.com/in/victor-c-478a7849) // [GitHub](https://github.com/VictorCiorici)

---
*Built for the next generation of interactive engineering.*
