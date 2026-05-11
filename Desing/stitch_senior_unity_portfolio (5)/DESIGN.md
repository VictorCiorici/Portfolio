---
name: Technical Engine System
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#f6f7ff'
  on-tertiary: '#263143'
  tertiary-container: '#d0dbf3'
  on-tertiary-container: '#556074'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system is engineered for the elite technical professional, specifically tailored to the aesthetic expectations of a senior Unity developer. The brand personality is **authoritative, precise, and immersive**, bridging the gap between a high-end IDE and a cinematic game engine interface.

The visual style utilizes a **Technical Glassmorphism** approach. It combines the structural rigidity of professional software—characterized by crisp 1px borders and monospaced accents—with the atmospheric depth of modern gaming interfaces. The goal is to evoke a "flow state" environment where the UI recedes to prioritize complex data and 3D visualization, while using "Electric Cyan" accents to highlight critical paths and active states.

Key attributes:
- **Expertise:** Heavy use of technical metadata and density.
- **Cinematic:** High-contrast depth and subtle glow effects.
- **Precision:** Mathematical alignment and consistent stroke weights.

## Colors

The palette is anchored in a specialized dark-mode spectrum designed to reduce eye strain during long development sessions. 

- **Primary (Electric Cyan):** Used exclusively for interactive states, progress indicators, and "active" nodes. It should be applied sparingly to maintain its impact.
- **Neutrals (Charcoal & Slate):** The "Deep Charcoal" serves as the base canvas, while "Slate Grays" define the UI chrome and secondary text.
- **Functional Accents:** Success, warning, and error states should utilize desaturated versions of green, amber, and red to remain cohesive with the technical palette.

Surface layering follows a "closer is lighter" logic, where higher elevation surfaces use slightly lighter charcoal values to create a sense of physical stack depth.

## Typography

The typographic system uses a dual-font strategy to balance technical utility with long-form readability.

1.  **Technical & Display:** **JetBrains Mono** is used for all headings, labels, and metadata. This reinforces the "IDE" feel and ensures that alphanumeric strings (common in game dev) are perfectly legible.
2.  **Interface & Content:** **Inter** handles all body copy and prose. Its neutral, high-legibility architecture ensures that documentation and project descriptions remain readable at smaller scales.

Scale large headings down by 20% for mobile viewports. For data-dense panels, utilize `code-sm` to maximize information density without sacrificing clarity.

## Layout & Spacing

This design system employs a **12-column fixed grid** for main content, centered on the desktop stage with a max-width of 1440px. Internal application shells (like dashboards or editor views) switch to a **fluid sidebar-and-panel model**.

- **Rhythm:** A strict 4px baseline grid ensures mathematical precision in element alignment.
- **Density:** High information density is encouraged. Gutters are kept at a tight 16px to maximize screen real estate for complex data sets.
- **Adaptive Rules:** On mobile, sidebars collapse into a bottom-docked navigation bar. Desktop margins are generous (32px+) to give the cinematic elements room to breathe, while tablet and mobile margins shrink to 16px.

## Elevation & Depth

Depth is achieved through **Backdrop Filtering** and **Internal Glows** rather than heavy external drop shadows.

- **The Canvas:** The lowest layer, deep charcoal (#0a0a0c).
- **Surfaces:** Floating panels use a 20px backdrop blur with a semi-transparent slate fill (alpha 0.6) and a 1px solid border.
- **Outer Glow:** Active elements or "hovered" cards feature a subtle `0px 0px 15px rgba(0, 242, 255, 0.1)` outer glow to simulate an illuminated hardware interface.
- **Edge Highlighting:** Use a top-aligned 1px inner stroke (linear gradient: white at 10% opacity to transparent) on buttons and panels to simulate a "top-down" light source catching a chamfered edge.

## Shapes

The shape language is **Soft (0.25rem)**, moving away from the aggressive sharpness of older IDEs while avoiding the playfulness of fully rounded UI. 

- **Primary Elements:** Buttons, inputs, and small chips use a 4px (0.25rem) radius.
- **Containers:** Large cards and modal overlays use an 8px (0.5rem) radius to soften the technical edge.
- **Interactive States:** On hover, a "clip-corner" effect or a highlighted 1px border reinforces the technical, engineered nature of the design.

## Components

- **Buttons:** Primary buttons feature a solid Electric Cyan background with black text for maximum contrast. Secondary buttons use a transparent background with a 1px Slate border and Cyan text on hover.
- **Inputs:** Darker than the surface color to create an "inset" look. Use JetBrains Mono for entered text. The focus state must include the Electric Cyan border and a subtle inner glow.
- **Chips/Badges:** Small, uppercase labels with a desaturated Slate background. Use for tags like "C#", "Compute Shader", or "Editor Tool".
- **Glass Cards:** High-level containers with `backdrop-filter: blur(12px)` and a `1px` border at 10% white opacity.
- **Data Nodes:** Specific to this system, nodes for visual scripting or hierarchy trees should use Electric Cyan connectors and Slate Gray headers.
- **Checkboxes/Radios:** Square-ish with 2px radius. When checked, the inner glyph should glow slightly.