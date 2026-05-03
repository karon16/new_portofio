# Personal Portfolio

A modern, interactive portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This project features immersive 3D visualizations, smooth animations, and a polished dark/light mode experience.

## 🚀 features

-   **Dynamic 3D Visuals**: Integrated `DataMorphosis` component using **React Three Fiber** for interactive 3D particle effects.
-   **Smooth Navigation**: Full-page scroll snapping and carousel navigation powered by **Embla Carousel**.
-   **Responsive Design**: Mobile-first approach using **Tailwind CSS v4** with fluid layouts.
-   **Dark/Light Mode**: Seamless theme switching with **next-themes** and CSS variables.
-   **Custom UI**: Custom cursor, interactive projectiles, and glassmorphism cards.
-   **Contact Services**: Functional contact form powered by **Resend** emails.
-   **Type Safety**: Built with **TypeScript** in Strict Mode for robust development.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) / [Drei](https://github.com/pmndrs/drei)
-   **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
-   **Email Integration**: [Resend](https://resend.com/)
-   **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
-   **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router pages and global styles
├── components/           # Reusable UI components
│   ├── sections/         # Main page sections (Hero, About, Projects, Contact)
│   ├── DataMorphosis.tsx # 3D particle visualization
│   └── ...
├── hooks/                # Custom React hooks
└── lib/                  # Utilities and constants
```

## ⚡ Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Build

To create a production build:

```bash
npm run build
```

## 🎨 Design System

This project adheres to a strict design system defined in `project_standards.md` (internal documentation).
-   **Colors**: Semantic CSS variables (`--background`, `--foreground`, etc.)
-   **Typography**: "Doto" (Google Fonts)
-   **Icons**: Minimalist iconography from Lucide and Simple Icons.

## 🤖 Agent Configuration

This repository includes `.agent` configurations to maintain code quality and project standards when working with AI coding assistants:
-   **`.agent/rules/`**: Contains core project standards like UI conventions, tech stack guidelines, and component architecture.
-   **`.agent/skills/`**: Houses specific, actionable coding skills (e.g., responsive design routines).
