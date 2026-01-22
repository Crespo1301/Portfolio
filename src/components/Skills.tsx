const skills = {
  "Programming Languages": ["Python", "JavaScript", "TypeScript", "Java", "C", "HTML/CSS"],
  "Frontend": ["React", "Next.js", "Tailwind CSS", "Chart.js"],
  "Backend & Tools": ["Node.js", "Git", "GitHub", "Linux", "VS Code"],
  "Machine Learning": ["scikit-learn", "Random Forest", "Data Analysis", "Feature Engineering"],
};

export default function Skills() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <h2 className="section-heading">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
