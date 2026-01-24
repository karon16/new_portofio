---
name: Tailwind Responsive Design
description: Standards and best practices for implementing responsive design using Tailwind CSS, including breakpoints and mobile-first methodology.
---

# Tailwind Responsive Design Standards

This skill outlines the standards for implementing responsive design in this project using Tailwind CSS.

## 1. Core Principle: Mobile-First

Tailwind uses a **mobile-first** breakpoint system. This is the most critical concept to follow.

*   **Unprefixed utilities** (e.g., `block`, `text-center`) target **all** screen sizes (starting from mobile).
*   **Prefixed utilities** (e.g., `md:flex`, `lg:text-left`) target the specified breakpoint **and above**.

**❌ Incorrect (Desktop-first thinking):**
```html
<!-- Attempting to hide on mobile using sm: -->
<div class="sm:hidden block">...</div> 
```
*Why it fails:* `sm:hidden` hides it on *small screens and up*. On mobile (below `sm`), it falls back to `block`. If you wanted it hidden on mobile and visible on desktop, this is wrong.

**✅ Correct (Mobile-first thinking):**
```html
<!-- Hidden on mobile, visible on md and up -->
<div class="hidden md:block">...</div>

<!-- Center text on mobile, left align on tablets and up -->
<div class="text-center md:text-left">...</div>
```

## 2. Default Breakpoints

Use these standard breakpoints. Avoid using arbitrary values (`min-[123px]`) unless absolutely necessary for specific design quirks.

| Prefix | CSS Rule | Minimum Width | Device Context (Approx) |
| :--- | :--- | :--- | :--- |
| `sm` | `@media (min-width: 640px)` | 640px | Large Phones / Small Tablets |
| `md` | `@media (min-width: 768px)` | 768px | Tablets (iPad Portrait) |
| `lg` | `@media (min-width: 1024px)` | 1024px | Small Laptops / Tablets Landscape |
| `xl` | `@media (min-width: 1280px)` | 1280px | Standard Laptops / Desktops |
| `2xl` | `@media (min-width: 1536px)` | 1536px | Large Monitors |

## 3. Targeting Ranges

Occasionally you need to apply a style *only* between two breakpoints. Use the `max-*` modifiers (available in Tailwind v4 natively, or via utility combination).

*   **Targeting a single breakpoint (e.g., only Tablet):**
    Combine the breakpoint with the `max-*` of the *next* breakpoint.
    ```html
    <div class="hidden md:max-lg:block">
      Visible ONLY on md screens (Tablet), hidden on mobile and desktop.
    </div>
    ```

## 4. Container Queries (Advanced)

For components that need to respond to their *parent's* width rather than the viewport, use `@tailwindcss/container-queries` (if installed) or Tailwind v4 container query syntax.

## 5. Implementation Checklist

When building responsive components:
1.  **Build for Mobile First**: Resize your browser to the narrowest width (e.g., 375px) and style the base look relative to the content flow.
2.  **Add `sm` Tweaks**: If layout breaks on large phones, add `sm:` utilities.
3.  **Add `md` Layout**: Switch to grid/flex columns often happens here.
4.  **Add `lg`/`xl` Constraints**: Limit max-widths or adjust font sizes for large screens.
