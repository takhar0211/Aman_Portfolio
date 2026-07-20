import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/BrandIcons';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard — displays a single project with name, description, tech stack, and links.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent-blue/40 hover:bg-bg-card-hover hover:shadow-lg hover:shadow-accent-blue/5">
      {/* Project Name */}
      <h3 className="mb-2 text-lg font-semibold text-text-primary transition-colors group-hover:text-accent-blue">
        {project.name}
      </h3>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      {/* Features (optional) */}
      {project.features && project.features.length > 0 && (
        <ul className="mb-4 space-y-1">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-text-muted">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Tech Stack */}
      <div className="mb-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border-subtle bg-bg-secondary px-2.5 py-0.5 text-xs font-medium text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub repository`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted transition-colors hover:text-text-primary"
          >
            <GitHubIcon size={14} />
            Code
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} live demo`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted transition-colors hover:text-accent-blue"
          >
            <ExternalLink size={14} />
            Live Demo
          </Link>
        )}
      </div>
    </article>
  );
}
