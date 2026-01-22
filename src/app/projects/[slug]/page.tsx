import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Carlos Crespo`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.image && (
          <div className="relative h-64 sm:h-96 mb-8 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {project.longDescription}
          </p>
        </div>

        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Challenges</h2>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-3">→</span>
                  <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.learnings && project.learnings.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What I Learned</h2>
            <ul className="space-y-2">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Live Demo
            </a>
          )}
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
