import Link from 'next/link';
import { portfolio } from '@/data/portfolio';
import { socialLinks } from '@/data/social';
import SocialIcon from '@/components/ui/SocialIcon';

/**
 * Footer — minimal footer with copyright, social links, and attribution.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Copyright */}
          <p className="text-sm text-text-muted">
            © {currentYear} {portfolio.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-1" aria-label="Social links">
            {socialLinks.map((link) => (
              <SocialIcon key={link.label} link={link} size={18} />
            ))}
          </div>

          {/* Attribution */}
          <p className="text-sm text-text-muted">
            Built with{' '}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-accent-blue"
            >
              Next.js
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
