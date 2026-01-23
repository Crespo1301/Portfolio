export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    slug: "finance-dashboard",
    title: "Personal Finance Dashboard",
    description: "A responsive React-based finance tracker with real-time data visualization, budget management, and multi-currency support.",
    longDescription: "A comprehensive personal finance application that helps users track income and expenses with interactive charts, set budget goals by category, and export transaction data. Built with React 19, Chart.js, and Tailwind CSS v4.",
    image: "/images/projects/finance.gif",
    technologies: ["React", "Tailwind CSS", "Chart.js", "Vite", "LocalStorage"],
    liveUrl: "https://finance-dashboard-seven-gamma.vercel.app/",
    githubUrl: "https://github.com/Crespo1301/finance-dashboard",
    featured: true,
    challenges: [
      "Implementing real-time budget tracking with progress indicators",
      "Managing complex state across multiple components",
      "Creating responsive charts that work on mobile devices"
    ],
    learnings: [
      "Deep understanding of React state management patterns",
      "Chart.js customization and responsive design",
      "Tailwind CSS v4 architecture and best practices"
    ]
  },
  {
    slug: "pomodoro-timer",
    title: "CLI Pomodoro Timer",
    description: "A command-line Pomodoro productivity timer with session tracking and JSON persistence.",
    longDescription: "A Python-based CLI application that implements the Pomodoro Technique with customizable work/break intervals, session history tracking, and data persistence using JSON files.",
    image: "/images/projects/pomodoro-timer.gif",
    technologies: ["Python", "JSON", "CLI"],
    githubUrl: "https://github.com/Crespo1301/pomodoro-timer",
    featured: true,
    challenges: [
      "Handling keyboard interrupts gracefully",
      "Implementing persistent session storage",
      "Creating a user-friendly CLI interface"
    ],
    learnings: [
      "Python file I/O and JSON handling",
      "CLI application design patterns",
      "Time management and threading concepts"
    ]
  },
  {
    slug: "ai-analyzer",
    title: "AI Model Performance Analyzer",
    description: "Multi-model evaluation platform comparing AI betting predictions using a dynamic scoring system.",
    longDescription: "Built a comprehensive platform to compare NFL betting predictions across multiple AI models using advanced metrics like DVOA, EPA, and success rate. Features real-time comparison, filtering, and score adjustments through an interactive web interface.",
    image: "/images/projects/AI-Analyzer.gif",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Web Interface"],
    githubUrl: "https://github.com/Crespo1301/AI_Analyzer_Crespo",
    featured: true,
    challenges: [
      "Designing a fair multi-model comparison system",
      "Integrating multiple data sources for NFL metrics",
      "Building an intuitive interface for complex data"
    ],
    learnings: [
      "Machine learning model evaluation techniques",
      "Sports analytics and advanced NFL metrics",
      "Data visualization for complex datasets"
    ]
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);