---
trigger: always_on
---

# Personal Portfolio - Project Standards

This document establishes the workflow rules and design consistencies for my personal portfolio project.

## 1. Technology Stack
-   **Framework**: Next.js 15+ (App Router).
-   **Styling**: Tailwind CSS v4 (with CSS variables).
-   **Animation (UI)**: Framer Motion.
-   **Animation (3D)**: React Three Fiber (R3F) / Three.js.
-   **Carousel**: Embla Carousel React.
-   **Theming**: `next-themes` (Light/Dark mode).
-   **Type Safety**: TypeScript Strict Mode.

## 2. Design System & Theming
### Color Palette (Dynamic)
**NEVER** use hardcoded hex colors for layout elements. ALWAYS use semantic CSS variables.

| Semantic Name | Light Mode Value | Dark Mode Value | Usage |
| :--- | :--- | :--- | :--- |
| `--background` | `#ffffff` | `#0a0a0a` | Main page background |
| `--foreground` | `#000000` | `#ededed` | Primary text color |
| `--muted` | `#f5f5f5` | `#171717` | Secondary backgrounds, hero visual |
| `--card-bg` | `#e5e5e5` | `#151515` | Card backgrounds |
| `--border` | `#e5e5e5` | `#262626` | Borders and dividers |

### Typography
-   **Primary Font**: "Doto" (Google Fonts).
-   **Classes**: `font-doto`, `text-[var(--foreground)]`.

### Iconography
-   **UI Icons**: `lucide-react` (Navigation, Arrows, General).
-   **Brand/Tech Icons**: `react-icons/si` (Simple Icons for TypeScript, React, etc.).
-   **Style**: Minimalist. Use `active` theme colors or muted transitions.

## 3. Component Architecture
-   **Client Components**: Most interactive sections (`SectionSlides.tsx`) are `'use client'`.
-   **Structure**:
    -   `PortfolioContainer`: Orchestrates state (scroll, theme) and renders sections.
    -   `SectionSlides`: Contains sub-components (`HeroSection`, `AboutSection`, etc.). *Consider splitting if file > 400 lines.*
    -   `DataMorphosis`: Isolated 3D logic.

## 4. Implementation Rules
### Carousel / Sliders
-   **Library**: MUST use `embla-carousel-react`.
-   **Behavior**: Drag enabled (`dragFree: true`), Loop disabled/enabled as needed.
-   **Navigation**: Arrow buttons preferred over dots for desktop.

### 3D Animations (`DataMorphosis`)
-   **Theme Awareness**: Particles must react to theme changes (e.g., White particles in Dark mode, Black in Light mode) via `useTheme`, OR use fixed colors if background is fixed.
-   **Performance**: Use `useFrame` sparingly. Avoid heavy physics on main thread.

### Interactions
-   **Hover Effects**: Use `group-hover` in Tailwind or Framer Motion `whileHover`.
-   **Scroll**: Custom `useScrollNavigation` hook controls full-page section switching.

## 5. Workflow Checklist
Before marking a task as complete:
1.  [ ] **Theme Check**: Does it look good in BOTH Light and Dark mode?
2.  [ ] **Responsive Check**: Does it work on Mobile (touch) and Desktop (hover)?
3.  [ ] **Build Check**: Does `npm run build` pass without TypeScript errors?
4.  [ ] **Consistency**: Are styles using the CSS variables (`[var(--...)]`)?
