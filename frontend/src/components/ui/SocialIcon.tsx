import Link from 'next/link';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, LeetCodeIcon } from '@/components/ui/BrandIcons';
import type { SocialLink } from '@/data/social';

interface SocialIconProps {
  link: SocialLink;
  size?: number;
  className?: string;
}

function getIcon(icon: SocialLink['icon'], size: number) {
  switch (icon) {
    case 'github':
      return <GitHubIcon size={size} />;
    case 'linkedin':
      return <LinkedInIcon size={size} />;
    case 'instagram':
      return <InstagramIcon size={size} />;
    case 'leetcode':
      return <LeetCodeIcon size={size} />;
    case 'email':
      return <Mail size={size} />;
    default:
      return <Mail size={size} />;
  }
}

/**
 * SocialIcon — renders a clickable icon link for a given social profile.
 */
export default function SocialIcon({ link, size = 20, className = '' }: SocialIconProps) {
  const isExternal = link.href.startsWith('http');

  return (
    <Link
      href={link.href}
      aria-label={link.label}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={[
        'inline-flex items-center justify-center rounded-lg p-2',
        'text-text-muted transition-all duration-200',
        'hover:bg-bg-card hover:text-text-primary',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue',
        className,
      ].join(' ')}
    >
      {getIcon(link.icon, size)}
    </Link>
  );
}
