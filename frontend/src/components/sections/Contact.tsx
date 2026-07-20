import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, LeetCodeIcon } from '@/components/ui/BrandIcons';
import SectionHeading from '@/components/ui/SectionHeading';
import { portfolio } from '@/data/portfolio';
import { socialLinks } from '@/data/social';
import type { SocialLink } from '@/data/social';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value?: string;
  href?: string;
}

function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-bg-card p-5 transition-all duration-200 hover:border-accent-blue/30 hover:bg-bg-card-hover">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
        {icon}
      </div>
      <div>
        {value ? (
          <>
            <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-text-muted">
              {label}
            </p>
            <p className="text-sm font-medium text-text-primary">{value}</p>
          </>
        ) : (
          <p className="text-sm font-medium text-text-primary">{label}</p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </Link>
    );
  }
  return content;
}

function getSocialIcon(icon: SocialLink['icon']) {
  switch (icon) {
    case 'github':
      return <GitHubIcon size={20} />;
    case 'linkedin':
      return <LinkedInIcon size={20} />;
    case 'leetcode':
      return <LeetCodeIcon size={20} />;
    case 'instagram':
      return <InstagramIcon size={20} />;
    default:
      return <Mail size={20} />;
  }
}

/**
 * Contact — displays all contact methods and social profile links.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg-secondary px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Feel free to reach out. I'm always open to discussing new opportunities, projects, or just a chat."
          align="center"
        />

        {/* Contact Items */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          <ContactItem
            icon={<Mail size={20} />}
            label="Email"
            value={portfolio.email}
            href={`mailto:${portfolio.email}`}
          />
          <ContactItem
            icon={<Phone size={20} />}
            label="Phone"
            value={portfolio.phone}
            href={`tel:${portfolio.phone}`}
          />
          <ContactItem
            icon={<MapPin size={20} />}
            label="Location"
            value={portfolio.location}
          />
        </div>

        {/* Divider */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-text-muted">Social Profiles</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Social Profile Links */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks
            .filter((l) => l.icon !== 'email')
            .map((link) => {
              return (
                <ContactItem
                  key={link.label}
                  icon={getSocialIcon(link.icon)}
                  label={link.label}
                  href={link.href}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
