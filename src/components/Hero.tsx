import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4 text-lg">
            Hi, my name is
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Carlos Crespo
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 font-semibold mb-8">
            Software Engineer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Computer Science graduate from the University of San Francisco specializing in 
            full-stack web development, machine learning, and building production-ready applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <a 
              href="/Main_Professional.pdf" 
              download 
              className="btn-secondary"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
