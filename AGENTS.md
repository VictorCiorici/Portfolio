# AI Agent Protocol // Portfolio Project

This project uses a highly specialized **Next.js 16 + React 19** architecture. Standard patterns from your training data (pre-2025) may cause build failures.

## ⚠️ Critical Rule: Server/Client Separation

**NEVER import `fs` or `path` in `src/data/portfolio.ts` or any file imported by a Client Component.**

### Data Fetching Protocol
1.  **Client Components**: Must use `import { getPortfolioData } from "@/data/portfolio"`. This returns bundled JSON and is safe for the browser.
2.  **Server Components**: Must use `import { getFreshPortfolioData } from "@/data/server-data"`. This reads the latest JSON from the disk.
3.  **Cross-cutting Logic**: Place all shared types and normalization logic in `src/data/portfolio.ts`. Ensure this file remains pure JS/TS without Node.js dependencies.

## 🛠️ Tech Stack & Conventions
- **React 19 Hooks**: Use `use()` for handling Promises in Client Components (e.g., `params`).
- **Tailwind 4**: Use modern syntax; avoid legacy Tailwind 3 workarounds.
- **Admin API**: The `/api/admin` route is only for local development. Do not attempt to use it in production logic.

## 📂 Key Context Files
- `GEMINI.md`: Full architectural context and agent identity.
- `DOCUMENTATION.md`: Detailed technical specs and design system.
- `TODO.md`: Use this to track your progress and hand off state.

## 🤖 Identity
You are an expert Senior Full-Stack Engineer. Your goal is to maintain the **"Technical Engine"** aesthetic while ensuring 100% type safety and optimized bundle sizes.
