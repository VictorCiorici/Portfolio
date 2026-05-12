# Project TODO & Issue Log

## Completed Tasks ✅

### Hydration & Browser Compatibility
- [x] **Fix 'fs' Module Resolution Error:** Resolved build failure where Node.js `fs` module was being bundled into Client Components.
  - *Solution:* Isolated server-side file system logic into `src/data/server-data.ts` and refactored `src/data/portfolio.ts` to be client-safe with serializable data.
- [x] **Improve Type Safety:** Defined TypeScript interfaces for portfolio data and fixed implicit `any` errors during build.
- [x] **Fix Hydration Mismatch:** Resolved issue where browser extensions (like Dark Reader) were injecting attributes into the DOM before hydration.
  - *Solution:* Added `suppressHydrationWarning` to the `html` tag in `src/app/layout.tsx`.
- [x] **Fix Email Link Behavior:** Resolved "empty page" redirect in Chrome and "unresponsive link" in Edge for `mailto:` protocols.
  - *Solution:* 
    - Removed `target` and `rel` attributes from all `<a>` tags using `mailto:`.
    - Refactored the Contact Form to use a JavaScript `onSubmit` handler with `window.location.assign` instead of a standard form `action`.
- [x] **Integrate Missing Footer:** Added the `Footer` component to the `RootLayout`.
- [x] **Refine Footer Links:** Updated footer to show only GITHUB, LINKEDIN, and EMAIL links dynamically from `portfolio.json`.

## Active Tasks 🚀

### Documentation & Context
- [x] **Generate GEMINI.md:** Created a comprehensive project context file for AI agents.
- [x] **Review DOCUMENTATION.md:** Synchronized technical specs with the Next.js 16 / Tailwind 4 implementation.
- [x] **Revitalize README.md & AGENTS.md:** Updated project entry points with modern developer workflows.

### Content & Assets
- [ ] **Self-host Images:** Replace Google-hosted images with local assets in `public/` to prevent expiration issues.
- [ ] **Resume Update:** Ensure `public/resume.pdf` is the latest version.

## Future Enhancements 🛠️
- [ ] **Mobile Menu:** Implement a functional hamburger menu for mobile views.
- [ ] **Project Filtering:** Add client-side filtering logic to the Projects page cards.
- [ ] **Page Transitions:** Add Framer Motion transitions between page routes.
- [ ] **Form Backend:** Consider integrating a service like Formspree or Netlify Forms for real server-side email handling.
