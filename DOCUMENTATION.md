# Senior Unity Developer — Portfolio Website Documentation

> **Project**: TECH_CORE // DEV_PORTFOLIO
> **Status**: ✅ Complete — All 6 pages implemented
> **Location**: `d:\Projects\Portfolio\`
> **Live Server**: `http://localhost:8080`

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [File Structure](#file-structure)
4. [Design System — "Technical Engine System"](#design-system)
5. [Color Palette](#color-palette)
6. [Typography](#typography)
7. [Spacing & Layout Grid](#spacing--layout-grid)
8. [Visual Effects & Treatments](#visual-effects--treatments)
9. [Pages Breakdown](#pages-breakdown)
10. [Navigation System](#navigation-system)
11. [Component Patterns](#component-patterns)
12. [Design Source Files](#design-source-files)
13. [Deployment Notes](#deployment-notes)

---

## Project Overview

A premium, dark-themed portfolio website for a **Senior Unity Developer** with 12+ years of experience. The design follows a **"Technical Glassmorphism"** aesthetic — inspired by IDE interfaces, debug consoles, and game engine tooling — to communicate deep technical competence while maintaining a polished, modern feel.

The website was built to achieve **pixel-perfect parity** with the Stitch design system artifacts exported from the "Senior Unity Portfolio" project.

### Key Design Principles

- **Technical Authenticity**: Every visual element reinforces the developer's expertise — monospaced labels, status indicators, terminal-style identifiers
- **Glassmorphism Panels**: Semi-transparent containers with backdrop blur, inner-edge highlights, and subtle outer glows
- **Electric Cyan Accent**: A single, striking accent color (`#00f2ff`) used sparingly for maximum impact
- **Data-Dense Layouts**: Information-rich pages with clear visual hierarchy, inspired by engineering dashboards

---

## Technology Stack

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Markup** | Semantic HTML5 | Maximum compatibility, zero build step |
| **Styling** | Tailwind CSS v3 (CDN) | Exact same config as Stitch design exports — guarantees 1:1 class-level match |
| **Fonts** | Google Fonts (JetBrains Mono + Inter) | Loaded via CDN link tags |
| **Icons** | Material Symbols Outlined | Google's variable-weight icon font, used across all pages |
| **Hosting** | Static files (`npx serve`) | Any static host works: Vercel, Netlify, GitHub Pages, S3 |

### Why Static HTML + Tailwind CDN?

The Stitch design tool exports standalone HTML files using Tailwind CSS via CDN with an inline `tailwind.config` that defines the exact design tokens. By using the **same approach**, every Tailwind class maps 1:1 to the original design — zero translation loss. This can be migrated to Next.js or Astro later if dynamic features are needed.

---

## File Structure

```
d:\Projects\Portfolio\
├── index.html              ← Home / Hero landing page
├── manifesto.html           ← Engineering philosophy tenets
├── projects.html            ← Project gallery with filter tabs
├── project-detail.html      ← Deep dive: "Neon Synthesis" project
├── tech-stack.html          ← Skills bento grid + career timeline
├── contact.html             ← Contact form + resume overview
└── Desing/                  ← Original Stitch design exports (source of truth)
    └── stitch_senior_unity_portfolio/
        ├── DESIGN.md         ← Design system specification
        ├── code.html         ← Projects page export
        └── ...               ← 5 more variant exports (1)-(5)
```

---

## Design System

The design system is called **"Technical Engine System"** and is defined in the Stitch `DESIGN.md`. Every page shares the same Tailwind config block, which is embedded inline in each HTML file via `<script id="tailwind-config">`.

### Tailwind Config Structure

The config extends Tailwind's default theme with custom:
- **Colors** — 40+ semantic color tokens (Material Design 3 inspired)
- **Border Radius** — Tight, engineered corners (`0.125rem` default)
- **Spacing** — 4px unit grid with named semantic sizes
- **Font Families** — Dual-font system mapped to semantic names
- **Font Sizes** — 7 semantic size presets with line-height and weight

---

## Color Palette

The palette follows Material Design 3 naming conventions adapted for a dark, technical theme.

### Core Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `background` / `surface` | `#0b1326` | Page background — deep charcoal-navy |
| `surface-container` | `#171f33` | Panel backgrounds, nav bar base |
| `surface-container-high` | `#222a3d` | Elevated surfaces, metric cards |
| `surface-container-highest` | `#2d3449` | Tags, chips, highest elevation |
| `surface-container-low` | `#131b2e` | Subtle differentiation |
| `surface-container-lowest` | `#060e20` | Footer, deepest background |
| `surface-bright` | `#31394d` | Active filter buttons |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-container` | **`#00f2ff`** | **Primary CTA buttons**, status dots — the signature Electric Cyan |
| `primary-fixed-dim` | `#00dbe7` | Metric values, active nav underline, skill labels |
| `primary` | `#e1fdff` | Page headings, logo text |
| `primary-fixed` | `#74f5ff` | Hover states for primary elements |
| `surface-tint` | `#00dbe7` | Background glow effects, ambient light |

### Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `on-surface` / `on-background` | `#dae2fd` | Primary text — bright blue-white |
| `on-surface-variant` | `#b9cacb` | Secondary text, descriptions, body copy |
| `outline` | `#849495` | Tertiary text, metadata labels |
| `outline-variant` | `#3a494b` | Borders, dividers, grid lines |
| `on-tertiary-container` | `#556074` | Footer links (muted) |

### Supporting Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-container` | `#39485a` | Tag backgrounds in hero sections |
| `tertiary-fixed-dim` | `#bcc7de` | Section subheaders on resume |
| `error` | `#ffb4ab` | Warning icon color on Key Challenges |
| `on-primary-container` | `#006a71` | Text on cyan buttons |
| `on-primary` | `#00363a` | Dark text on primary surfaces |

### Color Relationships Diagram

```
┌─────────────────────────────────────────────────┐
│  Background: #0b1326 (Deep Navy-Charcoal)       │
│  ┌───────────────────────────────────────────┐   │
│  │  Surface Container: #171f33               │   │
│  │  ┌─────────────────────────────────────┐  │   │
│  │  │  Panel (Glass): rgba(45,52,73,0.6)  │  │   │
│  │  │  Border: rgba(255,255,255,0.1)      │  │   │
│  │  │                                     │  │   │
│  │  │  Text: #dae2fd (on-surface)         │  │   │
│  │  │  Subtext: #b9cacb (on-surface-var)  │  │   │
│  │  │  Accent: #00f2ff (primary-container)│  │   │
│  │  └─────────────────────────────────────┘  │   │
│  └───────────────────────────────────────────┘   │
│  Footer: #060e20 (surface-container-lowest)      │
└─────────────────────────────────────────────────┘
```

---

## Typography

The design uses a **dual-font system** to separate technical/display elements from readable body text.

### Font Stack

| Role | Font | Weight | Source |
|------|------|--------|--------|
| **Display / Headlines** | JetBrains Mono | 600–700 | Google Fonts CDN |
| **Labels / Code** | JetBrains Mono | 400–700 | Google Fonts CDN |
| **Body / Prose** | Inter | 400–600 | Google Fonts CDN |

### Type Scale

| Token | Size | Line Height | Weight | Letter Spacing | Usage |
|-------|------|-------------|--------|----------------|-------|
| `display-lg` | 48px | 1.1 | 700 | -0.02em | Page titles ("SYSTEM_CAPABILITIES") |
| `headline-md` | 24px | 1.3 | 600 | -0.01em | Section headers, metric values |
| `headline-sm` | 18px | 1.4 | 600 | — | Card titles, timeline job titles |
| `body-lg` | 16px | 1.6 | 400 | — | Hero descriptions, lead paragraphs |
| `body-md` | 14px | 1.5 | 400 | — | General body text, card descriptions |
| `code-sm` | 12px | 1.5 | 400 | — | Metadata, code overlays, timestamps |
| `label-caps` | 11px | 1.0 | 700 | 0.08em | Navigation items, buttons, tags — ALWAYS UPPERCASE |

### Usage Pattern

```
display-lg    →  Page title: "FIELD_DATA // PROJECTS"
headline-md   →  Section: "Technical Brief", metric: "60FPS"
headline-sm   →  Card title: "PROJECT_NOVA", job: "Lead Technical Director"
body-lg       →  Hero blurb: "Senior Unity Engineer specializing in..."
body-md       →  Card description, article paragraphs
code-sm       →  "Role: Lead Gameplay Engineer", "2020 - PRESENT"
label-caps    →  "MANIFESTO", "TRANSMIT_PACKET", "HDRP"
```

---

## Spacing & Layout Grid

### Base Unit

All spacing is built on a **4px base unit** (`unit: 4px`).

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Micro gaps (icon-to-text, dot indicators) |
| `sm` | 8px | Small gaps (tag spacing, inner padding) |
| `md` | 16px | Standard gaps (card padding, form field spacing) |
| `gutter` | 16px | Grid column gaps |
| `lg` | 24px | Section padding, panel inner padding |
| `xl` | 40px | Major section separators, page bottom padding |
| `margin-mobile` | 16px | Page horizontal margin on mobile |
| `margin-desktop` | 32px | Page horizontal margin on desktop |

### Layout Constraints

- **Max width**: `1440px` (applied to `<main>` and `<nav>`)
- **Nav height**: ~64px (padded with `py-4` = 16px top/bottom)
- **Content offset**: `pt-[80px]` or `pt-[100px]` to clear fixed nav

### Border Radius

The design intentionally uses **very tight corners** to reinforce the engineered/technical aesthetic:

| Token | Value | Visual |
|-------|-------|--------|
| `DEFAULT` | 2px | Most elements — sharp, precise |
| `lg` | 4px | Cards, timeline nodes |
| `xl` | 8px | Glass panels, hero sections |
| `full` | 12px | Rounded status dots, pills |

---

## Visual Effects & Treatments

### Glassmorphism Panels

The signature visual treatment. Applied to cards, sidebars, form containers, and content sections.

```css
.glass-panel {
    background: rgba(23, 31, 51, 0.6);    /* Semi-transparent surface */
    backdrop-filter: blur(12px–20px);       /* Frosted glass effect */
    border: 1px solid rgba(58, 73, 75, 0.3); /* Subtle outer border */
    border-top: 1px solid rgba(255, 255, 255, 0.1); /* Inner-edge highlight */
}
```

### Glow Effects

| Effect | CSS | Where |
|--------|-----|-------|
| **Outer Glow (hover)** | `box-shadow: 0 0 15px rgba(0, 242, 255, 0.1)` | Card hover, active timeline node |
| **Text Glow** | `text-shadow: 0 0 8px rgba(0, 242, 255, 0.3)` | Project detail hero title |
| **Status Dot Glow** | `shadow-[0_0_8px_rgba(0,242,255,0.8)]` | Active status indicators |
| **Ambient Background** | `blur-[120px]` on positioned divs | Hero section, manifesto page |

### Grid Background

A subtle technical grid overlaid on the page background:

```css
.grid-bg {
    background-size: 40px 40px;
    background-image: 
        linear-gradient(to right, rgba(58, 73, 75, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(58, 73, 75, 0.1) 1px, transparent 1px);
}
```

### Gradient Overlays

Used on images to blend into the dark background:

```css
background: linear-gradient(to top, #0b1326, transparent, transparent);
```

---

## Pages Breakdown

### 1. Home (`index.html`)

**Purpose**: First impression — establishes identity and credentials.

**Sections**:
| Section | Content |
|---------|---------|
| **Nav Bar** | Fixed, blurred background, logo + nav links + resume button + icons |
| **Hero** | Status badge ("SYSTEM STATUS: OPTIMAL"), display title, description with left border, dual CTA buttons |
| **Code Overlay** | Faded C# Unity code in the background (DOTS ECS example) |
| **Stats Row** | 3-column grid: "30+ Shipped Titles", "60fps Minimum Target", "8 Platforms Mastered" |
| **Tech Logo Bar** | Horizontal row: UNITY_CORE, DOTS_ECS, XR_TOOLKIT, C#_7.0+, BURST_COMPILER |
| **Footer** | Version string, social links |

**Key Visual**: The hero has two decorative blurred circles (`surface-tint` + `inverse-primary`) creating ambient light behind the text.

---

### 2. Projects (`projects.html`)

**Purpose**: Showcase portfolio with filterable project cards.

**Sections**:
| Section | Content |
|---------|---------|
| **Header** | "FIELD_DATA // PROJECTS" with Electric Cyan on "PROJECTS" |
| **Filter Tabs** | ALL_VECTORS (active, glowing), PC/CONSOLE, VR/AR, TOOLS/PLUGINS |
| **Project Grid** | 3-column responsive grid of glass-panel cards |

**Card Anatomy**:
```
┌──────────────────────────┐
│  [Image: 192px height]   │  ← Google-hosted Stitch images
│  gradient overlay ↗      │
├──────────────────────────┤
│  PROJECT_NOVA            │  ← headline-sm, hover → cyan
│  Role: Lead Gameplay Eng │  ← code-sm, outline color
│                          │
│  Description text...     │  ← body-md, 2-line clamp
│                          │
│  ──────────────────────  │  ← border-t divider
│  [HDRP] [C#] [Unity]    │  ← label-caps tags
└──────────────────────────┘
```

Each card links to `project-detail.html` and has hover effects: image scales 105%, title turns cyan, outer glow appears.

---

### 3. Project Detail (`project-detail.html`)

**Purpose**: Deep technical dive into a single project.

**Layout**: 12-column grid — 8 cols main content + 4 cols sidebar.

**Sections**:
| Section | Content |
|---------|---------|
| **Hero Banner** | Full-width image with gradient overlay, tech tags, title with text-glow, Watch Trailer + View Code CTAs |
| **Technical Brief** | Description paragraph + 4-column metrics grid (60FPS, -40% Draw Calls, 2ms Gen Time, 4K Textures) |
| **Shader Gallery** | 2-column image grid with hover-reveal captions (wireframe overlay, compute node graph) |
| **Key Challenges** (sidebar) | 3 challenge items with cyan dot indicators: Memory Management, LOD Blending, Determinism |

---

### 4. Tech Stack (`tech-stack.html`)

**Purpose**: Demonstrate breadth and depth of technical expertise.

**Sections**:
| Section | Content |
|---------|---------|
| **Header** | "SYSTEM_CAPABILITIES" with cyan left-border subtitle |
| **Bento Grid** | 3-column skill cards (ENGINE_MASTERY, GRAPHICS_PIPELINE, ARCHITECTURE) |
| **Timeline** | "PROFESSIONAL_EVOLUTION" — 3 chronological career entries with vertical line + dot nodes |

**Skill Card Pattern**:
- Background icon (48px, 20% opacity → 100% on hover)
- Section header with Material icon
- 3 skill items (cyan label + description)
- Tag chips at bottom

**Timeline Pattern**:
- Vertical gradient line (cyan → gray → transparent)
- Active node: cyan border + inner dot + outer glow shadow
- Past nodes: gray border + inner dot
- Glass-panel content cards at 2/3 width

---

### 5. Contact (`contact.html`)

**Purpose**: Enable communication + present resume summary.

**Layout**: 12-column grid — 5 cols form side + 7 cols resume side.

**Left Column**:
- **Contact Form**: SENDER_ID, RETURN_ROUTE, PAYLOAD_DATA fields with focus glow effect
- **TRANSMIT_PACKET** button (full-width cyan with inner highlight)
- **Social Links Grid**: 3 icon cards (GITHUB, LINKEDIN, ARTSTATION)

**Right Column**:
- **Resume Overview Panel**: Full-height glass panel with blueprint grid overlay
- CURRENT_STATE: "Senior Unity Architect" at Polyhedron Studios
- CORE_COMPETENCIES: Tag chips
- Status indicators: "ACTIVE_SEEKING" (cyan dot) + "REMOTE_READY" (gray dot)
- DOWNLOAD_RESUME.PDF button

---

### 6. Manifesto (`manifesto.html`)

**Purpose**: Communicate engineering philosophy and values.

**Layout**: 12-column grid — 4 cols sidebar + 8 cols articles.

**Sidebar**:
- **INDEX // TENETS**: Navigation list with active indicator (chevron + cyan)
- **Quote Block**: Italicized philosophy quote with cyan left border
- **Status Bar**: "MANIFESTO_STATE: ACTIVE" with pulsing cyan dot

**Main Content**: 4 numbered articles (DATA_ORIENTED_DESIGN, MODULAR_ARCHITECTURE, PIPELINE_AUTOMATION, PROFILING_CULTURE), each with:
- Number in `headline-md` (01 = cyan, 02-04 = gray → cyan on hover)
- Title in `headline-sm`
- Body paragraph
- Code-style tag chips

**Ambient Effects**: Two large blurred circles positioned with `fixed` to create subtle background light.

---

## Navigation System

### Structure

```
TECH_CORE // DEV_PORTFOLIO    MANIFESTO  PROJECTS  TECH_STACK  CONTACT    [icons] RESUME.PDF
```

### Active State

The current page's nav link gets:
- **Color**: `text-primary-fixed-dim` (#00dbe7) instead of `text-on-surface-variant`
- **Weight**: `font-bold` instead of `font-medium`
- **Underline**: `border-b-2 border-primary-fixed-dim` — a 2px cyan bottom border

### Link Map

| Nav Label | Target File |
|-----------|------------|
| Logo (TECH_CORE // DEV_PORTFOLIO) | `index.html` |
| MANIFESTO | `manifesto.html` |
| PROJECTS | `projects.html` |
| TECH_STACK | `tech-stack.html` |
| CONTACT | `contact.html` |

Project cards on `projects.html` → `project-detail.html`
CTA "EXPLORE PROJECTS" on `index.html` → `projects.html`
CTA "VIEW TECHNICAL STACK" on `index.html` → `tech-stack.html`

### Nav Bar Styling

```
Fixed position → top: 0, z-index: 50
Background → surface-container at 60% opacity (100% Viewport Width)
Backdrop blur → xl (24px)
Bottom border → outline-variant at 30% opacity
Shadow → primary color at 5% opacity
Content Constraint → 1440px, centered inside the full-width nav
```

---

## Component Patterns

### Glass Panel

Used across all pages for content containers.

```html
<div class="glass-panel rounded-xl p-lg">
    <!-- Content -->
</div>
```

### Metric Card

Used on Project Detail for KPIs.

```html
<div class="bg-surface-container-high border border-outline-variant/30 p-sm rounded-lg 
            flex flex-col items-center justify-center text-center">
    <span class="font-headline-md text-headline-md text-primary-fixed-dim">60FPS</span>
    <span class="font-label-caps text-label-caps text-on-surface-variant">TARGET</span>
</div>
```

### Tag Chip

Used for technology labels.

```html
<span class="px-2 py-1 bg-surface-container-highest text-on-surface-variant 
             font-label-caps text-[10px] rounded uppercase tracking-wider">
    HDRP
</span>
```

### Status Indicator

Used on Home hero and Contact page.

```html
<div class="flex items-center gap-xs">
    <span class="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
    <span class="font-label-caps text-label-caps text-primary-fixed-dim">
        SYSTEM STATUS: OPTIMAL
    </span>
</div>
```

---

## Design Source Files

The original Stitch design exports are preserved in:

```
d:\Projects\Portfolio\Desing\stitch_senior_unity_portfolio\
├── DESIGN.md                          ← Full design system spec
├── code.html                          ← Projects page
├── stitch_senior_unity_portfolio (1)\ ← Home page
├── stitch_senior_unity_portfolio (2)\ ← Project Detail page
├── stitch_senior_unity_portfolio (3)\ ← Tech Stack page
├── stitch_senior_unity_portfolio (4)\ ← Contact page
└── stitch_senior_unity_portfolio (5)\ ← Manifesto page
```

Each subfolder contains a `code.html` with the exact Stitch-generated markup.

> [!IMPORTANT]
> These files are the **source of truth** for all visual decisions. Any future design changes should reference back to these exports and the `DESIGN.md`.

---

## Deployment Notes

### Running Locally

```bash
cd d:\Projects\Portfolio
npx -y serve -l 8080
# → http://localhost:8080
```

### Deploying to Production

Since the site is fully static HTML with CDN dependencies, it can be deployed to any static hosting:

| Platform | Command / Method |
|----------|-----------------|
| **Vercel** | `vercel --prod` from project root |
| **Netlify** | Drag & drop the folder, or connect Git repo |
| **GitHub Pages** | Push to `gh-pages` branch |
| **AWS S3** | `aws s3 sync . s3://bucket-name --acl public-read` |

### External Dependencies (CDN)

| Resource | CDN URL |
|----------|---------|
| Tailwind CSS v3 | `cdn.tailwindcss.com` |
| Google Fonts (JetBrains Mono, Inter) | `fonts.googleapis.com` |
| Material Symbols | `fonts.googleapis.com` |
| Project Images | `lh3.googleusercontent.com/aida-public/...` |

> [!WARNING]
> The project images are hosted on Google's Stitch CDN. For production, download and self-host these images to avoid dependency on external URLs that may expire.

### Future Enhancements

- [ ] Replace Google-hosted images with self-hosted assets
- [ ] Add smooth page transitions (View Transitions API or Barba.js)
- [ ] Implement working contact form (Formspree, Netlify Forms, or custom API)
- [ ] Add actual project filtering with JavaScript
- [ ] Create additional project detail pages for NODE_WEAVER and AURA_AR
- [ ] Add mobile hamburger menu functionality
- [ ] Consider migration to Astro or Next.js for component reuse and SSG
