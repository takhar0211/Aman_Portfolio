import SectionHeading from '@/components/ui/SectionHeading';
import { portfolio } from '@/data/portfolio';
import { GraduationCap, MapPin, Briefcase } from 'lucide-react';

/**
 * About — professional introduction, education, and career interests.
 */
export default function About() {
  return (
    <section
      id="about"
      className="px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="A little background on who I am and what I do."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Biography */}
          <div>
            <div className="space-y-4">
              {portfolio.bio.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-base leading-relaxed text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            {/* Education */}
            <div className="flex items-start gap-4 rounded-xl border border-border bg-bg-card p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10">
                <GraduationCap size={20} className="text-accent-blue" />
              </div>
              <div>
                <p className="mb-0.5 text-sm font-medium text-text-primary">Education</p>
                <p className="text-sm text-text-secondary">{portfolio.education.degree}</p>
                <p className="text-xs text-text-muted">
                  {portfolio.education.institution} · {portfolio.education.year}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 rounded-xl border border-border bg-bg-card p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10">
                <MapPin size={20} className="text-accent-blue" />
              </div>
              <div>
                <p className="mb-0.5 text-sm font-medium text-text-primary">Location</p>
                <p className="text-sm text-text-secondary">{portfolio.location}</p>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-start gap-4 rounded-xl border border-border bg-bg-card p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10">
                <Briefcase size={20} className="text-accent-blue" />
              </div>
              <div>
                <p className="mb-0.5 text-sm font-medium text-text-primary">Status</p>
                <p className="text-sm text-text-secondary">
                  {portfolio.availableForWork
                    ? 'Open to new opportunities'
                    : 'Currently not looking'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
