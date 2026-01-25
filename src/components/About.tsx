export default function About() {
  return (
    <section id="about" className="py-24 section-light">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              I&apos;m a Computer Science graduate from the University of San Francisco with a focus on 
              artificial intelligence, machine learning, and full-stack web development. I&apos;m passionate 
              about building applications that solve real problems and deliver great user experiences.
            </p>
            <p>
              My experience spans from developing ML pipelines and Random Forest models to creating 
              production-ready web applications. I&apos;ve also led teams to improve operations and 
              profitability, combining strong technical execution with practical business judgment.
            </p>
            <p>
              Currently, I&apos;m focused on building my portfolio of deployed projects while searching 
              for software engineering opportunities. I&apos;m particularly interested in roles where I 
              can contribute to impactful products and continue growing as a developer.
            </p>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-13 pt-12 border-t border-gray-200 dark:border-gray-800">
            {[
              { label: "University", value: "USF" },
              { label: "Degree", value: "CS" },
              { label: "Focus", value: "Full-Stack" },
              { label: "Status", value: "Open to Work" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-heading mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-subtle">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}