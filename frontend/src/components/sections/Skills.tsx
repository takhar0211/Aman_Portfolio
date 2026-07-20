import SectionHeading from '@/components/ui/SectionHeading';
import SkillBadge from '@/components/ui/SkillBadge';
import { skillCategories } from '@/data/skills';

/**
 * Skills — displays all technical skills grouped by category.
 */
export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-bg-secondary px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with regularly."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ category, skills }) => (
            <div
              key={category}
              className="rounded-xl border border-border bg-bg-card p-6 transition-all duration-200 hover:border-border-subtle hover:bg-bg-card-hover"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ name }) => (
                  <SkillBadge key={name} name={name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
