# Carlos Crespo | Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-carloscrespo.info-blue?style=for-the-badge)](https://carloscrespo.info)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

My personal portfolio website showcasing software engineering projects, client work, and technical skills. Built with Next.js 14, TypeScript, and Tailwind CSS v4.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Using This Template](#using-this-template)
- [License](#license)
- [Contact](#contact)

---

## About

This portfolio serves as a comprehensive showcase of my work as a software engineer, featuring:

- **Software Development Projects** — Full-stack applications, CLI tools, and machine learning projects
- **Client Work** — Professional freelance projects including web development, branding, and design
- **Technical Skills** — Programming languages, frameworks, and tools I work with

Visit the live site: [carloscrespo.info](https://carloscrespo.info)

---

## Features

| Feature | Description |
|---------|-------------|
| Server-Side Rendering | Fast initial page loads with Next.js App Router |
| Dark Mode | Manual toggle with system preference detection |
| Responsive Design | Mobile-first approach, optimized for all screen sizes |
| Modern UI | Clean, professional design with smooth animations |
| SEO Optimized | Meta tags, Open Graph, and Twitter Card support |
| Accessible | WCAG compliant with semantic HTML structure |
| Performance | Optimized images, fonts, and minimal JavaScript bundle |

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Font | Inter (via next/font) |
| Deployment | Vercel |

---

## Project Structure

```
Portfolio/
├── public/
│   ├── images/
│   │   └── projects/           # Project screenshots and GIFs
│   └── Main_Professional.pdf   # Resume PDF
│
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles, Tailwind config
│   │   ├── layout.tsx          # Root layout component
│   │   ├── page.tsx            # Homepage
│   │   ├── projects/
│   │   │   ├── page.tsx        # Projects listing page
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Dynamic project detail page
│   │   ├── resume/
│   │   │   └── page.tsx        # Resume page
│   │   └── contact/
│   │       └── page.tsx        # Contact page
│   │
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Icons.tsx           # Reusable SVG icon components
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeToggle.tsx
│   │
│   └── data/
│       └── projects.ts         # Project data and helper functions
│
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Using This Template

If you would like to use this code as a template for your own portfolio, you are welcome to do so under the MIT License.

### Quick Start

1. Fork or clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

### Customization

**Update personal information:**
- `src/app/layout.tsx` — Site metadata and SEO
- `src/components/Hero.tsx` — Name, title, and introduction
- `src/components/About.tsx` — Bio and background
- `src/components/Footer.tsx` — Social links
- `src/app/contact/page.tsx` — Contact information

**Add your projects:**
- Place images in `public/images/projects/`
- Add project data to `src/data/projects.ts`

**Modify styling:**
- Theme colors are defined in `src/app/globals.css` under `@theme`
- Dark mode uses Tailwind's class-based strategy with `@custom-variant`

### Build and Deploy

```bash
npm run build    # Create production build
npm run start    # Start production server locally
```

Deploy to Vercel by connecting your GitHub repository at [vercel.com](https://vercel.com).

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this code for personal or commercial purposes. See the [LICENSE](LICENSE) file for details.

---

## Contact

**Carlos Crespo**

| Platform | Link |
|----------|------|
| Website | [carloscrespo.info](https://carloscrespo.info) |
| Email | [Crespo1301@gmail.com](mailto:Crespo1301@gmail.com) |
| GitHub | [@Crespo1301](https://github.com/Crespo1301) |
| LinkedIn | [carlos-crespo](https://www.linkedin.com/in/carlos-crespo-46608014a/) |