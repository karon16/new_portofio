# Personal Portfolio - Project Standards

This document establishes the workflow rules and design consistencies for the Personal Portfolio project.

## 1. Technology Stack
-   **Framework**: Next.js 16+ (App Router).
-   **Styling**: Tailwind CSS v4.
-   **Animation (UI)**: Framer Motion.
-   **Animation (3D)**: React Three Fiber (R3F) / Three.js.
-   **Email**: Resend (Server Actions).
-   **Theming**: `next-themes` (Light/Dark mode) with semantic CSS variables.
-   **Type Safety**: TypeScript Strict Mode.

## 2. Component Architecture
-   **Layout**: Single `PortfolioContainer` managing all sections.
-   **Scrolling**: **Native CSS Scroll Snap** (`snap-y snap-mandatory`).
    -   *Strict Rule*: Do NOT use scroll-jacking (hijacking `wheel` events). The browser handles scrolling natively.
    -   *Responsiveness*: Mobile uses standard scrolling; Desktop uses scroll snap. Unified container approach.
-   **Navigation Tracking**: Use `useActiveSectionObserver` (IntersectionObserver) to detect the visible section.

## 3. Feature Implementations
### Contact Form
-   **Submission**: Must use **Server Actions** (`actions.ts`).
-   **Email Provider**: **Resend** API.
-   **Feedback**: Use the custom **Toast** component (`components/Toast.tsx`) for success/error messages.
    -   *Strict Rule*: Never use `window.alert()`.

### 3D Animations (`DataMorphosis`)
-   **Theme Awareness**: Particles must react to theme changes via `useTheme`.
-   **Performance**: Optimize `useFrame` loops.

## 4. Design System & Theming
### Color Palette (Dynamic)
**NEVER** use hardcoded hex colors for layout elements. ALWAYS use semantic CSS variables.

| Semantic Name | Usage |
| :--- | :--- |
| `--background` | Main page background |
| `--foreground` | Primary text color |
| `--muted` | Secondary backgrounds, hero visual |
| `--card-bg` | Card backgrounds |
| `--border` | Borders and dividers |

### Typography
-   **Primary Font**: "Doto" (Google Fonts).

## 5. Workflow Checklist
Before marking a task as complete:
1.  [ ] **Theme Check**: Does it look good in BOTH Light and Dark mode?
2.  [ ] **Mobile Check**: Can I scroll naturally on mobile? No content cutoff?
3.  [ ] **Desktop Check**: Does scroll snap work smoothly?
4.  [ ] **Type Check**: No `any` types?
