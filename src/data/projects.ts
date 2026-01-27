// src/data/projects.ts
// This is an EXAMPLE showing how to add La Joya Cafe
// Merge this with your existing projects.ts file

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  
// ============================================
  // cc-pi.com - Client Work
  // ============================================
  {
    slug: "cc-pi-com",
    title: "CC-PI.com",
    description: "Professional website for a commercial and residential painting company, featuring service showcases and lead generation optimization.",
    longDescription: `Designed and developed a professional web presence for CC-PI, a commercial and residential painting company. This project focused on showcasing services and generating client inquiries:

- Website Development: Built a clean, professional website using WordPress and Elementor that highlights the company's expertise in both commercial and residential painting services.

- Service Presentation: Created organized service pages showcasing commercial solutions for retail stores, offices, warehouses, and industrial spaces, as well as residential interior and exterior painting services.

- Brand Messaging: Developed clear messaging emphasizing quality craftsmanship, reliable timelines, and minimal disruption to client operations.

- SEO Optimization: Implemented local SEO strategies to improve visibility for potential clients searching for painting services in the area.

- Analytics Integration: Set up Google Analytics to track visitor behavior and measure lead generation effectiveness.`,
    technologies: ["WordPress", "Elementor", "Graphic Design", "SEO", "Google Analytics"],
    githubUrl: "",
    liveUrl: "https://cc-pi.com",
    image: "/images/projects/cc-pi.gif",
    featured: true,
    challenges: [
      "Presenting both commercial and residential services without cluttering the user experience",
      "Creating a design that conveys professionalism and trustworthiness",
      "Optimizing for local search in a competitive painting services market"
    ],
    learnings: [
      "Designing for service-based businesses that serve multiple markets",
      "Local SEO strategies for contractor and home service businesses",
      "Using analytics to measure and improve lead generation"
    ]
  },
  // ============================================
  // La Joya Cafe - Client Work
  // ============================================
  {
    slug: "la-joya-cafe",
    title: "La Joya Cafe",
    description: "Complete brand identity and website for a Mexican cafe, including custom logo design, menu creation, and social media management.",
    longDescription: `Designed and developed a comprehensive digital presence for La Joya Cafe, a Mexican restaurant and bakery. This end-to-end project encompassed multiple disciplines:

• Website Development: Built a responsive, SEO-optimized website using WordPress and Elementor, featuring online ordering integration and location information.

• Brand Identity: Created the cafe's visual identity including logo design, color palette, and typography guidelines that reflect the warmth and authenticity of Mexican cuisine.

• Menu Design: Designed both print and digital menus with appetizing food photography integration and bilingual content.

• Social Media: Established and managed social media presence, creating engaging content that increased local visibility.

• Video Production: Produced and posted YouTube videos showcasing the cafe's atmosphere, food preparation, and customer experiences.

This project demonstrates my ability to handle complete client engagements from concept to delivery.`,
    technologies: ["WordPress", "Elementor", "Graphic Design", "Logo Design", "Menu Design", "Social Media Marketing", "Video Production", "SEO"],
    githubUrl: "", // No code repository for WordPress sites
    liveUrl: "https://la-joya-cafe.com",
    image: "/images/projects/la-joya-cafe.gif",
    featured: true,
    challenges: [
      "Creating a cohesive brand identity that captures the essence of Mexican culture and cuisine",
      "Designing menus that work seamlessly in both print and digital formats",
      "Optimizing the website for local SEO to attract nearby customers",
      "Producing video content that authentically represents the cafe's atmosphere"
    ],
    learnings: [
      "End-to-end brand development from concept to implementation",
      "Client communication, requirement gathering, and expectation management",
      "WordPress and Elementor for rapid, client-friendly website deployment",
      "The importance of consistent branding across all touchpoints (web, print, social)"
    ]
  },
  // ============================================
  // Personal Projects
  // ============================================
  {
    slug: "finance-dashboard",
    title: "Personal Finance Dashboard",
    description: "A responsive React-based finance tracker with real-time data visualization, budget management, and multi-currency support.",
    longDescription: "A comprehensive personal finance dashboard built with React, featuring interactive charts powered by Chart.js, budget tracking, expense categorization, and multi-currency support. The application uses local storage for data persistence and provides insights into spending patterns.",
    technologies: ["React", "Tailwind CSS", "Chart.js", "Vite", "JavaScript"],
    githubUrl: "https://github.com/Crespo1301/finance-dashboard",
    liveUrl: "https://finance-dashboard-seven-gamma.vercel.app/",
    image: "/images/projects/finance.gif",
    featured: true,
    challenges: [
      "Implementing real-time chart updates without performance degradation",
      "Designing an intuitive UI for complex financial data",
      "Handling multi-currency conversions accurately"
    ],
    learnings: [
      "Advanced Chart.js customization and optimization",
      "State management patterns for financial applications",
      "Responsive design for data-heavy dashboards"
    ]
  },
  {
    slug: "ai-analyzer",
    title: "AI Model Performance Analyzer",
    description: "Multi-model evaluation platform comparing AI betting predictions using a dynamic scoring system.",
    longDescription: "A sophisticated platform for evaluating and comparing multiple AI models' prediction accuracy. Features include dynamic scoring algorithms, performance visualization, and detailed analytics for model comparison.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Web Interface"],
    githubUrl: "https://github.com/Crespo1301/AI_Analyzer_Crespo",
    image: "/images/projects/AI-Analyzer.gif",
    featured: true,
    challenges: [
      "Designing fair comparison metrics across different model types",
      "Handling large datasets efficiently",
      "Creating meaningful visualizations for complex data"
    ],
    learnings: [
      "Machine learning model evaluation techniques",
      "Data pipeline optimization",
      "Statistical analysis for model comparison"
    ]
  },

// ============================================
  // Markdown To HTML Converter - Web App & CLI Tool
  // ============================================
  {
    slug: "MarkdownToHTML",
    title: "Markdown to HTML Converter",
    description: "A Python-based tool with web interface for converting Markdown to beautifully styled HTML with live preview and theme support.",
    longDescription: `A full-stack Markdown to HTML converter featuring both a CLI tool and a live web application. This project demonstrates Python backend development, serverless deployment, and frontend integration:

- CLI Tool: Command-line interface supporting single file and batch conversions with customizable options for themes, table of contents, and output formatting.

- Web Application: Real-time browser-based converter with live preview, file upload support, and instant HTML download functionality.

- Markdown Parser: Custom-built regex-based parser supporting headers (h1-h6), bold, italic, links, images, ordered/unordered lists, code blocks with syntax highlighting, blockquotes, and horizontal rules.

- Theming System: Professional light and dark themes with GitHub-flavored styling, CSS custom properties, and responsive design.

- Table of Contents: Automatic TOC generation from document headers with anchor links for easy navigation.

- Testing: Comprehensive test suite with 73 unit tests covering parser and converter functionality.`,
    technologies: ["Python", "Flask", "JavaScript", "HTML", "CSS", "Vercel", "Regex", "Pytest"],
    githubUrl: "https://github.com/Crespo1301/MarkdownToHTML",
    liveUrl: "https://markdown-to-html-iota.vercel.app",
    image: "/images/projects/MarkdownToHTML.gif",
    featured: true,
    challenges: [
      "Building a robust Markdown parser using regex patterns",
      "Deploying Python serverless functions on Vercel",
      "Creating real-time preview without performance issues",
      "Supporting file uploads and downloads in the browser"
    ],
    learnings: [
      "Python serverless function architecture for Vercel",
      "Regex pattern design for text parsing",
      "Building developer tools that solve real problems",
      "Full-stack development from CLI to web deployment"
    ]
  },

  // ============================================
  // Pomodoro Timer - CLi Application
  // ============================================
  {
    slug: "pomodoro-timer",
    title: "CLI Pomodoro Timer",
    description: "A command-line Pomodoro productivity timer with session tracking and JSON persistence.",
    longDescription: "A Python-based command-line Pomodoro timer that helps users maintain focus using the Pomodoro Technique. Features include customizable work/break intervals, session tracking with JSON persistence, and audio notifications.",
    technologies: ["Python", "JSON", "CLI"],
    githubUrl: "https://github.com/Crespo1301/pomodoro-timer",
    image: "/images/projects/pomodoro-timer.gif",
    featured: true,
    challenges: [
      "Creating an intuitive CLI user experience",
      "Implementing reliable timer functionality",
      "Persisting session data across runs"
    ],
    learnings: [
      "Python CLI application architecture",
      "JSON file handling for data persistence",
      "Cross-platform compatibility considerations"
    ]
  },

  // ============================================
  // Add more projects below as you build them!
  // ============================================
];

// Helper functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

// Optional: Get projects by category (if you add categories later)
export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(category.toLowerCase())
    )
  );
}
