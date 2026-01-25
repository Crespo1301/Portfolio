import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { GithubIcon } from "@/components/Icons";

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

  // Check if GitHub URL exists and is not empty
  const hasGithub = project.githubUrl && project.githubUrl.trim() !== "";
  const hasLiveUrl = project.liveUrl && project.liveUrl.trim() !== "";

  return (
    <div className="pt-28 pb-24 section-default">
      <div className="container-custom max-w-4xl">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center text-muted hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-heading">
          {project.title}
        </h1>
        
        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project image */}
        {project.image && (
          <div className="relative h-64 sm:h-96 mb-10 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-10">
          <p className="text-xl text-muted leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        </div>

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-10 p-6 rounded-2xl section-light border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-heading">Challenges</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <span className="text-muted">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Learnings */}
        {project.learnings && project.learnings.length > 0 && (
          <div className="mb-10 p-6 rounded-2xl section-light border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-heading">What I Learned</h2>
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-muted">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action buttons - only show if at least one link exists */}
        {(hasLiveUrl || hasGithub) && (
          <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Live Site
              </a>
            )}
            
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={hasLiveUrl ? "btn-secondary" : "btn-primary"}
              >
                <GithubIcon className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}