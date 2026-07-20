/**
 * social.ts
 * Social links for the portfolio.
 * Update href values with real profile URLs.
 */

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'leetcode' | 'instagram' | 'email';
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/takhar0211',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aman-takhar-2302b0289/',
    icon: 'linkedin',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/amantakhar',
    icon: 'leetcode',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/takhar9985',
    icon: 'instagram',
  },
  {
    label: 'Email',
    href: 'mailto:amantakhar2002@gmail.com',
    icon: 'email',
  },
];
