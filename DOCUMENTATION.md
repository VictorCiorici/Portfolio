# Technical Documentation // Senior Unity Portfolio

> **Project**: TECH_CORE // NEXT_PORTFOLIO
> **Stack**: Next.js 16 (App Router) // React 19 // Tailwind CSS 4
> **Status**: Production Ready

---

## 1. System Architecture

The portfolio is built as a **Data-Driven Single Page Application (SPA)** with Server-Side Rendering (SSR) for SEO and performance. It follows a clean separation between professional data and UI presentation.

### Data Flow
1.  **Source of Truth**: `src/data/portfolio.json` contains all professional history, project details, and site configuration.
2.  **Processing Layer**: `src/data/portfolio.ts` defines TypeScript interfaces and normalizes raw JSON data (e.g., mapping icon names to components, absolute URL normalization).
3.  **Server Data Fetching**: `src/data/server-data.ts` provides a secure, server-only mechanism to read the latest JSON from the disk, bypassing the bundler's static caching.
4.  **Admin Management**: An authenticated (development-only) `/admin` panel provides a GUI for real-time updates to the JSON store.

---

## 2. Technology Stack

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Framework** | Next.js 16.2 (App Router) | Latest stable features, Turbopack support, efficient routing. |
| **Library** | React 19 | Advanced hook support, optimized rendering engine. |
| **Styling** | Tailwind CSS 4 | Native CSS-variable support, faster builds, refined design system. |
| **Animation** | Framer Motion 12 | Fluid, hardware-accelerated UI transitions and layout animations. |
| **Icons** | Lucide React | Clean, consistent SVG icon set with tree-shaking support. |
| **Fonts** | Google Fonts (Inter + JetBrains Mono) | Optimized via `next/font`. |

---

## 3. Directory Structure

```
d:\Projects\Portfolio\
├── public/                  ← Static assets (Resume PDF, Avatar GIF, etc.)
├── src/
│   ├── app/                 ← Next.js App Router (Pages & Layouts)
│   │   ├── admin/           ← GUI for content management
│   │   ├── api/             ← Serverless functions (Admin Save/Upload)
│   │   ├── projects/        ← Dynamic project detail routes
│   │   └── ...              ← Feature pages (Manifesto, Tech Stack, etc.)
│   ├── components/          ← Shared UI components (Navbar, Footer, Layouts)
│   ├── data/                ← THE DATA CORE
│   │   ├── portfolio.json   ← Central database
│   │   ├── portfolio.ts     ← Types & normalization (Client/Server safe)
│   │   └── server-data.ts   ← Node.js FS logic (Server-only)
│   └── styles/              ← Global CSS and Tailwind directives
├── GEMINI.md                ← AI Agent context and guidelines
├── TODO.md                  ← Feature roadmap and bug tracker
└── DOCUMENTATION.md         ← This file
```

---

## 4. Content Management

### The Admin Panel (`/admin`)
Designed for **Zero-Code Updates**. 
- **Location**: `http://localhost:3000/admin`
- **Capabilities**: Edit Hero text, add/remove Career Log entries, manage Project metrics, update Tech Stack categories, and upload Resume/Avatar assets.
- **Security**: The "Save" and "Upload" API routes are locked to `process.env.NODE_ENV === 'development'`.

### Manual JSON Updates
If you prefer direct editing:
1.  Open `src/data/portfolio.json`.
2.  Update the relevant arrays (`careerTimeline`, `projects`, etc.).
3.  The UI will hot-reload automatically in development mode.

---

## 5. Design System: "Technical Glassmorphism"

The visual language is inspired by High-End Development Environments (IDEs) and Debugging Tooling.

### Design Tokens
- **Core Accent**: Electric Cyan (`#00f2ff`) - used for status indicators, active links, and primary actions.
- **Surfaces**: Material 3 "Surface Container" pattern (Lowest to Highest) for layered depth.
- **Glass Effect**: `backdrop-blur-md` combined with semi-transparent backgrounds and inner-edge highlights.
- **Typography**: 
  - `JetBrains Mono`: Used for technical labels, IDs, and code-style metadata.
  - `Inter`: Used for readable body text and descriptions.

### Component Patterns
- **Cards**: Use the `.glass-panel` class for consistent transparency and borders.
- **Status Dots**: Pulsing cyan animations signify "System Optimal" or "Active" states.
- **Bento Grids**: Used in the Tech Stack page to display dense information in a structured, modern layout.

---

## 6. Developer Workflows

### Running Locally
```bash
npm install
npm run dev
```

### Adding a New Project
1.  Prepare your project image (store in `public/` or use a URL).
2.  Go to `/admin` → **Projects**.
3.  Click **Add Project**, fill in the technical challenges and metrics.
4.  Hit **Save Changes**.

### Build for Production
```bash
npm run build
```
*Note: Next.js will perform a full type-check and generate optimized static pages for the portfolio.*

---

## 7. Deployment

The project is optimized for **Vercel** or **Netlify**.
- **Environment**: No special environment variables are required for basic hosting.
- **Optimization**: Images are handled via `next/image` (if applicable) and CSS is purged automatically by Tailwind 4.

---

## 8. Known Limitations & Roadmap
Refer to [TODO.md](file:///d:/Projects/Portfolio/TODO.md) for the latest status on:
- Mobile Hamburger Menu implementation.
- Client-side Project Filtering.
- Image self-hosting transition.
