import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import { getFeaturedProjects } from "@/data/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />
      <About />
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Skills />
    </>
  );
}