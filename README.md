# Carlos Crespo - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS v4. Features a fully compliant dark mode implementation with manual toggle override.

🌐 **Live Site:** [carloscrespo.info](https://carloscrespo.info)

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS v4** for styling
- 🌙 **Dark Mode** with manual toggle + system preference detection
- 📱 **Fully Responsive** design
- 🎯 **SEO Optimized** with metadata
- ♿ **Accessible** components
- 🚀 **Deployed on Vercel**

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Inter (via next/font)
- **Deployment:** Vercel

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & Tailwind v4 config
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── projects/
│   │   ├── page.tsx         # All projects listing
│   │   └── [slug]/page.tsx  # Dynamic project detail pages
│   ├── resume/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── About.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── Skills.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── projects.ts          # ⭐ ADD YOUR PROJECTS HERE
└── public/
    └── images/
        └── projects/        # Project screenshots/GIFs
```

---

## 🚀 Adding New Projects

### Step 1: Add Project Data

Open `src/data/projects.ts` and add a new project object to the `projects` array:

```typescript
{
  slug: "la-joya-cafe",                    // URL-friendly name (lowercase, hyphens)
  title: "La Joya Cafe",
  description: "Full brand identity and website for a local Mexican cafe, including logo design, menu creation, and social media presence.",
  longDescription: "Designed and developed a complete digital presence for La Joya Cafe, a Mexican restaurant. This included building their website using WordPress and Elementor, creating their visual brand identity with custom logos, designing print and digital menus, managing social media content, and producing YouTube video content to increase their online visibility.",
  technologies: ["WordPress", "Elementor", "Graphic Design", "Social Media", "Video Production"],
  githubUrl: "",                           // Leave empty if no code repo
  liveUrl: "https://la-joya-cafe.com",
  image: "/images/projects/la-joya-cafe.png",  // Add screenshot to public/images/projects/
  featured: true,                          // Show on homepage
  challenges: [
    "Creating cohesive brand identity from scratch",
    "Designing menus that work both in print and digital formats",
    "Optimizing website for local SEO"
  ],
  learnings: [
    "End-to-end brand development process",
    "Client communication and requirement gathering",
    "WordPress/Elementor for rapid website deployment"
  ]
}
```

### Step 2: Add Project Image

1. Take a screenshot or create a preview image of your project
2. Save it to `public/images/projects/` (e.g., `la-joya-cafe.png`)
3. Recommended: Use GIFs for interactive projects, PNGs for static sites
4. Optimal size: 1200x630px (social media friendly)

### Step 3: Update the Project Type (if needed)

If you add new fields, update the `Project` interface in `src/data/projects.ts`:

```typescript
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;           // Optional - some projects may not have live demos
  image?: string;             // Optional - fallback UI shown if missing
  featured: boolean;
  challenges?: string[];      // Optional
  learnings?: string[];       // Optional
  category?: string;          // Optional - for filtering (e.g., "Web Dev", "Design", "Client Work")
}
```

---

## 📂 Project Categories (Suggested)

Organize your work into categories:

| Category | Description | Examples |
|----------|-------------|----------|
| `Web Development` | Full-stack or frontend projects | Finance Dashboard, Chat App |
| `Client Work` | Freelance/professional projects | La Joya Cafe |
| `Tools & CLI` | Command-line applications | Pomodoro Timer |
| `Machine Learning` | AI/ML projects | AI Model Analyzer |
| `Design` | Graphic design, branding | Logos, menus |

---

## 🔄 Deployment Workflow

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (test before deploying)
npm run build
```

### Deploying to GitHub + Vercel

#### 1. Stage and Commit Changes

```bash
# See what files changed
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Add La Joya Cafe project to portfolio"
```

#### 2. Push to GitHub

```bash
# Push to main branch
git push origin main
```

#### 3. Vercel Auto-Deploys

Once connected, Vercel automatically:
- Detects the push to `main`
- Builds your Next.js app
- Deploys to your custom domain

**Check deployment status:** [vercel.com/dashboard](https://vercel.com/dashboard)

---

## 🛠 Common Tasks

### Adding a New Skill

Edit `src/components/Skills.tsx`:

```typescript
const skills = {
  "Languages": ["Python", "JavaScript", "TypeScript", ...],
  "Frontend": ["React", "Next.js", ...],
  // Add new category:
  "Design": ["Figma", "Adobe Photoshop", "Canva"],
};
```

### Updating Contact Info

Edit `src/app/contact/page.tsx` - update the `contactLinks` array.

### Changing Theme Colors

Edit `src/app/globals.css` - modify the `@theme` block:

```css
@theme {
  --color-primary-500: #your-color;
  --color-primary-600: #your-color;
  /* ... */
}
```

---

## 🌙 Dark Mode Implementation

This project uses Tailwind CSS v4's class-based dark mode:

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

**How it works:**
1. On load: JavaScript checks `localStorage` for user preference, falls back to system preference
2. Toggle button: Adds/removes `.dark` class on `<html>` and saves to `localStorage`
3. All `dark:` utilities respond to the `.dark` class

---

## 📝 Semantic CSS Classes

Use these for consistent styling:

| Class | Purpose |
|-------|---------|
| `.text-heading` | Headings and titles |
| `.text-default` | Primary body text |
| `.text-muted` | Secondary/muted text |
| `.text-subtle` | Tertiary/subtle text |
| `.section-default` | White/dark background sections |
| `.section-light` | Gray background sections |
| `.btn-primary` | Primary action buttons |
| `.btn-secondary` | Secondary action buttons |
| `.card` | Card containers |

---

## 🐛 Troubleshooting

### Dark mode not working after changes
1. Stop dev server (Ctrl+C)
2. Delete `.next` folder: `rm -rf .next`
3. Restart: `npm run dev`

### Images not showing
- Ensure images are in `public/images/projects/`
- Path should start with `/` (e.g., `/images/projects/my-project.png`)

### Vercel build failing
- Run `npm run build` locally to see errors
- Check Vercel dashboard for build logs

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

**Carlos Crespo**
- 🌐 Website: [carloscrespo.info](https://carloscrespo.info)
- 📧 Email: Crespo1301@gmail.com
- 💻 GitHub: [@Crespo1301](https://github.com/Crespo1301)
- 💼 LinkedIn: [carlos-crespo](https://www.linkedin.com/in/carlos-crespo-46608014a/)