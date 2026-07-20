import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { GitHubIcon } from '@/components/ui/BrandIcons';
import { getFeaturedProjects } from '@/data/projects';

/**
 * Projects — showcases featured projects in a responsive card grid.
 */
export default function Projects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section
      id="projects"
      className="px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="A selection of things I've built. Each project is a real-world problem I found worth solving."
        />

        {featuredProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-text-muted">Projects coming soon.</p>
        )}

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-text-muted">
            Want to see more? All my work is on GitHub.
          </p>
          <Link
            href="https://github.com/takhar0211"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-text-secondary hover:bg-bg-card hover:text-text-primary"
          >
            <GitHubIcon size={16} />
            View GitHub Profile
          </Link>
        </div>
      </div>
    </section>
  );
}
