import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import SocialIcon from '@/components/ui/SocialIcon';
import { portfolio } from '@/data/portfolio';
import { socialLinks } from '@/data/social';

/**
 * Hero — the first screen. Introduces Aman, his title, tagline, CTAs, and social links.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      aria-label="Introduction"
    >
      {/* Subtle radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.08), transparent)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Profile Image */}
        {(portfolio as any).profileImage && (
          <div className="mb-8 flex justify-center">
            <div className="relative h-50 w-50 overflow-hidden rounded-full border-4 border-bg-secondary shadow-xl">
              <Image
                src={(portfolio as any).profileImage}
                alt={portfolio.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Availability badge */}
        {portfolio.availableForWork && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-1.5 text-xs font-medium text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
            Available for new opportunities
          </div>
        )}

        {/* Name */}
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
          {portfolio.name}
        </h1>

        {/* Title */}
        <p className="mb-4 text-xl font-medium text-accent-blue sm:text-2xl">
          {portfolio.title}
        </p>

        {/* Tagline */}
        <p className="mb-8 text-base leading-relaxed text-text-secondary sm:text-lg">
          {portfolio.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="#projects">
            <Button variant="primary" size="lg">
              View Projects
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href={portfolio.resumeUrl} download aria-label="Download resume PDF">
            <Button variant="secondary" size="lg">
              <Download size={16} />
              Download Resume
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-1" aria-label="Social profiles">
          {socialLinks.map((link) => (
            <SocialIcon key={link.label} link={link} size={22} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-text-muted" />
        </div>
      </div>
    </section>
  );
}
